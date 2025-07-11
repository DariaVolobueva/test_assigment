import React from "react";

const ArrowBottomIcon = ({ color }) => {
    return (
        <svg
            width="17"
            height="11"
            viewBox="0 0 17 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0.699946 4.09601L6.82995 10.3C7.04995 10.522 7.30997 10.698 7.59997 10.818C7.88997 10.938 8.18999 11 8.5 11C8.81 11 9.12003 10.938 9.41003 10.818C9.69003 10.698 9.95004 10.522 10.17 10.3L16.3 4.09601C17.8 2.58701 16.73 0 14.62 0H2.35998C0.24998 0 -0.790054 2.58701 0.699946 4.09601Z"
                fill={color}
            />
        </svg>
    );
};

export default ArrowBottomIcon;
