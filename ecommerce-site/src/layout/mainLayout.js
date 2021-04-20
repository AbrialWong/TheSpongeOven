import React from "react";

import Header from "./../components/Header/index.js";
import Footer from "./../components/Footer/footer.js";
import Copyright from "./../components/Copyright/copyright.js";



const mainLayout = props =>{
    return (
        <div>
        <Header />
        <div className="content">
            {props.children}
            </div>
        <Footer />
        <Copyright />
    </div>
    );
};

export default mainLayout;

/*
import Header from "../components/Header";
import Footer from "./../components/Footer";

const HomepageLayout = props =>{
    return(
        <div className="fullHeight">
        <Header/>
        {props.children}
        <Footer/>
        </div>
    );
};
*/