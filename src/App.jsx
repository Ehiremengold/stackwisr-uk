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
} from "./pages/pages";

function App() {
  return (
    <Router>
      <Base>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/careerpaths" element={<Careerpaths />} />
          <Route
            exact
            path="/careerpath/:slug"
            element={<CareerpathDetail />}
          />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/resources" element={<Resources />} />
          <Route exact path="/testimonies" element={<Testimonies />} />
          <Route exact path="/events" element={<Event />} />
          <Route
            exact
            path="/careerpath/:slug"
            element={<CareerpathDetail />}
          />
        </Routes>
      </Base>
    </Router>
  );
}

export default App;
