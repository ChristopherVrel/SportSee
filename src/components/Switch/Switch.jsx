import "./Switch.css";
import { useState } from "react";
import { FaCheck, FaTimes } from 'react-icons/fa';

const Switch = ({ title, defaultCheck, text, icon = true, onClick }) => {
    const [isChecked, setIsChecked] = useState();

    const handleSwitch = async(e) => {
        let currentTarget = e.currentTarget;

        await new Promise(resolve => {
            setTimeout(() => {
                setIsChecked(currentTarget.checked);
                onClick(currentTarget.checked);
                resolve();
            }, 350); 
        });
    }

    return <>
        <div>
            {
                title &&
                <div className="switch-title">{title}</div>
            }
            
            <label className="switch">
                <input onClick={handleSwitch} type="checkbox" defaultChecked={defaultCheck} />
                <span className="slider">
                    <div className="text-container">
                        <div>
                            <span>
                                {
                                    (text && text.hasOwnProperty("l")) ? text.l : "Active"
                                }
                            </span>
                        </div>
                        <div>
                            <span>
                                {
                                    (text && text.hasOwnProperty("r")) ? text.r : "Inactive"
                                }
                            </span>
                        </div>
                    </div>
                    {
                        (icon) &&
                        <div className="icon-container">
                            {
                                (isChecked) ? <FaCheck/> : <FaTimes/>
                            }
                        </div>
                    }
                </span>
            </label>
        </div>
    </>
}

export default Switch;