import "./App.css";
import { Accordion } from "./components/Accordion";
import { AccordionMultiSelect } from "./components/AccordionMultiSelect";
import { ImageSlider } from "./components/ImageSlider";
import { MenuTree } from "./components/MenuTree/MenuTree";
import { ProductCatalogue } from "./components/ProductCatalogue";
import { QrCodeGenerator } from "./components/QrCodeGenerator";
import { RandomColor } from "./components/RandomColor";
import { StarRatings } from "./components/StarRatings";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <AccordionMultiSelect /> */}
      {/* <RandomColor /> */}
      {/* <StarRatings noOfStars={10} /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* <ProductCatalogue url={"https://dummyjson.com/products"} /> */}
      {/* <MenuTree /> */}
      {/* <QrCodeGenerator /> */}
      {/* <LightDarkMode /> */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
