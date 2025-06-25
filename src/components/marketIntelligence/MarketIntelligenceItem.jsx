import PropTypes from "prop-types";

const MarketIntelligenceItem = ({ color, text }) => {
    return (
        <div className="flex gap-2 flex-row border-b border-custom-aeronautic py-2.5">
            <div
                className={`w-4 h-4 aspect-square rounded-full ${color}`}
            ></div>
            <p className="text-xs text-wrap">{text}</p>
        </div>
    );
};

MarketIntelligenceItem.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default MarketIntelligenceItem;
