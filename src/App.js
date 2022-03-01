import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Profile from './Containers/Profile/Profile';
import Register from './Containers/Register/Register';

function App() {
  return (
    //Aqui funcionará el enrutado de la aplicación.
    <div className="App">

      <BrowserRouter>

        <Header/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
         
        </Routes>
        
        <Footer/>

      </BrowserRouter>
        
      

    </div>
  );
}

export default App;
