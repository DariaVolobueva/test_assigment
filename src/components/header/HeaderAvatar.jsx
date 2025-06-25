const HeaderAvatar = ({ initials }) => (
    <div className="rounded-[50%] h-12 w-12 flex justify-center items-center bg-linear-30 from-custom-blue-tr to-custom-blue">
        <p className="text-2xl">{initials}</p>
    </div>
);

export default HeaderAvatar;
