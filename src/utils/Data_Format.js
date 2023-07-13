class UserDataFormat {
    constructor({ user_main_data, user_activity, user_average_sessions, user_performance }) {
        this.user_main_data = {
            ...user_main_data,
                userInfos: {
                    ...user_main_data.userInfos,
                        firstName: `${user_main_data.userInfos.firstName.charAt(0).toUpperCase()}${user_main_data.userInfos.firstName.slice(1).toLowerCase()}`,
                        lastName: `${user_main_data.userInfos.lastName.charAt(0).toUpperCase()}${user_main_data.userInfos.lastName.slice(1).toLowerCase()}`
                },
                keyData: {
                    ...user_main_data.keyData,
                        calorieCount: { 
                            text: "Calories",
                            value: `${user_main_data.keyData.calorieCount}kCal`,
                            icon: require("../assets/img/calories-icon.png")
                        },
                        proteinCount: {
                            text: "Proteines",
                            value: `${user_main_data.keyData.proteinCount}g`,
                            icon: require("../assets/img/protein-icon.png")
                        },
                        carbohydrateCount: {
                            text: "Glucides",
                            value: `${user_main_data.keyData.carbohydrateCount}g`,
                            icon: require("../assets/img/carbs-icon.png")
                        },
                        lipidCount: {
                            text: "Lipides",
                            value: `${user_main_data.keyData.lipidCount}g`,
                            icon: require("../assets/img/fat-icon.png")
                        }
                },
                todayScore: (user_main_data.hasOwnProperty("todayScore"))
                    ? user_main_data.todayScore.toFixed(2) 
                    : (user_main_data.hasOwnProperty("score")) && user_main_data.score.toFixed(2)
        };

        this.user_activity = {
            ...user_activity,
                sessions: user_activity.sessions.map((e) => { return {
                    ...e,
                    day: new Date(e.day).getDate()
                }})
        };
        
        this.user_average_sessions = {
            ...user_average_sessions,
                sessions: user_average_sessions.sessions.map((e) => { return {
                    ...e,
                    day: (e.day <= 6) ? this.getFormatedDay(e.day) : this.getFormatedDay(0)
                }})
        };

        this.user_performance = {
            ...user_performance,
                kind: this.getType(),
                data: user_performance?.data.map((e) => { return {
                    ...e,
                    kind: this.getType(e.kind),
                }}).reverse()
        };

        this.init();
    }

    init = () => {
        console.log("Formating User Data!");
        console.log(this.user_main_data);
    }

    getFormatedDay = (i) => {
        const dayFormat = ["D", "L", "M", "M", "J", "V", "S"];

        return dayFormat[i];
    }

    getType = (i) => {
        const kind = {
            1: "cardio",
            2: "energie",
            3: "endurance",
            4: "force",
            5: "vitesse",
            6: "intensité"  
        };

        return (i) 
            ? `${kind[i].charAt(0).toUpperCase()}${kind[i].slice(1).toLowerCase()}`
            : kind;
    }
}

export default UserDataFormat;