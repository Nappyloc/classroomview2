import React from 'react';
import
{
    MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn
} from "mdbreact";

const Card = () =>
{
    return (


        <MDBContainer>
            <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={true} multiItem>
                <MDBCarouselInner>
                    <MDBRow>
                        <MDBCarouselItem itemId="1">
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                    <MDBCardImage className="img-fluid" src="https://res.cloudinary.com/dking14/image/upload/v1595301626/FB%20Classroom/Wallet_Login_k4rzgc.jpg" />
                                    <MDBCardBody>
                                        <MDBCardTitle>FB Classroom Login</MDBCardTitle>
                                        <MDBCardText>
                                            The main landing page for the application
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                    <MDBCardImage className="img-fluid" src="https://res.cloudinary.com/dking14/image/upload/v1595301622/FB%20Classroom/Wallet_lead_fy800o.jpg" />
                                    <MDBCardBody>
                                        <MDBCardTitle>Live Event Management</MDBCardTitle>
                                        <MDBCardText>
                                            Application user's are able to view all Live Events as well as manage event attendee information.
                                            <br></br>
                                            <br></br>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                    <MDBCardImage className="img-fluid" src="https://res.cloudinary.com/dking14/image/upload/v1595301619/FB%20Classroom/Wallet_Payment_tg0jnm.jpg" />
                                    <MDBCardBody>
                                        <MDBCardTitle>Client Aquisition</MDBCardTitle>
                                        <MDBCardText>
                                            Application users are able to onboard new clients during events by collection fees using the integrated credit card and ACH terminal.
                    </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                    <MDBCardImage className="img-fluid" src="https://res.cloudinary.com/dking14/image/upload/v1595301615/FB%20Classroom/Dynamics_CRM_leqeqz.jpg" />
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <MDBCardBody>
                                        <MDBCardTitle>Backend Database Integration</MDBCardTitle>
                                        <MDBCardText>
                                            The application data flows effortlessly into the clients CRM of choice for reporting.
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                    <MDBCardImage className="img-fluid" src="https://res.cloudinary.com/dking14/image/upload/v1595301612/FB%20Classroom/LMS_Login_zzf4iy.jpg" />
                                    <MDBCardBody>
                                        <MDBCardTitle>Client Fulfillment</MDBCardTitle>
                                        <MDBCardText>
                                            The application is fully integrated with the customer fulfillment platform. User credentials are generated during the aquisition process.
                                            <br></br>
                                            <br></br>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBCard className="mb-2">
                                    <MDBCardImage className="img-fluid" src="https://res.cloudinary.com/dking14/image/upload/v1595301608/FB%20Classroom/LMS_Home_gvrbhp.jpg" />
                                    <MDBCardBody>
                                        <MDBCardTitle>Client Fulfillment</MDBCardTitle>
                                        <MDBCardText>
                                            New clients are able to access their purchase within seconds
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBCarouselItem>
                    </MDBRow>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>


    )
}
export default Card;