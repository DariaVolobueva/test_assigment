import React from "react";
import BreadCrumbs from "./breadCrumbs/BreadCrumbs";
import AccountInfo from "./account/AccountInfo";
import AccountAttention from "./account/AccountAttention";
import PerformanceMetrics from "./performanceMetrics/PerformanceMetrics";
import Policies from "./policies/Policies";
import AccountStatus from "./accountStatus/AccountStatus";
import Compliance from "./compliance/Compliance";
import Communication from "./communication/Communication";
import PoliciesBottom from "./policiesBottom/Policies";
import AccountDetails from "./accountDetails.jsx/AccountDetails";

const Accounts = () => {
    return (
        <main className="ml-4 md:ml-16 xl:ml-32 mr-4 md:mr-16 xl:mr-36">
            <BreadCrumbs></BreadCrumbs>
            <div className="flex mt-2.5 flex-row xl:justify-between 2xl:items-baseline-last sm:items-center xl:flex-nowrap flex-wrap xl:gap-y-0 gap-y-3 justify-center items-center">
                <AccountInfo></AccountInfo>
                <AccountAttention></AccountAttention>
            </div>
            <div className="pt-8 pb-7">
                <PerformanceMetrics></PerformanceMetrics>
            </div>
            <div>
                <Policies></Policies>
            </div>
            <div className="grid grid-cols-1 mt-11 gap-4 custom-xl2-3:grid-cols-[auto_auto]">
                <AccountStatus></AccountStatus>
                <Compliance></Compliance>
            </div>
            <div className="mt-11 ">
                <Communication></Communication>
            </div>
            <div className="mt-11">
                <AccountDetails></AccountDetails>
            </div>
            <div className="mt-11">
                <PoliciesBottom></PoliciesBottom>
            </div>
        </main>
    );
};

export default Accounts;
