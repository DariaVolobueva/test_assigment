import React from "react";
import WorkQueue from "./workQueue/WorkQueue";
import PortfolioGoals from "./portfolioGoals/PortfolioGoals";
import QuickActions from "./quickAction/QuickActions";
import MarketIntelligence from "./marketIntelligence/MarketIntelligence";
import MyAccount from "./myAccounts/MyAccounts";

const Main = () => {
    return (
        <main className="ml-4 md:ml-16 xl:ml-32 mr-4 md:mr-16 xl:mr-36">
            <div className="grid gap-4 col-span-4 custom-xl1-2:grid-cols-[2fr_1fr_1fr_1fr] lg:grid-cols-1 sm:grid-cols-1 row-span-3">
                <WorkQueue></WorkQueue>
                <PortfolioGoals></PortfolioGoals>
                <QuickActions></QuickActions>
                <MarketIntelligence></MarketIntelligence>
                <MyAccount></MyAccount>
            </div>
        </main>
    );
};

export default Main;
