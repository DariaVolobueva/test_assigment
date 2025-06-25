import React from "react";

const QuickActionButton = ({ label }) => {
    return (
        <button className="w-full h-10 bg-custom-bright-blue text-xs py-3.5 px-14 flex items-center justify-center rounded-full">
            {label}
        </button>
    );
};

export default QuickActionButton;
