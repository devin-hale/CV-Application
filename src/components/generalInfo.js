"use client";
import React, { useState, useEffect } from "react";
import "../styles/generalInfo.css";
import Image from "next/image";

const GeneralInfo = () => {
  //Name
  const [name, setName] = useState("");
  const [tempName, setTempName] = useState(name);
  //Phone
  const [phone, setPhone] = useState("");
  const [tempPhone, setTempPhone] = useState(phone);
  //Email
  const [email, setEmail] = useState("");
  const [tempEmail, setTempEmail] = useState(email);
  //Editing Status
  const [editing, setEditing] = useState(true);
  //Form Changed Status
  const [changed, setChanged] = useState(false);

  //Changes editing status.  For editing button.
  const toggleEdit = () => {
    setEditing(!editing);
  };

  // Compares temporary value to default value.
  const tempCheck = (e) => {
    e.target.value === name ? setChanged(false) : setChanged(true);
  };

  // Changes temp name based on input value
  const changeName = (e) => {
    setTempName(e.target.value);
  };
  // Changes temp phone # based on input value
  const changePhone = (e) => {
    setTempPhone(e.target.value);
  };
  // Changes temp email based on input value
  const changeEmail = (e) => {
    setTempEmail(e.target.value);
  };

  //If validation passes, set the temp state to the default.  Set changed to false.
  const saveForm = (e) => {
    e.preventDefault();
    setName(tempName);
    setPhone(tempPhone);
    setEmail(tempEmail);
    setChanged(false);
  };

  //For cancel button.  Sets tempstates back to default, and changed to false.
  const defaultState = () => {
    setTempName(name);
    setTempPhone(phone);
    setTempEmail(email);
    setChanged(false);
  };

  const nullCheck = (arr) => {
    let nullCount = 0;
    arr.forEach((el) => {
      if (el.length === 0) nullCount++;
    });
    return nullCount === 3 ? true : false;
  };

  return (
    <div className=" self-center">
      {!editing ? (
        <div className="rounded p-1 m-[10px] border-2 border-slate-300 min-w-[355px] max-w-lg relative">
          <div className="inputs flex flex-col">
            <p className="col-span-2 text-3xl text-center underline">{name}</p>
            <div className="flex flex-row flex-nowrap align-middle justify-evenly m-[5px]">
              <div className="flex flex-row flex-nowrap justify-center align-middle col-span-2 sm:col-span-1">
                <div className="flex justify-center align-middle">
                  <Image
                    src="./static/images/phone.svg"
                    width={15}
                    height={15}
                    alt="Email"
                  />
                </div>
                <p className="text-center self-center">{phone}</p>
              </div>
              <div className="flex flex-row flex-nowrap justify-center align-middle col-span-2 sm:col-span-1">
                <div className="flex justify-center align-middle">
                  <Image
                    src="./static/images/mail.svg"
                    width={15}
                    height={15}
                    alt="Email"
                  />
                </div>
                <p className="text-center self-center">{email}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="border-2 border-slate-500 p-[2px] rounded cursor-pointer hover:bg-slate-400 hover:transition-all transition-all absolute top-1"
              type="button"
              onClick={toggleEdit}
            >
              Edit
            </button>
          </div>
        </div>
      ) : (
        <form
          className="generalForm rounded p-1 m-[10px] border-2 border-slate-300 min-w-[355px] max-w-lg"
          onSubmit={(e) => {
            saveForm(e), toggleEdit();
          }}
        >
          <div className="inputs grid grid-cols-2 grid-flow-row">
            <div className="name flex flex-row flex-nowrap justify-center align-middle col-span-2">
              <div className="min-w-[25px] flex align-middle justify-center">
                <Image
                  src="./static/images/userName.svg"
                  width={15}
                  height={15}
                  alt="Name"
                />
              </div>
              <input
                className="generalName m-[5px] p-[3px] rounded border-2"
                type="name"
                value={tempName}
                onChange={(e) => {
                  changeName(e), tempCheck(e);
                }}
                id="nameInput"
                placeholder="Name"
                required
              />
            </div>
            <div className="flex flex-row flex-nowrap justify-center align-middle col-span-2 sm:col-span-1">
              <div className="flex justify-center align-middle">
                <Image
                  src="./static/images/phone.svg"
                  width={15}
                  height={15}
                  alt="Phone"
                />
              </div>
              <input
                className="generalName m-[5px] p-[3px] rounded border-2 max-w-[85%]"
                type="tel"
                value={tempPhone}
                onChange={(e) => {
                  changePhone(e), tempCheck(e);
                }}
                id="phoneInput"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="XXX-XXX-XXXX"
                required
              />
            </div>
            <div className="flex flex-row flex-nowrap justify-center align-middle col-span-2 sm:col-span-1">
              <div className="flex justify-center align-middle">
                <Image
                  src="./static/images/mail.svg"
                  width={15}
                  height={15}
                  alt="Email"
                />
              </div>
              <input
                className="generalName m-[5px] p-[3px] rounded border-2 max-w-[85%]"
                type="email"
                value={tempEmail}
                onChange={(e) => {
                  changeEmail(e), tempCheck(e);
                }}
                id="emailInput"
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                placeholder="example@example.com"
                required
              />
            </div>
          </div>
          <div className="saveCancel flex flex-row flex-nowrap justify-end">
            <button
              className="saveButton m-[5px] mr-[2.5px] transition-all hover:bg-green-200 hover:transition-all hover:scale-105 p-[3px] rounded border-[2px] border-green-500 text-green-600"
              type="submit"
            >
              Save
            </button>

            {nullCheck([tempName, tempPhone, tempEmail]) ? null : (
              <button
                className="saveButton m-[5px] ml-[2.5px] transition-all hover:bg-red-200 hover:transition-all hover:scale-105 p-[3px] rounded border-[2px] border-red-500 text-red-600"
                type="button"
                onClick={() => {
                  defaultState(), toggleEdit();
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default GeneralInfo;
