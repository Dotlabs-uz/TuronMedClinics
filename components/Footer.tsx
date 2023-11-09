import { BsFacebook } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

interface FooterProps {}
const Footer: React.FC<FooterProps> = () => {
   return (
      <footer className="custom-contaner">
         <div className="footer">
            <div className="footer-top">
               <div>
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
            </div>
            <hr />
            <div className="footer-bottom">
               <div>
                  <p>
                     All rights reserved ® uifry.com | Terms and conditions
                     apply!
                  </p>
               </div>
               <div>
                  <ul className="social">
                     <li className="">
                        <BsFacebook className="icon" />
                     </li>
                     <li>
                        <FiInstagram className="icon" />
                     </li>
                     <li>
                        <AiFillYoutube className="icon" />
                     </li>
                     <li>
                        <BiLogoLinkedin className="icon" />
                     </li>
                     <li>
                        <AiOutlineTwitter className="icon" />
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
