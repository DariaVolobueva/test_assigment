import React from "react";
import PolicyRow from "./PolicyRow";
import { policiesMock } from "./policiesMock";

const getLossRatioColor = (lossRatio) => {
    const numericRatio = parseFloat(lossRatio.replace("%", ""));
    if (numericRatio <= 35) {
        return "bg-custom-ceramic-green";
    } else if (numericRatio <= 65) {
        return "bg-custom-minion-yellow text-black";
    } else if (isNaN(numericRatio)) {
        return "";
    } else {
        return "bg-custom-lanister-red";
    }
};

const baseBtnClass =
    "w-24 h-6 hover:bg-custom-bright-blue border border-custom-bright-blue text-custom-bright-blue hover:text-white text-xs text-nowrap py-3.5 px-14 flex items-center justify-center rounded-full";

const getSum = (arr, key) => {
    const total = arr
        .map((item) => {
            const parsed = parseFloat(
                (item[key] || "0").replace(/[^\d.\-]/g, "")
            );
            return isNaN(parsed) ? 0 : parsed;
        })
        .reduce((a, b) => a + b, 0);

    return total.toLocaleString();
};

const getAverage = (arr, key) => {
    const nums = arr
        .map((item) => {
            const parsed = parseFloat(
                (item[key] || "0").replace(/[^\d.\-]/g, "")
            );
            return isNaN(parsed) ? null : parsed;
        })
        .filter((val) => val !== null);

    if (!nums.length) return 0;

    return (nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(1);
};

const PoliciesBottom = () => {
    return (
        <>
            <p className="text-2xl mb-7">Policies</p>
            <div className="w-full rounded-3xl bg-dark-grey border border-custom-grey flex flex-row flex-wrap xl:justify-start justify-center pl-5 pr-16 pb-12 pb-10">
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
                <div className="w-full overflow-x-auto">
                    <table className="table-auto min-w-5xl w-full text-left mt-6 text-wrap text-xs">
                        <thead className="uppercase bg-custom-desaturated-blue h-8">
                            <tr className="uppercase bg-custom-desaturated-blue">
                                <th className="font-thin pl-5">line</th>
                                <th className="font-thin">eff.date</th>
                                <th className="font-thin">exp.date</th>
                                <th className="font-thin">status</th>
                                <th className="font-thin">expiring tech</th>
                                <th className="font-thin">expiring premium</th>
                                <th className="font-thin">renewal to tech</th>
                                <th className="font-thin">renewal tech</th>
                                <th className="font-thin">renewal premium</th>
                                <th className="font-thin">rate change</th>
                                <th className="font-thin">loss ratio</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {policiesMock.map((policy) => (
                                <PolicyRow
                                    key={policy.id}
                                    policy={policy}
                                    getLossRatioColor={getLossRatioColor}
                                />
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="even:bg-custom-dark-desaturated-blue">
                                <th
                                    colSpan={4}
                                    scope="row"
                                    className="text-right pr-7 uppercase pt-4"
                                >
                                    Total ({policiesMock.length})
                                </th>
                                <td className="pt-4">
                                    ${getSum(policiesMock, "expiringTech")}
                                </td>
                                <td className="pt-4">
                                    ${getSum(policiesMock, "expiringPremium")}
                                </td>
                                <td className="pt-4">
                                    ${getSum(policiesMock, "renewalToTech")}
                                </td>
                                <td className="pt-4">
                                    ${getSum(policiesMock, "renewalTech")}
                                </td>
                                <td className="pt-4">
                                    ${getSum(policiesMock, "renewalPremium")}
                                </td>
                                <td className="pt-4">
                                    {getAverage(policiesMock, "rateChange")}%
                                </td>
                                <td className="pt-4">
                                    <div
                                        className={`w-14 h-6 rounded-full ${getLossRatioColor(
                                            getAverage(
                                                policiesMock,
                                                "lossRatio"
                                            ) + "%"
                                        )} flex items-center justify-center px-3.5 py-2`}
                                    >
                                        <p>
                                            {getAverage(
                                                policiesMock,
                                                "lossRatio"
                                            )}
                                            %
                                        </p>
                                    </div>
                                </td>
                                <td className="pt-4"></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    );
};

export default PoliciesBottom;
