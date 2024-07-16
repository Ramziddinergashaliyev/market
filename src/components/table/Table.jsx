import React, { useState } from "react";
import {
  useGetCustomerByIdQuery,
  useGetCustomersQuery,
  useUpdateCustomerMutation,
} from "../../context/slices/customerApi";
import "./table.scss";
import { CUSTOM } from "../../static";
import { Link, useNavigate } from "react-router-dom";
import Module from "../Module/Module";
import PaymeForm from "../paymeForm/PaymeForm";
import { ImPushpin } from "react-icons/im";

const Table = () => {
  const { data, isLoading } = useGetCustomersQuery();
  const [tableClose, setTableClose] = useState(false);
  const [pinCustom, {}] = useUpdateCustomerMutation();

  const handlePinClick = (el) => {
    const pinData = {
      ...el,
      pin: !el.pin,
    };
    pinCustom({ id: el._id, body: pinData });
  };

  const customerTbody = data?.innerData?.map((el, index) => (
    <tr key={el?._id}>
      <td>
        <button onClick={() => handlePinClick(el)}>
          <ImPushpin />
        </button>
        00{index + 1}
      </td>
      <td>{el?.fname}</td>
      <td>{el?.address}</td>
      <td>{el?.phone_primary ? el?.phone_primary : "+998123531282"}</td>
      <td>
        <div
          className={`table__budget ${
            el?.budget > 0
              ? ""
              : el?.budget === 0
              ? "table__budget__green"
              : "table__budget__red"
          }`}
        >
          {el?.budget}
        </div>
      </td>

      <td className="table__btns">
        {tableClose ? (
          <Module width={400} close={setTableClose}>
            <PaymeForm close={setTableClose} id={el?._id} />
          </Module>
        ) : (
          <></>
        )}
        <button
          onClick={() => setTableClose(true)}
          className="table__btns-price"
        >
          Tolov
        </button>
        <Link to={`/admin/customer/${el?._id}`}>
          <button className="table__btns-view">batafsil</button>
        </Link>
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
