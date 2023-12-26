const navData = [
  {
    id: 1,
    name: "About",
    url: "#",
  },
  {
    id: 2,
    name: "Blog",
    url: "#",
  },
  {
    id: 3,
    name: "Portfolio",
    url: "#",
  },
  {
    id: 4,
    name: "Contact",
    url: "#",
  },
];

export default function Nav() {
  return (
    <nav className="flex justify-between px-64 py-7">
      <logo className="text-2xl font-bold animate-pulse">Daniel Leon</logo>
      <ul className="flex justify-between gap-2">
        {navData.map((navItem) => (
          <li>
            <a
              className="px-3 py-2 font-extralight rounded navButton hover:color: rgb(228 228 231);
              "
              href={navItem.url}
            >
              {navItem.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
