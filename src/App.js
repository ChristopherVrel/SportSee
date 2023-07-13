import "./App.css";
import Router from "./Router";
import Debug from "./components/Debug/Debug";
import Nav from "./components/Nav/Nav";
import { createContext, useEffect, useMemo, useRef, useState } from "react";

const DataContext = createContext({});

const users = [ { userID: 12 }, { userID: 18 } ];

function App() {
    const [user, setUser] = useState();
    const [useMock, setUseMock] = useState(false);
    const [userID, setUserID] = useState();
    const navRef = useRef();

    useEffect(() => {
        if (navRef?.current) {
            console.log(navRef);
        }
        
    }, [navRef])

    const global = useMemo(() => {
        return {
            navRef, user, useMock, setUseMock, setUserID
        };
    }, [navRef, user, useMock, setUseMock, setUserID]);

    useEffect(() => {
        setUser({...users.find(e => e.userID = userID)});
    }, [userID]);

    return (
        <div className="App">
            <DataContext.Provider value={global}>
                <Debug />
                <Nav navRef={navRef} />
                <Router />
            </DataContext.Provider>
        </div>
    );
}

export { App, DataContext };