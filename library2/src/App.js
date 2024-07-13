// -----------------------styles--------------------------
import { BrowserRouter, Routes, Route } from "react-router-dom"
// -----------------------Components & Pages--------------------------
import Home from "./pages/home"
import About from "./pages/aboutus"
import Contact from "./pages/contact"
import Signup from "./pages/signup"
import Catalog from "./pages/catalog"
import Header from "./component/header";
import Footer from './component/footer';
// -----------------------styles--------------------------
import './App.css';
import './style/header-footer.css'
import './style/home.css'
import './style/signup.css'
import './style/catalog.css'



function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/aboutus" element={<About></About>}></Route>
          <Route path="/catalog" element={<Catalog></Catalog>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
