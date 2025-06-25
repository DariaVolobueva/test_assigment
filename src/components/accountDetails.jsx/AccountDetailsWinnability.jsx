import React from "react";
import WinnabilityDots from "../myAccounts/WinnabilityDots";
import HistoricalTrend from "./HistoricalTrend";
import { ArrowLeftIcon } from "../../icons";
import RocketIcon from "../../icons/RocketIcon";

const AccountDetailsWinnability = () => {
    return (
        <div className="pl-7 pr-9 pt-1.5 mt-2 xl:border-l-2 border-t-2 xl:border-t-0 h-full border-dashed border-custom-dark-grayish-blue xl:w-3/4 w-full">
            <p className="capitalize text-5xl">winnability</p>
            <div className="flex flex-col gap-6 w-full ">
                <div className="flex flex-row mt-6 gap-2 flex-wrap">
                    <div className="bg-custom-dark-desaturated-blue px-6 py-5 rounded-3xl flex flex-col gap-5">
                        <p className="capitalize text-xl">overall score</p>
                        <div className="flex flex-row gap-2 items-center">
                            <p className="text-5xl font-light">82%</p>
                            <div className=" rounded-full border border-custom-bright-blue flex items-center justify-center px-6 py-1 gap-0.5">
                                <WinnabilityDots
                                    count={4}
                                    color="bg-custom-bright-blue"
                                />
                                <p className="text-custom-bright-blue text-nowrap">
                                    {"Very Strong"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-custom-dark-desaturated-blue px-6 py-5 rounded-3xl flex flex-col gap-5">
                        <HistoricalTrend
                            title="Historical trend"
                            labels={["Jan", "Feb", "Mar", "Apr", "May"]}
                            data={[10, 20, 20, 30, 35, 35, 36, 45, 50]}
                        />
                    </div>
                    <div className="bg-custom-dark-desaturated-blue px-6 py-5 rounded-3xl flex flex-col gap-5 grow">
                        <p className="capitalize text-xl">Position</p>
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-row items-center gap-3">
                                <div className="relative flex bg-custom-black-river-falls h-5 2xl:w-52 w-52 rounded-tr-full rounded-br-full">
                                    <div className="flex items-center">
                                        <div className="absolute flex items-center bg-linear-270 w-[82%] from-custom-bright-blue to-custom-black-river-falls rounded-tr-full rounded-br-full h-5"></div>
                                    </div>
                                </div>
                                <p>Your score: 82%</p>
                            </div>

                            <div className="flex flex-row items-center gap-3">
                                <div className="relative flex bg-custom-black-river-falls h-5 2xl:w-52 w-52 rounded-tr-full rounded-br-full">
                                    <div className="flex items-center">
                                        <div className="absolute flex items-center bg-linear-270 w-[68%] from-custom-bright-blue to-custom-black-river-falls rounded-tr-full rounded-br-full h-5"></div>
                                    </div>
                                </div>
                                <p className="text-custom-dark-grayish-blue">
                                    Market Avg: 68%
                                </p>
                            </div>

                            <div className="flex flex-row items-center gap-3">
                                <div className="relative flex bg-custom-black-river-falls h-5 2xl:w-52 w-52 rounded-tr-full rounded-br-full">
                                    <div className="flex items-center">
                                        <div className="absolute flex items-center bg-linear-270 w-[88%] from-custom-bright-blue to-custom-black-river-falls rounded-tr-full rounded-br-full h-5"></div>
                                    </div>
                                </div>
                                <p className="text-custom-dark-grayish-blue">
                                    Top competitor: 88%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between gap-2 flex-wrap">
                    <div className="bg-custom-dark-desaturated-blue px-6 py-7 rounded-3xl flex flex-col gap-5 flex-1 w-full">
                        <div className="flex flex-row gap-2 items-center">
                            <div className="h-fit rotate-90 border border-custom-ceramic-green rounded-full aspect-square p-1 flex items-center justify-center">
                                <ArrowLeftIcon
                                    color={"#3BB979"}
                                    width={15}
                                    height={15}
                                ></ArrowLeftIcon>
                            </div>
                            <p className="text-xl">Increasing Winnability</p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-row gap-2 items-center">
                                <div className="border h-10 w-10 border-custom-ceramic-green aspect-square rounded-full p-2.5 flex items-center justify-center text-custom-ceramic-green">
                                    1
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <p className="text-lg">
                                        Brokers relationship
                                    </p>
                                    <div className="flex flex-row gap-2 items-center">
                                        <div className="h-5 w-64 rounded-tr-full rounded-br-full bg-linear-30 from-custom-ceramic-green/0 to-custom-ceramic-green/100"></div>
                                        <p className="text-custom-dark-grayish-blue">
                                            {" "}
                                            +28%
                                        </p>
                                    </div>
                                </div>
                                <div></div>
                            </div>

                            <div className="flex flex-row gap-2 items-center">
                                <div className="border h-10 w-10 border-custom-ceramic-green aspect-square rounded-full p-2.5 flex items-center justify-center text-custom-ceramic-green">
                                    2
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <p className="text-lg">Loss history</p>
                                    <div className="flex flex-row gap-2 items-center">
                                        <div className="h-5 w-60 rounded-tr-full rounded-br-full bg-linear-30 from-custom-ceramic-green/0 to-custom-ceramic-green/100"></div>
                                        <p className="text-custom-dark-grayish-blue">
                                            {" "}
                                            +22%
                                        </p>
                                    </div>
                                </div>
                                <div></div>
                            </div>

                            <div className="flex flex-row gap-2 items-center">
                                <div className="border h-10 w-10 border-custom-ceramic-green aspect-square rounded-full p-2.5 flex items-center justify-center text-custom-ceramic-green">
                                    3
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <p className="text-lg">Industry growth</p>
                                    <div className="flex flex-row gap-2 items-center">
                                        <div className="h-5 w-56 rounded-tr-full rounded-br-full bg-linear-30 from-custom-ceramic-green/0 to-custom-ceramic-green/100"></div>
                                        <p className="text-custom-dark-grayish-blue">
                                            {" "}
                                            +16%
                                        </p>
                                    </div>
                                </div>
                                <div></div>
                            </div>

                            <div className="flex flex-row gap-2 items-center">
                                <div className="border h-10 w-10 border-custom-ceramic-green aspect-square rounded-full p-2.5 flex items-center justify-center text-custom-ceramic-green">
                                    4
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-lg">
                                        Multiline oportunity
                                    </p>
                                    <div className="flex flex-row gap-2 items-center">
                                        <div className="h-5 w-52 rounded-tr-full rounded-br-full bg-linear-30 from-custom-ceramic-green/0 to-custom-ceramic-green/100"></div>
                                        <p className="text-custom-dark-grayish-blue">
                                            {" "}
                                            +11%
                                        </p>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-custom-dark-desaturated-blue px-6 py-9 rounded-3xl flex flex-1 w-full flex-col gap-5">
                        <div className="flex flex-row gap-2 items-center">
                            <div className="h-fit rotate-270 border border-custom-minion-yellow rounded-full aspect-square p-1 flex items-center justify-center">
                                <ArrowLeftIcon
                                    color={"#FDD261"}
                                    width={15}
                                    height={15}
                                ></ArrowLeftIcon>
                            </div>
                            <p className="text-xl">Decreasing Winnability</p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-row gap-2 items-center">
                                <div className="border h-10 w-10 border-custom-minion-yellow aspect-square rounded-full p-2.5 flex items-center justify-center text-custom-minion-yellow">
                                    1
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <p className="text-lg">Premium pricing</p>
                                    <div className="flex flex-row gap-2 items-center">
                                        <div className="h-5 w-64 rounded-tr-full rounded-br-full bg-linear-30 from-custom-minion-yellow/0 to-custom-minion-yellow/100"></div>
                                        <p className="text-custom-dark-grayish-blue">
                                            {" "}
                                            -24%
                                        </p>
                                    </div>
                                </div>
                                <div></div>
                            </div>

                            <div className="flex flex-row gap-2 items-center">
                                <div className="border h-10 w-10 border-custom-minion-yellow aspect-square rounded-full p-2.5 flex items-center justify-center text-custom-minion-yellow">
                                    2
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <p className="text-lg">Total exposure</p>
                                    <div className="flex flex-row gap-2 items-center">
                                        <div className="h-5 w-60 rounded-tr-full rounded-br-full bg-linear-30 from-custom-minion-yellown/0 to-custom-minion-yellow/100"></div>
                                        <p className="text-custom-dark-grayish-blue">
                                            {" "}
                                            -18%
                                        </p>
                                    </div>
                                </div>
                                <div></div>
                            </div>

                            <div className="flex flex-row gap-2 items-center">
                                <div className="border h-10 w-10 border-custom-minion-yellow aspect-square rounded-full p-2.5 flex items-center justify-center text-custom-minion-yellow">
                                    3
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <p className="text-lg">Loss ratio trend</p>
                                    <div className="flex flex-row gap-2 items-center">
                                        <div className="h-5 w-56 rounded-tr-full rounded-br-full bg-linear-30 from-custom-minion-yellow/0 to-custom-minion-yellow/100"></div>
                                        <p className="text-custom-dark-grayish-blue">
                                            {" "}
                                            -13%
                                        </p>
                                    </div>
                                </div>
                                <div></div>
                            </div>

                            <div className="flex flex-row gap-2 items-center">
                                <div className="border h-10 w-10 border-custom-minion-yellow aspect-square rounded-full p-2.5 flex items-center justify-center text-custom-minion-yellow">
                                    4
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-lg">
                                        Market competition
                                    </p>
                                    <div className="flex flex-row gap-2 items-center">
                                        <div className="h-5 w-52 rounded-tr-full rounded-br-full bg-linear-30 from-custom-minion-yellow/0 to-custom-minion-yellow/100"></div>
                                        <p className="text-custom-dark-grayish-blue">
                                            {" "}
                                            -5%
                                        </p>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-custom-dark-desaturated-blue pt-6 pb-8 pl-7 pr-11 rounded-3xl flex flex-1 w-full flex-col gap-5">
                    <div className="flex flex-row items-center gap-2">
                        <RocketIcon color={"#3BB979"}></RocketIcon>
                        <p className="capitalize text-lg text-custom-ceramic-green">
                            AI-powered recommendation
                        </p>
                    </div>
                    <div className="flex flex-col gap-8 w-full">
                        <div className="flex xl:flex-row flex-col justify-between items-center">
                            <div className="flex flex-col gap-0.5 w-3/4">
                                <p className="text-lg font-medium">
                                    Offer 5% premium discount in exchange for
                                    3-year commitment
                                </p>
                                <p className="text-lg text-custom-dark-grayish-blue">
                                    Historical win rate increases 24% with
                                    multi-year commitments. Current pricing is
                                    12% above market average. This approach
                                    would strengthen retention while maintaining
                                    adequate profitability.
                                </p>
                            </div>

                            <button className="w-fit xl:mt-0 mt-2 h-14 bg-custom-ceramic-green text-xs py-3.5 px-14 flex items-center justify-center rounded-full text-black font-medium">
                                Apply
                            </button>
                        </div>

                        <div className="flex xl:flex-row flex-col justify-between items-center">
                            <div className="flex flex-col gap-0.5 w-3/4">
                                <p className="text-lg font-medium">
                                    Propose risk control services for cargo
                                    handling procedures
                                </p>
                                <p className="text-lg text-custom-dark-grayish-blue">
                                    Can potenntially reduce loss ratio by 15-20%
                                    based on similar maritime accounts in your
                                    portfoli. Specific focus on
                                    loading/unloading operations would address
                                    the most frequent claim scenarios.
                                </p>
                            </div>

                            <button className="w-fit xl:mt-0 mt-2 h-14 bg-custom-ceramic-green text-xs py-3.5 px-14 flex items-center justify-center rounded-full text-black font-medium">
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountDetailsWinnability;
