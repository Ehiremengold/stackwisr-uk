import Base from "./Base";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Home,
  CareerpathDetail,
  AboutUs,
  Careerpaths,
  Blog,
  Resources,
  Testimonies,
  Event,
  BlogDetail,
  Terms,
  CookiePolicy,
  PrivacyPolicy,
  ContactUs
} from "./pages/pages";

function App() {
  return (
    <Router>
      <Base>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/careerpaths" element={<Careerpaths />} />
          <Route
            exact
            path="/careerpaths/:slug"
            element={<CareerpathDetail />}
          />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog/:slug" element={<BlogDetail />} />
          <Route exact path="/resources" element={<Resources />} />
          <Route exact path="/testimonies" element={<Testimonies />} />
          <Route exact path="/events" element={<Event />} />
          <Route exact path="/terms-of-service" element={<Terms />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </Base>
    </Router>
  );
}

export default App;
