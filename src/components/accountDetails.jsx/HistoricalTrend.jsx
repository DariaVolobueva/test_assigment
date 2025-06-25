import PropTypes from "prop-types";

const HistoricalTrend = ({
    title = "Historical trend",
    labels = [],
    data = [],
}) => {
    const min = Math.min(...data);
    const max = Math.max(...data);

    const padding = 2;
    const usableWidth = 100 - padding * 2;

    const points = data
        .map((val, i) => {
            const x = padding + (i / (labels.length - 1)) * usableWidth;
            const y = 30 - ((val - min) / (max - min)) * 30;
            return `${x},${y}`;
        })
        .join(" ");

    return (
        <div className="rounded-xl w-64 bg-custom-dark-desaturated-blue">
            <h2 className="text-xl">{title}</h2>
            <div className="mt-2">
                <svg viewBox="40 0 104 40" className="w-full h-12">
                    <polyline
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        points={points}
                        className="transition-all duration-300"
                    />
                </svg>
            </div>
            <div className="flex justify-between text-xs text-custom-dark-grayish-blue mt-1">
                {labels.map((label) => (
                    <span key={label}>{label}</span>
                ))}
            </div>
        </div>
    );
};

HistoricalTrend.propTypes = {
    title: PropTypes.string,
    labels: PropTypes.arrayOf(PropTypes.string),
    data: PropTypes.arrayOf(PropTypes.number),
};

export default HistoricalTrend;
