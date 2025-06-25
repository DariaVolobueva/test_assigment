import React from "react";
import SectionBox from "../common/SectionBox";
import ClipIcon from "../../icons/ClipIcon";

const Communication = () => {
    const baseBtnClass =
        "w-24 h-6 hover:bg-custom-bright-blue border border-custom-bright-blue text-custom-bright-blue hover:text-white text-xs text-nowrap py-3.5 px-14 flex items-center justify-center rounded-full";

    return (
        <>
            <p className="text-2xl mb-7">Communication</p>
            <SectionBox>
                <div className="w-full rounded-3xl flex flex-row flex-wrap xl:justify-start justify-center">
                    <div className="flex flex-col xl:flex-row xl:pl-5 pl-3 pt-6 items-center gap-2.5">
                        <input
                            className="w-full sm:w-48 md:w-64 lg:w-md h-7 bg-dark-grey border border-custom-aeronautic rounded-full px-4 font-light"
                            type="search"
                            placeholder="Search"
                        />
                        <div className="flex gap-2 xl:gap-4 flex-wrap">
                            <button className={baseBtnClass}>Filter</button>
                            <button className={baseBtnClass}>Group</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-none pt-10 pb-14 px-9 gap-4">
                        <div className="flex flex-col gap-4">
                            <SectionBox className="w-full h-fit bg-custom-desaturated-blue py-6 px-6 border-2 !border-custom-bright-blue rounded-4xl font-light">
                                <div className="flex flex-col xl:flex-row flex-wrap gap-2.5 ">
                                    <div className="flex items-center h-7 justify-center bg-custom-blue rounded-full py-2 px-3.5">
                                        <p className="uppercase text-xs">new</p>
                                    </div>
                                    <p className="text-2xl capitalize">
                                        Policy Renewal - Auto Insurance 5/15/25
                                    </p>
                                </div>
                                <p className="font-thin text-custom-dark-grayish-blue text-lg py-4">
                                    Michael Roberts // Apr 5
                                </p>
                                <p className="font-thin mb-2.5">
                                    Hello Arthur, I'm reaching out regarding the
                                    upcoming autopolicy renewal for Real Estate
                                    Group, LLC. The current policy expires on
                                    6/3-/2024. Would you like to review coverage
                                    options before proceeding with the renewal?
                                    I've attached the current policy details and
                                    premium breakdown for your reference.
                                </p>
                                <div className="w-fit bg-custom-ceramic-green/40 px-5 py-1.5 gap-3 flex flex-row items-center justify-center rounded-full">
                                    <ClipIcon color={"#E5E7EB"}></ClipIcon>
                                    <p>3 attachments</p>
                                </div>
                                <button className="w-fit bg-custom-bright-blue rounded-full flex items-center justify-center py-2.5 px-10 mt-2 text-sm">
                                    Reply
                                </button>
                            </SectionBox>
                            <SectionBox className="w-full h-fit bg-custom-desaturated-blue py-6 px-6 border-2 !border-custom-bright-blue rounded-4xl font-light">
                                <div className="flex flex-col xl:flex-row gap-2.5">
                                    <div className="flex items-center h-7 justify-center bg-custom-blue rounded-full py-2 px-3.5">
                                        <p className="uppercase text-xs">new</p>
                                    </div>
                                    <p className="text-2xl capitalize">
                                        new quote request - workers comp
                                        insurance
                                    </p>
                                </div>
                                <p className="font-thin text-custom-dark-grayish-blue text-lg py-4">
                                    Sara Chen // Apr 5
                                </p>
                                <p className="font-thin mb-2.5">
                                    Hi Arthur, Real Estate Group has expressed
                                    interest in adding workers compensation
                                    coverage to their insurance portfolio. I've
                                    completed the initial risk assessment based
                                </p>
                                <div className="w-fit bg-custom-ceramic-green/40 px-5 py-1.5 gap-3 flex flex-row items-center justify-center rounded-full">
                                    <ClipIcon color={"#E5E7EB"}></ClipIcon>
                                    <p>3 attachments</p>
                                </div>
                                <button className="w-fit bg-custom-bright-blue rounded-full flex items-center justify-center py-2.5 px-10 mt-2 text-sm">
                                    Reply
                                </button>
                            </SectionBox>
                        </div>
                        <div className="flex flex-col gap-4">
                            <SectionBox className="w-full h-fit bg-custom-desaturated-blue py-6 px-6  rounded-4xl font-light">
                                <div className="flex flex-col xl:flex-row gap-2.5">
                                    <div className="flex items-center h-7 justify-center bg-custom-blue rounded-full py-2 px-3.5">
                                        <p className="capitalize text-xs">
                                            responded
                                        </p>
                                    </div>
                                    <p className="text-2xl capitalize">
                                        fwd: new submission - BMP real estate -
                                        EFF 4/1/24
                                    </p>
                                </div>
                                <p className="font-thin text-custom-dark-grayish-blue text-lg py-4">
                                    Joshua Dunmire // Mar 25
                                </p>
                                <p className="font-thin mb-2.5 text-nowrap truncate">
                                    Arthur, attached please find our submission
                                    for the above mentioned applicant. We have
                                    something something something v something
                                    something f something
                                </p>
                            </SectionBox>

                            <SectionBox className="w-full h-fit bg-custom-desaturated-blue py-6 px-6  rounded-4xl font-light">
                                <div className="flex flex-row gap-2.5">
                                    <p className="text-2xl capitalize">
                                        new business: BMP real estate group, LLC
                                    </p>
                                </div>
                                <p className="font-thin text-custom-dark-grayish-blue text-lg py-4">
                                    Isabel Kreller // Feb 28
                                </p>
                                <p className="font-thin mb-2.5 text-nowrap truncate">
                                    Hello Arthur, I am pleased to present you
                                    with a submission on this client's upcoming
                                    something something v something something f
                                    something
                                </p>
                                <div className="w-fit bg-custom-ceramic-green/40 px-5 py-1.5 gap-3 flex flex-row items-center justify-center rounded-full">
                                    <ClipIcon color={"#E5E7EB"}></ClipIcon>
                                    <p>5 attachments</p>
                                </div>
                                <button className="w-fit bg-custom-bright-blue rounded-full flex items-center justify-center py-2.5 px-10 mt-2 text-sm">
                                    Reply
                                </button>
                            </SectionBox>
                        </div>
                    </div>
                </div>
            </SectionBox>
        </>
    );
};

export default Communication;
