import PropTypes from "prop-types";
import MyAccountsRow from "./MyAccountsRow";

const MyAccountsTable = ({ rows }) => {
    return (
        <div className="w-full overflow-x-auto">
            <table className="table-auto min-w-5xl w-full text-left mt-6 text-wrap text-xs">
                <thead className="uppercase bg-custom-desaturated-blue h-8">
                    <tr>
                        <th className="font-thin pl-5">Account name/type</th>
                        <th className="font-thin">LINE</th>
                        <th className="font-thin">Broker</th>
                        <th className="font-thin">renewal date</th>
                        <th className="font-thin">premium</th>
                        <th className="font-thin">rated premium</th>
                        <th className="font-thin">loss ratioE</th>
                        <th className="font-thin">appetite</th>
                        <th className="font-thin">status</th>
                        <th className="font-thin">triage</th>
                        <th className="font-thin">winnability</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <MyAccountsRow
                            key={row.id || row.accountName}
                            data={row}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

MyAccountsTable.propTypes = {
    rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MyAccountsTable;
