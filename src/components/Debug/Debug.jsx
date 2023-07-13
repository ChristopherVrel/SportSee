import "./Debug.css";
import { useContext, useEffect, useState } from "react";
import Switch from "../Switch/Switch";
import { DataContext } from "../../App";

const Debug = () => {
    const [isDebugOpen, setIsDebugOpen] = useState(false);
    const useData = useContext(DataContext);
    const defaultState = { mockSwitch: false, userSwitch: true};

    const handleMockSwitch = (useMockedData) => {
        useData.setUseMock(useMockedData);
    }

    const handleUserSwitch = (userSwitch) => {
        useData.setUserID((userSwitch) ? 12 : 18);
    }

    useEffect(() => {
        handleMockSwitch(defaultState.mockSwitch);
        handleUserSwitch(defaultState.userSwitch);
    }, []);

    useEffect(() => {
        const handleOnKeyup = (e) => {
            if (e.keyCode === 113) {
                if (isDebugOpen === true) {
                    setIsDebugOpen(() => {
                        console.log(`[Debug]: OFF`);
                        return false;
                    });
                }
                else {
                    setIsDebugOpen(() => {
                        console.log(`[Debug]: ON`);
                        return true;
                    });
                }
            }
        }

        document.addEventListener("keyup", handleOnKeyup);

        return () => {
            document.removeEventListener("keyup", handleOnKeyup);
        }
    }, [isDebugOpen]);

    return <>
        {
            isDebugOpen && 
            <div className="debug-container">
                <div className="debug-title">Debug Mode: <span>ON</span></div>
                <Switch title={"Mock Data"} defaultCheck={defaultState.mockSwitch} onClick={handleMockSwitch}/>
                <Switch title={"User Switch"} defaultCheck={defaultState.userSwitch} onClick={handleUserSwitch} text={{l: 12, r: 18}} icon={false}/>
            </div>
        }
    </>
};

export default Debug;