import Image from "next/image";

export default function Header() {
  return (
    <div className="fixed top-0 z-10 w-full bg-white py-2 shadow flex justify-center">
      <div className="flex flex-col max-w-screen-xl w-full">
        <div className="h-16 w-16 ml-3">
          <Image
            src="/ally-logo.png"
            alt="Ally Counseling logo"
            height={100}
            width={100}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
