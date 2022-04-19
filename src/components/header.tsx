import react from "react";
import { FC } from "react";
import './header.css';
import logoTriangle from '../images/LogoTringle.svg';

const Header: FC = () => {
    return (
        <div className="header">   
            <img src={logoTriangle} className="image" alt="logo"/>

            <header>Welcome to the website!</header>
        </div>
    )
}

export default Header;