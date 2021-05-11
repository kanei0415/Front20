import React, {Component} from "react";
import Counter from "./component/Counter";
import Person from "./component/Person";
import PersonList from "./component/PersonList";

class App extends Component {
  render(){
    return<div className="App">
      <Counter />
      <Person name={"Kanei"} age={21} />
      <PersonList {...[
        {name="Kanei", age=21},
        {name="Miso", age=17},
        {name="Takahasi", age=23},
      ]} />
    </div>
  }
}

export default App;