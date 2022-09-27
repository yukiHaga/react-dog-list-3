import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dog from "./containers/Dog";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dog" element={<Dog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
