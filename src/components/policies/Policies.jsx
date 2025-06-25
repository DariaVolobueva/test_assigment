import React from "react";
import SectionBox from "../common/SectionBox";
import policyData from "./policyData";

const Policies = () => {
    return (
        <>
            <p className="text-2xl mb-7">Policies</p>
            <SectionBox className="w-full h-auto min-h-44 py-5 px-9 flex flex-row gap-4 overflow-x-auto custom-scrollbar">
                {policyData.map(({ icon, title, premium, eff }) => (
                    <div
                        key={title}
                        className="flex flex-col gap-2.5 bg-custom-desaturated-blue py-7 pl-6 min-w-80 rounded-3xl"
                    >
                        <div className="flex flex-row gap-3 items-center">
                            {icon}
                            <p className="text-2xl">{title}</p>
                        </div>
                        <p className="text-custom-dark-grayish-blue text-sm">
                            Premium: {premium}
                        </p>
                        <p className="text-custom-dark-grayish-blue text-sm">
                            Eff.Date: {eff}
                        </p>
                    </div>
                ))}
            </SectionBox>
        </>
    );
};

export default Policies;
