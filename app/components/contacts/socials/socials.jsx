import React from "react";
import Link from "next/link";
import { IoIosMail, IoLogoInstagram, IoLogoGithub } from "react-icons/io"

export const Socials = () => {
    return (
        <div>
            <h1>Some places you can find me...</h1>
            <div>
                <Link legacyBehavior href={""} passHref>
                    <a>
                        <IoIosMail />
                    </a>
                </Link>
                <Link legacyBehavior href={"https://github.com/salcantara0309"} passHref>
                    <a>
                        <IoLogoGithub />
                    </a>
                </Link>
                <Link legacyBehavior href={""} passHref>
                    <a>
                        <IoLogoInstagram />
                    </a>
                </Link>
            </div>
        </div>
    )
}