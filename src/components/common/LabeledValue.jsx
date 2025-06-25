import PropTypes from "prop-types";

const LabeledValue = ({ label, value, labelClass = "", valueClass = "" }) => (
    <div className="flex flex-col">
        <span className={`text-xs ${labelClass}`}>{label}</span>
        <span className={`text-base font-medium ${valueClass}`}>{value}</span>
    </div>
);

LabeledValue.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    labelClass: PropTypes.string,
    valueClass: PropTypes.string,
};

export default LabeledValue;
