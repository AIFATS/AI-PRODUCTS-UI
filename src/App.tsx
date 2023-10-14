import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Suspense, lazy } from "react";
// import Loader from "./Components/Loaders/Loader";
import UserDataRoute from "./routes/UserDataRoute";
import FrontendRoute from "./routes/FrontendRoute";
import ServicesRoute from "./routes/ServicesRoutes";
import APIsRoute from "./routes/ApiRoute";
import ProductsRoute from "./routes/ProductsRoute";
import Test from "./frontend/pages/test";
import Ske from "./Products/Pages/3d_object/Sketchfab-Categoires";
import SketchfabSearch from "./Products/Pages/3d_object/sketchfab/sketchfab_models";
import SketchfabSearch1 from "./Products/Pages/3d_object/sketchfab/test";
// import Show from "./frontend/User_data/k";

const App = () => {
  // const FrontendRoute = lazy(() => import("./routes/FrontendRoute"));
  // const ServicesRoute = lazy(() => import("./routes/ServicesRoutes"));
  // const ProductsRoute = lazy(() => import("./routes/ProductsRoute"));
  // const APIsRoute = lazy(() => import("./routes/ApiRoute"));
  return (
    // <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path="/*" element={<FrontendRoute />} />
          <Route path="/services*" element={<ServicesRoute />} />
          <Route path="/products*" element={<ProductsRoute />} />
          <Route path="/api*" element={<APIsRoute />} />
          <Route path="/log*" element={<UserDataRoute />} />
          <Route path="/testt*" element={<Test />} />
          <Route path="/ske*" element={<Ske />} />
          <Route path="/sketch*" element={<SketchfabSearch />} />
          <Route path="/sketch1*" element={<SketchfabSearch1 />} />
          {/* <Route path="/show*" element={<Show />} /> */}
        </Routes>
      </Router>
    //  </Suspense>
  );
};

export default App;
