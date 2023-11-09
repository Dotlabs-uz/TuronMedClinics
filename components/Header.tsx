import { BiCategory } from "react-icons/bi";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
   return (
      <header className="custom-contaner">
         <div className="header">
            <div className="">
               <p className="logo">Logo</p>
            </div>
            <nav>
               <ul>
                  <li>Home</li>
                  <li>Services</li>
                  <li>Blogs</li>
                  <li>About</li>
                  <li>Contact</li>
               </ul>
            </nav>
            <div className="header-btns">
               <button className="btn-md">
                  <BiCategory size={24} />
               </button>
               <button className="btn-pk">Book Now</button>
            </div>
         </div>
      </header>
   );
};

export default Header;
