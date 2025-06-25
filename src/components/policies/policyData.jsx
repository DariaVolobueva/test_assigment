import BoatIcon from "../../icons/BoatIcon";
import ShieldIcon from "../../icons/ShieldIcon";
import WorkersIcon from "../../icons/WorkersIcon";
import BuildingIcon from "../../icons/BuildingIcon";
import UmbrellaIcon from "../../icons/UmbrellaIcon";

const policyData = [
    {
        icon: <BoatIcon color="#3B82F6" />,
        title: "Marine Cargo",
        premium: "$625,000",
        eff: "6/30/2026",
    },
    {
        icon: <ShieldIcon color="#3BB979" />,
        title: "General Liability",
        premium: "$175,000",
        eff: "6/30/2026",
    },
    {
        icon: <WorkersIcon color="#6A3BF6" />,
        title: "Workers Comp",
        premium: "$75,000",
        eff: "---",
    },
    {
        icon: <BuildingIcon color="#FDD261" />,
        title: "Prorerty",
        premium: "$64,829.83",
        eff: "---",
    },
    {
        icon: <UmbrellaIcon color="#B93B3B" />,
        title: "Umbrella",
        premium: "$275,000",
        eff: "13/03/2026",
    },
];

export default policyData;
