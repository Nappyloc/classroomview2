import React from 'react';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardTitle } from "mdbreact";



const Header = () =>
{
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol>
                    <MDBJumbotron style={{ padding: 0 }}>
                        <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`} }>
                            <MDBCol className="py-5">
                                <MDBCardTitle className="h1-responsive pt-3 m-5 font-weight-bold">FB Classroom</MDBCardTitle>
                                <p className="mx-5 mb-5 font-weight-bold">The Event Management and Client Aquisition Applicaiton</p>
                            </MDBCol>
                        </MDBCol>
                    </MDBJumbotron>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )

}

export default Header;