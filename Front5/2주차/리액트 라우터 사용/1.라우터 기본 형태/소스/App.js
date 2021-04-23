import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AAA from "./subMenu/AAA.js";
import BBB from "./subMenu/BBB.js";
import CCC from "./subMenu/CCC.js";
import DDD from "./subMenu/DDD.js";
import './css/App.css';

function App() {
  return (
    <div>

    <div>
      라우터
    </div>
   
    <div>
    <Router>
        <div className='Menu-wrapper'>
          <ul>
            <Link to='/AAA'><li><a>aaa</a></li></Link>
            <Link to='/BBB'><li><a>bbb</a></li></Link>
            <Link to='/CCC'><li><a>ccc</a></li></Link>
            <Link to='/DDD'><li><a>ddd</a></li></Link>   
          </ul>
        </div>
        <div className='Contents-wrapper'>
          <Switch>
            <Route exact path='/AAA' component={AAA} />
            <Route path='/BBB' component={BBB} />
            <Route path='/CCC' component={CCC} />
            <Route path='/DDD' component={DDD} />
          </Switch>
        </div>
      </Router>
       
    </div>
  
  </div>

  );
}

export default App;
