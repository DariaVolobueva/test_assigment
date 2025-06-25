import React from "react";
import AccountDetailsWinnability from "./AccountDetailsWinnability";
import SideMenuCard from "../common/SideMenuCard";

const AccountDetails = () => {
    return (
        <div>
            <p className="text-2xl mb-7">Account Details</p>
            <div className="w-full pt-8 pb-10 pr-7 pl-9 flex-nowrap items-center lg:items-start  rounded-3xl bg-dark-grey border border-custom-grey flex flex-col xl:flex-row tracking-wide">
                <div className="pr-5 w-full xl:w-1/4 flex flex-row xl:flex-col flex-wrap gap-4">
                    <SideMenuCard
                        title="desicion support"
                        count={4}
                        items={[
                            "Winnability",
                            "Exposure review & suggested coverage",
                            "Portfolio strategy alignment",
                            "broker analytics",
                        ]}
                    />
                    <SideMenuCard title="risk assessment" count={6} />
                    <SideMenuCard title="documents and compliance" count={2} />
                </div>
                <AccountDetailsWinnability />
            </div>
        </div>
    );
};

export default AccountDetails;
