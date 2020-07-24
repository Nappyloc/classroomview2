import React, { Component } from "react";
import {MDBContainer} from "mdbreact";
import Header from "./components/Header"
import Card from "./components/Card"
import "./index.css";

class App extends Component
{
  render ()
  {
    return (
      <body>
        <MDBContainer className="w-responsive text-center mx-auto p-3 mt-2">
          <Header />
          <Card/>


        </MDBContainer>

      </body>

    );
  }
}

export default App;
