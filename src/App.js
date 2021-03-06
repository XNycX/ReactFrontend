import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login/Login";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Register from "./Containers/Register/Register";
import Profile from "./Containers/Profile/Profile";
import Movies from "./Containers/Movies/Movies";
import MovieDetail from "./Containers/MovieDetail/MovieDetail";
import Search from "./Components/Search/Search";
import Admin from "./Containers/Admin/Admin";
import PrivateZone from "./Guards/PrivateZone";
import AdminZone from "./Guards/AdminZone";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    //Aqui funcionará el enrutado de la aplicación.
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile"element={<PrivateZone><Profile /></PrivateZone>}/>
          <Route path="/movies" element={<Movies />} />
          <Route path="/admin" element={ <AdminZone><Admin /></AdminZone>}/>
          <Route path="/moviedetail/:id" element={<MovieDetail />} />
          <Route path="/search/:title" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
