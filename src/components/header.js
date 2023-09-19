import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const { authUser } = useSelector((state) => state.user);

    return (
        authUser && (
            <div className="fixed left-0 top-0 bg-white w-full flex items-center justify-between px-5 h-[75px] border-b z-50">
                <Link className="heading-lg font-bold" to="/">EXPLORE</Link>
                <div className="flex items-center space-x-3 text-grey-dark">
                    <p>{authUser?.firstName + " " + authUser?.lastName}</p>
                    <div className="w-12 rounded-full">
                        <img
                            src={authUser?.image}
                            alt="user"
                            className="rounded-full"
                        />
                    </div>
                </div>
            </div>
        )
    );
};

export default Header;