const HomeIcon = ({ color }) => {
    return (
        <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13 20V12C13 11.735 12.895 11.48 12.707 11.293C12.52 11.105 12.265 11 12 11H8C7.735 11 7.48 11.105 7.293 11.293C7.105 11.48 7 11.735 7 12V20"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M1 9C1 8.709 1.063 8.422 1.186 8.158C1.308 7.894 1.487 7.66 1.709 7.472L8.709 1.473C9.07 1.168 9.527 1 10 1C10.473 1 10.93 1.168 11.291 1.473L18.291 7.472C18.513 7.66 18.692 7.894 18.814 8.158C18.937 8.422 19 8.709 19 9V18C19 18.53 18.789 19.039 18.414 19.414C18.039 19.789 17.53 20 17 20H3C2.47 20 1.961 19.789 1.586 19.414C1.211 19.039 1 18.53 1 18V9Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default HomeIcon;
