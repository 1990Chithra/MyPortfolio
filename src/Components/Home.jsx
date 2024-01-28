import React from 'react';
import './Home.css';
import {MDBBtn} from 'mdb-react-ui-kit';

function Home() {
  return (
    <div>
      <section id="home">
        <div className='row d-flex'>
          <div className='col-6 mt-5 mb-5'>
             <div className='title'>
             <p style={{marginLeft:'150px'}}><b>Hi I am</b></p>
              <div id="box">
                <p id="flashlight">
                <span id="flash">CHITHRA</span>
                <span id="light">BALAKRISHNAN</span>
                </p>
              </div>
              <div class="line">
                 <h3 class='lineUp'style={{marginRight:'70px'}}>I am a Software Developer</h3>
              </div>
              <div>
              <MDBBtn href='/Contacts' className='btn btn-outline-danger'style={{marginLeft:'150px'}}>Hire Me</MDBBtn>
              <a href="www.linkedin.com/in/chithra-balakrishnan-746138176"><i class="fa-brands fa-linkedin fa-beat" style={{marginLeft:'20px'}}></i></a>
              <a href="https://github.com/1990Chithra"><i class="fa-brands fa-github fa-beat" style={{marginLeft:'20px'}}></i></a>
              </div>

             </div>
          </div>
          <div className='col-6 mt-5 mb-5'>
          <img className='image-shadow' src="https://images.unsplash.com/photo-1623091410901-00e2d268901f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D" alt="" width={'400px'} height={'500'} style={{borderRadius:'20px',marginLeft:'100px'}}/>

          </div>
      </div> 
      </section>
        
    </div>   
  ) 
}

export default Home