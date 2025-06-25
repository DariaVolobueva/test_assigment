const WinnabilityDots = ({ count, color }) => {
    const dots = Array(count).fill(0);
    return (
        <div className="flex flex-row items-center justify-center gap-0.5">
            {dots.map((_, i) => (
                <div
                    key={i}
                    className={`aspect-square h-2.5 w-2.5 rounded-full ${color}`}
                ></div>
            ))}
        </div>
    );
};

export default WinnabilityDots;
