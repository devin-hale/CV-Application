const { useState } = require("react");

const ExperiencePanel = ({ id, role, company, time, resp, submitFunc }) => {
  const [roleState, setRole] = useState(role);
  const [tempRole, setTempRole] = useState(roleState);

  const [companyState, setCompany] = useState(company);
  const [tempCompany, setTempCompany] = useState(companyState);

  const [timeState, setTime] = useState(time);
  const [tempTime, setTempTime] = useState(timeState);

  const [respState, setResp] = useState(resp);
  const [tempResp, setTempResp] = useState(respState);

  const [isEditing, toggleEditing] = useState(false);

  const editToggle = () => toggleEditing(!isEditing);

  const saveState = () => {
    setRole(tempRole);
    setCompany(tempCompany);
    setTime(tempTime);
    setResp(tempResp);
    toggleEditing;
  };

  return isEditing ? (
    <div
      className="mt-[7.5px] p-1 relative rounded hover:shadow-[1px_1px_10px_rgba(0,0,0,0.4)] hover:bg-slate-200 hover:transition-all transition-all"
      key={id}
    >
      <div>
        <input
          className="text-[18px] bg-slate-300 rounded p-[2.5px] m-[2.5px]"
          type="text"
          value={tempRole}
          placeholder="Job Title"
        ></input>
        <div className="text-[15px] p-[2.5px] mt-[5px]">
          <input
            className="bg-slate-300 rounded p-[2.5px] m-[5px] ml-[0px]"
            type="text"
            value={tempCompany}
            placeholder="Company Name"
          ></input>
          <input
            className="bg-slate-300 rounded p-[2.5px] m-[5px] ml-[0px]"
            type="text"
            value={tempTime}
            placeholder="Time Worked"
          ></input>
        </div>
        <textarea
          placeholder="Responsibilities..."
          rows="3"
          value={tempResp}
          className="text-[12px] overflow-hidden w-[100%] bg-slate-300 rounded p-[2.5px] mt-[5px]"
        ></textarea>
      </div>
    </div>
  ) : (
    <div
      className="mt-[7.5px] p-1 relative rounded hover:bg-slate-200 hover:transition-all transition-all"
      key={id}
    >
      <div>
        <p className="text-[18px] underline">{roleState}</p>
        <p className="text-[15px]">
          {companyState} ({timeState})
        </p>
        <p className="text-[12px]">{respState}</p>
        <button
          className="text-sm border-2 border-slate-500 p-[2px] rounded cursor-pointer hover:bg-slate-400 hover:transition-all transition-all absolute top-1 right-1"
          type="button"
          onClick={editToggle}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ExperiencePanel;
