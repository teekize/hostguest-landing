import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import "./Success.css";
function Success() {
  return (
    <div className="success">
      <CheckCircleOutlineIcon className="success-icon" />
      <h2 className="cash">Sucesssfully registered</h2>
    </div>
  );
}

export default Success;
