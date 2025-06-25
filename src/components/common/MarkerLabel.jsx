import PropTypes from "prop-types";

const MarkerLabel = ({ label, icon, className = "", style = {} }) => (
    <div
        className={`absolute flex flex-col-reverse items-center ${className}`}
        style={style}
    >
        <p className="uppercase text-[9px] text-custom-ceramic-green">
            {label}
        </p>
        {icon && <div className="rotate-180">{icon}</div>}
    </div>
);

MarkerLabel.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default MarkerLabel;
