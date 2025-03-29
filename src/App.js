import "./App.css";
import ServiceCard from "./components/serviceCard";
import Technologies from "./components/technologies";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/home/index';
import About from './components/about/index';
import GetInTouch from './components/common-file/get-in-touch';
import Footer from './components/common-file/footer';
import Header from './components/common-file/header';


export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <GetInTouch/>
      <Footer/>
    </Router>
  );
}
