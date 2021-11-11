import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Blog from "./Pages/Blog/Blog";
import Movies from "./Pages/Movies/Movies";
import Foods from "./Pages/Foods/Foods";
import Write from "./Pages/Write/Write";
import Single from "./Pages/Single/Single";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route path="/blog" component={Blog} />
          <Route path="/movies" component={Movies} />
          <Route path="/movie/:id" component={Single} />
          <Route path="/foods" component={Foods} />
          <Route path="/write" component={Write} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
