import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBInputGroup,
    MDBBtn
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
         <MDBNavbar light bgColor='secondary'>
      <MDBContainer fluid>
        <MDBNavbarBrand>SHOW AND HIDE </MDBNavbarBrand>
        <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
          <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' />
          <MDBBtn outline>Search</MDBBtn>
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default Header