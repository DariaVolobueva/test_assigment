import ExpandIcon from "../../icons/ExpandIcon";

const statusColorMap = {
    New: "bg-custom-bright-blue",
    "Pending Review": "bg-custom-minion-yellow",
    Completed: "bg-custom-ceramic-green",
};

const getInitials = (name) => {
    if (!name) return "";
    const words = name.trim().split(" ");
    if (words.length === 1) {
        return words[0][0].toUpperCase();
    } else {
        return (words[0][0] + words[1][0]).toUpperCase();
    }
};

const WorkQueueRow = ({
    originatorName,
    client,
    line,
    type,
    status,
    created,
}) => {
    const dotColorClass = statusColorMap[status] || "bg-gray-500";
    const originatorInitials = getInitials(originatorName);

    return (
        <tr className="odd:bg-dark-grey even:bg-custom-dark-desaturated-blue">
            <td className="pl-5 w-fit">
                <div className="flex gap-1 items-center py-4 w-fit">
                    <div className="h-8 w-8 aspect-square bg-linear-30 from-custom-blue-tr to-custom-blue rounded-[50%] flex items-center justify-center">
                        <p className="uppercase">{originatorInitials}</p>
                    </div>
                    <p>{originatorName}</p>
                </div>
            </td>
            <td>
                <p>{client}</p>
                <p className="font-thin">{line}</p>
            </td>
            <td>
                <p>{type}</p>
            </td>
            <td>
                <div className="flex items-center gap-1">
                    <div
                        className={`w-2.5 h-2.5 rounded-full ${dotColorClass}`}
                    ></div>
                    <p>{status}</p>
                </div>
            </td>
            <td>{created}</td>
            <td>
                <ExpandIcon color="white" />
            </td>
        </tr>
    );
};

export default WorkQueueRow;
