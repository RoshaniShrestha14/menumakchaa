import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Service from "../pages/Service";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import NotFound from "../components/ui/NotFound";
import { ScrollToTop } from "./ScrollToTop";
// import RegisterPage from "../components/Auth/RegisterPage";


export default function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      
      <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<AboutUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/register" element={<RegisterPage />} /> */}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}