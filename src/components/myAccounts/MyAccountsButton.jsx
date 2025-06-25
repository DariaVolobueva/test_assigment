import React from "react";
import PropTypes from "prop-types";

const ActionButtons = ({ onFilter, onSort, onGroup, onNew }) => {
    const baseBtnClass =
        "w-24 h-7 hover:bg-custom-bright-blue border border-custom-bright-blue text-custom-bright-blue hover:text-white text-xs text-nowrap py-3.5 px-14 flex items-center justify-center rounded-full";

    return (
        <div className="flex gap-4 flex-wrap">
            <button className={baseBtnClass} onClick={onFilter}>
                Filter
            </button>
            <button className={baseBtnClass} onClick={onSort}>
                Sort
            </button>
            <button className={baseBtnClass} onClick={onGroup}>
                Group
            </button>
            <button className={baseBtnClass} onClick={onNew}>
                + New
            </button>
        </div>
    );
};

ActionButtons.propTypes = {
    onFilter: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    onGroup: PropTypes.func.isRequired,
    onNew: PropTypes.func.isRequired,
};

export default ActionButtons;
