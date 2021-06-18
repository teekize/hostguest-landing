import "./Form.css";
// import ErrorIcon from "@material-ui/icons/Error";

// function Form(props) {
//   const handleSUbmit = (e) => {
//     e.preventDefault();
//     const data = {
//       firstname: e.target.firstname.value,
//       lastname: e.target.lastname.value,
//       email: e.target.email.value,
//       phonenumber: e.target.phonenumber.value,
//       category: e.target.category.value,
//     };

//     alert(data);
//   };
//   return (
//     <form onSubmit={handleSUbmit} className="app-form" id="host-signup">
//       <div className="app-form-wrapper">
//         <div className="host-info">
//           <h3 className="host-info-header">Host info</h3>
//           <div className="info">
//             <span>
//               <label className="app-form-label">First Name</label>
//               <input
//                 type="text"
//                 required
//                 name="firstname"
//                 className="app-form-input"
//                 placeholder="First Name"
//               />
//             </span>

//             <span>
//               <label className="app-form-label">Last Name</label>
//               <input
//                 type="text"
//                 required
//                 name="lastname"
//                 className="app-form-input"
//                 placeholder="Last Name"
//               />
//             </span>
//           </div>
//         </div>

//         <div className="host-info">
//           <h3 className="host-info-header">Contact Details</h3>
//           <div className="info">
//             <span>
//               <label className="app-form-label">Email</label>
//               <input
//                 type="email"
//                 required
//                 name="email"
//                 className="app-form-input"
//                 placeholder="name@mail.com"
//               />
//             </span>

//             <span>
//               <label className="app-form-label">Phone Number</label>
//               <input
//                 type="text"
//                 required
//                 name="phonenumber"
//                 className="app-form-input"
//                 placeholder="+2547202120"
//               />
//             </span>
//           </div>
//         </div>

//         <div className="password-row">
//           <label for="inputState" className="app-form-label">
//             What category would you host ?
//           </label>
//           <select
//             id="inputState"
//             class="form-control app-form-input"
//             name="category"
//           >
//             <option selected>Choose...</option>
//             <option value="SPORTS-HEALTH">SPORTS-HEALTH</option>
//             <option value="MUSIC-AND-DANCE">MUSIC-AND-DANCE</option>
//             <option value="ARTS-CRAFT-CULTURE">ARTS-CRAFT-CULTURE</option>

//             <option value="ADRENALINE-ADVENTURE-NATURE-OUTDOORS">
//               OUTDOORS
//             </option>
//             <option value="NIGHTLIFE-AND-PARTIES">NIGHTLIFE-AND-PARTIES</option>
//             <option value="IMPROV-MAGIC-COMEDY">COMEDY</option>

//             <option value="SCI-FI-GAMES">SCI-FI-GAMES</option>
//             <option value="WELLNESS-SPIRITUALITY">SPIRITUALITY</option>
//             <option value="FOOD-AND-DRINK">FOOD-AND-DRINK</option>

//             <option value="SOCIAL-GOOD">SOCIAL-GOOD</option>
//             <option value="LECTURES-AND-WORKSHOPS">LECTURES</option>
//           </select>
//         </div>

//         <div className="password-row">
//           <button type="submit" className="app-form-button">
//             {" "}
//             Join
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }

// export default Form;

import "./Form.css";

import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Required";
  } else if (!/^(0|\+254)\d{9}$/.test(values.phoneNumber)) {
    errors.phoneNumber = "invalid phone number";
  }

  if (!values.category) {
    errors.category = "Required";
  }
  console.log(errors);
  return errors;
};

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      category: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      values.firstName = "";
      values.lastName = "";
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="app-form">
      <div className="app-form-wrapper">
        <div className="host-info">
          <h3 className="host-info-header">Host info</h3>
          <div className="info">
            <span>
              <label htmlFor="firstName" className="app-form-label">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                className="app-form-input"
                placeholder="what is your first name ?"
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null}
            </span>

            <span>
              <label htmlFor="lastName" className="app-form-label">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                className="app-form-input"
                placeholder="what is the last name ?"
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null}
            </span>
          </div>
        </div>

        <div className="host-info">
          <h3 className="host-info-header">Host info</h3>
          <div className="info">
            <span>
              <label htmlFor="email" className="app-form-label">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="app-form-input"
                placeholder="email@mail.com"
              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </span>

            <span>
              <label htmlFor="phoneNumber" className="app-form-label">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                className="app-form-input"
                placeholder="07202120"
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div>{formik.errors.phoneNumber}</div>
              ) : null}
            </span>
          </div>
        </div>

        <div className="password-row">
          <label for="inputState" className="app-form-label">
            What category would you host ?
          </label>
          <select
            id="inputState"
            class="form-control selector-input"
            name="category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
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

      {/* </div> */}
    </form>
  );
};
export default Form;
