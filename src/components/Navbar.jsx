import { utility } from "../utilities/utility";

const Navbar = () => {
  return (
    <nav className="border-b flex justify-between items-center px-10 py-6 sticky top-0 w-full z-50 bg-white bg-opacity-60">
      <div className="flex-1 flex justify-center space-x-10">
        <div className={utility}>
          <a href=""></a>Anubhav
        </div>
        <div className={utility}>
          <a href=""></a>Learning
        </div>
        <div className={utility}>
          <a
            href="
          "
          ></a>
          Projects
        </div>
        <div className="text-xl font-semibold text-blue-500">
          <a
            href="
          "
          ></a>
          About
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
