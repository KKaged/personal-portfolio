export default function NavButton({
  children,
  onSelect,
  className,
  isSelected,
}) {
  return (
    <li>
      <a
        className={`flex items-center justify-center px-3 py-2 font-extralight rounded navButton hover:text-gray-300 ${
          isSelected ? "active" : ""
        }`}
        onClick={onSelect}
      >
        {children}
      </a>
    </li>
  );
}
