import React from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBTextArea } from 'mdb-react-ui-kit';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';




function Contacts() {
  return (
    <div>
    <h1 className='text-center m-3 p-3 text-danger'>Contacts</h1>
    <form className='w-50 mt-5 mb-5 p-5' style={{alignItems:'center',marginLeft:'25%',backgroundColor:'gray'}}>
    <MDBInput label='Enter Email' id='typeEmail' type='email'/>
    <br/>
    <MDBInput label='Enter Phone number' id='typePhone' type='tel' />
    <br />
    <MDBTextArea label='Remarks' id='textAreaExample' rows={4} />
    </form>
    
    <div style={{marginTop:'200px'}}>
    <MDBFooter className='text-center text-white' style={{ backgroundColor: 'black' }}>
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-2' style={{ backgroundColor: 'black' }}>
      Copyright @2024:
        
      </div>
    </MDBFooter>
    </div>
    </div>
  )
}

export default Contacts