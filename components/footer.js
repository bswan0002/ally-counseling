export default function Footer() {
  return (
    <footer className="bg-gray-200 mt-10">
      <div className="py-10 mx-auto max-w-screen-md px-2 flex flex-row justify-between container">
        <p className="text-gray-700">© 2021 Ally Counseling LLC</p>
        <p onClick={() => window.scrollTo(0, 0)} className="link-classic">
          To the Top
        </p>
      </div>
    </footer>
  );
}
