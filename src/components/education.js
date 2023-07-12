"use client";
import React, { useState, useEffect } from "react";
import "../styles/generalInfo.css";
import Image from "next/image";
import EducationPanel from "./edPanel";

const EducationField = () => {
  const [ed, setEd] = useState([
    {
      id: 1,
      major: "B.S. in Computer Science",
      school: "Billy Bob University",
      time: "May 2020 - Dec 2020",
      info: "Did a bunch of really cool things. Did a bunch of really cool things. Did a bunch of really cool things. ",
    },
  ]);

  const handleUpdate = (id, tempMajor, tempSchool, tempTime, tempInfo) => {
    const updateIndex = ed.findIndex((job) => job.id === id);
    if (updateIndex > -1) {
      const newEd = [...ed];
      newEd[updateIndex] = {
        id: id,
        major: tempMajor,
        school: tempSchool,
        time: tempTime,
        info: tempInfo,
      };
      setEd(newEd);
    }
  };

  const handleDelete = (id) => {
    const delIndex = ed.findIndex((job) => job.id === id);
    if (delIndex > -1) {
      const newEd = [...ed];
      newEd.splice(delIndex);
      setEd(newEd);
    }
  };

  useEffect(() => {
    console.log(ed);
  });

  const handleAdd = () => {
    const newEd = [...ed];
    const newID = newEd[newEd.length - 1].id + 1;
    newEd.push({
      id: newID,
      major: "New Education",
      school: "School Name",
      time: "Time Frame",
      info: "Honors/Achievements",
    });

    setEd(newEd);
  };

  return (
    <div className=" self-center">
      <div className="rounded p-1 m-[10px] border-2 border-slate-300 min-w-[355px] max-w-lg relative">
        <h1 className=" underline text-xl">Education</h1>
        {ed.map((job) => {
          return (
            <EducationPanel
              key={job.id}
              id={job.id}
              major={job.major}
              school={job.school}
              time={job.time}
              info={job.info}
              submitFunc={handleUpdate}
              deleteFunc={handleDelete}
            />
          );
        })}
        <button
          className="p-1 m-[5px] border-green-500 border-[2px] rounded hover:bg-green-200 hover:transition-all transition-all"
          type="button"
          onClick={handleAdd}
        >
          Add+
        </button>
      </div>
    </div>
  );
};

export default EducationField;
