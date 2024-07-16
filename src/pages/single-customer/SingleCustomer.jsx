import React, { useState } from "react";
import {
  useGetCustomerByIdQuery,
  useUpdateCustomerMutation,
} from "../../context/slices/customerApi";
import { useParams } from "react-router-dom";

import "./singleCustomer.scss";
import Module from "../../components/Module/Module";
import PaymeForm from "../../components/paymeForm/PaymeForm";

const SingleCustomer = () => {
  const [updete, setUpdete] = useState(null);
  const [payme, setPayme] = useState(false);
  const { id } = useParams();
  const { data } = useGetCustomerByIdQuery(id);
  const [SingleUpdete, { data: single }] = useUpdateCustomerMutation();
  console.log(data?.innerData);

  const handleUpdete = (e) => {
    e.preventDefault();
    let updeteSingle = {
      fname: updete.fname,
      lname: updete.lname,
      phone_primary: updete.phone_primary,
      address: updete.address,
    };

    SingleUpdete({ body: updeteSingle, id: updete._id });
    setUpdete(null);
  };

  return (
    <div className="single container">
      <div className="single__left">
        <p>
          <span>fname: </span> {data?.innerData?.fname}
        </p>
        <p>
          <span>lname:</span>
          {data?.innerData?.lname}
        </p>
        <p>
          <span>address:</span> {data?.innerData?.address}
        </p>
        <p>
          <span>number:</span> {data?.innerData?.phone_primary}
        </p>
      </div>
      <div className="single__right">
        <p>
          <span>Shaxs: </span>
          {data?.innerData?.adminId?.fname} {data?.innerData?.adminId?.lname}
        </p>
        <p>
          <span>budget: </span>
          {data?.innerData?.budget}
        </p>
        <div className="single__right__btns">
          {updete ? (
            <Module bg={"#aaa9"} width={500} close={setUpdete}>
              <form onSubmit={handleUpdete} className="single__edit" action="">
                <input
                  value={updete?.fname}
                  onChange={(e) =>
                    setUpdete((prev) => ({ ...prev, fname: e.target.value }))
                  }
                  placeholder="fname"
                  type="text"
                />
                <input
                  value={updete?.lname}
                  onChange={(e) =>
                    setUpdete((prev) => ({ ...prev, lname: e.target.value }))
                  }
                  placeholder="lname"
                  type="text"
                />
                <input
                  onChange={(e) =>
                    setUpdete((prev) => ({
                      ...prev,
                      phone_primary: e.target.value,
                    }))
                  }
                  value={updete?.phone_primary}
                  placeholder="phone_primary"
                  type="text"
                />
                <input
                  value={updete?.address}
                  onChange={(e) =>
                    setUpdete((prev) => ({
                      ...prev,
                      address: e.target.value,
                    }))
                  }
                  placeholder="address"
                  type="text"
                />
                <button>Save</button>
              </form>
            </Module>
          ) : (
            <></>
          )}
          <button
            onClick={() => setUpdete(data?.innerData)}
            className="single__right__btns-view"
          >
            Edit
          </button>
          {payme ? (
            <Module width={500} bg={"#aaa9"} close={setPayme}>
              <PaymeForm id={id} />
            </Module>
          ) : (
            <></>
          )}
          <button
            onClick={() => setPayme(true)}
            className="single__right__btns-paymet"
          >
            Paymet
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCustomer;
