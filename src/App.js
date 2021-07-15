import "./App.css";
import Favorites from "./components/favorites/Favorites";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import MainCarousel from "./components/movies/MainCarousel";
import Navbar from "./components/navbar/NavBar";
import Test from "./testing/Test";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <Router>
          <Switch>
            <Route exact path="/">
              <MainCarousel />
              <Test />
            </Route>
            <Route exact path="/favorites">
              <Favorites />
            </Route>
          </Switch>
        </Router>

        <Footer />
      </div>
    </>
  );
}

export default App;
