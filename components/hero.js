import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="absolute hero top-20 w-full">
        <Image
          src="/happy-lake-trees.jpg"
          alt="Happy woman by lake"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <h1 className="absolute text-center top-36 left-3 sm:left-6 sm:top-28 md:top-96 md:right-1/2 md:transform md:translate-x-1/2 text-white">
        Find Your Ally
      </h1>
      <button className="hero-button text-white bg-transparent hover:bg-blue-400 hover:bg-opacity-50 transition duration-150 ease-in-out border-white border-2 rounded-lg py-2 px-4">
        Get Started
      </button>
    </>
  );
}
