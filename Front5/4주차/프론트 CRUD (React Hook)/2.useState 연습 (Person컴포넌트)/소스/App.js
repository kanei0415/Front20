import React, {useState} from 'react';
import Person from "./components/Person";

function App() {
  const [name, setName] = useState('송중기');
  const [age, setAge] = useState(23);

  return (
    <div className="App">
      <Person name={name} age={age}></Person>
    </div>
  );
}

export default App;
