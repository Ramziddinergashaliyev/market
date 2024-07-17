import React, { useState } from "react";
import {
  useGetCustomerByIdQuery,
  useGetCustomersQuery,
  useUpdateCustomerMutation,
} from "../../context/api/customerApi";
import "./table.scss";
import { CUSTOM } from "../../static";
import { Link, useNavigate } from "react-router-dom";
import Module from "../Module/Module";
import PaymeForm from "../paymeForm/PaymeForm";
import { ImPushpin } from "react-icons/im";
import { GrPin } from "react-icons/gr";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Table = () => {
  const [tableClose, setTableClose] = useState(false);
  const [pinCustom, {}] = useUpdateCustomerMutation();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const { data, isLoading, isSuccess } = useGetCustomersQuery({
    page: page - 1,
  });

  let pageLength = Math.ceil(data?.totalCount / 10);

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
        <button className="table__pin" onClick={() => handlePinClick(el)}>
          {el?.pin === true ? <ImPushpin /> : <GrPin />}
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
              ? "table__budget__blue"
              : el?.budget === 0
              ? "table__budget__green"
              : "table__budget__red"
          }`}
        >
          {el?.budget}
        </div>
      </td>

      <td className="table__btns">
        <button onClick={() => setTableClose(el)} className="table__btns-price">
          Tolov
        </button>
        <Link to={`/admin/customer/${el?._id}`}>
          <button className="table__btns-view">batafsil</button>
        </Link>
      </td>
    </tr>
  ));

  return (
    <div className="table">
      <table className="table__row">
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>id</th>
            <th>Ism</th>
            <th>Manzil</th>
            <th>Telefon nomer</th>
            <th>Pul</th>
            <th style={{ paddingLeft: "100px" }}>/</th>
          </tr>
        </thead>
        <tbody>{customerTbody}</tbody>
        {tableClose ? (
          <Module bg={"#aaa8"} width={400} close={setTableClose}>
            <PaymeForm close={setTableClose} id={tableClose?._id} />
          </Module>
        ) : (
          <></>
        )}
      </table>
      <div className="table__pagenation">
        <Stack spacing={2}>
          <Pagination count={pageLength} page={page} onChange={handleChange} />
        </Stack>
      </div>
    </div>
  );
};

export default Table;
