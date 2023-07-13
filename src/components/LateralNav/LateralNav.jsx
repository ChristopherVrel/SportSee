import "./LateralNav.css";
import { Link } from "react-router-dom";

const LateralNav = () => {
    const navLink = [
        { path:"/yoga", url: require("../../assets/img/activity_1.svg").default, text: "Accueil" },
        { path:"/swimming", url: require("../../assets/img/activity_2.svg").default, text: "Profil" },
        { path:"/cycling", url: require("../../assets/img/activity_3.svg").default, text: "Réglage" },
        { path:"/bodybuilding", url: require("../../assets/img/activity_4.svg").default, text: "Communauté" }
    ];

    return <>
        <div className="lateral-nav">
            <div className="lateral-link-container">
                {
                    navLink?.map((e, i) => {
                        return (
                            <Link
                                className={"lateral-link"} 
                                to={`${window.location.origin}/profile${e.path}`}
                                key={i}>
                                <img src={e.url} alt={e.text.toLocaleLowerCase()} />
                            </Link>
                        )
                    })
                }
            </div>
            <div className="lateral-copyright">Copiryght, SportSee 2020</div>
        </div>  
    </>
}
  
export default LateralNav;