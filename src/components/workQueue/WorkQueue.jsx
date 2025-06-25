import { useState } from "react";
import workQueueData from "../../data/workQueueData.json";
import WorkQueueFilterButton from "./WorkQueueFilterButton";
import WorkQueueRow from "./WorkQueueRow";

const WorkQueue = () => {
    const [activeFilterIndex, setActiveFilterIndex] = useState(null);

    return (
        <div className="custom-xl1-2:row-start-1 custom-xl1-2:row-span-2 custom-xl1-2:col-start-1 custom-xl1-2:col-span-2 lg:row-start-1 lg:row-span-1 lg:col-start-1 lg:col-span-2 sm:col-start-1 sm:col-span-1 sm:row-start-1 sm:row-span-1 bg-dark-grey border border-custom-grey rounded-4xl px-6 pt-6 pb-9 w-auto">
            <h2 className="text-xl">Work Queue</h2>
            <div className="flex flex-row gap-2 mt-5">
                {workQueueData.filters.map((filter, index) => (
                    <WorkQueueFilterButton
                        key={index}
                        title={filter.title}
                        count={filter.count}
                        isActive={activeFilterIndex === index}
                        onClick={() => setActiveFilterIndex(index)}
                    />
                ))}
            </div>
            <div className="w-full overflow-x-auto mt-6 custom-scrollbar">
                <div className="max-h-96 overflow-y-auto custom-scrollbar">
                    <table className="table-auto min-w-4xl text-left w-full text-wrap text-xs">
                        <thead className="uppercase bg-custom-desaturated-blue h-8">
                            <tr>
                                <th className="font-thin pl-5">ORIGINATOR</th>
                                <th className="font-thin">CLIENT/LINE</th>
                                <th className="font-thin">TYPE</th>
                                <th className="font-thin">STATUS</th>
                                <th className="font-thin">CREATED</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {workQueueData.rows.map((row, index) => (
                                <WorkQueueRow key={index} {...row} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default WorkQueue;
