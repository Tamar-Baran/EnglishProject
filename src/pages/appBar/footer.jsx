import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon ,MDBInput,MDBBtn} from 'mdb-react-ui-kit';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';


export default function Footer() {
  return (
    <MDBFooter style={{marginTop:50}} bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
        
        </div>

        <div style={{display:'flex',gap:40}}>
          <a href='' className='me-4 text-reset'>
           <FacebookIcon></FacebookIcon>
          </a>
          <a href='' className='me-4 text-reset'>
            <TwitterIcon></TwitterIcon>
          </a>
          <a href='' className='me-4 text-reset'>
            <GoogleIcon></GoogleIcon>
          </a>
          <a href='' className='me-4 text-reset'>
            <InstagramIcon></InstagramIcon>
          </a>
          <a href='' className='me-4 text-reset'>
            <LinkedInIcon></LinkedInIcon>
          </a>
          <a href='' className='me-4 text-reset'>
            <GitHubIcon></GitHubIcon>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
               <HomeIcon></HomeIcon>
                New York, NY 10012, US
              </p>
              <p>
                <EmailIcon></EmailIcon>
                info@example.com
              </p>
              <p>
               <CallIcon></CallIcon>+ 01 234 567 88
              </p>
              <p>
               <LocalPrintshopIcon></LocalPrintshopIcon> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className='p-4 pb-0'>
        <form action=''>
          <MDBRow>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <p className='pt-2'>
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>

            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
              <MDBInput type='text' id='form5Example2' label='Email address' />
            </MDBCol>

            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <MDBBtn>Subscribe</MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://google.com/'>
           english.com
        </a>
      </div>
    </MDBFooter>
  );
}