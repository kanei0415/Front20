import React, { useState } from 'react';

const Person = (props) => {
  
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

  return (
    <div>
      <h1>이름:{props.name}</h1>
      <h1>나이:{props.age}</h1>
      <button onClick={updatePerson} name={props.name}>수정</button>
      <button onClick={deletePerson} name={props.name}>삭제</button>
      <hr></hr>
    </div>
  );
};

export default Person;