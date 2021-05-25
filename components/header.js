// Next/React
import Image from "next/image";
import { useState, useRef } from "react";
// Components
import HeaderButton from "./headerButton";
import NavItems from "./navItems";
// Hooks
import useOnClickOutside from "../hooks/useOnClickOutside";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  const ref = useRef();

  useOnClickOutside(ref, () => setIsExpanded(false));

  return (
    <div ref={ref} className="z-10">
      <div className="fixed h-auto top-0 z-20 w-full bg-white backdrop-filter backdrop-blur-lg py-2 shadow flex justify-center">
        <div className="flex flex-col max-w-screen-md w-full">
          <div className="flex flex-row justify-between">
            <div className="h-16 w-16 ml-3">
              <Image
                src="/ally-logo.png"
                alt="Ally Counseling logo"
                height={100}
                width={100}
                quality={100}
              />
            </div>
            <HeaderButton
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
            />
          </div>
        </div>
      </div>
      <NavItems isExpanded={isExpanded} />
    </div>
  );
}
