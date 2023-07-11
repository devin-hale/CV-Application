"use client";
import React, { useState, useEffect } from "react";

const GeneralInfo = () => {
    const [name, setName] = useState("");
    const [tempName, setTempName] = useState(name);
    const [changed, setChanged] = useState(false);

    // Compares temporary value to default value.
    const tempCheck = e => {
        e.target.value === name ? setChanged(false) : setChanged(true);
    };

    // Changes name based on input value
    const changeName = e => {
        setTempName(e.target.value);
    };

    const saveState = () => {
        setName(tempName);
        setChanged(false);
    };

    const defaultState = () => {
        setTempName(name);
        setChanged(false);
    };

    useEffect(() => {
        console.log(`Name: ${name}`);
        console.log(`tempName: ${tempName}`);
        console.log(`changed: ${changed}`);
    });

    return (
        <div>
            <input
                className="nameInput m-10 border-2 rounded p-[2px]"
                type="text"
                value={tempName}
                onChange={e => {
                    changeName(e), tempCheck(e);
                }}
                id="nameInput"
                placeholder="Name"
            />
            {/*If changed, display this */}
            <div className="ml-10">
                {changed ? (
                    <button
                        className="saveButton transition-all hover:bg-green-200 hover:transition-all hover:scale-105 p-[3px] rounded border-[2px] border-green-500 text-green-600"
                        type="button"
                        onClick={saveState}>
                        Save
                    </button>
                ) : null}
                {changed ? (
                    <button
                        className="saveButton transition-all hover:bg-red-200 hover:transition-all hover:scale-105 p-[3px] rounded border-[2px] border-red-500 text-red-600"
                        type="button"
                        onClick={defaultState}>
                        Cancel
                    </button>
                ) : null}
            </div>
        </div>
    );
};

export default GeneralInfo;
