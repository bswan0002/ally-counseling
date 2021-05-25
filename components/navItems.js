import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      } bg-white`}
    >
      <div>
        {links.map((link) => {
          const defaultClass =
            "px-7 py-4 flex cursor-pointer justify-between items-center font-sans tracking-wide border-t border-gray-300 font-bold";
          return (
            <div className={defaultClass} key={link.text}>
              <div>{link.text}</div>
              <FontAwesomeIcon className="h-4" icon={faChevronRight} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
