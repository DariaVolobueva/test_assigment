import PropTypes from "prop-types";

const SlideButton = ({ onClick, children }) => (
    <button
        onClick={onClick}
        className="z-10 p-2 rounded-[50%] h-12 w-12 bg-custom-black border border-custom-grey flex items-center justify-center cursor-pointer"
        type="button"
        aria-label="Slide navigation button"
    >
        {children}
    </button>
);

SlideButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default SlideButton;
