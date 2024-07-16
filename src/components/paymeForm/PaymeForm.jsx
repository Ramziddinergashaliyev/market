import React, { useState } from "react";
import { useCreatePaymetMutation } from "../../context/slices/paymetApi";

import "./paymeForm.scss";

const PaymeForm = ({ id, close }) => {
  console.log(id);
  let initialState = {
    customerId: id,
    amount: "",
    comment: "",
  };

  const [payme, setPayme] = useState(initialState);
  const [paymeCreate, { data }] = useCreatePaymetMutation(id);

  const handleChange = (e) => {
    let { value, name } = e.target;
    setPayme((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    paymeCreate(payme);
    // setPayme(initialState);
    close(false);
  };

  return (
    <div className="payme">
      <h2>Payme Create</h2>
      <form className="payme__form" onSubmit={handleSubmit} action="">
        <input
          placeholder="amount"
          value={payme.amount}
          name="amount"
          onChange={handleChange}
          type="number"
        />
        <input
          placeholder="comment"
          value={payme.comment}
          name="comment"
          onChange={handleChange}
          type="text"
        />
        <button>Save</button>
      </form>
    </div>
  );
};

export default PaymeForm;
