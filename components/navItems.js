export default function NavItems({ isExpanded }) {
  return (
    <div
      className={`fixed top-20 w-full transform transition-transform duration-500 ease-in-out ${
        isExpanded ? "translate-y-0" : "-translate-y-full scale-y-0"
      } bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg shadow`}
    >
      <ul>
        <li>nav1</li>
        <li>nav2</li>
        <li>nav3</li>
        <li>nav4</li>
      </ul>
    </div>
  );
}
