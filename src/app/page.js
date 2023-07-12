import PageHeader from "@/components/PageHeader.js";
import GeneralInfo from "@/components/generalInfo";
import ExperienceField from "@/components/experience";

const Home = () => {
  return (
    <div className="flex flex-col align-middle justify-center">
      <PageHeader />
      <GeneralInfo />
      <ExperienceField />
    </div>
  );
};

export default Home;
