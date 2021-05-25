export default function Layout({ children, px = 0 }) {
  return (
    <div className={`px-${px} container mx-auto max-w-screen-md`}>
      {children}
    </div>
  );
}
