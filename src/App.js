import React, { Component } from "react";

import NavBarComponent from "./components/firstPart/navBarComponent";
import Glasses from "./components/firstPart/Glasses";
import Products from "./components/forthPart/productsComponent";

import SliderComponent from "./components/fifthPart/SliderComponent";
import FollowComponent from "./components/sixthPart/followComponent";
import ContactsComponent from "./components/seventhPart/contactsComponent";

import SeperationComponent from './components/thirdPart/seperationComponent'

import Intro from "./components/firstPart/Intro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

import TypeComponent from "./components/secondPart/typesComponent";
import TrendsComponent from "./components/secondPart/trendsComponent";
import BranchesBarComponent from "./components/secondPart/branchesBarComponent";
import { BRANDS } from "./shared/products";
import { MALLS } from "./shared/products";


class App extends Component {

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className=" col-6 col-md-4">
            <div className="row m-1 mb-5">
              <div className=" col-9 mt-1">
                <span id="black">Happy </span>
                <span className="color">V</span>
                <span id="black">ision</span>
              </div>
              <div className=" col-3 mt-3">
                <FontAwesomeIcon icon={faAlignJustify} />
              </div>
            </div>

            <div className="row">
              <div className="col-12 ">
                <Intro />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 p-0 m-0">
            <img
              src="https://i.pinimg.com/564x/e9/00/0d/e9000dab632f80af73a0818c6baf1b94.jpg"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
          <div className=" col-12 col-md-4 order-last order-sm-0">
            <div className="row">
              <NavBarComponent />
            </div>
            <div className="row">
              <Glasses />
            </div>
          </div>
        </div>

        <div className="row branchesBar">
          <BranchesBarComponent />
        </div>

        <div className="row mt-5">
          <TypeComponent />
        </div>
        <div className="row mt-5">
          <TrendsComponent />
        </div>
        <div className="row separatedBar ">
          <SeperationComponent />
        </div>
        <div className="m-1 ">
        < SliderComponent items= {MALLS} height="440" />
                </div>
        <div className="row m-1 ">
          <Products />
        </div>
        <div className="row justify-content-center align-items-center mt-5">

          <strong className="col-12 mb-auto ">
            OUR HAPPY VISION BRANDS
          </strong>
        </div>

        <div className="m-1 ">
        < SliderComponent items= {BRANDS} height="130"/>
        </div>



        <div className=" bg-light mt-5">
          <div className="row m-1 ">
            <FollowComponent />
          </div>

          <div className="row m-1 " name="foo">
            <ContactsComponent />
          </div>
        </div>
      </div>
    );
  }
}
export default App;

// import { Navbar, NavbarBrand } from 'reactstrap';
// // fontAwsome
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
// library.add(faStroopwafel)
// // end of font awsome
