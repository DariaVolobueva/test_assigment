import React from "react";

import MetricCard from "../common/MetricCard";

const PerformanceMetrics = () => {
    return (
        <>
            <p className="text-2xl mb-7">Performance Metrics</p>
            <div className="flex w-full flex-row flex-wrap justify-around items-start">
                <div className="flex flex-row flex-wrap justify-between gap-4 items-stretch">
                    <MetricCard
                        title="Winnability"
                        value="Very Strong"
                        aText={"See all factors"}
                    >
                        <div className="flex flex-row gap-1">
                            <div className="aspect-square h-2.5 w-2.5 bg-custom-blue rounded-full"></div>
                            <div className="aspect-square h-2.5 w-2.5 bg-custom-blue rounded-full"></div>
                            <div className="aspect-square h-2.5 w-2.5 bg-custom-blue rounded-full"></div>
                            <div className="aspect-square h-2.5 w-2.5 bg-custom-blue rounded-full"></div>
                        </div>
                    </MetricCard>
                    <MetricCard
                        title="Loss Ratio"
                        value={<span className="text-white">25%</span>}
                        aText={"View history"}
                        pAdd="vs 42% target"
                    ></MetricCard>
                    <MetricCard
                        title="Premium Growth"
                        value={<span className="text-white">12.4%</span>}
                        aText={"View trend"}
                        pAdd={"YoY increase $123M vs $150M Target"}
                    ></MetricCard>

                    <div className="flex flex-col max-h-fit pt-10 pb-5 pl-6 pr-2 bg-dark-grey rounded-3xl border border-custom-grey custom-xl2-3:mt-0 mt-4">
                        <div className="flex flex-row items-center gap-4 mb-2.5">
                            <p className="text-2xl capitalize">
                                Exposure distribution
                            </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="relative flex items-center gap-6">
                                <div className="relative flex bg-custom-black-river-falls h-6 w-60 rounded-tr-full rounded-br-full">
                                    <div className="absolute flex items-center bg-linear-270 from-custom-bright-blue to-custom-black-river-falls rounded-tr-full rounded-br-full h-6 w-[71%]"></div>
                                </div>
                                <p className="text-nowrap">
                                    Marine Cargo: 71.4%
                                </p>
                            </div>

                            <div className="relative flex items-center gap-6">
                                <div className="relative flex bg-custom-black-river-falls h-6 w-60 rounded-tr-full rounded-br-full">
                                    <div className="absolute flex items-center bg-linear-270 from-custom-bright-blue to-custom-black-river-falls rounded-tr-full rounded-br-full h-6 w-[20%]"></div>
                                </div>
                                <p className="text-nowrap">
                                    General Liability: 20%
                                </p>
                            </div>

                            <div className="relative flex items-center gap-6">
                                <div className="relative flex bg-custom-black-river-falls h-6 w-60 rounded-tr-full rounded-br-full">
                                    <div className="absolute flex items-center bg-linear-270 from-custom-bright-blue to-custom-black-river-falls rounded-tr-full rounded-br-full h-6 w-[8.6%]"></div>
                                </div>
                                <p className="text-nowrap">
                                    Workers Comp: 8.6%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PerformanceMetrics;
