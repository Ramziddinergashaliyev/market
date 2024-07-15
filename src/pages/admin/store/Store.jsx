import React from "react";
import Table from "../../../components/table/Table";

const Store = () => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Store;
