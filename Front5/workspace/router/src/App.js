import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Life from "./subMenu/Life";
import Culture from "./subMenu/Culture";
import Travel from "./subMenu/Travel";
import IT from "./subMenu/IT";
import Sports from "./subMenu/Sports";

import "./App.css";

class App extends React.Component {
  render(){
    return<div className="App">
      <Router>
        <div className="Menu-wrapper">
          <ul>
            <Link to="/Life"><li><a>라이프</a></li></Link>
            <Link to="/Travel"><li><a>여행.맛집</a></li></Link>
            <Link to="/Culture"><li><a>문화.연예</a></li></Link>
            <Link to="/IT"><li><a>IT</a></li></Link>
            <Link to="/Sports"><li><a>스포츠</a></li></Link>
          </ul>
        </div>

        <div className="Contents-wrapper">
          <Switch>
            <Route exact path="/Life" component={Life} />
            <Route exact path="/Travel" component={Travel} />
            <Route exact path="/Culture" component={Culture} />
            <Route exact path="/IT" component={IT} />
            <Route exact path="/Sports" component={Sports} />
          </Switch>
        </div>
      </Router>
    </div>
  }
}

export default App;