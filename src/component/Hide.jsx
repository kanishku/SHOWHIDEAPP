import React, { useState } from "react"
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit"
import { MDBBtn } from "mdb-react-ui-kit"

function Content() {
  const [show, setShow] = useState()

  function visible() {
    setShow("Hello,Welcome To Kerala Nice To Meet You")
  }

  function inVisible() {
    setShow("")
  }

  return (
    <div>
      <MDBTable>
        <MDBTableHead>
          <tr className="text-center p-4">
            <th scope="col"></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr className="table-info text-center">
            <th scope="row">
              <img src="https://images.unsplash.com/photo-1633989464081-16ccd31287a1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="280" alt="" loading="lazy" />
              <br /> <br /> <br />
              <h1>{show}</h1>
              {/* button */}
              <MDBBtn color="primary" rippleColor="dark" onClick={visible}>
                SHOW
              </MDBBtn>
              &nbsp; &nbsp;
              <MDBBtn color="success" onClick={inVisible}>
                HIDE
              </MDBBtn>
            </th>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </div>
  )
}

export default Content