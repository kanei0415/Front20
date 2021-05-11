import React, { useState } from 'react';

const Person = (props) => {
  const [toggle, setToggle] = useState(true);
  const [name, setName] = useState(props.name);
  const [age, setAge] = useState(props.age);

  const updatePerson=(e)=>{
      //수정 버튼 눌렀을때 true이면
      //수정할 값을 App로 보내서 수정함
      if(toggle ==true)
      {
      alert("수정!");
      //const name = e.target.getAttribute("name");
      alert("수정할 이름!(Person):"+name);
      props.updatePerson(name);
      }
      
      updateMode();
  }

  const deletePerson=(e)=>{
      alert("삭제!(Person)");
      //const name = e.target.getAttribute("name");
      alert("삭제할 이름!(Person):"+name);
      props.delPerson(name);
  }

  const updateMode=()=>{
      alert("수정모드 상태 변경");
      setToggle(!toggle);
      alert("변경후 toggle값:"+toggle);
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

  if(toggle===true)
  {
      return (
    <div>
      <h1>이름:<input defaultValue={name} name="name" onChange={handleChange}></input></h1>
      <h1>나이:<input defaultValue={age} name="age" onChange={handleChange}></input></h1>
      <button onClick={updatePerson} name={props.name}>수정</button>
      <button onClick={deletePerson} name={props.name}>삭제</button>
      <hr></hr>
    </div>
  );
  }
  else if(toggle===false)
  {
    return (
    <div>
      <h1>이름:{name}</h1>
      <h1>나이:{age}</h1>
      <button onClick={updatePerson} name={props.name}>수정</button>
      <button onClick={deletePerson} name={props.name}>삭제</button>
      <hr></hr>
    </div>
  );
  }
  
};

export default Person;