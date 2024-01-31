import React from "react";
import Link from "next/link";

export const Logo = () => {
    return (
        <div className="logo">
            <Link legacyBehavior href="/" passHref>
                <a>
                    <img src={""} alt="Logo" />
                </a>
            </Link>
        </div>
    )
}