import React from "react";

const NotDoneIcon = ({ color }) => {
    return (
        <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18 34.67C27.2 34.67 34.67 27.2 34.67 18C34.67 8.8 27.2 1.32996 18 1.32996C8.795 1.32996 1.33301 8.8 1.33301 18C1.33301 27.2 8.795 34.67 18 34.67Z"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="4 4"
            />
            <path
                d="M13 18L16.333 21.33L23 14.67"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export default NotDoneIcon;
