import ArrowBottomIcon from "../../icons/ArrowBottomIcon";
import data from "../../data/portfolioGoals.json";
import ProgressBar from "../common/ProgressBar";
import MarkerLabel from "../common/MarkerLabel";

const PortfolioGoals = () => {
    const renewalLeft = ((data.renewal - 85) / (90 - 85)) * 100 - 14;

    return (
        <div className="custom-xl1-2:col-start-3 custom-xl1-2:col-span-1 custom-xl1-2:row-start-1 custom-xl1-2:row-span-2 lg:col-start-3 lg:col-span-2 lg:row-start-1 lg:row-span-1 sm:col-start-1 sm:col-span-1 sm:row-start-2 sm:row-span-1 bg-dark-grey border border-custom-grey rounded-4xl px-6 pt-6 pb-9 ">
            <h2 className="text-xl">Portfolio goals</h2>
            <div className="pb-2">
                <div className="py-7">
                    <p className="uppercase text-xs text-custom-ashy-blue">
                        Portfolio Loss ratio Target
                    </p>
                </div>
                <ProgressBar
                    segments={[
                        {
                            className:
                                "h-6 w-1/3 rounded-tl-full rounded-bl-full bg-custom-ceramic-green",
                            width: "33.33%",
                        },
                        {
                            className: "h-6 w-1/3 bg-custom-minion-yellow",
                            width: "33.33%",
                        },
                        {
                            className:
                                "h-6 w-1/3 bg-custom-lanister-red rounded-br-full rounded-tr-full",
                            width: "33.33%",
                        },
                    ]}
                    className="relative"
                >
                    <div className="absolute top-[-110%] left-[55%] flex flex-col items-center">
                        <p className="uppercase text-[9px] text-custom-ashy-blue">
                            tg:55%
                        </p>
                        <ArrowBottomIcon color={"#3B82F6"} />
                    </div>
                    <MarkerLabel
                        label={`${
                            data["loss-ratio"]
                        }% (${data["loss-ratio"] < 10 ? "Good" : "Well..."})`}
                        icon={<ArrowBottomIcon color="#3BB979" />}
                        className="top-6"
                        style={{
                            left: `${Math.ceil(data["loss-ratio-target"]) - 14}%`,
                        }}
                    />
                    <p className="absolute text-xs text-white left-[48.2%]">
                        {data["loss-ratio-target"]}%
                    </p>
                </ProgressBar>
            </div>
            <div className="pb-2">
                <div className="py-7">
                    <p className="uppercase text-xs text-custom-ashy-blue">
                        renewal retention
                    </p>
                </div>
                <ProgressBar
                    segments={[
                        {
                            className:
                                "h-6 w-[18%] rounded-tl-full rounded-bl-full bg-custom-lanister-red",
                            width: "18%",
                        },
                        {
                            className: "h-6 w-[34%] bg-custom-minion-yellow",
                            width: "34%",
                        },
                        {
                            className: "h-6 w-[13%] bg-custom-ceramic-green",
                            width: "13%",
                        },
                        {
                            className:
                                "h-6 w-[35%] bg-custom-minion-yellow rounded-br-full rounded-tr-full",
                            width: "35%",
                        },
                    ]}
                    className="relative"
                >
                    <div className="absolute top-[-70%] left-[55%] flex flex-col items-center">
                        <p className="uppercase text-[9px] text-custom-ashy-blue">
                            tg:85-90%
                        </p>
                    </div>
                    <MarkerLabel
                        label="on target"
                        icon={<ArrowBottomIcon color="#3BB979" />}
                        className="top-6"
                        style={{ left: `${renewalLeft}%` }}
                    />
                    <p className="absolute text-xs text-white left-[60%]">
                        {data.renewal}%
                    </p>
                </ProgressBar>
            </div>
            <div>
                <div className="pt-7">
                    <p className="uppercase text-xs text-custom-ashy-blue">
                        New business target
                    </p>
                </div>
                <ProgressBar
                    segments={[
                        {
                            className:
                                "absolute flex items-center bg-linear-270 from-custom-bright-blue to-custom-black-river-falls rounded-tr-full rounded-br-full h-6",
                            width: `${data["new-target"]}%`,
                        },
                    ]}
                    className="bg-custom-black-river-falls h-6 lg:w-[88%] 2xl:w-[80%] rounded-tr-full rounded-br-full relative"
                >
                    <p className="absolute uppercase text-xs text-white font-medium right-1/6">
                        $8.1m
                    </p>
                    <p className="uppercase text-xs text-white font-medium absolute lg:right-[-13%] 2xl:right-[-20%]">
                        $12m
                    </p>
                    <p className="absolute uppercase text-[0.5rem] text-custom-ashy-blue left-1/2 top-[100%]">
                        {data["new-target"]}%
                    </p>
                </ProgressBar>
                <div className="pt-7">
                    <p className="uppercase text-xs text-custom-ashy-blue">
                        Annual gwp target
                    </p>
                </div>
                <ProgressBar
                    segments={[
                        {
                            className:
                                "absolute flex items-center bg-linear-270 from-custom-bright-blue to-custom-black-river-falls rounded-tr-full rounded-br-full h-6",
                            width: `${data["annual-target"]}%`,
                        },
                    ]}
                    className="bg-custom-black-river-falls h-6 lg:w-[88%] 2xl:w-[80%] rounded-tr-full rounded-br-full relative"
                >
                    <p className="absolute uppercase text-xs text-white font-medium right-1/6">
                        $28.4m
                    </p>
                    <p className="uppercase text-xs text-white font-medium absolute lg:right-[-13%] 2xl:right-[-20%]">
                        $42m
                    </p>
                    <p className="absolute uppercase text-[0.5rem] text-custom-ashy-blue left-1/2 top-[100%]">
                        {data["annual-target"]}%
                    </p>
                </ProgressBar>
            </div>
        </div>
    );
};

export default PortfolioGoals;
