import React, { useState } from 'react';

const Person = (props) => {
  const [toggle, setToggle] = useState(true);

  const updatePerson=(e)=>{
      alert("수정!");
      const name = e.target.getAttribute("name");
      alert("수정할 이름!(Person):"+name);
      props.updatePerson(name);
  }

  const deletePerson=(e)=>{
      alert("삭제!(Person)");
      const name = e.target.getAttribute("name");
      alert("삭제할 이름!(Person):"+name);
      props.delPerson(name);
  }

  const updateMode=()=>{
      alert("수정모드 상태 변경");
      setToggle(!toggle);
      alert("변경후 toggle값:"+toggle);
  }

  if(toggle===true)
  {
      return (
    <div>
      <h1>이름:<input value={props.name}></input></h1>
      <h1>나이:<input value={props.age}></input></h1>
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
      <h1>이름:{props.name}</h1>
      <h1>나이:{props.age}</h1>
      <button onClick={updatePerson} name={props.name}>수정</button>
      <button onClick={deletePerson} name={props.name}>삭제</button>
      <hr></hr>
    </div>
  );
  }
  
};

export default Person;