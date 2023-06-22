
import "./Task.css";
export function Task(/*props*/ { title, status, deadline }) {

  // desestuturação
  // let { title, status, deadline } = props; 
  // let { title } = props;// let title = props.title; 
  // let { status } = props;
  // let { deadline } = props;

  return (
    <div className="task">
      <strong>{title}</strong>
      <div className="details">
        <span className="status">{status}</span>
        <span className="deadline">{deadline}</span>
      </div>
    </div>
  );
}