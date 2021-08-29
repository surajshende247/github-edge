import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/footer" component={Footer} />
        <Route path="/profile/:id" component={Profile}/> 
      </Router>
    </div>
  );
}

export default App;
