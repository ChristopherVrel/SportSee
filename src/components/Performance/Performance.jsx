import "./Performance.css";
import { useEffect, useRef, useState } from "react";
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

const Performance = ({ user }) => {
    const [radarKey, setRadarKey] = useState(0);
    const [performanceData, setPerformanceData] = useState();
    const radarWrapperRef = useRef();

    // this is use to fix the svg viewbox
    useEffect(() => {
        if (radarWrapperRef.current) {
            radarWrapperRef.current.container.children[0].setAttribute("viewBox", "-50 0 348 263");
        }
    }, [radarKey]);

    // change the key to force the component to rerender
    useEffect(() => {
        setRadarKey(e => e + 1);
    }, [performanceData]);

    useEffect(() => {
        if (user && user.hasOwnProperty("user_performance")) {
            setPerformanceData(user.user_performance);
        } 
    }, [user]);

    return (
        <div className="profile-performance">
            {
                (performanceData && performanceData.data) ?
                <div className="profile-performance-chart">
                    <ResponsiveContainer
                        width="100%" height="100%">
                        <RadarChart key={radarKey} ref={radarWrapperRef} cx="50%" cy="50%" outerRadius="80%" data={performanceData.data}>
                            <PolarGrid 
                                strokeWidth={2}
                                stroke="#FFFFFF"
                                polarRadius={[10, 22, 45, 70, 100]}
                                className="hidden-line" />
                            <PolarAngleAxis 
                                axisLine={false}
                                tickLine={false}
                                tickSize={25}
                                dataKey="kind"
                                stroke="#FFFFFF" />
                            <Radar name="Performance" dataKey="value" stroke="#F00" fill="#F00" fillOpacity={0.7} />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
                : <div className="profile-performance-empty">
                    Aucunes données enregistrée pour le moment.
                </div>
            }
        </div>
    )
}

export default Performance;