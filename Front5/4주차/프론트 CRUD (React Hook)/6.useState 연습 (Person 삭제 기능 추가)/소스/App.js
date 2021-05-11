import React, {useState} from 'react';
import PersonList from "./components/PersonList";

function App() {
  //const [name, setName] = useState('송중기');
  //const [age, setAge] = useState(23);
  const [Person, setPerson] = useState([
                                          {name:"정영준",age:20},
                                          {name:"정채연",age:21}
                                                  ]);

  const addPerson=()=>{
    setPerson([
      ...Person,
      {
      name:"송중기",age:22
      }
    ]);
  }

  const deletePerson=(name)=>{
    alert("삭제!(App)");
    alert("넘겨받은 이름!(App):"+name);
    setPerson(Person.filter(data => (data.name !== name) ));
  }

  return (
    <div className="App">
      <input type="text" placeholder="이름 입력"></input>
      <input type="text" placeholder="나이 입력"></input>
      <button onClick={addPerson}>추가</button>            
      <PersonList personList={Person} delPerson={deletePerson}></PersonList>
      
    </div>
  );
}

export default App;
