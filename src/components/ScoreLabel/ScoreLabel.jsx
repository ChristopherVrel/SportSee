import "./ScoreLabel.css";

function ScoreLabel({ viewBox, text }) {
    return <>
        {
            text.map((e, i) => {
                return (
                    <text
                        key={i}
                        className="recharts-text recharts-label"
                        x={viewBox.cx} fill={e.color} textAnchor="middle"
                        y={(text.length > 1) ? (viewBox.cy - 10 + e.margin) + (e.fontSize * i) : viewBox.cy} >

                        <tspan margin={{ bottom: 10 }} fontSize={e.fontSize} fontWeight={e.fontWeight} fontFamily={e.fontFamily}>
                            {e.value}
                        </tspan>
                    </text>
                )
            })
        }
    </>
}

export default ScoreLabel;