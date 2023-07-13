import "./Score.css";
import { useEffect, useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Label } from "recharts";
import ScoreLabel from "../ScoreLabel/ScoreLabel";

const Score = ({ user }) => {
    const [score, setScore] = useState();

    useEffect(() => {
        if (user && user.hasOwnProperty("user_main_data")) {
            if (user.user_main_data.hasOwnProperty("todayScore")) {
                setScore({
                    value: user.user_main_data.todayScore * 100
                });
            }
            else if (user.user_main_data.hasOwnProperty("score")) {
                setScore({
                    value: user.user_main_data.score * 100
                });
            }
            else {
                setScore(null);
            }
        }
        else {
            setScore(null);
        }
    }, [user]);

    return <>
        <div className="profile-score">
            <div className="profile-score-header">
                <p>Score</p>
            </div>

            <div className="profile-score-chart">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Pie 
                            label={false} 
                            legendType={"none"} 
                            data={(score) ? [score] : [{value: 50}]}
                            dataKey={"value"}
                            cx="50%"
                            cy="50%"
                            startAngle={90}
                            endAngle={(score) ? 90 + ((360 * parseInt(score.value)) / 100) : 90}
                            innerRadius={80} 
                            outerRadius={90}
                            cornerRadius={7}
                            paddingAngle={0}
                            fill="#FF0000">
                            
                            <Label
                                position="center"
                                content={<ScoreLabel text={[
                                    { 
                                        value: `${(score) ? score.value : 0}%`,
                                        fontSize: 26,
                                        fontWeight: "700",
                                        fontFamily: "Roboto",
                                        color: "#282D30",
                                        margin: 0
                                    },
                                    { 
                                        value: "de votre",
                                        fontSize: 16,
                                        fontWeight: "500",
                                        fontFamily: "Roboto",
                                        color: "#74798C",
                                        margin: 10
                                    },
                                    { 
                                        value: "objectif",
                                        fontSize: 16,
                                        fontWeight: "500",
                                        fontFamily: "Roboto",
                                        color: "#74798C",
                                        margin: 15
                                    }
                                ]} />}>
                            </Label>
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    </>
}

export default Score;