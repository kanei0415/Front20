import React, { useState } from 'react';
import Person from './Person';

const PersonList = (props) => {
  
    const result=props.personList.map((data)=>(<Person key={data.name} 
    name={data.name} age={data.age}
    deletePerson={props.deletePerson} updatePerson={props.updatePerson}/>));

  return (
    <div>
      {result}
    </div>
  );
};

export default PersonList;
