import HeaderTitle from "./HeaderTitle";
import HeaderSearch from "./HeaderSearch";
import HeaderAvatar from "./HeaderAvatar";
import PropTypes from "prop-types";

const Header = ({ data }) => {
    return (
        <header className="py-9 flex 2xl:justify-between 2xl:flex-nowrap border-b border-custom-grey ml-4 md:ml-16 xl:ml-32 mr-4 md:mr-16 xl:mr-36 flex-wrap-reverse justify-center">
            <HeaderTitle
                template={data.titleTemplate}
                name={data.name}
                tasks={data.tasks}
            />
            <div className="flex flex-row gap-2.5">
                <HeaderSearch placeholder={data.searchPlaceholder} />
                <HeaderAvatar initials={data.avatarInitials} />
            </div>
        </header>
    );
};

Header.propTypes = {
    data: PropTypes.shape({
        titleTemplate: PropTypes.string,
        name: PropTypes.string,
        tasks: PropTypes.array,
        searchPlaceholder: PropTypes.string,
        avatarInitials: PropTypes.string,
    }).isRequired,
};

export default Header;
