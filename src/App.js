import "./App.css";
import Form from "./Form.js";
import Student from "./Student.js";
import React, { useState } from "react";

const dummyData = [
  {
    website: "https://demo.com",
    gender: "Male",
    email: "george.bluth@reqres.in",
    name: "George Bluth",
    skills: "HTML,CSS",
    image: "https://reqres.in/img/faces/1-image.jpg",
  },
  {
    website: "https://demo.com",
    gender: "Female",
    email: "janet.weaver@reqres.in",
    name: "Janet Weaver",
    skills: "Java,HTML",
    image: "https://reqres.in/img/faces/2-image.jpg",
  },
  {
    website: "https://demo.com",
    gender: "Female",
    email: "emma.wong@reqres.in",
    name: "Emma Wong",
    skills: "Java,HTML,CSS",
    image: "https://reqres.in/img/faces/3-image.jpg",
  },
  {
    website: "https://demo.com",
    gender: "Male",
    email: "eve.holt@reqres.in",
    name: "Eve Holt",
    skills: "Java,CSS",
    image: "https://reqres.in/img/faces/4-image.jpg",
  },
  {
    website: "https://demo.com",
    gender: "Male",
    email: "charles.morris@reqres.in",
    name: "Charles Morris",
    skills: "Java",
    image: "https://reqres.in/img/faces/5-image.jpg",
  },
];

function App() {
  const [data, setData] = useState(dummyData);
  const save = (data) => {
    setData((previous) => [data, ...previous]);
  };

  return (
    <div>
      <h2 className="top">Student Enrollment Form</h2>
      <div className="App">
        <div className="child1">
          <Form saveData={save} />
        </div>
        <div className="extra">
          <h1>Enrolled Students </h1>
          <div className="child2">
            <Student data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
