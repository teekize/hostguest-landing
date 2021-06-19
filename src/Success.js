import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import "./Success.css";
function Success() {
  return (
    <div className="success">
      <CheckCircleOutlineIcon className="success-icon" />
      <h2 className="cash tile-sucess">sucesssfully registered</h2>

      <p className="success-mes">
        You will be contacted by one of HostGuest`s representatives.{" "}
      </p>
    </div>
  );
}

export default Success;
