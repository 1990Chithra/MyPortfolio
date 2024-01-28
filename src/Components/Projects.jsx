import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,

  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import image1 from '../Assets/css1.jpg'
import image2 from '../Assets/css2.jpg'
import image3 from '../Assets/css3.jpg'
import image4 from '../Assets/css4.jpg'
import '../Components/Projects.css'
import js2 from '../Assets/js2.jpg'
import js4 from '../Assets/js4.jpg'
import js5 from '../Assets/js5.jpg'
import pic1 from '../Assets/pic1.jpg'
import pic2 from '../Assets/pic2.jpg'
import pic3 from '../Assets/pic3.jpg'
import pic4 from '../Assets/pic4.jpg'
import pic5 from '../Assets/pic5.jpg'
import pic6 from '../Assets/pic6.jpg'
import pic7 from '../Assets/pic7.jpg'





function Projects() {
  return (
    <div className=' container mt-5 mb-5'>
        <h1 className='text-center m-3 p-3 text-danger'>Projects</h1>
        <div className='row text-center mb-5' style={{justifyContent:'space-evenly'}}>
          <h4 className='text-info pb-3'><b>HTML & CSS</b></h4>
          <div className='col-3'>
          <MDBCard width={'500px'} height={'300px'}>
            <MDBCardImage src={image1}  alt=''/>
              <MDBCardBody>
              <MDBCardTitle>Budget Bites</MDBCardTitle>
              <MDBBtn href='https://budget-mom-fcacb5.netlify.app/' className='btn btn-outline-danger'>Visit</MDBBtn>
            </MDBCardBody>
          </MDBCard>  
          </div>
          <div className='col-3'>
          <MDBCard width={'500px'} height={'300px'}>
            <MDBCardImage src={image2}  alt=''/>
              <MDBCardBody>
              <MDBCardTitle>Empaire Furniture</MDBCardTitle>
              <MDBBtn href='https://empire-furniture-177256.netlify.app/' className='btn btn-outline-danger'>Visit</MDBBtn>
            </MDBCardBody>
          </MDBCard>  
          </div>
          <div className='col-3'>
          <MDBCard width={'500px'} height={'300px'}>
            <MDBCardImage src={image3}  alt=''/>
              <MDBCardBody>
              <MDBCardTitle>Book Heven</MDBCardTitle>
              <MDBBtn href='https://bookheven-gallery-377b25.netlify.app/' className='btn btn-outline-danger'>Visit</MDBBtn>
            </MDBCardBody>
          </MDBCard>  
          </div>
          <div className='col-3'>
          <MDBCard width={'500px'} height={'300px'}>
            <MDBCardImage src={image4}  alt=''/>
              <MDBCardBody>
              <MDBCardTitle>Luminar Website</MDBCardTitle>
              <MDBBtn href='https://chithra-luminarclone-8b27fb.netlify.app/' className='btn btn-outline-danger'>Visit</MDBBtn>
            </MDBCardBody>
          </MDBCard>  
          </div>

        </div>
        <hr/>
        <div className='row text-center mb-5' style={{justifyContent:'space-evenly'}}>
          <h4 className='text-info pb-2'><b>JAVA SCRIPT</b></h4>
          <div className='col-3'>
          <MDBCard width={'500px'} height={'300px'}>
            <MDBCardImage src={js2}  alt=''/>
              <MDBCardBody>
              <MDBCardTitle>Car World</MDBCardTitle>
              <MDBBtn href='https://budget-mom-fcacb5.netlify.app/' className='btn btn-outline-danger'>Visit</MDBBtn>
            </MDBCardBody>
          </MDBCard>  
          </div>
          <div className='col-3'>
          <MDBCard width={'500px'} height={'300px'}>
            <MDBCardImage src={js4}  alt=''/>
              <MDBCardBody>
              <MDBCardTitle>Online Bank</MDBCardTitle>
              <MDBBtn href='https://online-banking-localstorage-48fff9.netlify.app/' className='btn btn-outline-danger'>Visit</MDBBtn>
            </MDBCardBody>
          </MDBCard>  
          </div>
          <div className='col-3'>
          <MDBCard width={'500px'} height={'300px'}>
            <MDBCardImage src={js5}  alt=''/>
              <MDBCardBody>
              <MDBCardTitle>Budget Mom</MDBCardTitle>
              <MDBBtn href='https://budget-mom-fcacb5.netlify.app/' className='btn btn-outline-danger'>Visit</MDBBtn>
            </MDBCardBody>
          </MDBCard>  
          </div>
        </div>
        <hr />
        <div className='row text-center mb-5 mt-5' style={{justifyContent:'space-evenly'}}>
          <h4 className='text-info pb-2'><b>REACT</b></h4>
          <div className='col-3'>
          <MDBCard width={'500px'} height={'300px'}>
            <MDBCardImage src={pic1}  alt=''/>
              <MDBCardBody>
              <MDBCardTitle>BMI Calculator</MDBCardTitle>
              <MDBBtn href='https://bmi-calculator-chithra-ec8826.netlify.app/' className='btn btn-outline-danger'>Visit</MDBBtn>
            </MDBCardBody>
          </MDBCard>  
          </div>
          <div className='col-3'>
          <MDBCard width={'500px'} height={'300px'}>
            <MDBCardImage src={pic2}  alt=''/>
              <MDBCardBody>
              <MDBCardTitle>Shopping Cart</MDBCardTitle>
              <MDBBtn href='https://apifetching-shoppingcart-b4ba17.netlify.app/' className='btn btn-outline-danger'>Visit</MDBBtn>
            </MDBCardBody>
          </MDBCard>  
          </div>
          <div className='col-3'>
          <MDBCard width={'500px'} height={'300px'}>
            <MDBCardImage src={pic3}  alt=''/>
              <MDBCardBody>
              <MDBCardTitle>Restaurant App</MDBCardTitle>
              <MDBBtn href='https://cafe-spot-restaurant-app.netlify.app/' className='btn btn-outline-danger'>Visit</MDBBtn>
            </MDBCardBody>
          </MDBCard>  
          </div>
          <div className='col-3'>
          <MDBCard width={'500px'} height={'300px'}>
            <MDBCardImage src={pic4}  alt=''/>
              <MDBCardBody>
              <MDBCardTitle>Discount Calculator</MDBCardTitle>
              <MDBBtn href='https://discount-calculator-chithra.netlify.app/' className='btn btn-outline-danger'>Visit</MDBBtn>
            </MDBCardBody>
          </MDBCard>  
          </div>
        </div>
        <div className='row text-center mb-5 mt-5' style={{justifyContent:'space-evenly'}}>
        <div className='col-3'>
        <MDBCard width={'500px'} height={'300px'}>
            <MDBCardImage src={pic5}  alt=''/>
              <MDBCardBody>
              <MDBCardTitle>Movie Finder</MDBCardTitle>
              <MDBBtn href='https://movie-fetch-34006b.netlify.app/' className='btn btn-outline-danger'>Visit</MDBBtn>
            </MDBCardBody>
          </MDBCard>  
          </div>
          <div className='col-3'>
          <MDBCard width={'500px'} height={'300px'}>
            <MDBCardImage src={pic6}  alt=''/>
              <MDBCardBody>
              <MDBCardTitle>Loan EMI Calculator</MDBCardTitle>
              <MDBBtn href='https://loan-emi-chithra.netlify.app/' className='btn btn-outline-danger'>Visit</MDBBtn>
            </MDBCardBody>
          </MDBCard>  
          </div>
          <div className='col-3'>
          <MDBCard width={'500px'} height={'300px'}>
            <MDBCardImage src={pic7}  alt=''/>
              <MDBCardBody>
              <MDBCardTitle>Doctor Appointment App</MDBCardTitle>
              <MDBBtn href='https://doctors-appointment-app-chithra.netlify.app/' className='btn btn-outline-danger'>Visit</MDBBtn>
            </MDBCardBody>
          </MDBCard>  
          </div>
        </div>
        <hr/>
    </div>
  )
}

export default Projects