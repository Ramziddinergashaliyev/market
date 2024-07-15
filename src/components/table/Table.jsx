import React from "react";
import { useGetCustomersQuery } from "../../context/slices/customerApi";
import "./table.scss";

const Table = () => {
  const { data, isLoading } = useGetCustomersQuery();
  console.log(data);

  const customerTbody = data?.innerData?.map((el) => (
    <tr key={el?._id}>
      <td>{el?._id}</td>
      <td>{el?.fname}</td>
      <td>{el?.address}</td>
      <td>{el?.phones[0] ? el?.phones[0] : el?.phone_primary}</td>
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
