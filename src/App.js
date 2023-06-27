import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { PortfolioIndex } from "./pages/PortfolioIndex";
import { Contact } from "./pages/Contact";
import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer"
import { PortfolioDetail } from "./pages/PortfolioDetail";
import { NotFound } from "./pages/NotFound";
import "./App.css"


function App() {
  return (
    <>
      <div className="pageContainer">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio">
            <Route index element={<PortfolioIndex />} />
            <Route path=":projectName" element={<PortfolioDetail />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
