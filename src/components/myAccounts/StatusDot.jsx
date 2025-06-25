const getStatusDotColor = (status) => {
    switch (status.toLowerCase()) {
        case "active":
            return "bg-custom-ceramic-green";
        case "pending":
            return "bg-custom-minion-yellow";
        case "inactive":
            return "bg-custom-lanister-red";
        default:
            return "bg-custom-blue";
    }
};

const StatusDot = ({ text }) => (
    <div
        className={`w-2.5 h-2.5 rounded-full ${getStatusDotColor(text)}`}
    ></div>
);

export default StatusDot;
