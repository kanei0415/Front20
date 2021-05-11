import React, {useState} from "react";

const Person = (props) => {
  const [name, setName] = useState(props.name);
  const [age, setAge] = useState(props.age);

  return<div className="Person">
    <hr />
    Name : {name} <br />
    Age : {age} <br />
    <hr />
  </div>
}

export default Person;