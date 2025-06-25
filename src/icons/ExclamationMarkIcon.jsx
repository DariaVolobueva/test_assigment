import React from "react";

const ExclamationMarkIcon = ({ color }) => {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11 21C16.52 21 21 16.523 21 11C21 5.477 16.52 1 11 1C5.48 1 1 5.477 1 11C1 16.523 5.48 21 11 21Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11 7V11M11 15H11.01"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ExclamationMarkIcon;
