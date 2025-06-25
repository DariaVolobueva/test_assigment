import PropTypes from "prop-types";

const SideMenuCard = ({ title, count, items }) => (
    <div className="hover:bg-custom-desaturated-blue active:bg-custom-desaturated-blue rounded-3xl py-4 px-7 ">
        <div className="flex flex-row gap-8 items-center justify-between">
            <p className="uppercase text-xl ">{title}</p>
            <div className="border bg-custom-desaturated-blue rounded-lg p-2.5 w-fit h-fit text-xl">
                {count}
            </div>
        </div>
        {items && (
            <div className="ml-7 mt-8 gap-y-7 flex flex-col">
                {items.map((item) => (
                    <p
                        key={item}
                        className="hover:text-custom-bright-blue active:text-custom-bright-blue capitalize"
                    >
                        {item}
                    </p>
                ))}
            </div>
        )}
    </div>
);

SideMenuCard.propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    items: PropTypes.arrayOf(PropTypes.string),
};

export default SideMenuCard;
