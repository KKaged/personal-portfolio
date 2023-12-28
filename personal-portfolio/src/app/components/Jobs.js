export default function Jobs({ logo, companyName, position, term }) {
  return (
    <div className="flex py-5 gap-5 bg-zinc-900 px-5 rounded-lg">
      <img className="rounded-full w-20 h-20" src={logo} alt={companyName} />
      <div className="flex flex-col justify-center bg-zinc-900">
        <h2 className="font-bold text-white bg-zinc-900">{companyName}</h2>
        <p className="font-light bg-zinc-900">{position}</p>
        <p className="font-light bg-zinc-900">{term}</p>
      </div>
    </div>
  );
}
