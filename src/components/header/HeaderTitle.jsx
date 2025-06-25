const HeaderTitle = ({ template, name, tasks }) => {
    const title = template
        .replace("{{name}}", name)
        .replace("{{tasks}}", tasks);

    return (
        <p className="text-4xl tracking-wide text-wrap max-w-1/2 2xl:mt-0 sm:mt-4 sm:max-w-full">
            {title}
        </p>
    );
};

export default HeaderTitle;
