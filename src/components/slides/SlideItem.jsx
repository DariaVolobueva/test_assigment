import { useState } from "react";
import PropTypes from "prop-types";
import {
    HomeIcon,
    DatabaseIcon,
    GroupIcon,
    FileIcon,
    BuildingIcon,
    TargetIcon,
    KeyIcon,
} from "../../icons";

const iconMap = {
    home: HomeIcon,
    database: DatabaseIcon,
    group: GroupIcon,
    file: FileIcon,
    building: BuildingIcon,
    target: TargetIcon,
    key: KeyIcon,
};

const SlideItem = ({ title, icon, isActive, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const IconComponent = iconMap[icon];

    const iconColor = isActive || isHovered ? "white" : "#3b82f6";

    const baseClass =
        "bg-custom-black border-custom-grey border rounded-full flex justify-center items-center gap-1.5 px-4 py-3.5 h-12 flex-nowrap transition-colors duration-200 cursor-pointer";
    const hoverActiveClass =
        isActive || isHovered ? "bg-custom-bright-blue scale-105" : "";

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            onClick();
        }
        if (e.key === "i") {
            setShowInfo((prev) => !prev);
        }
    };

    return (
        <div className="relative">
            <div
                className={`${baseClass} ${hoverActiveClass}`}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={onClick}
                onDoubleClick={() => setShowInfo((prev) => !prev)}
                onKeyDown={handleKeyDown}
                title="Double click or press 'i' for more info"
            >
                {IconComponent && <IconComponent color={iconColor} />}
                <p className="text-nowrap">{title}</p>
            </div>
            {showInfo && (
                <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-custom-grey text-white text-xs rounded shadow-lg px-4 py-2 z-50 w-40">
                    Additional info about {title}
                </div>
            )}
        </div>
    );
};

SlideItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default SlideItem;
