import React, { Children } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
  return <div className="layout">
    <Head>
      <title>Davinci</title>
    </Head>
    <header>
      <Navbar/>
    </header>
    <main>
      {children} 
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
};

export default Layout;
