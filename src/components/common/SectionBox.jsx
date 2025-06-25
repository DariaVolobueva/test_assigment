import PropTypes from "prop-types";

const SectionBox = ({ children, className = "" }) => (
    <div
        className={`rounded-3xl bg-dark-grey border border-custom-grey ${className}`}
    >
        {children}
    </div>
);

SectionBox.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default SectionBox;
