import { WorkExperience } from "../data";
import Jobs from "./Jobs";

export default function Work() {
  return (
    <>
      <div className="flex flex-col text-start py-12 gap-5">
        <h1 className="text-white font-bold text-3xl">Experience</h1>

        {WorkExperience.map((job) => (
          <Jobs key={job.id} {...job} />
        ))}
      </div>
    </>
  );
}
