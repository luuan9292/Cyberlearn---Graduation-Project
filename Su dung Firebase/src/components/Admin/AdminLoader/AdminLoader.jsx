import React from "react";

export default function AdminLoader() {
    return (
        <div className="adminloader__wrapper">
            <div className="flower-spinner">
                <div className="dots-container">
                    <div className="bigger-dot">
                        <div className="smaller-dot"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
