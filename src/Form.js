import "./Form.css";
// import ErrorIcon from "@material-ui/icons/Error";

function Form(props) {
  const handleSUbmit = (e) => {
    e.preventDefault();
    const data = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      phonenumber: e.target.phonenumber.value,
      category: e.target.category.value,
    };

    alert(data);
  };
  return (
    <form onSubmit={handleSUbmit} className="app-form" id="host-signup">
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
          <label for="inputState" className="app-form-label">
            What category would you host ?
          </label>
          <select
            id="inputState"
            class="form-control app-form-input"
            name="category"
          >
            <option selected>Choose...</option>
            <option value="SPORTS-HEALTH">SPORTS-HEALTH</option>
            <option value="MUSIC-AND-DANCE">MUSIC-AND-DANCE</option>
            <option value="ARTS-CRAFT-CULTURE">ARTS-CRAFT-CULTURE</option>

            <option value="ADRENALINE-ADVENTURE-NATURE-OUTDOORS">
              OUTDOORS
            </option>
            <option value="NIGHTLIFE-AND-PARTIES">NIGHTLIFE-AND-PARTIES</option>
            <option value="IMPROV-MAGIC-COMEDY">COMEDY</option>

            <option value="SCI-FI-GAMES">SCI-FI-GAMES</option>
            <option value="WELLNESS-SPIRITUALITY">SPIRITUALITY</option>
            <option value="FOOD-AND-DRINK">FOOD-AND-DRINK</option>

            <option value="SOCIAL-GOOD">SOCIAL-GOOD</option>
            <option value="LECTURES-AND-WORKSHOPS">LECTURES</option>
          </select>
        </div>

        <div className="password-row">
          <button type="submit" className="app-form-button">
            {" "}
            Join
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
