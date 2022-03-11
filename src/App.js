import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Register from './Containers/Register/Register';
import Profile from './Containers/Profile/Profile';
import Movies from './Containers/Movies/Movies';
import Orders from './Containers/Orders/Orders';
import MovieDetail from './Containers/MovieDetail/MovieDetail';



function App() {
  return (
    //Aqui funcionará el enrutado de la aplicación.
    <div className="App">
      <Router>

        <Header/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/moviedetail/:id" element={<MovieDetail/>}/>
          
        </Routes>
        
        <Footer/>

      </Router>
        
    </div>
  );
}

export default App;
