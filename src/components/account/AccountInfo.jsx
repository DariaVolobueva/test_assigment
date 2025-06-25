import React from "react";
import img from "../../assets/Maritime-logo.jpg";

const AccountInfo = () => {
    return (
        <div className="flex flex-row gap-5 items-center">
            <div>
                <img
                    className="rounded-full"
                    src={img}
                    alt="account logo"
                />
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    <p className="text-4xl font-thin">
                        Maritime Logistics Corp
                    </p>
                </div>
                <div className="flex flex-row text-xs">
                    <div className="border-r border-custom-grey text-wrap pr-2.5">
                        <p>425 Harbor Boulevard, Suite 300 Seattle, WA 98104</p>
                    </div>
                    <div className="border-r border-custom-grey text-wrap px-2.5">
                        <p className="uppercase text-custom-ashy-blue font-medium">
                            existing account
                        </p>
                        <p>54383</p>
                    </div>
                    <div className="border-r border-custom-grey text-wrap px-2.5">
                        <p className="uppercase text-custom-ashy-blue font-medium">
                            broker
                        </p>
                        <p>Marsh McLennon</p>
                    </div>
                    <div className="text-wrap px-2.5">
                        <p className="uppercase text-custom-ashy-blue font-medium">
                            underwriter
                        </p>
                        <p>Kate Johnson</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountInfo;
