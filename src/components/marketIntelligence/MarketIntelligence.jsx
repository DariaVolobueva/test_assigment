import React from "react";
import MarketIntelligenceItem from "./MarketIntelligenceItem";
import marketIntelligenceData from "../../data/marketIntelligenceData";

const MarketIntelligence = () => {
    return (
        <div className="custom-xl1-2:col-start-4 custom-xl1-2:col-span-1 custom-xl1-2:row-start-2 custom-xl1-2:row-span-1 lg:col-start-3 lg:col-span-1 lg:row-start-2 lg:row-span-1 sm:col-start-1 sm:col-span-1 sm:row-start-4 sm:row-span-1 bg-dark-grey border border-custom-grey rounded-4xl pl-5 pr-7 pt-6 pb-9">
            <h2 className="text-xl">Market Intelligence</h2>
            {marketIntelligenceData.map(({ color, text }) => (
                <MarketIntelligenceItem key={text} color={color} text={text} />
            ))}
        </div>
    );
};

export default MarketIntelligence;
