import React from "react";
import Link from "next/link";

export const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link legacyBehavior href="/" passHref>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/about" passHref>
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/work" passHref>
                            <a>Work</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/contact" passHref>
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}