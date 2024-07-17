import React, { useState } from "react";
import {
  useGetCustomerByIdQuery,
  useUpdateCustomerMutation,
} from "../../context/slices/customerApi";
import { useParams } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

import "./singleCustomer.scss";
import Module from "../../components/Module/Module";
import PaymeForm from "../../components/paymeForm/PaymeForm";
import {
  useGetPaymetByIdQuery,
  useGetPaymetsQuery,
} from "../../context/slices/paymetApi";

const SingleCustomer = () => {
  const [updete, setUpdete] = useState(null);
  const [payme, setPayme] = useState(false);
  const [storeHide, setStoreHide] = useState(false);
  const { id } = useParams();
  const { data } = useGetCustomerByIdQuery(id);
  const [SingleUpdete, { data: single }] = useUpdateCustomerMutation();
  const { data: store } = useGetPaymetByIdQuery(id);

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

  console.log(store);

  const StoreData = store?.innerData?.map((el) => (
    <div className="single__store">
      <div>
        <p>budget: {el?.amount}</p>
        <span>comment: {el?.comment}</span>
      </div>
      <div>
        <p>
          {el?.adminId?.fname}
          {el?.adminId?.lname}
        </p>
        <p>
          {el?.updatedAt.split("T")[0]}{" "}
          {el?.updatedAt.split("T")[1].split(".")[0]}
        </p>
      </div>
    </div>
  ));

  return (
    <>
      <div className="single container">
        <div className="single__card">
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
              {data?.innerData?.adminId?.fname}{" "}
              {data?.innerData?.adminId?.lname}
            </p>
            <p>
              <span>budget: </span>
              {data?.innerData?.budget}
            </p>
            <div className="single__right__btns">
              {updete ? (
                <Module bg={"#aaa9"} width={500} close={setUpdete}>
                  <form
                    onSubmit={handleUpdete}
                    className="single__edit"
                    action=""
                  >
                    <input
                      value={updete?.fname}
                      onChange={(e) =>
                        setUpdete((prev) => ({
                          ...prev,
                          fname: e.target.value,
                        }))
                      }
                      placeholder="fname"
                      type="text"
                    />
                    <input
                      value={updete?.lname}
                      onChange={(e) =>
                        setUpdete((prev) => ({
                          ...prev,
                          lname: e.target.value,
                        }))
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
                <Module close={setPayme} width={500} bg={"#aaa9"}>
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
        <button onClick={() => setStoreHide(true)} className="single__btn">
          <AiOutlinePlus /> Tolov Tarixi
        </button>
        {storeHide ? <div>{StoreData}</div> : <></>}
      </div>
    </>
  );
};

export default SingleCustomer;
