import React, { useState } from 'react';
import Person from './Person';

const PersonList = (props) => {
  
    const result=props.personList.map((data)=>(<Person name={data.name} age={data.age}
    delPerson={props.delPerson}/>));

  return (
    <div>
      {result}
    </div>
  );
};

export default PersonList;
