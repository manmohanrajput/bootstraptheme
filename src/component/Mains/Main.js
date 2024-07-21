import React from "react";
import Navbar from "../Navbar";
import Landing from "../Landing";
import Categories from "../Categories";
import Subscribe from "../Subscribe";
import Footer from "../Footer";
import Login from "../Login";

function Main({user,onLogout}) {
  return (
    <div>
      <Navbar user={user} onLogout={onLogout}/>
      <Landing />
      <Categories />
      <Subscribe />
      <Footer />
    </div>
  );
}



export default Main;
