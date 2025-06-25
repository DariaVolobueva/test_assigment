import React from "react";
import SectionBox from "../common/SectionBox";
import DoneIcon from "../../icons/DoneIcon";

const complianceData = [
    [{ label: "KYC verification" }, { label: "Regulatory approval" }],
    [{ label: "Required documentation" }, { label: "Finantial verification" }],
];

const Compliance = () => {
    return (
        <div className="flex flex-col h-auto">
            <div className="flex flex-row justify-between items-baseline mb-7">
                <p className="text-2xl">Compliance & Documentation</p>
                <p className="text-sm text-custom-bright-blue">
                    See history {"\u2192"}
                </p>
            </div>
            <SectionBox className="flex flex-col w-full">
                <div className=" min-h-[11rem] h-auto py-9 px-9 rounded-3xl flex lg:flex-row flex-col gap-x-14 gap-y-9 justify-center custom-xl2-3:justify-start">
                    {complianceData.map((col, idx) => (
                        <div className="flex flex-col gap-y-9" key={idx}>
                            {col.map((item) => (
                                <div
                                    className="flex flex-row items-center gap-3"
                                    key={item.label}
                                >
                                    <DoneIcon
                                        color={"#3BB979"}
                                        isDashed={false}
                                        width={20}
                                        height={20}
                                    ></DoneIcon>
                                    <p className="text-sm">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </SectionBox>
        </div>
    );
};

export default Compliance;
