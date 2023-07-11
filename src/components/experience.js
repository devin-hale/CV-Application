"use client";
import React, { useState, useEffect } from "react";
import "../styles/generalInfo.css";
import Image from "next/image";
import ExperiencePanel from "./expPanel";

const ExperienceField = () => {
  const [exp, setExp] = useState([
    {
      id: 1,
      role: "Software Engineer",
      company: "Blizzard Entertainment",
      time: "May 2020 - Dec 2020",
      resp: "Did a bunch of really cool things. Did a bunch of really cool things. Did a bunch of really cool things. ",
    },
  ]);

  const handleUpdate = (e) => {};

  return (
    <div>
      <div className="rounded p-1 m-[10px] border-2 border-slate-300 min-w-[355px] max-w-lg relative">
        <h1 className=" underline text-xl">Experience</h1>
        {exp.map((job) => {
          return (
            <ExperiencePanel
              key={job.id}
              id={job.id}
              role={job.role}
              company={job.company}
              time={job.time}
              resp={job.resp}
              submitFunc={handleUpdate}
            />
          );
        })}
        <button type="button">Add +</button>
      </div>
    </div>
  );
};

export default ExperienceField;
