import "./InfosPanel.css";
import { MdBrokenImage } from "react-icons/md";

const InfosPanel = ({ data }) => {
    return <>
        <div className="infos-panel">
            {
                (data) &&
                Object.keys(data).map((k, i) => {
                    return (
                        <div className="infos-block" key={i}>
                            {
                                (data[k].hasOwnProperty("icon") && data[k].icon) ? 
                                <img className="infos-icon" src={data[k].icon} alt={(data[k].hasOwnProperty("text") && data[k].text) ? data[k].text.toLowerCase() : "infos-icon"}></img>
                                : <div className="infos-icon-missing">
                                    <MdBrokenImage />
                                </div>
                            }
            
                            <div>
                                {
                                    (data[k].hasOwnProperty("value") && data[k].value) ?
                                    <div className="infos">{data[k].value}</div>
                                    : <div className="infos">{data[k]}</div>
                                }
                                {
                                    (data[k].hasOwnProperty("text") && data[k].text) ?
                                    <div className="infos-text">{data[k].text}</div>
                                    : <div className="infos-text">{k}</div>
                                }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    </>
}

export default InfosPanel;