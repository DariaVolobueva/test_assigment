import React from "react";
import PropTypes from "prop-types";

const SearchInput = ({ value, onChange }) => {
    return (
        <input
            className="w-64 h-7 bg-custom-dark-desaturated-blue text-custom-speed-well/50 rounded-full px-4 font-light"
            type="search"
            placeholder="Search"
            value={value}
            onChange={onChange}
        />
    );
};

SearchInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SearchInput;
