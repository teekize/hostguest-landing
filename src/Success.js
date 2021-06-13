import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import "./Success.css";
function Success() {
  return (
    <div className="success">
      <CheckCircleOutlineIcon className="success-icon" />
      <h2>Sucesssfully signed up</h2>
    </div>
  );
}

export default Success;
