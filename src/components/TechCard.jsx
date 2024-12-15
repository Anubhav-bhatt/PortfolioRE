import frontend from "../assets/photos/frontend.png";
import backend from "../assets/photos/backend.png";
import devops from "../assets/photos/devops.png";
import machineLearning from "../assets/photos/machineLearning.png";
import Techstack from "./Techstack";



const data = [
  {
    id: "1",
    Icon: frontend,
    TechName: "Frontend",
    Description: "Building beautiful, responsive user interfaces.",
  },
  {
    id: "2",
    Icon: backend,
    TechName: "Backend",
    Description: "Creating robust server-side applications and APIs.",
  },
  {
    id: "3",
    Icon: devops,
    TechName: "DevOps",
    Description: "Streamlining deployments and managing infrastructure.",
  },
  {
    id: "4",
    Icon: machineLearning,
    TechName: "Machine Learning",
    Description: "Exploring data and building intelligent systems.",
  },
];

const TechCard = () => {
  return (
    <div className="min-h-screen bg-slate-100 py-10">

    <div className=" mx-auto my-auto max-w-6xl">

      <div className="text-left mb-8 py-10">
        <h1 className="text-4xl font-bold text-gray-800">Tech Stack</h1>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {data.map(({ id, Icon, TechName, Description }) => (
          <div
            key={id}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4 flex flex-col items-center mb-6 py-6"
          >

            <h1 className="font-bold text-2xl text-center text-gray-800 py-6">{TechName}</h1>


            <div className="flex justify-center my-4">
              <img className="h-24 w-24" src={Icon} alt={TechName} />
            </div>


            <h2 className="text-gray-600 text-center py-4">{Description}</h2>
          </div>
        ))}


      </div>

      <Techstack/>
    </div>
    </div>
  );
};

export default TechCard;
