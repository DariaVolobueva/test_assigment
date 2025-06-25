import PropTypes from "prop-types";

const ProgressBar = ({ segments, children, className = "" }) => (
    <div className={`relative flex items-center ${className}`}>
        {segments.map((seg, i) => (
            <div
                key={i}
                className={seg.className}
                style={{ width: seg.width, ...seg.style }}
            ></div>
        ))}
        {children}
    </div>
);

ProgressBar.propTypes = {
    segments: PropTypes.arrayOf(
        PropTypes.shape({
            className: PropTypes.string,
            width: PropTypes.string,
            style: PropTypes.object,
        })
    ).isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
};

export default ProgressBar;
