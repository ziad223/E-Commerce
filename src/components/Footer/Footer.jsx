import './Footer.css';
import {
  BsFacebook,
  BsInstagram,
  BsWhatsapp,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import {MdOutlineLocalShipping} from 'react-icons/md';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="logo">
        <h2>Ziad Shop</h2>
       <MdOutlineLocalShipping className='footer-icon'/>
        </div>
        <ul>
          <li>
            <a href="https://www.facebook.com/ana.mai.14203544" target="blank">
              <BsFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="tel:01018227412" target="blank">
              <BsWhatsapp />
            </a>
          </li>
          <li>
            <a href="https://github.com/ziad223?tab=repositories">
              <BsGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ziad-abdalla-0a3144228/"
              target="blank"
            >
              <BsLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <p>Created in 2023 By <span>Ziad Abdalla</span> , All Right Reserved.</p>
    </div>
  );
};

export default Footer;
