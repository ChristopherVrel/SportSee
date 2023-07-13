import "./AverageTooltip.css";
import { useEffect } from "react";

const AverageTooltip = ({ active, payload, coordinate, areaContainer, setTooltipWidth }) => {
    useEffect(() => {
        if (active && payload && payload.length) {
            let overlayWidth = areaContainer.current.current.clientWidth - coordinate.x;

            setTooltipWidth(overlayWidth);
        }
    }, [active, payload, areaContainer, coordinate, setTooltipWidth]);

    return (
        (active && payload && payload.length) &&
        <div>
            <div className="tooltip">
                <p>{payload[0].value}min</p>
            </div>
        </div>
    );
}

export default AverageTooltip;