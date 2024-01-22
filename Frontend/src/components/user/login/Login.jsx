import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Login.css'
import { userLogin } from '../../../api/userApi';

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
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../../../store/slice/Slice';

function Login() {
     const [email, setEmail] = useState()
     const [password, setPassword] = useState()
     const [error, setError] = useState()
     const navigate = useNavigate()
     const dispath = useDispatch()

     const handdleLogin = async (e) => {
          e.preventDefault()

          const loginResponse = await userLogin({
               email, password
          })

          if (loginResponse.status) {
               localStorage.setItem('token', loginResponse.userData._id)
               dispath(setUserDetails({
                    id: loginResponse.userData._id,
                    name: loginResponse.userData.name,
                    email: loginResponse.userData.email,
                    image: loginResponse.userData.image,
                    phone: loginResponse.userData.phone,
               }))
               navigate('/')
          }          
     }

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

                                   <MDBInput onChange={(e) => {
                                        setEmail(e.target.value)
                                   }} wrapperClass='mb-4' label='Email address' id='form1' type='email' />
                                   <MDBInput onChange={(e) => {
                                        setPassword(e.target.value)
                                   }} wrapperClass='mb-4' label='Password' id='form2' type='password' />


                                   {/* <div className="d-flex justify-content-evenly mx-4 mb-4">
                                        <a href="!#">Forgot password?</a>
                                   </div> */}
                                   <p style={{ error }}></p>
                                   <Button onClick={handdleLogin} className='mb-4 w-100'>Login</Button>


                              </MDBCardBody>

                         </MDBCol>

                    </MDBRow>

               </MDBCard>
          </MDBContainer>
     );
}

export default Login;