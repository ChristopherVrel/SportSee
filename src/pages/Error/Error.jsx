import { useEffect } from "react";

const Error = () => {
    useEffect(() => {
        console.log(404);
    }, [])
    return <>
        <div style={{ display: "flex", flexGrow: 1, alignItems: "center", justifyContent: "center"}}>
            <h1>404</h1>
        </div>
    </>
}

export default Error;