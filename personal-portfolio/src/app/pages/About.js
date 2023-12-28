import Work from "../components/Work";

export default function About() {
  return (
    <>
      <div className="flex flex-col text-start py-12">
        <h1 className="text-white font-bold text-3xl">Daniel Higareda Leon</h1>
        <p className="font-light">I enjoy learning and self-improvement!</p>
        <div className="flex py-5 gap-10">
          <img
            className="rounded-full w-24 h-24"
            src="https://avatars.githubusercontent.com/u/107798177?v=4"
            alt="Daniel Higareda Leon"
          />
          <p className="font-light">
            I'm <strong className="font-bold">Daniel Higareda Leon</strong>, I
            am currently studying and focusing on becoming a Front-End Developer
            with goals of eventually becoming a Full-Stack Developer. Highly
            motivated and tech-savvy individual based in Fukuoka, Japan, with a
            passion for technology and a deep desire for learning and personal
            growth.
          </p>
        </div>
        <Work />
      </div>
    </>
  );
}
