import "./Nav.css";
import { Link } from "react-router-dom";
import brandImage from "../../assets/img/brand_logo.svg";

const Nav = ({ navRef }) => {
    const navLink = [
        { path: "/", text: "Accueil" },
        { path: "/profile", text: "Profil" },
        { path: "/settings", text: "Réglage" },
        { path: "/community", text: "Communauté" }
    ];

    return <>
        <div ref={navRef} className="nav">
            <div className="nav-brand-container">
                <Link to={`./`}>
                    <img src={brandImage} alt="brand" />
                </Link>
            </div>
            <div className="nav-link-container">
                {
                    navLink?.map((e, i) => {
                        return (
                            <Link
                                className={"nav-link"} 
                                to={`.${e.path}`}
                                key={i}>
                                {e.text}
                            </Link>
                        )
                    })
                }
            </div>
        </div>  
    </>
}
  
export default Nav;