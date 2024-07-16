import React from "react";
// import { useGetCustomersQuery } from "../../context/slices/customerApi";
import "./table.scss";
import { CUSTOM } from "../../static";

const Table = () => {
  // const { data, isLoading } = useGetCustomersQuery();
  console.log(CUSTOM);

  const customerTbody = CUSTOM?.map((el, index) => (
    <tr key={el?._id}>
      <td>00{index + 1}</td>
      <td>{el?.fname}</td>
      <td>{el?.address}</td>
      <td>{el?.phone_primary ? el?.phone_primary : "+998123531282"}</td>
      <td>{el?.budget}</td>
      <td className="table__btns">
        <button className="table__btns-price">Tolov</button>
        <button className="table__btns-view">batafsil</button>
      </td>
    </tr>
  ));
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Budget</th>
            <th>info</th>
          </tr>
        </thead>
        <tbody>{customerTbody}</tbody>
      </table>
    </div>
  );
};

export default Table;
