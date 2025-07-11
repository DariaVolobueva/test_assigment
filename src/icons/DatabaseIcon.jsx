import React from "react";

const DatabaseIcon = ({ color }) => {
    return (
        <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10 7C14.971 7 19 5.657 19 4C19 2.343 14.971 1 10 1C5.029 1 1 2.343 1 4C1 5.657 5.029 7 10 7Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M1 4V18C1 18.796 1.94799 19.559 3.63599 20.121C5.32399 20.684 7.613 21 10 21C12.387 21 14.676 20.684 16.364 20.121C18.052 19.559 19 18.796 19 18V4"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M1 11C1 11.796 1.94799 12.559 3.63599 13.121C5.32399 13.684 7.613 14 10 14C12.387 14 14.676 13.684 16.364 13.121C18.052 12.559 19 11.796 19 11"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default DatabaseIcon;
