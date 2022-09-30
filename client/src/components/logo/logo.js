/* eslint-disable arrow-body-style */
import mainImage from "../../images/PetBioNav.png"
import './Logo.css'
import { Link, BrowserRouter as Router } from "react-router-dom";
/**
 * Shows the logo for the application.
 */
const mainLogo = () => {
                

    return  <Link  to="/home"><img src={mainImage} alt="" className="mainLogo"/> </Link>
}

export default mainLogo;