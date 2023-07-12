import PageHeader from "@/components/PageHeader.js";
import GeneralInfo from "@/components/generalInfo";
import ExperienceField from "@/components/experience";
import EducationField from "@/components/education";

const Home = () => {
  return (
    <div className="flex flex-col align-middle justify-center">
      <PageHeader />
      <GeneralInfo />
      <ExperienceField />
      <EducationField />
    </div>
  );
};

export default Home;
