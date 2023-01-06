import "./Form.css";
import React, { useState } from "react";

const Form = (props) => {
  const [rollNumber, updaterollNumber] = useState("");
  const [CandName, updateCandName] = useState("");

  const changeamount = (event) => {
    if (event.target.value > 100 || event.target.value < 0) {
      alert("Invalid RollNumber must be b/w 0 and 100");
      updaterollNumber("");
    } else {
      updaterollNumber(event.target.value);
    }
  };
  const changedescription = (event) => {
    if (event.target.value === "") {
      alert("Invalid Name");
      updateCandName("");
    } else {
      updateCandName(event.target.value);
    }
  };

  const submithandler = (event) => {
    event.preventDefault();
    let callit = true;
    if (CandName === "" || rollNumber === "") {
      alert("Incomplete Data!!!");
      callit = false;
    }
    const newdata = {
      text: CandName,
      RollNumber: rollNumber,
      time: new Date().toLocaleTimeString(),
    };
    if (callit) {
      props.newexpenses(newdata);
    }
    updateCandName("");
    updaterollNumber("");
  };

  return (
    <div>
      <form id="form" onSubmit={submithandler}>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            id="text"
            value={CandName}
            onChange={changedescription}
          />
        </div>
        <div className="form-control">
          <label>
            RollNumber <br />
          </label>
          <input
            type="number"
            id="amount"
            value={rollNumber}
            onChange={changeamount}
          />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
