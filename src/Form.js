import "./Form.css";
import ErrorIcon from "@material-ui/icons/Error";

function Form(props) {
  return (
    <form onSubmit={props.handleSUbmit} className="app-form">
      {props.iserror ? (
        <span className="error-container">
          <ErrorIcon className="icon-error" />
          <h1 className="error-header">There is some errors in form</h1>
        </span>
      ) : (
        ""
      )}

      <div className="app-form-wrapper">
        <div className="host-info">
          <h3 className="host-info-header">Host info</h3>
          <div className="info">
            <span>
              <label className="app-form-label">First Name</label>
              <input
                type="text"
                required
                name="firstname"
                className="app-form-input"
                placeholder="First Name"
              />
            </span>

            <span>
              <label className="app-form-label">Last Name</label>
              <input
                type="text"
                required
                name="lastname"
                className="app-form-input"
                placeholder="Last Name"
              />
            </span>
          </div>
        </div>

        <div className="host-info">
          <h3 className="host-info-header">Contact Details</h3>
          <div className="info">
            <span>
              <label className="app-form-label">Email</label>
              <input
                type="email"
                required
                name="email"
                className="app-form-input"
                placeholder="name@mail.com"
              />
            </span>

            <span>
              <label className="app-form-label">Phone Number</label>
              <input
                type="text"
                required
                name="phonenumber"
                className="app-form-input"
                placeholder="+2547202120"
              />
            </span>
          </div>
        </div>

        <div className="password-row">
          <label className="app-form-label">Password</label>
          <input
            type="password"
            required
            name="password"
            className="app-form-input"
            placeholder="what is your password ?"
          />
        </div>

        <div className="password-row">
          <button type="submit" className="app-form-button">
            {" "}
            Join
          </button>
        </div>

        {/* </div> */}
      </div>

      {props.errors.length === 0 ? (
        ""
      ) : (
        <div className="app-form-errors">
          <ul>
            <li>{props.errors.message}</li>
          </ul>
        </div>
      )}
    </form>
  );
}

export default Form;
