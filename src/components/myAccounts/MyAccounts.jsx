import React, { useState } from "react";
import SearchInput from "./SearchInput";
import ActionButtons from "./MyAccountsButton";
import MyAccountsTable from "./MyAccountsTable";
import myAccountsData from "../../data/myAccount.json";

const MyAccounts = () => {
    const [rows, setRows] = useState(myAccountsData);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        const filteredRows = myAccountsData.filter(
            (row) =>
                row.accountName.toLowerCase().includes(term) ||
                row.accountType.toLowerCase().includes(term) ||
                row.line.toLowerCase().includes(term) ||
                row.broker.toLowerCase().includes(term)
        );
        setRows(filteredRows);
    };

    // Заглушки для кнопок
    const handleFilter = () => alert("Filter clicked");
    const handleSort = () => alert("Sort clicked");
    const handleGroup = () => alert("Group clicked");
    const handleNew = () => alert("New clicked");

    return (
        <div className="custom-xl1-2:col-span-4 custom-xl1-2:row-span-1 custom-xl1-2:row-start-3 custom-xl1-2:col-start-1 lg:col-start-1 lg:col-span-4 lg:row-start-3 lg:row-span-1 sm:col-start-1 sm:col-span-1 sm:row-start-5 sm:row-span-1 bg-dark-grey border border-custom-grey rounded-4xl pl-5 pr-7 pt-6 pb-9 w-auto">
            <div className="flex gap-4 flex-wrap">
                <h2 className="text-xl">My Account</h2>
                <SearchInput value={searchTerm} onChange={handleSearchChange} />
                <ActionButtons
                    onFilter={handleFilter}
                    onSort={handleSort}
                    onGroup={handleGroup}
                    onNew={handleNew}
                />
            </div>
            <MyAccountsTable rows={rows} />
        </div>
    );
};

export default MyAccounts;
