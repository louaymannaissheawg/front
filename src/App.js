import './App.css';
import Navbar from "./components/navbar/navbar";
import Main from "./components/Main";
import Form from "./components/Form";
import Reservations from "./components/Reservations/Reservations";
import { Routes, Route } from "react-router-dom";
import Post from "./components/Reservation/Post";
import Footer from "./components/Footer/Footer";

const _  =()=> {

  return (

      <>      <Navbar/>
          <Routes>

              <Route path="/" element={<Main />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/post/:id" element={<Post />} />
              <Route path="/form" element={<Form/>} ></Route>
          </Routes>
          <Footer/>
      </>
  );
}

export default _;
