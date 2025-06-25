import PropTypes from "prop-types";
import ExpandIcon from "../../icons/ExpandIcon";
import BoatIcon from "../../icons/BoatIcon";
import StatusDot from "../myAccounts/StatusDot";

const PolicyRow = ({ policy, getLossRatioColor }) => (
    <tr className="odd:bg-dark-grey even:bg-custom-dark-desaturated-blue border-b border-b-custom-aeronautic">
        <td className="pl-5 w-auto py-3">
            <div className="flex flex-row gap-1 items-center">
                <div className="flex items-center justify-center aspect-square rounded-full bg-custom-bright-blue w-6 h-6">
                    <BoatIcon color="white" width={12} height={12} />
                </div>
                <p>{policy.line}</p>
            </div>
            <p className="text-custom-dark-grayish-blue">{policy.number}</p>
        </td>
        <td>
            <p>{policy.effDate}</p>
        </td>
        <td>
            <p>{policy.expDate}</p>
        </td>
        <td>
            <div className="w-auto flex items-center gap-1">
                <StatusDot text={policy.status} />
                <p>{policy.status}</p>
            </div>
        </td>
        <td>
            <p>{policy.expiringTech}</p>
        </td>
        <td>
            <p>{policy.expiringPremium}</p>
        </td>
        <td>
            <p>{policy.renewalToTech}</p>
        </td>
        <td>
            <p>{policy.renewalTech}</p>
        </td>
        <td>
            <p>{policy.renewalPremium}</p>
        </td>
        <td>
            <p
                className={`${
                    Number(policy.rateChange.slice(0, -1)) > 5
                        ? "text-custom-lanister-red"
                        : ""
                }`}
            >
                {policy.rateChange}
            </p>
        </td>
        <td>
            <div
                className={`w-14 h-6 rounded-full ${getLossRatioColor(
                    policy.lossRatio
                )} flex items-center justify-center px-3.5 py-2`}
            >
                <p>{policy.lossRatio}</p>
            </div>
        </td>
        <td>
            <ExpandIcon color="white" />
        </td>
    </tr>
);

PolicyRow.propTypes = {
    policy: PropTypes.object.isRequired,
    getLossRatioColor: PropTypes.func.isRequired,
};

export default PolicyRow;
