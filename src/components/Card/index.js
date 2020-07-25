import React, { Component } from 'react';
import
{
    MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn
} from "mdbreact";

class Card extends Component
{

    state = {
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        modal5: false,
        modal6: false
    }
    toggle = nr => () =>
    {
        let modalNumber = 'modal' + nr
        this.setState( {
            [ modalNumber ]: !this.state[ modalNumber ]
        } );
    }







    render ()
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
                                            <MDBBtn color="primary" onClick={this.toggle( 1 )}>View</MDBBtn>
                                        </MDBCardBody>

                                    </MDBCard>
                                    <MDBContainer className="d-flex justify-content-center">
                                        <MDBModal isOpen={this.state.modal1} toggle={this.toggle( 1 )} size="lg">
                                            <MDBModalHeader toggle={this.toggle( 1 )}>FB Classroom Login</MDBModalHeader>
                                            <MDBModalBody>
                                                <MDBCard>
                                                    <MDBCardImage className="moimg" src="https://res.cloudinary.com/dking14/image/upload/w_800,h_600,c_scale/v1595301626/FB%20Classroom/Wallet_Login_k4rzgc.jpg" alt="Login Screen" />
                                                </MDBCard>
                                            </MDBModalBody>
                                            <MDBModalFooter>
                                                <MDBBtn color="primary" onClick={this.toggle( 1 )}>Close</MDBBtn>
                                            </MDBModalFooter>
                                        </MDBModal>
                                    </MDBContainer>

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
                                            <MDBBtn color="primary" onClick={this.toggle( 2 )}>View</MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                    <MDBContainer>
                                        <MDBModal isOpen={this.state.modal2} toggle={this.toggle( 2 )} size="lg">
                                            <MDBModalHeader toggle={this.toggle( 2 )}>Live Event Management</MDBModalHeader>
                                            <MDBModalBody>
                                                <MDBCard>
                                                    <MDBCardImage className="moimg" src="https://res.cloudinary.com/dking14/image/upload/w_800,h_600,c_scale/v1595301622/FB%20Classroom/Wallet_lead_fy800o.jpg" alt="Login Screen" />
                                                </MDBCard>
                                            </MDBModalBody>
                                            <MDBModalFooter>
                                                <MDBBtn color="primary" onClick={this.toggle( 2 )}>Close</MDBBtn>
                                            </MDBModalFooter>
                                        </MDBModal>
                                    </MDBContainer>
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBCard className="mb-2">
                                        <MDBCardImage className="img-fluid" src="https://res.cloudinary.com/dking14/image/upload/v1595301619/FB%20Classroom/Wallet_Payment_tg0jnm.jpg" />
                                        <MDBCardBody>
                                            <MDBCardTitle>Client Aquisition</MDBCardTitle>
                                            <MDBCardText>
                                                Application users are able to onboard new clients during events by collection fees using the integrated credit card and ACH terminal.
                                        </MDBCardText>
                                            <MDBBtn color="primary" onClick={this.toggle( 3 )}>View</MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                    <MDBContainer>
                                        <MDBModal isOpen={this.state.modal3} toggle={this.toggle( 3 )} size="lg">
                                            <MDBModalHeader toggle={this.toggle( 3 )}>Client Aquisition</MDBModalHeader>
                                            <MDBModalBody>
                                                <MDBCard>
                                                    <MDBCardImage className="moimg" src="https://res.cloudinary.com/dking14/image/upload/w_800,h_600,c_scale/v1595301619/FB%20Classroom/Wallet_Payment_tg0jnm.jpg" alt="Login Screen" />
                                                </MDBCard>
                                            </MDBModalBody>
                                            <MDBModalFooter>
                                                <MDBBtn color="primary" onClick={this.toggle( 3 )}>Close</MDBBtn>
                                            </MDBModalFooter>
                                        </MDBModal>
                                    </MDBContainer>
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
                                            <MDBBtn color="primary" onClick={this.toggle( 4 )}>View</MDBBtn>

                                        </MDBCardBody>
                                    </MDBCard>
                                    <MDBContainer>
                                        <MDBModal isOpen={this.state.modal4} toggle={this.toggle( 4 )} size="lg">
                                            <MDBModalHeader toggle={this.toggle( 4 )}>Backend Database Integration</MDBModalHeader>
                                            <MDBModalBody>
                                                <MDBCard>
                                                    <MDBCardImage className="moimg" src="https://res.cloudinary.com/dking14/image/upload/w_800,h_600,c_scale/v1595301615/FB%20Classroom/Dynamics_CRM_leqeqz.jpg" alt="Login Screen" />
                                                </MDBCard>
                                            </MDBModalBody>
                                            <MDBModalFooter>
                                                <MDBBtn color="primary" onClick={this.toggle( 4 )}>Close</MDBBtn>
                                            </MDBModalFooter>
                                        </MDBModal>
                                    </MDBContainer>


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
                                            <MDBBtn color="primary" onClick={this.toggle( 5 )}>View</MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                    <MDBContainer>
                                        <MDBModal isOpen={this.state.modal5} toggle={this.toggle( 5 )} size="lg">
                                            <MDBModalHeader toggle={this.toggle( 5 )}>Client Fulfillment</MDBModalHeader>
                                            <MDBModalBody>
                                                <MDBCard>
                                                    <MDBCardImage className="moimg" src="https://res.cloudinary.com/dking14/image/upload/w_800,h_700,c_scale/v1595301612/FB%20Classroom/LMS_Login_zzf4iy.jpg" alt="Login Screen" />
                                                </MDBCard>
                                            </MDBModalBody>
                                            <MDBModalFooter>
                                                <MDBBtn color="primary" onClick={this.toggle( 5 )}>Close</MDBBtn>
                                            </MDBModalFooter>
                                        </MDBModal>
                                    </MDBContainer>
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
                                            </MDBCardText>
                                            <MDBBtn color="primary" onClick={this.toggle( 6 )}>View</MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                    <MDBContainer>
                                        <MDBModal isOpen={this.state.modal6} toggle={this.toggle( 6 )} size="lg">
                                            <MDBModalHeader toggle={this.toggle( 6 )}>Client Fulfillment</MDBModalHeader>
                                            <MDBModalBody>
                                                <MDBCard>
                                                    <MDBCardImage className="moimg" src="https://res.cloudinary.com/dking14/image/upload/w_800,h_700,c_scale/v1595301608/FB%20Classroom/LMS_Home_gvrbhp.jpg" alt="Login Screen" />
                                                </MDBCard>
                                            </MDBModalBody>
                                            <MDBModalFooter>
                                                <MDBBtn color="primary" onClick={this.toggle( 6 )}>Close</MDBBtn>
                                            </MDBModalFooter>
                                        </MDBModal>
                                    </MDBContainer>
                                </MDBCol>
                            </MDBCarouselItem>
                        </MDBRow>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>



        )
    }

}
export default Card;