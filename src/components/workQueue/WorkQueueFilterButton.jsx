const WorkQueueFilterButton = ({ title, count, isActive, onClick }) => {
    const baseClass =
        "h-8 text-xs border-none rounded-full py-1.5 px-4 flex items-center justify-center transition-colors duration-200";
    const activeOrHoverClass = isActive
        ? "bg-custom-bright-blue"
        : "bg-custom-black hover:bg-custom-bright-blue";

    return (
        <button
            className={`${baseClass} ${activeOrHoverClass}`}
            onClick={onClick}
        >
            {title} ({count})
        </button>
    );
};

export default WorkQueueFilterButton;
