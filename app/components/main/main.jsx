import React from "react";
import Header from "../header/header";

const Main = ({children}) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}

export default Main;