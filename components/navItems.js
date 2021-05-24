export default function NavItems({ isExpanded }) {
  const links = [
    { "text": "Services", "route": "" },
    { "text": "About Us", "route": "" },
    { "text": "Office Locations", "route": "" },
    { "text": "Contact Us", "route": "" },
  ];
  return (
    <div
      className={`fixed top-20 right-1/2 translate-x-1/2 w-full max-w-screen-md transform transition-transform duration-500 ease-in-out ${
        isExpanded ? "translate-y-0 shadow" : "-translate-y-full"
      } bg-gray-100`}
    >
      <div>
        {links.map((link) => {
          const defaultClass =
            "px-6 py-4 flex justify-between font-sans tracking-wide border-t border-gray-300 font-bold";
          return (
            <div className={defaultClass}>
              <div>{link.text}</div>
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
