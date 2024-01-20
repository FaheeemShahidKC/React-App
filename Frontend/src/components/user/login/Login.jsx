import React from 'react';
import { Button } from 'react-bootstrap';
import './Login.css'

import {
     MDBContainer,
     MDBCard,
     MDBCardBody,
     MDBCardImage,
     MDBRow,
     MDBCol,
     MDBInput
}
     from 'mdb-react-ui-kit';

function Login() {
     return (
          <MDBContainer className='my-5'>
               <MDBCard>

                    <MDBRow className='g-0 d-flex align-items-center'>

                         <MDBCol md='4'>
                              <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
                         </MDBCol>

                         <MDBCol md='8'>

                              <MDBCardBody>
                                   <h1 style={{ fontWeight: 'bold' }}>Login</h1>

                                   <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' />
                                   <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />


                                   <div className="d-flex justify-content-evenly mx-4 mb-4">
                                        <a href="!#">Forgot password?</a>
                                   </div>

                                   <Button className='mb-4 w-100'>Login</Button>


                              </MDBCardBody>

                         </MDBCol>

                    </MDBRow>

               </MDBCard>
          </MDBContainer>
     );
}

export default Login;