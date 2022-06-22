import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Shop";
import Homepage from "./Homepage";

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shopping-cart/" element={<Homepage />} />
        <Route path="/shopping-cart/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
