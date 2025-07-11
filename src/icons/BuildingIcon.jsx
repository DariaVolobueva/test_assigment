import React from "react";

const BuildingIcon = ({ color }) => {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5 21V3C5 2.47 5.211 1.961 5.586 1.586C5.961 1.211 6.47 1 7 1H15C15.53 1 16.039 1.211 16.414 1.586C16.789 1.961 17 2.47 17 3V21M5 21H17M5 21H3C2.47 21 1.961 20.789 1.586 20.414C1.211 20.039 1 19.53 1 19V13C1 12.47 1.211 11.961 1.586 11.586C1.961 11.211 2.47 11 3 11H5M17 21H19C19.53 21 20.039 20.789 20.414 20.414C20.789 20.039 21 19.53 21 19V10C21 9.47 20.789 8.961 20.414 8.586C20.039 8.211 19.53 8 19 8H17M9 5H13M9 9H13M9 13H13M9 17H13"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default BuildingIcon;
