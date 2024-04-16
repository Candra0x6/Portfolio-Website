import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./app/home/page";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
