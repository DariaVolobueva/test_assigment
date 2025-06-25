import Header from "./components/header/Header";
import Slides from "./components/slides/Slides";
import Dashboard from "./components/Dashboard";
import headerData from "./data/headerData.json";
import { useState } from "react";
import Accounts from "./components/Accounts";

const App = () => {
    const [activePage, setActivePage] = useState("Dashboard");

    const renderPage = () => {
        switch (activePage) {
            case "Dashboard":
                return <Dashboard />;
            case "Accounts":
                return <Accounts />;
            default:
                return <div>Сторінка не знайдена</div>;
        }
    };
    return (
        <>
            <Header data={headerData}></Header>
            <Slides onChangePage={setActivePage}></Slides>
            {renderPage()}
            <div className="absolute -z-10 bg-linear-0 w-10/12 h-2/6 bg-custom-blue-dart/20 blur-[200px] bottom-[-5%] right-0"></div>
            <div className="absolute -z-10 bg-linear-0 w-10/12 h-2/6 bg-custom-dark-side-of-the-moon blur-[200px] bottom-0 right-0"></div>
        </>
    );
};

export default App;
