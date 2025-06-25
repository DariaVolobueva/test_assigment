import PropTypes from "prop-types";
import ExpandIcon from "../../icons/ExpandIcon";
import StatusDot from "./StatusDot";
import WinnabilityDots from "./WinnabilityDots";

const getWinnabilityText = (winnabilityScore) => {
    if (winnabilityScore >= 4) return "Very Strong";
    if (winnabilityScore === 3) return "Strong";
    if (winnabilityScore === 2) return "Medium";
    if (winnabilityScore === 1) return "Weak";
    return "Unknown";
};

const getLossRatioColor = (lossRatio) => {
    const numericRatio = parseFloat(lossRatio.replace("%", ""));
    if (numericRatio <= 35) {
        return "bg-custom-ceramic-green";
    } else if (numericRatio <= 65) {
        return "bg-custom-minion-yellow text-black";
    } else {
        return "bg-custom-lanister-red";
    }
};

const MyAccountsRow = ({ data }) => {
    const winnabilityText = getWinnabilityText(data.winnabilityCount);

    return (
        <tr className="odd:bg-dark-grey even:bg-custom-dark-desaturated-blue">
            <td className="pl-5 w-auto py-3">
                <p>{data.accountName}</p>
                <p className="font-thin">{data.accountType}</p>
            </td>
            <td>
                <p>{data.line}</p>
            </td>
            <td>
                <p>{data.broker}</p>
            </td>
            <td>
                <p>{data.renewalDate}</p>
            </td>
            <td>
                <p className="uppercase font-medium text-custom-bright-blue">
                    {data.premium}
                </p>
            </td>
            <td>
                <p className="uppercase">{data.ratedPremium}</p>
            </td>
            <td>
                <div
                    className={`w-14 h-6 rounded-full ${getLossRatioColor(
                        data.lossRatio
                    )} flex items-center justify-center px-3.5 py-2`}
                >
                    <p>{data.lossRatio}</p>
                </div>
            </td>
            <td>
                <div className="w-20 h-6 rounded-full bg-custom-blue/30 flex items-center justify-center px-7 py-2">
                    <p className="uppercase">{data.appetite}</p>
                </div>
            </td>
            <td>
                <div className="w-auto flex items-center gap-1">
                    <StatusDot text={data.statusText} />
                    <p>{data.statusText}</p>
                </div>
            </td>
            <td>
                <div className="w-11 h-6 rounded-full border border-custom-bright-blue flex items-center justify-center px-7 py-2">
                    <p className="uppercase">{data.triage}</p>
                </div>
            </td>
            <td>
                <div className="w-36 h-6 rounded-full border border-custom-bright-blue flex items-center justify-center px-7 py-2 gap-0.5">
                    <WinnabilityDots
                        count={data.winnabilityCount}
                        color="bg-custom-bright-blue"
                    />
                    <p className="text-custom-bright-blue text-nowrap">
                        {winnabilityText}
                    </p>
                </div>
            </td>
            <td>
                <ExpandIcon color={"white"} />
            </td>
        </tr>
    );
};

MyAccountsRow.propTypes = {
    data: PropTypes.object.isRequired,
};

export default MyAccountsRow;
