import React from "react";
import ExclamationMarkIcon from "../../icons/ExclamationMarkIcon";
import SectionBox from "../common/SectionBox";

const attentionData = [
    {
        label: "Marine Survey Required",
        sub: "Scheduled for 06/12/2025",
        action: "Review Details link →",
        aria: "Review Details",
    },
    {
        label: "Loss Control Complete",
        sub: "Last inspection: 02/15/2025",
        action: "View report →",
        aria: "View report",
    },
    {
        label: "Claims Review required",
        sub: "3 open claims // $245,000 TTL",
        action: "View claims →",
        aria: "View claims",
    },
];

const AccountAttention = () => {
    return (
        <SectionBox className="border-custom-minion-yellow px-5 pt-5 pb-7 gap-5 flex flex-col">
            <div className="flex flex-row gap-1 items-center">
                <ExclamationMarkIcon color={"#fdd261"}></ExclamationMarkIcon>
                <p className="capitalize text-xl text-custom-minion-yellow">
                    Needs Attention
                </p>
            </div>
            <div className="flex flex-row gap-11">
                {attentionData.map(({ label, sub, action, aria }) => (
                    <div className="flex flex-col font-light" key={label}>
                        <p className="capitalize text-sm">{label}</p>
                        <p className="text-custom-dark-grayish-blue text-xs">
                            {sub}
                        </p>
                        <a
                            href="#"
                            className="text-custom-bright-blue text-xs text-nowrap underline hover:text-blue-400 focus:outline focus:ring"
                            aria-label={aria}
                        >
                            {action}
                        </a>
                    </div>
                ))}
            </div>
        </SectionBox>
    );
};

export default AccountAttention;
