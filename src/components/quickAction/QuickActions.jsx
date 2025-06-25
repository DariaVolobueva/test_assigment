import React from "react";
import QuickActionButton from "./QuickActionButton";

const QuickActions = () => {
    const quickActionsData = [
        "New Submission",
        "QuoteBuilder",
        "Risks Models",
        "Documents Upload",
    ];

    return (
        <div className="custom-xl1-2:col-start-4 custom-xl1-2:col-span-1 custom-xl1-2:row-start-1 custom-xl1-2:row-span-1 lg:col-start-1 lg:col-span-1 lg:row-start-2 lg:row-span-1 sm:col-start-1 sm:col-span-1 sm:row-start-3 sm:row-span-1 bg-dark-grey border border-custom-grey rounded-4xl px-6 pt-6 pb-4">
            <h2 className="text-xl">Quick Actions</h2>
            <div className="flex flex-col items-center justify-center gap-1 mt-7">
                {quickActionsData.map((action, index) => (
                    <QuickActionButton key={index + "3"} label={action} />
                ))}
            </div>
        </div>
    );
};

export default QuickActions;
