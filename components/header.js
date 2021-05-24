import Image from "next/image";
import { useState } from "react";
import HeaderButton from "./headerButton";
import NavItems from "./navItems";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMenuClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="fixed h-auto top-0 z-10 w-full bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg py-2 shadow flex justify-center">
        <div className="flex flex-col max-w-screen-xl w-full">
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
    </>
  );
}
