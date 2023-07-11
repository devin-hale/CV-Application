const { useState } = require("react");

const ExperiencePanel = ({ id, role, company, time, resp, submitFunc }) => {
  const [roleState, setRole] = useState(role);

  const [companyState, setCompany] = useState(company);

  const [timeState, setTime] = useState(time);

  const [respState, setResp] = useState(resp);

  const [isEditing, toggleEditing] = useState(false);

  return (
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
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ExperiencePanel;
