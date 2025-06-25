import PropTypes from "prop-types";

const MetricCard = ({
    title,
    value,
    children,
    className = "",
    aText,
    pAdd = "",
}) => (
    <div
        className={`flex flex-col min-h-60 max-w-96 pt-10 pb-5 pl-6 pr-16 bg-dark-grey rounded-3xl border border-custom-grey ${className}`}
    >
        <div className="flex flex-row items-center gap-4">
            <p className="text-2xl">{title}</p>
            {children}
        </div>
        <p className="capitalize text-[3.2rem]">
            {value}
            {pAdd && (
                <span className="text-custom-dark-grayish-blue text-xl ml-1.5 text-wrap">
                    {pAdd}
                </span>
            )}
        </p>

        <a
            href="#"
            className="text-wrap text-custom-bright-blue text-xs align-bottom mt-auto"
        >
            {aText} {"\u2192"}
        </a>
    </div>
);

MetricCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    aText: PropTypes.string.isRequired,
    pAdd: PropTypes.string,
};

export default MetricCard;
