import React from "react";

const DashedLineIcon = ({ color }) => {
    return (
        <svg
            width="109"
            height="1"
            viewBox="0 0 109 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0.5 0.5H108.5"
                stroke={color}
                strokeLinecap="round"
                strokeDasharray="4 4"
            />
        </svg>
    );
};

export default DashedLineIcon;
