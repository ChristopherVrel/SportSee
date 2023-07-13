import "./Profile.css";
import { useContext, useEffect, useState } from "react";
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from "../../data/data";
import { DataContext } from "../../App";
import LateralNav from "../../components/LateralNav/LateralNav";
import InfosPanel from "../../components/InfosPanel/InfosPanel";
import Activity from "../../components/Activity/Activity";
import Average from "../../components/Average/Average";
import Performance from "../../components/Performance/Performance";
import Score from "../../components/Score/Score";
import getAllUserData from "../../utils/getAllData";

const Profile = () => {
    const [userID, setUserID] = useState();
    const [useMock, setUseMock] = useState(true);
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const data = useContext(DataContext)

    useEffect(() => {
        console.log(data);
        if (data) {
            if (data.hasOwnProperty("user") && data.user && data.user.hasOwnProperty("userID")) {
                setUserID(data.user.userID);
            }

            if (data.hasOwnProperty("useMock")) {
                setUseMock(data.useMock);
            }
        }
    }, [data]);


    const handleRequestError = (error) => {
        console.log(error);

        if (!error.status) {
            setError({
                status: null,
                message: "Something went wrong"
            });
        }
        else {
            setError({
                status: error.response.status,
                message: `Error ${error.response.status}`
            });
        }
    }

    useEffect(() => {
        if (userID && useMock) {
            setUser({
                user_main_data: USER_MAIN_DATA.find(e => e.id === userID),
                user_activity: USER_ACTIVITY.find(e => e.userId === userID),
                user_average_sessions: USER_AVERAGE_SESSIONS.find(e => e.userId === userID),
                user_performance: USER_PERFORMANCE.find(e => e.userId === userID)
            });
        }
        else if (userID && !useMock) {
            (async() => {
                await getAllUserData(userID).then((res) => setUser(res)).catch(handleRequestError);
            })();
        }
    }, [userID, useMock]);

    useEffect(() => {
        console.log(user);
    }, [user]);

    return <>
        <div className="profile-container" style={(data && data.hasOwnProperty("navRef") && data.navRef.current) ? { maxHeight: `calc(100vh - ${data.navRef.current.offsetHeight}px)` } : {}}>
            <LateralNav/>

            <div className="profile">
                {
                    (!error) ?
                    <>
                        <div className="profile-header">
                            {
                                (user && user.hasOwnProperty("user_main_data") && user.user_main_data.hasOwnProperty("userInfos") && user.user_main_data.userInfos.hasOwnProperty("firstName")) && 
                                <h1>Bonjour <span className="red">{user.user_main_data.userInfos.firstName}</span></h1>
                            }
                            <p className="subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                        </div>
                        <div className="profile-content">
                            <div className="profile-left">
                                <Activity user={user} />
                                <div className="profile-bot">
                                    <Average user={user} />
                                    <Performance user={user} />
                                    <Score user={user} />
                                </div>
                            </div>
                            {
                                (user && user.hasOwnProperty("user_main_data") && user.user_main_data.hasOwnProperty("keyData")) && 
                                <InfosPanel data={user.user_main_data.keyData} />
                            }
                        </div>
                    </>
                    : <>
                        <h1>{error.message}</h1>
                        <p>Please try again later</p>
                    </>
                }
            </div>
        </div>
    </>
}

export default Profile;