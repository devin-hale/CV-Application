"use client";
import React, { useState, useEffect } from "react";
import "../styles/generalInfo.css";
import Image from "next/image";

const ExperienceField = () => {
  const [exp, setExp] = useState([
    {
      company: "Blizzard Entertainment",
      time: "May 2020 - Dec 2020",
      resp: "Did a bunch of really cool things. Did a bunch of really cool things. Did a bunch of really cool things. ",
    },
  ]);

  const ExperienceMap = () =>
    exp.map((job) => {
      return (
        <div key={job.company}>
          <p>Company: {job.company}</p>
          <p>{job.time}</p>
          <p>{job.resp}</p>
        </div>
      );
    });

  const addExperience = () => {
    setExp(exp.push());
  };

  return (
    <div>
      <div className="rounded p-1 m-[10px] border-2 border-slate-300 min-w-[355px] max-w-lg relative">
        <h1 className=" underline text-xl">Experience</h1>
        <ExperienceMap />
        <button type="button">Add</button>
      </div>
    </div>
  );
};

export default ExperienceField;
