const ActivityTooltip = ({ style, active, payload }) => {
    return (
        (active && payload && payload.length) &&
        <div className="tooltip-custom">
            {
                payload.map((e, i) => {
                    return (
                        <div key={i} className="tooltip" style={(style && style.hasOwnProperty("background")) ? { background: style.background } : ""} >
                            <p style={(style && style.hasOwnProperty("text")) ? { color: style.text } : ""}>
                                {`${e.value}${e.unit}`}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ActivityTooltip;