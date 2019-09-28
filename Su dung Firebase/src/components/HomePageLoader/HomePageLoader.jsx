import React from "react";

export default function HomePageLoader() {
    return (
        <div className="HomePageLoader__wrapper">
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
