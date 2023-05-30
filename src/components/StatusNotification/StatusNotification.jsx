
import './StatusNotification.css'
const StatusNotification = ({text}) => {
  console.log(text);
  return <h2 className="titleStatus"> {text} </h2>;
};

export default StatusNotification