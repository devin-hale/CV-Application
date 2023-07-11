import "../styles/PageHeader.css";

const PageHeader = () => {
    return (
        <div className="pageHeader bg-slate-600 p-[5px] text-white flex flex-row justify-center align-middle shadow-md">
            <p className="text-[25px] ml-[10px] mr-[10px]">Curriculum Vitae</p>
            <a
                className=" cursor-pointer"
                href="https://github.com/devin-hale"
                target="_blank">
                <img
                    className="w-[35px] fill-white"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="Logo"
                />
            </a>
        </div>
    );
};

export default PageHeader;
