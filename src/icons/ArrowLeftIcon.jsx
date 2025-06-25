import React from "react";

const ArrowLeftIcon = ({ color, width, height }) => {
    return (
        <svg
            width={width ?? "22"}
            height={height ?? "16"}
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20.5599 7.965H1.35986M1.35986 7.965L8.55994 0.764999M1.35986 7.965L8.55994 15.165"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ArrowLeftIcon;
