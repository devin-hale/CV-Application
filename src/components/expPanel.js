const { useState } = require("react");
import "../styles/generalInfo.css";

const ExperiencePanel = ({
  id,
  role,
  company,
  time,
  resp,
  submitFunc,
  deleteFunc,
}) => {
  const [roleState, setRole] = useState(role);
  const [tempRole, setTempRole] = useState(roleState);

  const [companyState, setCompany] = useState(company);
  const [tempCompany, setTempCompany] = useState(companyState);

  const [timeState, setTime] = useState(time);
  const [tempTime, setTempTime] = useState(timeState);

  const [respState, setResp] = useState(resp);
  const [tempResp, setTempResp] = useState(respState);

  const [isEditing, toggleEditing] = useState(false);

  const [isDeleting, toggleDeleting] = useState(false);

  const editToggle = () => toggleEditing(!isEditing);

  const deleteToggle = () => toggleDeleting(!isDeleting);

  const saveState = () => {
    setRole(tempRole);
    setCompany(tempCompany);
    setTime(tempTime);
    setResp(tempResp);
    editToggle();
  };

  const defaultState = () => {
    setTempRole(roleState);
    setTempCompany(companyState);
    setTempTime(timeState);
    setTempResp(respState);
    editToggle();
  };

  return isEditing ? (
    <form
      className="mt-[7.5px] p-1 relative rounded hover:shadow-[1px_1px_10px_rgba(0,0,0,0.4)] hover:bg-slate-200 hover:transition-all transition-all"
      key={id}
      onSubmit={(e) => {
        e.preventDefault();
        submitFunc(id, tempRole, tempCompany, tempTime, tempResp);
        editToggle();
      }}
    >
      <div>
        <input
          className="text-[18px] bg-slate-300 rounded p-[2.5px] m-[2.5px]"
          type="text"
          value={tempRole}
          onChange={(e) => {
            setTempRole(e.target.value);
          }}
          placeholder="Job Title"
          required
        ></input>
        <div className="text-[15px] p-[2.5px] mt-[5px]">
          <input
            className="bg-slate-300 rounded p-[2.5px] m-[5px] ml-[0px]"
            type="text"
            value={tempCompany}
            placeholder="Company Name"
            onChange={(e) => {
              setTempCompany(e.target.value);
            }}
            required
          ></input>
          <input
            className="bg-slate-300 rounded p-[2.5px] m-[5px] ml-[0px]"
            type="text"
            value={tempTime}
            onChange={(e) => {
              setTempTime(e.target.value);
            }}
            placeholder="Time Worked"
            required
          ></input>
        </div>
        <textarea
          placeholder="Responsibilities..."
          rows="3"
          onChange={(e) => {
            setTempResp(e.target.value);
          }}
          value={tempResp}
          required
          className="text-[12px] overflow-hidden w-[100%] bg-slate-300 rounded p-[2.5px] mt-[5px]"
        ></textarea>
      </div>
      <div className="saveCancel flex flex-row flex-nowrap justify-end">
        <button
          className="saveButton m-[5px] mr-[2.5px] transition-all hover:bg-green-200 hover:transition-all hover:scale-105 p-[3px] rounded border-[2px] border-green-500 text-green-600"
          type="submit"
        >
          Save
        </button>

        <button
          className="saveButton m-[5px] ml-[2.5px] transition-all hover:bg-red-200 hover:transition-all hover:scale-105 p-[3px] rounded border-[2px] border-red-500 text-red-600"
          type="button"
          onClick={defaultState}
        >
          Cancel
        </button>
      </div>
    </form>
  ) : (
    <div
      className="mt-[7.5px] mr-[5px] p-2 relative rounded hover:bg-slate-200 hover:transition-all transition-all"
      key={id}
    >
      <div>
        <p className="text-[18px] underline">{role}</p>
        <p className="text-[15px]">
          {company} ({time})
        </p>
        <p className="text-[12px]">{resp}</p>
        <button
          className="text-sm border-2 border-red-500 p-[2px] rounded cursor-pointer hover:bg-red-200 hover:transition-all transition-all absolute top-1 right-1"
          type="button"
          onClick={deleteToggle}
        >
          Delete
        </button>
        <button
          className="text-sm border-2 border-slate-500 p-[2px] rounded cursor-pointer hover:bg-slate-400 hover:transition-all transition-all absolute top-1 right-14"
          type="button"
          onClick={editToggle}
        >
          Edit
        </button>
      </div>
      {isDeleting ? (
        <div className="z-10 w-[100%] bg-[rgba(0,0,0,.4)] h-[100%] absolute top-0 right-0 rounded flex align-middle">
          <div className="bg-white w-40 m-auto rounded shadow-lg text-center p-1">
            <p className="text-[16px]">Delete Experience?</p>
            <div className="flex flex-row flex-nowrap justify-evenly align-middle">
              <button
                className="border-red-500 border-[2px] p-[2px] rounded transition-all hover:bg-red-200"
                type="button"
                onClick={() => {
                  deleteFunc(id);
                }}
              >
                Delete
              </button>
              <button
                className="border-slate-500 border-[2px] p-[2px] rounded transition-all hover:bg-slate-200"
                type="button"
                onClick={() => toggleDeleting()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ExperiencePanel;
