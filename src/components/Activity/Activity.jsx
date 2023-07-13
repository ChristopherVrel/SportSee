import "./Activity.css";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import ActivityTooltip from "../ActivityTooltip/ActivityTooltip";

const Activity = ({ user }) => {
    const [userActivityData, setUserActivityData] = useState();

    useEffect(() => {
        if (user && user.hasOwnProperty("user_activity")) {
            setUserActivityData(user.user_activity);
        }
    }, [user]);

    return (
        <div className="profile-activity">
            {
                (userActivityData && userActivityData.hasOwnProperty("sessions") && userActivityData.sessions.length > 0) ?
                <>
                    <div className="profile-activity-header">
                        <p className="profile-activity-title">Activité quotidienne</p>
                        <div className="profile-activity-legend">
                            <p><span className="circle black"></span> Poids (kg)</p>
                            <p><span className="circle red"></span> Calories brûlées (kCal)</p>
                        </div>
                    </div>
                    <ResponsiveContainer 
                        width="100%" height="100%" >
                        <BarChart
                            width={500}
                            height={200}
                            data={userActivityData.sessions}
                            barGap={8}
                            margin={{
                                top: 40,
                                right: 0,
                                left: 0,
                                bottom: 40,
                            }}>
                            <CartesianGrid 
                                vertical={false}
                                strokeDasharray="3 3" />

                            <XAxis 
                                dataKey="day" 
                                axisLine={false}
                                tickLine={false}
                                tickMargin={20}
                                padding={{ bottom: 20}}
                                margin={{
                                    top: 20,
                                    right: 0,
                                    left: 0,
                                    bottom: 20,
                                }} />

                            <YAxis
                                yAxisId={"calories"}
                                hide={true}
                                type="number" 
                                allowDecimals={false}
                                dataKey="calories"
                                tickCount={4}
                                orientation={"right"}
                                axisLine={false}
                                tickLine={false}
                                domain={[dataMin => ((dataMin === 0) ? 0 : dataMin - 150), "dataMax + 250"]}
                                allowDataOverflow={true} />
                                
                            <Tooltip
                                content={<ActivityTooltip 
                                    style={{
                                        background: "#E60000",
                                        text: "#FFFFFF"
                                    }} />
                                } />

                            <YAxis
                                yAxisId={"kilogram"}
                                type="number" 
                                allowDecimals={false}
                                dataKey="kilogram"
                                tickMargin={20}
                                interval={0}
                                tickCount={3}
                                orientation={"right"}
                                axisLine={false}
                                tickLine={false}
                                domain={["dataMin - 2","dataMax + 1"]}
                                allowDataOverflow={true} />

                            <Bar 
                                unit={"kg"}
                                yAxisId={"kilogram"}
                                barSize={7}
                                radius={7}
                                dataKey="kilogram"
                                fill="#282D30" />

                            <Bar
                                unit={"Kcal"}
                                yAxisId={"calories"}
                                barSize={7}
                                radius={7}
                                dataKey="calories"
                                fill="#E60000" />

                        </BarChart>
                    </ResponsiveContainer>
                </>
                : <div className="profile-activity-empty">
                    Aucunes données enregistrée pour le moment.
                </div>
            }

        </div>
    );
}

export default Activity;