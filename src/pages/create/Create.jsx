import React, { useState } from "react";
import { useCreateCustomerMutation } from "../../context/slices/customerApi";
import "./create.scss";

let initialState = {
  fname: "",
  lname: "",
  phone_primary: "",
  address: "",
  budget: "",
};

const Create = () => {
  const [value, setValue] = useState(initialState);
  const [createCustom, { data, isLoading }] = useCreateCustomerMutation();

  const handleChange = (e) => {
    let { value, name } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCustom(value);
    setValue(initialState);
  };

  return (
    <div className="form container">
      <h2>Add New Contact</h2>
      <form className="form__page" onSubmit={handleSubmit} action="">
        <div className="form__page__customer">
          <label htmlFor="">
            First name
            <input
              required
              value={value.fname}
              name={"fname"}
              onChange={handleChange}
              placeholder="fname"
              type="text"
            />
          </label>
          <label htmlFor="">
            Last name
            <input
              required
              value={value.lname}
              name={"lname"}
              onChange={handleChange}
              placeholder="lname"
              type="text"
            />
          </label>
          <label htmlFor="">
            phone number
            <input
              required
              value={value.phone_primary}
              name={"phone_primary"}
              onChange={handleChange}
              placeholder="number"
              type="text"
            />
          </label>
          <label htmlFor="">
            Address
            <input
              required
              value={value.address}
              name={"address"}
              onChange={handleChange}
              placeholder="address"
              type="text"
            />
          </label>
          <label htmlFor="">
            Budget
            <input
              required
              value={value.budget}
              name={"budget"}
              onChange={handleChange}
              placeholder="budget"
              type="number"
            />
          </label>
        </div>
        <button>Create</button>
      </form>
    </div>
  );
};

export default Create;
