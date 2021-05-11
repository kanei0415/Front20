import React, { useState } from 'react';

const Person = (props) => {
  
  const updatePerson=()=>{
      alert("수정!");
  }

  const deletePerson=()=>{
      alert("삭제!");
  }

  return (
    <div>
      <h1>이름:{props.name}</h1>
      <h1>나이:{props.age}</h1>
      <button onClick={updatePerson}>수정</button>
      <button onClick={deletePerson}>삭제</button>
      <hr></hr>
    </div>
  );
};

export default Person;