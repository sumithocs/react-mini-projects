import { useEffect, useState } from "react";
import "../styles/product-catalogue.css";

export const ProductCatalogue = ({
  url,
  limit = "20",
  fields = "title,price,thumbnail",
}) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableLoadMore, setDisableLoadMore] = useState(false);

  const fetchProducts = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${getUrl}?limit=${limit}&skip=${
          count === 0 ? 0 : count * limit
        }&select=${fields}`
      );

      const data = await response.json();
      console.log(data);
      if (data && data.products && data.products.length) {
        setProducts(() => [...products, ...data.products]);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setErrorMessage(e.message);
    }
  };

  useEffect(() => {
    if (url !== "") fetchProducts(url);
  }, [count, url]);

  useEffect(() => {
    if (products && products.length === 100) setDisableLoadMore(true);
  }, [products]);

  if (loading) {
    return <div>Loading..</div>;
  }

  if (errorMessage !== null) {
    return <div>Error occurred!!</div>;
  }

  return (
    <div className="product-catalogue-container">
      <div className="product-container">
        {products && products.length
          ? products.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <span>{product.title}</span>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableLoadMore} onClick={() => setCount(count + 1)}>
          Load More
        </button>
        {disableLoadMore ? <p>You have reached the 100 limit</p> : null}
      </div>
    </div>
  );
};
