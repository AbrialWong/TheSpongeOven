import React from "react";

import { Header, Footer, Copyright } from "./../components";

const mainLayout = (props) => {
  return (
    <div>
      <Header />
      <div className="content">{props.children}</div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default mainLayout;
