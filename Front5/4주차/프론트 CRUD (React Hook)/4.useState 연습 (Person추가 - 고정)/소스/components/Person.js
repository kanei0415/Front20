import React, { useState } from 'react';

const Person = (props) => {
  
  return (
    <div>
      <h1>이름:{props.name}</h1>
      <h1>나이:{props.age}</h1>
    </div>
  );
};

export default Person;