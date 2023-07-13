import "./Average.css";
import { useEffect, useRef, useState } from "react";
import { XAxis, ResponsiveContainer, Tooltip, AreaChart, Area } from "recharts";
import AverageTooltip from "../AverageTooltip/AverageTooltip";

const Average = ({ user }) => {
    const [userAverageData, setUserAverageData] = useState();
    const [areaHeight, setAreaHeight] = useState();
    const [areaContainerHeight, setAreaContainerHeight] = useState();
    const [area, setArea] = useState();
    const [tooltipWidth, setTooltipWidth] = useState(0);
    const areaRef = useRef();
    const areaContainer = useRef();
    const tooltipRef = useRef();

    useEffect(() => {
        if (user && user.hasOwnProperty("user_average_sessions")) {
            if (user.user_average_sessions.hasOwnProperty("sessions") && user.user_average_sessions.sessions.length > 0) {
                setUserAverageData([user.user_average_sessions.sessions[0],
                    ...user.user_average_sessions.sessions,
                    user.user_average_sessions.sessions[user.user_average_sessions.sessions.length - 1],
                ]);
            }
            else {
                setUserAverageData([]);
            }
        }
    }, [user]);

    // used to catch when element is in DOM
    const handleResize = () => {
        setAreaContainerHeight(areaContainer.current.current.clientHeight);
        setAreaHeight(areaContainer.current.current.querySelector(".recharts-layer.recharts-area").getBBox().height);
        setArea(areaRef.current.props);
    };

    return (
        <div className="profile-average">
            {
                (userAverageData && userAverageData.length > 0) ?
                <>
                    <div className="profile-average-header">
                        <p>Durée moyenne des sessions</p>
                    </div>
            
                    <div ref={tooltipRef} style={{ width: tooltipWidth }} className="tooltip-overlay"></div>

                    <div className="profile-average-chart">
                        <ResponsiveContainer onResize={handleResize} ref={areaContainer} width="100%" height="100%">
                            <AreaChart
                                width={298} height={50}
                                data={userAverageData} 
                                margin={{ top: 20, right: -20, left: -20, bottom: 60 }}
                                padding={{ top: 0, right: 0, left: 0, bottom: 0 }}
                                onMouseLeave={() => setTooltipWidth(0)} >

                                <Area 
                                    ref={areaRef}
                                    type="natural"
                                    dataKey="sessionLength"
                                    strokeWidth={2}
                                    stroke="#ffffff"
                                    fill="#ffffff"
                                    fillOpacity={0.1}
                                    baseValue={-12} />

                                <Tooltip
                                    cursor={false}
                                    content={<AverageTooltip
                                        setTooltipWidth={setTooltipWidth}
                                        areaContainer={areaContainer}
                                        tooltipRef={tooltipRef} />
                                    } />

                                {
                                    // xAxis underlay
                                    (areaHeight && areaContainerHeight) &&
                                    <svg>
                                        <rect
                                            fill="#ffffff" 
                                            fillOpacity={0.1}
                                            height={areaContainerHeight - areaHeight}
                                            width="100%"
                                            y={area.baseLine} 
                                            x="0" />
                                    </svg>
                                }

                                <XAxis
                                    wrapperStyle={{ zIndex: 10 }}
                                    contentS
                                    style={{ zIndex: 1000 }}
                                    height={20}
                                    allowDataOverflow={false}
                                    stroke="#ffffff"
                                    dy={40}
                                    interval={0}
                                    dataKey="day" axisLine={false} tickLine={false} />

                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </>
                : <div className="profile-average-empty">
                    Aucunes données enregistrée pour le moment.
                </div>
            }
        </div>
    );
}

export default Average;