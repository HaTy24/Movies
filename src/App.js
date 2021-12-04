import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Blog from "./Pages/Blog/Blog";
import Movies from "./Pages/Movies/Movies";
import Write from "./Pages/Write/Write";
import SingleMovie from "./Pages/SingleMovie/SingleMovie";
import SingleTV from "./Pages/SingleTV/SingleTV";
import TVSeris from "./Pages/TVSeris/TVSeris";
import SingleBlog from "./Components/SingleBl/SingleBl";
import Login from "./Pages/LogIn/Login";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(0);
  function handleLogin(data) {
    setLogin(data);
  }
  console.log(login);
  return (
    <>
      {login !== 0 ? (
        <Login login={handleLogin} />
      ) : (
        <Router>
          <Header login={handleLogin} />
          <div className="App">
            <Switch>
              <Route path="/blogs" component={Blog} />
              <Route path="/movies" component={Movies} />
              <Route path="/movie/:id" component={SingleMovie} />
              <Route path="/write" component={Write} />
              <Route path="/tvseris" component={TVSeris} />
              <Route path="/tvseri/:id" component={SingleTV} />
              <Route path="/blog/:id" component={SingleBlog} />
            </Switch>
          </div>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
