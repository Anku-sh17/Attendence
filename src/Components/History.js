import "./History.css";
import Listitem from "./Listitems";

const History = (props) => {
  return (
    <div>
      <div id="list" className="list">
        {props.item.map((exp) => (
          <Listitem text={exp.text} time={exp.time} rollno={exp.RollNumber} />
        ))}
      </div>
    </div>
  );
};

export default History;
