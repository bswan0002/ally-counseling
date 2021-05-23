export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="py-10 mx-auto max-w-screen-md px-2 flex flex-row justify-between container">
        <p onClick={() => window.scrollTo(0, 0)} className="link-classic">
          To the Top
        </p>
        <p className="text-gray-500">© 2021 Ally Counseling LLC</p>
      </div>
    </footer>
  );
}
