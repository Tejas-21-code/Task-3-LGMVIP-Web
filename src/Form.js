import "./Form.css";
import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.saveData({
      name,
      email,
      website,
      image,
      gender,
      skills: "Java,HTML,CSS",
    });
    setName("");
    setEmail("");
    setWebsite("");
    setImage("");
  };

  const resetHandler = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setWebsite("");
    setImage("");
  };

  const changeHandler1 = (event) => {
    setName(event.target.value);
  };

  const changeHandler2 = (event) => {
    setEmail(event.target.value);
  };

  const changeHandler3 = (event) => {
    setWebsite(event.target.value);
  };

  const changeHandler4 = (event) => {
    setImage(event.target.value);
  };
  const checkboxHandler1 = (e) => {
    if (e.target.checked === true) {
      document.getElementsByClassName("btn2")[0].checked = false;
      setGender("Male");
    }
    if (e.target.checked === false) {
      document.getElementsByClassName("btn2")[0].checked = true;
      setGender("Female");
    }
  };
  const checkboxHandler2 = (e) => {
    if (e.target.checked === false) {
      document.getElementsByClassName("btn1")[0].checked = true;

      setGender("Male");
    }
    if (e.target.checked === true) {
      document.getElementsByClassName("btn1")[0].checked = false;
      setGender("Female");
    }
  };

  return (
    <form>
      <h1>Enter Student Details</h1>
      <div className="element">
        <p className="para">Name</p>
        <input
          type="text"
          value={name}
          onChange={changeHandler1}
          className="in"
        />
      </div>
      <div className="element">
        <p className="para">Email</p>
        <input
          type="text"
          value={email}
          onChange={changeHandler2}
          className="in"
        />
      </div>
      <div className="element">
        <p className="para">Website</p>
        <input
          type="text"
          value={website}
          onChange={changeHandler3}
          className="in"
        />
      </div>
      <div className="element">
        <p className="para">Image Link</p>
        <input
          type="text"
          value={image}
          onChange={changeHandler4}
          className="in"
        />
      </div>
      <div className="element">
        <p className="para">Gender</p>
        <div>
          <div className="ele1">
            <input className="btn1" type="radio" onChange={checkboxHandler1} />
            <label>Male</label>
          </div>
          <div className="ele2">
            <input type="radio" className="btn2" onChange={checkboxHandler2} />
            <lebel>Female</lebel>
          </div>
        </div>
      </div>
      <div className="element">
        <p className="para">Skills</p>

        <div className="flex">
          <input className="checked" type="checkbox" />
          <label>Java </label>
          <input className="checked" type="checkbox" />
          <label>HTML </label>
          <input className="checked" type="checkbox" />
          <label>CSS </label>
        </div>
      </div>
      <div className="s">
        {/* <input type="submit" />
        <input type="submit" /> */}
        <button onClick={submitHandler}>Submit </button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </form>
  );
}

export default Form;
