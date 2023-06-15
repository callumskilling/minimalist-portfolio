import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { PortfolioIndex } from "./pages/PortfolioIndex";
import { ContactMe } from "./pages/ContactMe";
import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer"
import { PortfolioDetail } from "./pages/PortfolioDetail";
import { NotFound } from "./pages/NotFound";
import "./App.css"


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio">
          <Route index element={<PortfolioIndex />} />
          <Route path=":projectName" element={<PortfolioDetail />} />
        </Route>
        <Route path="/contact" element={<ContactMe />} />
        <Route path="*" element={<NotFound /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
