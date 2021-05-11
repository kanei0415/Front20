import React, {useState} from 'react';
import PersonList from "./components/PersonList";

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [Person, setPerson] = useState([
                                          {name:"정영준",age:20},
                                          {name:"정채연",age:21}
                                                  ]);

  const addPerson=()=>{
    setPerson([
      ...Person,
      {
      name:name,age:age
      }
    ]);
  }

  const handleChange=(e)=>{
      //alert(e.target.name);
      //alert(e.target.value);

      if(e.target.name==="name"){
          setName(e.target.value);
      } else if(e.target.name==="age"){
          setAge(e.target.value);
      }
  }

  const deletePerson=(name)=>{
    alert("삭제!(App)");
    alert("넘겨받은 이름!(App):"+name);
    setPerson(Person.filter(data => (data.name !== name) ));
  }

  const updatePerson=(name)=>{
    alert("수정!(App)");
    alert("넘겨받은 이름!(App):"+name);
  }

  return (
    <div className="App">
      <input type="text" placeholder="이름 입력" name="name" onChange={handleChange}></input>
      <input type="text" placeholder="나이 입력" name="age" onChange={handleChange}></input>
      <button onClick={addPerson}>추가</button>            
      <PersonList personList={Person} deletePerson={deletePerson}
      updatePerson={updatePerson}></PersonList>
      
    </div>
  );
}

export default App;
