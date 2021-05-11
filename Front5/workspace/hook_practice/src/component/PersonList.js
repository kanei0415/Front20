import React, {Component} from "react";
import Person from "./Person";

const PersonList = (props) => {
  const res = props.personList.map(data => {
    return<Person name={data.name} age={data.age} />
  })

  return<div className="PersonList">
    {res}
  </div>
}

export default PersonList;