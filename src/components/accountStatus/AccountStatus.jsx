import React from "react";
import SectionBox from "../common/SectionBox";
import DoneIcon from "../../icons/DoneIcon";
import DashedLineIcon from "../../icons/DashedLineIcon";

const statusSteps = [
    { label: "Submitted", color: "#3BB979", dashed: false },
    { label: "Review", color: "#3BB979", dashed: false },
    { label: "Quote", color: "#3BB979", dashed: false },
    { label: "Bind", color: "#3BB979", dashed: false },
    { label: "Issue", color: "#3BB979", dashed: false },
    { label: "Renew", color: "#8A8B98", dashed: true },
];

const AccountStatus = () => {
    return (
        <div>
            <p className="text-2xl mb-7">Account Status</p>

            <SectionBox className="flex flex-col w-full">
                <div className="xl:justify-center min-h-44 flex-nowrap py-5 px-9 rounded-3xl flex flex-row gap-x-28 overflow-x-auto custom-scrollbar">
                    {statusSteps.map((step, idx) => (
                        <div
                            className="flex flex-col justify-center items-center gap-y-5 relative"
                            key={step.label}
                        >
                            {idx > 0 && (
                                <div className="absolute top-9.5 right-[90%] lg:block">
                                    <DashedLineIcon
                                        color={statusSteps[idx - 1].color}
                                    ></DashedLineIcon>
                                </div>
                            )}
                            <DoneIcon
                                color={step.color}
                                isDashed={step.dashed}
                            ></DoneIcon>
                            <p className="text-lg">{step.label}</p>
                        </div>
                    ))}
                </div>
            </SectionBox>
        </div>
    );
};

export default AccountStatus;
