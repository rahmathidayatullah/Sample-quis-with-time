import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "components/Header";
import Home from "pages/Home";
import About from "pages/About";
import Quiz from "pages/Quiz";
import Crud from "pages/Crud";

const App = () => {
  const titleContent = "ini adalah title";
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/crud" component={Crud} />
          <Route exact path="/about" component={About} />
          <Route exact path="/quiz" component={Quiz} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
