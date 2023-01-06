import "./Listitem.css";

const Listitem = (props) => {
  return (
    <div className="minus">
      <div className="candrollnumber">
        <div className="candrollnumber__rollno">XYZ-{props.rollno}</div>
      </div>
      <div className="description">{props.text}</div>
      <div className="time">{props.time}</div>
    </div>
  );
};

export default Listitem;
