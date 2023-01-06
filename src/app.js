import "./app.css";
import Title from "./Components/Title";
import Form from "./Components/Form";
import History from "./Components/History";
import React, { useState } from "react";

let studenthistory = [];

const App = () => {
  const [studentdata, updatestudentdata] = useState(studenthistory);

  const newstudent = (expe) => {
    updatestudentdata([expe, ...studentdata]);
  };
  return (
    <div className="body">
      <div className="container">
        <Title />
        <h3>New Entry</h3>
        <Form newexpenses={newstudent} />
        <br />
        <h3>RECORD</h3>
        <History item={studentdata} />
      </div>
    </div>
  );
};

export default App;
