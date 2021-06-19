import "./Form.css";
import axios from "axios";

import React, { useState } from "react";
import { useFormik } from "formik";
import Success from "./Success.js";

const validate = (values) => {
  let errors = {};

  if (!values.firstname) {
    errors.firstname = "Required";
  } else if (values.firstname.length > 15) {
    errors.firstname = "Must be 15 characters or less";
  }

  if (!values.lastname) {
    errors.lastname = "Required";
  } else if (values.lastname.length > 20) {
    errors.lastname = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phonenumber) {
    errors.phonenumber = "Required";
  } else if (!/^(0)\d{9}$/.test(values.phonenumber)) {
    errors.phonenumber = "invalid phone number";
  }

  if (!values.category) {
    errors.category = "Required";
  }
  console.log(errors);
  return errors;
};

const Form = () => {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      category: "",
    },
    validate,
    onSubmit: (values, onSubmitProps) => {
      let originalPhoneNumber = values.phonenumber;
      values.phonenumber = originalPhoneNumber.replace("0", "254");
      values.createdat = Date.now().toString();
      console.log(values);
      axios
        .post(
          "https://sheet.best/api/sheets/be605fc4-6f8e-474f-b5fd-5b7dc2669f18",
          values
        )
        .then((response) => {
          if (response.status === 200) {
            onSubmitProps.resetForm();
            setIsSuccessful(true);
            console.log(response);
          }
        })
        .catch(function (error) {
          // setIsError(true);
          console.log(error);
        });
    },
  });

  return (
    //   <form onSubmit={formik.handleSubmit} className="app-form">
    //   <div className="app-form-wrapper">
    //     <div className="host-info">
    //       <h3 className="host-info-header">Host info</h3>
    //       <div className="info">
    //         <span>
    //           <label htmlFor="firstname" className="app-form-label">
    //             First Name
    //           </label>
    //           <input
    //             id="firstname"
    //             name="firstname"
    //             type="text"
    //             onChange={formik.handleChange}
    //             onBlur={formik.handleBlur}
    //             value={formik.values.firstname}
    //             className="app-form-input"
    //             placeholder="what is your first name ?"
    //           />
    //           {formik.touched.firstname && formik.errors.firstname ? (
    //             <div className="formik-error">{formik.errors.firstname}</div>
    //           ) : null}
    //         </span>

    //         <span>
    //           <label htmlFor="lastname" className="app-form-label">
    //             Last Name
    //           </label>
    //           <input
    //             id="lastname"
    //             name="lastname"
    //             type="text"
    //             onChange={formik.handleChange}
    //             onBlur={formik.handleBlur}
    //             value={formik.values.lastname}
    //             className="app-form-input"
    //             placeholder="what is the last name ?"
    //           />
    //           {formik.touched.lastname && formik.errors.lastname ? (
    //             <div className="formik-error">{formik.errors.lastname}</div>
    //           ) : null}
    //         </span>
    //       </div>
    //     </div>

    //     <div className="host-info">
    //       <h3 className="host-info-header">Host contact</h3>
    //       <div className="info">
    //         <span>
    //           <label htmlFor="email" className="app-form-label">
    //             Email Address
    //           </label>
    //           <input
    //             id="email"
    //             name="email"
    //             type="email"
    //             onChange={formik.handleChange}
    //             onBlur={formik.handleBlur}
    //             value={formik.values.email}
    //             className="app-form-input"
    //             placeholder="email@mail.com"
    //           />
    //           {formik.touched.email && formik.errors.email ? (
    //             <div className="formik-error">{formik.errors.email}</div>
    //           ) : null}
    //         </span>

    //         <span>
    //           <label htmlFor="phonenumber" className="app-form-label">
    //             Phone Number
    //           </label>
    //           <input
    //             id="phonenumber"
    //             name="phonenumber"
    //             type="text"
    //             onChange={formik.handleChange}
    //             onBlur={formik.handleBlur}
    //             value={formik.values.phonenumber}
    //             className="app-form-input"
    //             placeholder="07202120"
    //           />
    //           {formik.touched.phonenumber && formik.errors.phonenumber ? (
    //             <div className="formik-error">{formik.errors.phonenumber}</div>
    //           ) : null}
    //         </span>
    //       </div>
    //     </div>

    //     <div className="password-row">
    //       <label htmlFor="category" className="app-form-label">
    //         What category would you host ?
    //       </label>
    //       <select
    //         id="category"
    //         className="form-control selector-input"
    //         name="category"
    //         onChange={formik.handleChange}
    //         onBlur={formik.handleBlur}
    //         value={formik.values.category}
    //       >
    //         {/* <option selected>Choose...</option> */}
    //         <option value="SPORTS-HEALTH">SPORTS-HEALTH</option>
    //         <option value="MUSIC-AND-DANCE">MUSIC-AND-DANCE</option>
    //         <option value="ARTS-CRAFT-CULTURE">ARTS-CRAFT-CULTURE</option>

    //         <option value="ADRENALINE-ADVENTURE-NATURE-OUTDOORS">
    //           OUTDOORS
    //         </option>
    //         <option value="NIGHTLIFE-AND-PARTIES">NIGHTLIFE-AND-PARTIES</option>
    //         <option value="IMPROV-MAGIC-COMEDY">COMEDY</option>

    //         <option value="SCI-FI-GAMES">SCI-FI-GAMES</option>
    //         <option value="WELLNESS-SPIRITUALITY">SPIRITUALITY</option>
    //         <option value="FOOD-AND-DRINK">FOOD-AND-DRINK</option>

    //         <option value="SOCIAL-GOOD">SOCIAL-GOOD</option>
    //         <option value="LECTURES-AND-WORKSHOPS">LECTURES</option>
    //       </select>

    //       {formik.touched.category && formik.errors.category ? (
    //         <div className="formik-error">{formik.errors.category}</div>
    //       ) : null}
    //     </div>

    //     <div className="password-row">
    //       <button type="submit" className="app-form-button">
    //         {" "}
    //         Join
    //       </button>
    //     </div>
    //   </div>

    //   {/* </div> */}
    // </form>

    <div>
      {isSuccessful ? (
        <Success />
      ) : (
        <form onSubmit={formik.handleSubmit} className="app-form">
          <div className="app-form-wrapper">
            <div className="host-info">
              <h3 className="host-info-header">Host info</h3>
              <div className="info">
                <span>
                  <label htmlFor="firstname" className="app-form-label">
                    First Name
                  </label>
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstname}
                    className="app-form-input"
                    placeholder="what is your first name ?"
                  />
                  {formik.touched.firstname && formik.errors.firstname ? (
                    <div className="formik-error">
                      {formik.errors.firstname}
                    </div>
                  ) : null}
                </span>

                <span>
                  <label htmlFor="lastname" className="app-form-label">
                    Last Name
                  </label>
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname}
                    className="app-form-input"
                    placeholder="what is the last name ?"
                  />
                  {formik.touched.lastname && formik.errors.lastname ? (
                    <div className="formik-error">{formik.errors.lastname}</div>
                  ) : null}
                </span>
              </div>
            </div>

            <div className="host-info">
              <h3 className="host-info-header">Host contact</h3>
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
                    <div className="formik-error">{formik.errors.email}</div>
                  ) : null}
                </span>

                <span>
                  <label htmlFor="phonenumber" className="app-form-label">
                    Phone Number
                  </label>
                  <input
                    id="phonenumber"
                    name="phonenumber"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phonenumber}
                    className="app-form-input"
                    placeholder="07202120"
                  />
                  {formik.touched.phonenumber && formik.errors.phonenumber ? (
                    <div className="formik-error">
                      {formik.errors.phonenumber}
                    </div>
                  ) : null}
                </span>
              </div>
            </div>

            <div className="password-row">
              <label htmlFor="category" className="app-form-label">
                What category would you host ?
              </label>
              <select
                id="category"
                className="form-control selector-input"
                name="category"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
              >
                {/* <option selected>Choose...</option> */}
                <option value="SPORTS-HEALTH">SPORTS-HEALTH</option>
                <option value="MUSIC-AND-DANCE">MUSIC-AND-DANCE</option>
                <option value="ARTS-CRAFT-CULTURE">ARTS-CRAFT-CULTURE</option>

                <option value="ADRENALINE-ADVENTURE-NATURE-OUTDOORS">
                  OUTDOORS
                </option>
                <option value="NIGHTLIFE-AND-PARTIES">
                  NIGHTLIFE-AND-PARTIES
                </option>
                <option value="IMPROV-MAGIC-COMEDY">COMEDY</option>

                <option value="SCI-FI-GAMES">SCI-FI-GAMES</option>
                <option value="WELLNESS-SPIRITUALITY">SPIRITUALITY</option>
                <option value="FOOD-AND-DRINK">FOOD-AND-DRINK</option>

                <option value="SOCIAL-GOOD">SOCIAL-GOOD</option>
                <option value="LECTURES-AND-WORKSHOPS">LECTURES</option>
              </select>

              {formik.touched.category && formik.errors.category ? (
                <div className="formik-error">{formik.errors.category}</div>
              ) : null}
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
      )}
    </div>
  );
};
export default Form;
