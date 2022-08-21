import React from 'react';

import { NavLink } from 'react-router-dom';




const Header = () => {
    return (

        <header className="">
            <div className="pt-16 pb-9">
                <h1 className=" text-[#4E598C] font-semibold">Complete your Purchase</h1>
            </div>
            <div className=" text-[#BDBDBD] text-[18px]">
                <ul className="flex justify-between gap-5">
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? "link-active" : "")}
                            to="/">Personal Info</NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? "link-active" : "")}
                            to="/src/pages/Billing_info.jsx">Billing Info</NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? "link-active" : "")}
                            to="/src/pages/Confirm_payment.jsx">Confirm Payment</NavLink>
                    </li>

                </ul>
            </div>
        </header>
    )
}

export default Header