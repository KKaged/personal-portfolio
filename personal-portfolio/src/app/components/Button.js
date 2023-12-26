export default function NavButton({ children, onSelect, className }) {
  return (
    <li>
      <a
        className={`px-3 py-2 font-extralight rounded navButton hover:text-gray-300 ${className}`}
        onClick={onSelect}
      >
        {children}
      </a>
    </li>
  );
}
