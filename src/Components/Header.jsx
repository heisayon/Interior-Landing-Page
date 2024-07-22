import Hamburger from "../assets/Hamburger";
function Header() {
  return (
    <nav className="flex justify-between items-center">
      <div className="font-CrimsonPro text-lg border-2 border-[#fff] border-solid font-extralight">
        <h1 className="uppercase p-2">This Interior</h1>
      </div>

      <ul className="flex items-center list-none font-Montserrat justify-center max-lg:hidden">
        <li className="ml-[5em] font-[700px] text-[18px]">
          <a href="#">Home</a>
        </li>
        <li className="ml-[5em] font-[700px] text-[18px]">
          <a href="#">Collection</a>
        </li>
        <li className="ml-[5em] font-[700px] text-[18px]">
          <a href="#">About</a>
        </li>
        <li className="ml-[5em] font-[700px] text-[18px]">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="lg:hidden">
        <Hamburger />
      </div>
    </nav>
  );
}

export default Header;
