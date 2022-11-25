import logo from './logo.svg';
import './App.css';
import Turologo from './assets/turologo.png'
import humburgur from './assets/humburgur.png'
import profile from './assets/profile.png'
import search from './assets/search.png'
import bmw from './assets/bmw.jpg'
import ford from './assets/ford.jpg'
import jeep from './assets/jeep.jpg'
import lamborghini from './assets/lamborghini.jpg'
import mercedesbenz from './assets/mercedesbenz.jpg'
import nissan from './assets/nissan.jpg'
import porsche from './assets/porsche.jpg'
import subaro from './assets/subaro.jpg'
import tesla from './assets/tesla.jpg'
import toyota from './assets/toyota.jpg'
import roundposter1 from './assets/roundposter1.jpg'
import roundposter2 from './assets/roundposter2.jpg'
import roundposter3 from './assets/roundposter3.jpg'
import roundposter4 from './assets/roundposter4.jpg'
import roundposter5 from './assets/roundposter5.jpg'
import roundposter6 from './assets/roundposter6.jpg'
import exp6 from './assets/exp6.jpg'
import exp5 from './assets/exp5.jpg'
import exp4 from './assets/exp4.jpg'
import exp3 from './assets/exp3.jpg'
import exp2 from './assets/exp2.jpg'
import exp1 from './assets/exp1.jpg'
import losanglecityblack from './assets/losanglecityblack.png'
import miamicityblack from './assets/miamicityblack.png'
import holulucitublack from './assets/holulucitublack.png'
import denvercityblack from './assets/denvercityblack.png'
import londoncityblack from './assets/londoncityblack.png'
import torontocityblack from './assets/torontocityblack.png'
import jerseycityblack from './assets/jerseycityblack.png'
import sanfrancicoblack from './assets/sanfrancicoblack.png'
import atlantacityblack from './assets/atlantacityblack.png'
import pheonisblack from './assets/pheonisblack.png'
import orlandoblacek from './assets/orlandoblacek.png'
import lasvagasblack from './assets/lasvagasblack.png'
import dallasblack from './assets/dallasblack.png'
import washingtonblack from './assets/washingtonblack.png'
import chicgoblack from './assets/chicgoblack.png'
import housetonblack from './assets/housetonblack.png'
import sandiegoblack from './assets/sandiegoblack.png'
import boston from './assets/boston.png'
// import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { UserOutlined } from '@ant-design/icons';
import { Input,DatePicker,  Select,  TimePicker  } from 'antd';
import React, { Component } from "react";
import Slider from "react-slick";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// import { DatePicker, Space } from 'antd';
function App() {
  return (
    <div id='topAdiv'>
    <a href='#' id='topA'>Turo has launched in New York! Tap to explore cars.</a>
    </div>
  );
}
function Head2(){
  return(
   

     

    <div id='head2'>
<img src={Turologo} alt='' id='imglogo' />
<div id='head25'>
  <button id='head2button'>Become a host </button>
  <div id='logoheadimgs'>
    <img src={humburgur} alt=' ' id='logoimgs1'/>
    <img src={profile} alt=' ' />
  </div>
</div>
    </div>
    
  )
}
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
function Poster(){
  return(
    <div id='posterdiv'>
      <div id='inputsdiv'> 
      <div className='inputparentdiv'>

        <lable className='wherelabel'>Where</lable>
        {/* <input type='test'/> */}
        <Input className='whereinputsearch' size="small" placeholder="City, airport, address or hotel"  />
      </div>
      <div className='inputparentdiv'>
        <lable className='wherelabel'>from</lable>
        <div className='dateTime'>

        <DatePicker className='whereinput' size="small" onChange={onChange} />
        <TimePicker className='whereinput' size="small" onChange={onChange} />
        </div>
        
      </div>
      <div className='inputparentdiv'>
        <lable className='wherelabel'>until</lable>
        <div className='dateTime'>

        <DatePicker className='whereinput' size="small" onChange={onChange} />
        <TimePicker className='whereinput' size="small" onChange={onChange} />
        </div>

      </div>
      <div id='searchicon' className='inputparentdiv'>
        <img src={search} alt='' id='searchiconimg'/>
      </div>
        <button id='searchbtn'>search for car</button>

      </div>
      
    </div>
  )
}
function Findyourdrive (){
return(
  <div>

  <h1 id='FindyourH'>Find your drive</h1>
  <div id='findh6span'>
    <p id='findh6'>Explore the world's largest car sharing marketplace</p>
    {/* <span id='findh6span'></span> */}
  </div>
  </div>
)
}
class Responsive3 extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.3,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div >
        <h2> Browse by destination </h2>
        <Slider {...settings} >
          

          <div >
          <Card className='cityparentdiv' style={{ width: '158px', margin:'0 auto',  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'5px' }}>
      <Card.Img variant="top" src={losanglecityblack} alt='' style={{ margin:'0 auto', paddingTop:'20px', width: '115px' }} />
      <Card.Body>
        <Card.Title className='carname'>Los Angeles</Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '158px' ,margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={miamicityblack}style={{margin:'0 auto', paddingTop:'20px', width: '115px' }} />
      <Card.Body>
        <Card.Title className='carname'>Miami</Card.Title>
        <Card.Text>
        
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '158px' ,margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={holulucitublack} style={{margin:'0 auto', paddingTop:'20px', width: '115px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Honolulu</Card.Title>
        <Card.Text>
        
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '158px' ,margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={denvercityblack} style={{margin:'0 auto', paddingTop:'20px', width: '115px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Denver</Card.Title>
        <Card.Text>
         
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '158px' ,margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={londoncityblack} style={{margin:'0 auto', paddingTop:'20px', width: '115px' }} />
      <Card.Body>
        <Card.Title  className='carname'>London</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '158px' ,margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={torontocityblack} style={{margin:'0 auto', paddingTop:'20px', width: '115px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Toronto</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '158px' ,margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={jerseycityblack} style={{margin:'0 auto', paddingTop:'20px', width: '115px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Jersey City</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '158px' ,margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={sanfrancicoblack} style={{margin:'0 auto', paddingTop:'20px', width: '115px' }} />
      <Card.Body>
        <Card.Title  className='carname'>San Francisco</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
         
          <div>
          <Card style={{ width: '158px' ,margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={atlantacityblack} style={{margin:'0 auto', paddingTop:'20px', width: '115px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Atlanta</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '158px' ,margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={pheonisblack} style={{margin:'0 auto', paddingTop:'20px', width: '115px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Pheonix</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
        <Card style={{ width: '158px' ,margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={orlandoblacek} style={{margin:'0 auto', paddingTop:'20px', width: '115px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Orlando</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
        <Card style={{ width: '158px',margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px' }}>
      <Card.Img variant="top" src={lasvagasblack} style={{margin:'0 auto', paddingTop:'20px', width: '115px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Las vegas</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
        <Card style={{ width: '158px',margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px' }}>
      <Card.Img variant="top" src={dallasblack} style={{margin:'0 auto', paddingTop:'20px', width: '115px' }} />
      <Card.Body>
        <Card.Title  className='carname'> Dallas</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
        <Card style={{ width: '158px',margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px' }}>
      <Card.Img variant="top" src={washingtonblack} style={{margin:'0 auto', paddingTop:'20px', width: '115px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Washington DC </Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
        <Card style={{ width: '158px',margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px' }}>
      <Card.Img variant="top" src={chicgoblack} style={{margin:'0 auto', paddingTop:'20px', width: '115px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Chicago</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
        <Card style={{ width: '158px',margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px' }}>
      <Card.Img variant="top" src={housetonblack} style={{margin:'0 auto', paddingTop:'20px', width: '115px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Houston </Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
        <Card style={{ width: '158px',margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px' }}>
      <Card.Img variant="top" src={sandiegoblack} style={{margin:'0 auto', paddingTop:'20px', width: '115px' }} />
      <Card.Body>
        <Card.Title  className='carname'> San Diego</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
        <Card style={{ width: '158px',margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px' }}>
      <Card.Img variant="top" src={boston} style={{margin:'0 auto', paddingTop:'20px', width: '115px' }} />
      <Card.Body>
        <Card.Title  className='carname'> Boston</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>

         
        </Slider>
      </div>
    );
  }
}
class Responsive4 extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1124,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div >
        <h2> Browse by Experience </h2>
        <Slider {...settings} >
          

          <div >
          <Card className='cityparentdiv' style={{ width: '330px', margin:'0 auto',  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'5px' }}>
      <Card.Img variant="top" src={exp1} alt='' style={{ margin:'0 auto', width: '330px' }} />
      <Card.Body>
        <Card.Title className='carnameexp'>
          <div className='expicons'><svg style={{width:'30px'}} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Electric" class="seo-pages-0" role="img" version="1.1"><path d="M39.87 12.25H3.25v11.54h36.62V12.25Z" fill="#E0CAFF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M39.87 36.58c-.69 0-1.25-.56-1.25-1.25V13.5H4.5v20.58h29.87a1.25 1.25 0 0 1 0 2.5H3.25c-.69 0-1.25-.56-1.25-1.25V12.25c0-.69.56-1.25 1.25-1.25h36.62c.69 0 1.25.56 1.25 1.25v4.27h3.71c.69 0 1.25.56 1.25 1.25v12.07c0 .69-.56 1.25-1.25 1.25h-3.71v4.24c0 .69-.56 1.25-1.25 1.25Zm1.25-7.99h2.46v-9.57h-2.46v9.57Z" fill="#593CFB"></path><path d="M16.57 32.21c-.34 0-.69-.14-.93-.42a1.26 1.26 0 0 1 .1-1.77l5.59-4.99H18.5c-.52 0-.98-.32-1.17-.8-.18-.49-.05-1.03.34-1.38l8.04-7.17a1.248 1.248 0 0 1 1.66 1.86l-5.59 4.98h2.83c.52 0 .98.32 1.17.8.18.49.05 1.03-.34 1.38l-8.04 7.17c-.23.23-.53.34-.83.34Z" fill="#593CFB"></path></svg></div>
          Electric</Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '330px' ,margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={exp2}style={{margin:'0 auto', width: '330px' }} />
      <Card.Body>
        <Card.Title className='carnameexp'>
          <div className='expicons'><svg style={{width:'30px'}} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Deluxe &amp; Super Deluxe " class="seo-pages-0" role="img" version="1.1"><path d="M23.28 16.51c-1.46-1.45-3.3-4.34-3.92-10.26-.5 5.93-2.28 8.81-3.71 10.26-1.45 1.45-4.38 3.26-10.38 3.84 5.77.51 8.49 2.61 10.18 4.3 1.68 1.69 3.66 4.29 3.92 9.81.69-5.74 2.78-8.34 4.25-9.81 1.47-1.47 4.09-3.57 9.85-4.3-5.87-.57-8.73-2.38-10.19-3.84ZM36.87 31.1c-.87-.88-2.1-2.49-2.47-6.04-.3 3.55-1.48 5.17-2.35 6.04-.87.87-2.51 2.08-6.11 2.43 3.46.31 5.1 1.57 6.11 2.58 1.01 1.02 2.19 2.58 2.35 5.89.42-3.45 1.67-5.01 2.55-5.89.88-.88 2.45-2.14 5.91-2.58-3.52-.35-5.12-1.56-5.99-2.43Z" fill="#E0CAFF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19.31 35.71h.05c.63 0 1.16-.47 1.23-1.09.64-5.23 2.42-7.6 3.9-9.08 1.38-1.37 3.81-3.27 9.13-3.94a1.255 1.255 0 0 0-.04-2.49c-4.3-.42-7.56-1.62-9.42-3.48-1.87-1.87-3.1-5.16-3.56-9.51-.07-.64-.57-1.1-1.26-1.12-.64.01-1.17.5-1.23 1.15-.36 4.37-1.53 7.65-3.36 9.48-1.29 1.29-4.01 2.94-9.62 3.48a1.25 1.25 0 0 0 .01 2.49c5.33.48 7.83 2.36 9.41 3.94 1.63 1.62 3.32 3.96 3.56 8.98.03.65.55 1.17 1.2 1.19Zm-3-11.94c-1.13-1.13-2.65-2.4-5.03-3.34 2.19-.73 3.94-1.74 5.24-3.03 1.23-1.23 2.2-2.89 2.9-4.94.73 2.04 1.72 3.69 2.97 4.94 1.33 1.33 3.11 2.36 5.34 3.09-2.48.99-3.99 2.26-5.01 3.28-1.01 1.01-2.24 2.48-3.22 4.88-.86-2.29-2.08-3.77-3.19-4.88ZM34.35 43.24h.05c.63 0 1.17-.47 1.23-1.1.36-2.98 1.36-4.32 2.19-5.15.83-.83 2.18-1.84 5.18-2.22a1.255 1.255 0 0 0-.04-2.49c-3.14-.31-4.49-1.33-5.23-2.07-.74-.75-1.78-2.11-2.11-5.29a1.24 1.24 0 0 0-1.24-1.12h-.01c-.64.01-1.18.51-1.23 1.15-.3 3.57-1.57 4.84-1.99 5.26-.42.43-1.71 1.72-5.34 2.07a1.25 1.25 0 0 0 .01 2.49c3.04.27 4.45 1.33 5.34 2.22.91.91 1.85 2.22 1.99 5.06.03.65.55 1.17 1.2 1.19Zm-1.42-8.02a9.117 9.117 0 0 0-2.22-1.66 8.34 8.34 0 0 0 2.22-1.58c.61-.61 1.11-1.31 1.52-2.12.42.81.93 1.51 1.54 2.12.65.65 1.4 1.18 2.27 1.61a9.043 9.043 0 0 0-2.19 1.63c-.49.48-1.05 1.13-1.57 2.08-.48-.9-1.04-1.55-1.57-2.08Z" fill="#593CFB"></path></svg></div>
          Deluxe & Super Deluxe</Card.Title>
        <Card.Text>
        
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '330px' ,margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={exp3} style={{margin:'0 auto', width: '330px' }} />
      <Card.Body>
        <Card.Title  className='carnameexp'>
          <div className='expicons'><svg style={{width:'30px'}} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Pet-friendly" class="seo-pages-0" role="img" version="1.1"><path d="M33.67 12.26c-.13 3.15-1.88 5.7-4.08 5.7-2.63 0-3.95-3.25-3.84-6.01.13-3.28 1.94-5.74 4.19-5.7 2.57.1 3.84 3.31 3.73 6.01ZM22.45 11.95c.11 2.81-1.23 6.01-3.84 6.01-2.2 0-3.95-2.55-4.08-5.7-.11-2.76 1.19-5.91 3.73-6.01 2.25-.03 4.06 2.42 4.19 5.7ZM13.83 22.32c0 3.523-1.92 6.38-4.29 6.38s-4.29-2.857-4.29-6.38c0-3.524 1.92-6.38 4.29-6.38s4.29 2.856 4.29 6.38ZM38.64 28.7c2.37 0 4.29-2.857 4.29-6.38 0-3.524-1.92-6.38-4.29-6.38s-4.29 2.856-4.29 6.38c0 3.523 1.92 6.38 4.29 6.38Z" fill="#E0CAFF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.61 19.21c-2.88 0-5.17-2.97-5.33-6.9-.13-3.49 1.67-7.18 4.93-7.31 2.99-.06 5.33 2.92 5.49 6.9.09 2.31-.65 4.58-1.95 5.93-.86.9-1.95 1.38-3.14 1.38ZM18.3 7.5h-.03c-1.59.06-2.58 2.49-2.5 4.71.1 2.48 1.37 4.5 2.83 4.5.5 0 .94-.2 1.34-.61.81-.85 1.32-2.49 1.25-4.1-.09-2.53-1.36-4.5-2.89-4.5ZM9.54 29.95C6.43 29.95 4 26.6 4 22.32c0-4.28 2.43-7.62 5.54-7.62s5.54 3.35 5.54 7.63c0 4.28-2.44 7.62-5.54 7.62Zm0-12.75c-1.65 0-3.04 2.35-3.04 5.13s1.39 5.13 3.04 5.13c1.65 0 3.04-2.35 3.04-5.13s-1.4-5.13-3.04-5.13ZM33.1 22.32c0 4.28 2.43 7.63 5.54 7.63 3.1 0 5.54-3.35 5.54-7.63 0-4.28-2.44-7.63-5.54-7.63-3.11 0-5.54 3.35-5.54 7.63Zm2.5.01c0-2.78 1.39-5.13 3.04-5.13 1.64 0 3.04 2.35 3.04 5.13s-1.39 5.13-3.04 5.13c-1.65 0-3.04-2.35-3.04-5.13ZM29.59 19.21c-1.19 0-2.27-.48-3.14-1.38-1.3-1.35-2.04-3.62-1.95-5.93.15-3.95 2.47-6.9 5.39-6.9h.07c3.29.13 5.09 3.82 4.96 7.31-.16 3.94-2.45 6.9-5.33 6.9Zm.27-11.71C28.37 7.5 27.1 9.47 27 12c-.06 1.6.44 3.25 1.26 4.1.39.41.83.61 1.33.61 1.46 0 2.73-2.02 2.83-4.5.08-1.93-.76-4.64-2.53-4.71h-.03Z" fill="#593CFB"></path><path d="M25.6 42.4c.09.63.63 1.08 1.24 1.08.05 0 .11 0 .18-.03 5.83-.8 9.45-3.78 9.45-7.78 0-3.188-1.935-5.234-3.492-6.88l-.018-.02a.902.902 0 0 0-.05-.045c-.017-.015-.035-.03-.05-.045a5.893 5.893 0 0 1-1.64-2.3c-.73-3.49-2.98-7.19-7.13-7.19-4.16 0-6.4 3.7-7.13 7.2-.35.89-.91 1.68-1.64 2.3-.04.03-.07.06-.1.09l-.004.004c-1.559 1.65-3.506 3.708-3.506 6.896 0 4.12 3.53 6.96 9.69 7.78.68.1 1.31-.39 1.4-1.07.1-.68-.39-1.31-1.07-1.4-2.81-.38-7.52-1.57-7.52-5.31 0-2.17 1.41-3.68 2.78-5.13a8.254 8.254 0 0 0 2.34-3.37c.03-.06.05-.12.06-.19.18-.88 1.23-5.29 4.7-5.29s4.52 4.41 4.7 5.29c.01.06.03.13.05.19.48 1.3 1.29 2.46 2.34 3.37 1.37 1.45 2.78 2.96 2.78 5.13 0 3.18-3.76 4.83-7.29 5.31-.69.1-1.16.73-1.07 1.41Z" fill="#593CFB"></path></svg></div>
          Pet-friendly</Card.Title>
        <Card.Text>
        
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '330px' ,margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={exp4} style={{margin:'0 auto', width: '330px' }} />
      <Card.Body>
        <Card.Title  className='carnameexp'>
          <span className='expicons'><svg style={{width:'30px'}} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Convertibles" class="seo-pages-0" role="img" version="1.1"><path d="m36.4 30.2-12.1-1.3H4.2v10h21.3c.7-1.3 2.2-2.3 3.8-2.3 1.6 0 3.1.9 3.8 2.3h6.5v-5.1c.1-1.9-1.3-3.5-3.2-3.6Z" fill="#E0CAFF"></path><path d="M34.8 6.7c-.6 0-1.1-.5-1.1-1.1V3.1c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1v2.4c.1.7-.4 1.2-1.1 1.2Z" fill="#593CFB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M34.9 17.4c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2.1 4.5-4.5 4.5Zm0-6.8c-1.2 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3 0-1.3-1.1-2.3-2.3-2.3Z" fill="#593CFB"></path><path d="M33.8 22.6c0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1v-2.4c0-.6-.5-1.1-1.1-1.1-.6 0-1.1.5-1.1 1.1v2.4ZM26.4 18.9c-.4 0-.8-.2-1-.6-.3-.5-.1-1.2.4-1.5l2.1-1.2c.5-.3 1.2-.1 1.5.4.3.5.1 1.2-.4 1.5l-2.1 1.2c-.1.1-.3.2-.5.2ZM40.2 9.7c.2.4.6.6 1 .6.2 0 .3 0 .5-.2l2.1-1.2c.5-.3.7-1 .4-1.5-.3-.5-1-.7-1.5-.4l-2.1 1.2c-.5.3-.7 1-.4 1.5ZM43.3 18.8c-.2 0-.4 0-.6-.2l-2.1-1.2c-.5-.3-.7-1-.4-1.5.3-.5 1-.7 1.5-.4l2.1 1.2c.5.3.7 1 .4 1.5-.1.4-.5.6-.9.6ZM27.9 10.1c.2.2.4.2.6.2.4 0 .8-.2 1-.5.3-.5.1-1.2-.4-1.5L27 7.1c-.5-.3-1.2-.1-1.5.4-.3.5-.1 1.2.4 1.5l2 1.1Z" fill="#593CFB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M34.944 40.2H39.7c.7 0 1.3-.6 1.4-1.3v-5.1c0-2.5-1.9-4.6-4.4-4.9l-11.8-1.2-10.2-8.1c-.6-.4-1.4-.3-1.8.2-.4.6-.3 1.4.2 1.8L23.6 30c.1.2.4.3.6.3l12.1 1.3c1.3.1 2.2 1.1 2.2 2.4v3.8h-4.3a.956.956 0 0 0-.187.019A5.587 5.587 0 0 0 29.4 35.4c-1.909 0-3.59.948-4.6 2.4H4.3c-.6 0-1.2.6-1.2 1.2s.5 1.2 1.2 1.2h19.556a5.687 5.687 0 0 0-.056.8c0 3.1 2.5 5.6 5.6 5.6 3.1 0 5.6-2.5 5.6-5.6 0-.272-.02-.539-.056-.8ZM26.3 41c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1Z" fill="#593CFB"></path><path d="M15.5 30.1H4.2c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2h11.3c.7 0 1.2.6 1.2 1.2s-.5 1.2-1.2 1.2Z" fill="#593CFB"></path></svg></span>
          Convertibles</Card.Title>
        <Card.Text>
         
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '330px' ,margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={exp5} style={{margin:'0 auto', width: '330px' }} />
      <Card.Body>
        <Card.Title  className='carnameexp'>
          <div className='expicons'><svg style={{width:'30px'}} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="All-wheel drive" class="seo-pages-0" role="img" version="1.1"><path d="m21.218 5.757 3.905-2.506 5.697 8.88-3.905 2.505-5.697-8.88ZM5.248 16l3.905-2.506 5.697 8.879-3.905 2.505L5.248 16ZM37.701 22.863l-3.905 2.506 5.697 8.879 3.905-2.506-5.697-8.879ZM17.834 35.606l3.905-2.505 5.697 8.879-3.904 2.505-5.698-8.879Z" fill="#E0CAFF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M25.86 15.31a1.234 1.234 0 0 0 1.72.38l3.91-2.51c.58-.38.75-1.15.38-1.73l-5.7-8.88c-.17-.28-.46-.47-.78-.55a1.25 1.25 0 0 0-.94.17L20.54 4.7a1.26 1.26 0 0 0-.38 1.73l2.173 3.385-9.94 6.38-2.173-3.385a1.25 1.25 0 0 0-1.73-.38l-3.91 2.51a1.25 1.25 0 0 0-.38 1.73l5.7 8.88a1.246 1.246 0 0 0 1.73.38l3.91-2.51c.58-.38.75-1.15.38-1.73l-2.177-3.392 3.921-2.514 3.293 5.09A4.52 4.52 0 0 0 19.93 22.9c-.26 1.17-.04 2.38.61 3.39a4.477 4.477 0 0 0 2.83 1.97 4.41 4.41 0 0 0 2.24-.075L28.89 33.3l-3.921 2.516-2.18-3.396c-.38-.59-1.15-.76-1.73-.38l-3.91 2.51a1.26 1.26 0 0 0-.38 1.73l5.7 8.88a1.271 1.271 0 0 0 1.06.58c.24 0 .48-.06.67-.2l3.91-2.51c.58-.38.75-1.15.38-1.73l-2.167-3.376 9.955-6.389 2.172 3.385a1.246 1.246 0 0 0 1.73.38l3.91-2.51a1.25 1.25 0 0 0 .38-1.73l-5.7-8.88a1.25 1.25 0 0 0-1.73-.38l-3.91 2.51a1.26 1.26 0 0 0-.38 1.73l2.174 3.387L31 31.947l-3.282-5.116a4.52 4.52 0 0 0 1.013-2.011c.26-1.17.04-2.38-.61-3.39a4.477 4.477 0 0 0-2.83-1.97 4.42 4.42 0 0 0-2.22.075l-3.3-5.102 3.916-2.51 2.174 3.387Zm-.632-5.614 2.062 3.214 1.8-1.16-4.35-6.78-1.8 1.16 2.059 3.21a1.298 1.298 0 0 1 .229.356ZM6.98 16.38l4.35 6.78 1.8-1.16-4.35-6.78-1.8 1.16Zm32.9 16.15-2.096-3.267a1.279 1.279 0 0 0-.167-.26L35.53 25.75l1.8-1.16 4.35 6.78-1.8 1.16ZM23.91 42.77l-4.35-6.78 1.8-1.16 4.35 6.78-1.8 1.16Zm-.67-20.58c.34-.22.71-.32 1.08-.32a2.004 2.004 0 1 1-1.08.32Z" fill="#593CFB"></path></svg></div>
          All-wheel drive</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '330px' ,margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={exp6} style={{margin:'0 auto', width: '330px' }} />
      <Card.Body>
        <Card.Title  className='carnameexp'>
          <div className='expicons'><svg style={{width:'30px'}} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Classic cars" class="seo-pages-0" role="img" version="1.1"><path d="M16.76 6.4s5.25.54 7.1 7l.01-.03v28.29l-.01.01S5.11 28.35 5.26 16.29C5.4 4.23 16.76 6.4 16.76 6.4Z" fill="#E0CAFF"></path><path d="M23.85 42.92c-.25 0-.5-.07-.72-.23C22.34 42.13 3.85 28.84 4 16.27c.05-4.03 1.28-7.06 3.65-9 3.67-2.99 8.71-2.21 9.29-2.11.56.07 4.5.73 6.92 5 2.42-4.27 6.36-4.93 6.92-5 .58-.1 5.62-.89 9.29 2.11 2.37 1.94 3.6 4.96 3.65 9 .1 7.9-7.13 16.1-13.21 21.58-.51.46-1.3.42-1.77-.09-.46-.51-.42-1.3.09-1.77 4.66-4.21 12.48-12.36 12.39-19.7-.04-3.26-.96-5.64-2.73-7.09-2.92-2.38-7.24-1.59-7.29-1.58-.04.01-.07.01-.11.02-.16.02-4.19.55-5.87 5.6l-.19.56c-.18.52-.63.86-1.21.84a1.24 1.24 0 0 1-1.17-.91c-1.59-5.57-5.98-6.09-6.02-6.1-.04 0-.07-.01-.11-.02-.04-.01-4.4-.79-7.3 1.59-1.76 1.47-2.68 3.85-2.72 7.1-.14 11.28 17.89 24.22 18.08 24.35.56.4.7 1.18.29 1.74-.24.35-.63.53-1.02.53Z" fill="#593CFB"></path></svg></div>
          Classic cars</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
         

         
        </Slider>
      </div>
    );
  }
}
class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1154,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h3> Browse by make </h3>
        <Slider {...settings}>
          <div>
          <Card style={{ width: '192px',margin:'0 auto',   boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'5px' }}>
      <Card.Img variant="top" src={jeep} alt='' style={{ width: '192px' }} />
      <Card.Body>
        <Card.Title className='carname'>Jeep</Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '192px' ,margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={tesla}style={{ width: '192px' }} />
      <Card.Body>
        <Card.Title className='carname'>Tesla</Card.Title>
        <Card.Text>
        
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '192px' ,margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={subaro} style={{ width: '192px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Subaro</Card.Title>
        <Card.Text>
        
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '192px' ,margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={porsche} style={{ width: '192px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Porsche</Card.Title>
        <Card.Text>
         
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '192px' ,margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={bmw} style={{ width: '192px' }} />
      <Card.Body>
        <Card.Title  className='carname'>BWM</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '192px' ,margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={mercedesbenz} style={{ width: '192px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Mercedes-benz</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
        <Card style={{ width: '192px' ,margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={toyota} style={{ width: '192px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Toyota</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
        <Card style={{ width: '192px',margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px' }}>
      <Card.Img variant="top" src={nissan} style={{ width: '192px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Nissan</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
        <Card style={{ width: '192px',margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px' }}>
      <Card.Img variant="top" src={lamborghini} style={{ width: '192px' }} />
      <Card.Body>
        <Card.Title  className='carname'>lamborghini</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
        <Card style={{ width: '192px',margin:'0 auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px' }}>
      <Card.Img variant="top" src={ford} style={{ width: '192px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Ford</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
        </Slider>
      </div>
    );
  }
}
class Responsive2 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        
        <Slider {...settings}>
          <div>

          <div className='roundparentdiv'>
            <div className='roundimgdiv'>
              <img src={roundposter1} alt=''className='roundimg'/>
            </div>
            <div className='rounddetail'><p className='roundsliderP'>Find the perfect car <span className='ppcolour'>to conquer the great outdoors</span></p>
            <p>Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
            <button className='roundbtn'>Browse car</button></div>
          </div>
          </div>
          <div>
          <div className='roundparentdiv'>
            <div className='roundimgdiv'>
              <img src={roundposter2} alt='' className='roundimg'/>
            </div>
            <div className='rounddetail'><p className='roundsliderP'>Find the perfect car <span className='ppcolour'>to unwind for the weekend</span></p>
            <p>From daily drivers to spirited sports cars, ditch the grind with convenient nearby cars.</p>
            <button className='roundbtn'>Browse car</button></div>
          </div>
          </div>
          <div>
          <div className='roundparentdiv'>
            <div className='roundimgdiv'>
              <img src={roundposter3} alt='' className='roundimg'/>
            </div>
            <div className='rounddetail'><p className='roundsliderP'>Find the perfect car <span className='ppcolour'>to upgrade your vacation plans</span></p>
            <p>Skip the rental car counter and find the perfect car to complement your vacation vibe.</p>
            <button className='roundbtn'>Browse car</button></div>
          </div>
          </div>
          <div>
          <div className='roundparentdiv'>
            <div className='roundimgdiv'>
              <img src={roundposter4} alt='' className='roundimg'/>
            </div>
            <div className='rounddetail'><p className='roundsliderP'>Find the perfect car <span className='ppcolour'>for scenic corners & curves</span></p>
            <p>Get your fill of high-performance thrills, with the richest selection of luxury and exotic vehicles anywhere.</p>
            <button className='roundbtn'>Browse car</button></div>
          </div>
          </div>
          <div>
          <div className='roundparentdiv'>
            <div className='roundimgdiv'>
              <img src={roundposter5} alt='' className='roundimg'/>
            </div>
            <div className='rounddetail'><p className='roundsliderP'>Find the perfect car <span className='ppcolour'>to try before you buy</span></p>
            <p>Make sure your future wheels work well with your lifestyle by taking your time in the driver’s seat.</p>
            <button className='roundbtn'>Browse car</button></div>
          </div>
          </div>
          <div>
          <div className='roundparentdiv'>
            <div className='roundimgdiv'>
              <img src={roundposter6} alt='' className='roundimg'/>
            </div>
            <div className='rounddetail'><p className='roundsliderP'>Find the perfect car <span className='ppcolour'>to make errand day easier</span></p>
            <p>Book a roomy truck or SUV to ease your errand day stress, or to motivate your moving day.</p>
            <button className='roundbtn'>Browse car</button></div>
          </div>
          </div>
        </Slider>
      </div>
    );
  }
}
function BrowserSlider(){
  return(

<div className='browsliderpsrentdiv'>
  
  <div>
    
  <Responsive/>
  </div>
  
</div>
  )
}
function Roundslider (){
  return(
    <div id='roundsliderpsrentdiv'>
<Responsive2/>


    </div>
  )
}
function Citiesslider(){
  return(
    <div className='browsliderpsrentdiv' style={{marginTop:'50px'}}>
    <Responsive3/>
    </div>
  )
}
function Fueldream (){
  return(
    <div>
      <div id='fuelyourDiv'><h1 id='fuelyourH'>Find your drive</h1></div>
      <div><p id='fuelP'>Explore the world's largest car sharing marketplace</p></div>
      <div style={{textAlign:'center'}}><button className='roundbtn' >Explore Travelogues</button></div>
    <div id='fuelposterparentdiv' >
      <div id='fuelposter'></div>
      <div id='fueldetail'>
        <p id='fueldetailp1'>FEATURED TRAVELOGUE</p>
        <p id='fueldetailp2'>An Olympic experience in Washington</p>
        <p id='fueldetailp3'>Discover the epic waterfalls, moody weather, and lush forests of coastal Washington.</p>
        <a href='./' id='fueldetaila'>Read more</a>
      </div>
      </div>  
    </div>
  )
}
function BrowseExperience(){
  return(
<div className='browsliderpsrentdiv expslider'>
  <Responsive4/>
</div>
  )
}
function Bookorbecome(){
return(
  <div id='bookbecomeimgparent'>
    <div className='bookbecomparent1'>
      <span className='bookbecomeh'>Book a car ></span>
      <p>Down the street or across the country, find the perfect vehicle for your next adventure.</p>
    </div>
    <div id="bookbecomeimg">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 570" class="ezo2sfm1 seo-pages-1xi5oa7-IllustrationSvgElement" role="img" version="1.1"><path d="M313.55 60.26c76 21.33 150.62 49.61 228.4 61.16 85.67 12.72 174.74 5.11 256.75 34.65 95.2 34.3 236 159.9 192 283.71C966.58 507.75 889.94 537 829.64 553c-72.3 19.12-148.07 19.2-221.74 10.77-81.29-9.3-161.84-47.45-234.33-86.36-72.81-39.09-156.64-39.08-234.14-60.79-27.25-7.62-54.27-18.21-76.92-36.22C-9.51 323.14-17 182.23 32.23 106.6c24.2-37.17 64.89-59.13 106.46-66.54s84.2-1.65 125.45 7.6c16.57 3.72 33.02 8 49.41 12.6z" fill="#fbf9f6"></path><ellipse cx="626.97" cy="156.14" rx="167.67" ry="154.17" fill="#efe6ff"></ellipse><path d="m536.73 154.05-.29-.27a5.57 5.57 0 0 1-1.68-5v-.15l.08-.21a18.34 18.34 0 0 1 2.55-6.44l2.29-3.26a20.69 20.69 0 0 0-6.2 1.86 20.53 20.53 0 1 0 29.44 17.87h-.49c-5.32-.56-8.76-3-10.22-7.14-4.68 3.73-8 5-10.47 5a7 7 0 0 1-5.01-2.26zm6.46 126.61a3.63 3.63 0 0 0 2.62 1l1.9-.05a3.68 3.68 0 0 0 2.56-1.14 3.63 3.63 0 0 0 1-2.62L550 231l-9.22.25 1.27 46.85a3.6 3.6 0 0 0 1.14 2.56z" fill="none"></path><path d="M591.2 167.21v.11a3 3 0 0 0 2 1.56c4.4 1.19 6.83-3.61 6.93-3.81v-.09l2.08-3.4-8.22-.68a74.72 74.72 0 0 1-2.74 6z" fill="#96826d"></path><path d="M592.05 160.73h-.39l-.26.66s-1.28 3.58-.2 5.85l.19-.35c1-1.87 2.09-4.35 2.74-6l-2-.17" fill="#7e6a59"></path><path d="M572.88 161.35a2 2 0 0 1 .89 2.21 52.42 52.42 0 0 1-2.72 7.52l-.43 1a3.69 3.69 0 0 0 2.28 1.63c5.17 1.42 8-4.16 8.12-4.4l4.7-9.05-8.68-.68-4.28-.34-.63 1.71z" fill="#96826d"></path><path d="M573.77 163.56a2 2 0 0 0-.89-2.21l-.75-.44-1.48 3.93s-1.55 4.29-.19 6.95c0 .09.11.16.16.25l.43-1a52.42 52.42 0 0 0 2.72-7.48z" fill="#7e6a59"></path><path d="M542.11 138.48v.05l.82.71a2.33 2.33 0 0 1 .46 3 69.43 69.43 0 0 1-6.44 8.72l-.09.1a3 3 0 0 0 .87 1.32l.33.31c1.44 1.34 4.41 4.11 13.64-3.48a19.4 19.4 0 0 1-.17-5.29 9.73 9.73 0 0 1 .72-2.89 20.42 20.42 0 0 0-3.06-1.37 20.65 20.65 0 0 0-7.08-1.18z" fill="#96826d"></path><path d="M722.31 119.52a.94.94 0 0 1-1.15.6c-9.28-2.68-16.22-5.45-20.62-8.24-10-6.32-38.27-25.64-54.26-36.6a17.65 17.65 0 0 0-16.21-1.94l-1.69.61-45.16 9.46a6.17 6.17 0 0 0-4.5 3.84l-2.1 5.49-1.47.54a4.06 4.06 0 0 0-1.93 1.47l-25.3 35.47-3.53 5a24 24 0 0 1 5.86 1.27 23 23 0 0 1 3.82 1.73 11.81 11.81 0 0 1 4.23-2.73 19 19 0 0 1 5.94-1.28l2.51.05L587.49 114a4.75 4.75 0 0 1 2.59-1.3c1.5-.49 21.92-6.85 41-.89a1 1 0 0 1 .62 1.19.35.35 0 0 1-.06.14c8.07 3.77 5.88 12.27 2.77 14.91l.08.13a1 1 0 0 1-.45 1.27l-.25.13a56.06 56.06 0 0 1-23.69 6.76c-10.26.39-34.63 0-43-.16l-2.89-.05c-.37 0-10.15.37-10.85 8s2.31 11.65 9.21 12.38c1.65.17 7.36.62 14.59 1.19 13.22 1 31.34 2.46 41.2 3.48a38.91 38.91 0 0 1 12.1 3.29l22 9.59a38.51 38.51 0 0 0 16.22 4.19l61 1.6 4.35-57.23c-3.59-.91-7.66-1.94-11.72-3.1zm-150 33.16a2.29 2.29 0 0 1-2.29 2.23 1.83 1.83 0 0 1-.33 0c-5.31-.78-8.5-1.41-9.46-1.9a6.22 6.22 0 0 1-3.2-4.37 8.58 8.58 0 0 1 1.83-7.11c2.55-3.12 9.33-2.85 12.12-2.59a1.78 1.78 0 0 1 1.61 1.8zM589 150a1.08 1.08 0 0 1-1.08 1h-.05a1.08 1.08 0 0 1-1-1.13c.11-2.19.15-6.07-.21-7.13a1.08 1.08 0 1 1 2.05-.7c.62 1.76.39 6.96.29 7.96zm3.85 4.11a1.09 1.09 0 0 1-1.09 1 1.08 1.08 0 0 1-1-1.13c.16-3.61.24-9.16-.11-10.17a1.08 1.08 0 0 1 2-.7c.62 1.77.35 9.46.24 10.98z" fill="#96826d"></path><path fill="#7e6a59" d="m537.37 141.93 2.29-3.27-2.29 3.26v.01zm-2.61 6.82v-.36l-.08.21zm4.16-5.75s-3.13 5-2.09 8l.09-.1a69.43 69.43 0 0 0 6.44-8.72 2.33 2.33 0 0 0-.46-3l-.82-.71zm22.18 8.29c.57.29 3.2.89 8.88 1.72a.4.4 0 0 0 .45-.38l.28-11.83c-.9-.08-1.85-.13-2.79-.13-3.2 0-6.33.53-7.57 2a6.63 6.63 0 0 0-1.44 5.51 4.38 4.38 0 0 0 2.19 3.11z"></path><path d="M572.61 140.72a1.78 1.78 0 0 0-1.61-1.8c-2.79-.26-9.57-.53-12.12 2.59a8.58 8.58 0 0 0-1.83 7.11 6.22 6.22 0 0 0 3.2 4.37c1 .49 4.15 1.12 9.46 1.9a1.83 1.83 0 0 0 .33 0 2.29 2.29 0 0 0 2.29-2.23zm-12.26 2c1.24-1.51 4.37-2 7.57-2 .94 0 1.89.05 2.79.13l-.28 11.83a.4.4 0 0 1-.45.38c-5.68-.83-8.31-1.43-8.88-1.72a4.38 4.38 0 0 1-2.19-3.07 6.63 6.63 0 0 1 1.44-5.56z" fill="#7e6a59"></path><path d="M630.56 113.62c-15.7-4.89-32.34-1.21-38 .32l-7.27 12.58a1 1 0 0 1-.82.48.91.91 0 0 1-.48-.13 1 1 0 0 1-.35-1.29l6.36-10.92a2.78 2.78 0 0 0-1.17.69l-19.4 19c9.87.17 31.25.48 40.65.12 1 0 1.9-.11 2.83-.21l4.07-6.61a1 1 0 0 1 1.3-.32 1 1 0 0 1 .32 1.31l-.28.45a4.89 4.89 0 0 1 .54 0 4.37 4.37 0 0 1 2.81.81 4.46 4.46 0 0 1 1 1.22 3.63 3.63 0 0 1 .47 1 57.86 57.86 0 0 0 9.81-4.17l.35-.18a1 1 0 0 1 1.18.32c3.11-2.64 5.3-11.14-2.77-14.91a.92.92 0 0 1-1.15.44z" fill="#96826d"></path><path d="M630.56 113.62c-15.7-4.89-32.34-1.21-38 .32l-7.27 12.58a1 1 0 0 1-.82.48.91.91 0 0 1-.48-.13 1 1 0 0 1-.35-1.29l6.36-10.92a2.78 2.78 0 0 0-1.17.69l-19.4 19c9.87.17 31.25.48 40.65.12 1 0 1.9-.11 2.83-.21l4.07-6.61a1 1 0 0 1 1.3-.32 1 1 0 0 1 .32 1.31l-.28.45a4.89 4.89 0 0 1 .54 0 4.37 4.37 0 0 1 2.81.81 4.46 4.46 0 0 1 1 1.22 3.63 3.63 0 0 1 .47 1 57.86 57.86 0 0 0 9.81-4.17l.35-.18a1 1 0 0 1 1.18.32c3.11-2.64 5.3-11.14-2.77-14.91a.92.92 0 0 1-1.15.44z" fill="#7e6a59" opacity="0.55"></path><path d="M623.11 132.08a3.63 3.63 0 0 0-.47-1 4.46 4.46 0 0 0-1-1.22 4.37 4.37 0 0 0-2.81-.81 4.89 4.89 0 0 0-.54 0l-3 4.87a53.31 53.31 0 0 0 7.82-1.84z" fill="#efe6ff"></path><path d="M527.18 229.72a5.22 5.22 0 0 1-1.35-3.39l-.47-17.26a16.16 16.16 0 0 1 4.45-11.63c.28-.29.56-.57.86-.83l-2.86-5.53-3.17 6.56a1 1 0 0 1-1.27.44 1 1 0 0 1-.44-1.27l3.13-6.48-16.83 3.79a4.44 4.44 0 0 0-.71.21 5.19 5.19 0 0 0-2.84 2.67l-32.05 68.81 30.2 14.07z" fill="#dfc4ff"></path><path d="M564.2 208a16.28 16.28 0 0 0-16.71-15.83l-2.2.06.05 1.9.08 2.76a5.19 5.19 0 0 1-.67 10.32h-.15a5.2 5.2 0 0 1-1.08-10.21l-.08-2.75-.05-1.9-2.2.06a16.14 16.14 0 0 0-10.52 4.25c-.3.26-.58.54-.86.83a16.16 16.16 0 0 0-4.45 11.63l.47 17.26a5.22 5.22 0 0 0 1.35 3.39l.31.33a5.29 5.29 0 0 0 3.65 1.46h.15l7.59-.21 1.27 46.85a5.56 5.56 0 0 0 5.56 5.41h.15l1.9-.05a5.58 5.58 0 0 0 5.41-5.71L551.9 231l7.59-.21a5.33 5.33 0 0 0 5.18-5.46zm-12.93 69.83a3.63 3.63 0 0 1-1 2.62 3.68 3.68 0 0 1-2.56 1.14l-1.9.05a3.65 3.65 0 0 1-3.76-3.56l-1.27-46.85L550 231z" fill="#5f15ff"></path><path d="M668.75 178.2a38.51 38.51 0 0 1-16.22-4.2l-22-9.59a38.91 38.91 0 0 0-12.1-3.29c-9.86-1-28-2.44-41.2-3.48-7.23-.57-12.94-1-14.59-1.19-6.9-.73-9.92-4.77-9.21-12.38s10.48-7.94 10.85-8l2.89.05c8.38.15 32.75.55 43 .16a56.06 56.06 0 0 0 23.69-6.76l.25-.13a1 1 0 0 0 .45-1.27l-.08-.13a1 1 0 0 0-1.18-.32c-.06 0-.17.09-.35.18a57.86 57.86 0 0 1-9.81 4.17 53.31 53.31 0 0 1-7.79 1.85l3-4.87.28-.45a1 1 0 0 0-.32-1.31 1 1 0 0 0-1.3.32l-4.07 6.61c-.93.1-1.87.18-2.83.21-9.4.36-30.78.05-40.65-.12l19.4-19a2.78 2.78 0 0 1 1.17-.69l-6.31 10.92a1 1 0 0 0 .35 1.29.91.91 0 0 0 .48.13 1 1 0 0 0 .82-.48l7.27-12.58c5.62-1.53 22.26-5.21 38-.32a.92.92 0 0 0 1.12-.48.35.35 0 0 0 .06-.14 1 1 0 0 0-.62-1.19c-19.12-6-39.54.4-41 .89a4.75 4.75 0 0 0-2.59 1.3l-20.74 20.28-2.51-.05a19 19 0 0 0-5.94 1.28 11.81 11.81 0 0 0-4.23 2.73 23 23 0 0 0-3.82-1.73 24 24 0 0 0-5.86-1.27l3.53-5 25.3-35.47a4.06 4.06 0 0 1 1.93-1.47c8.93-3.21 54.33-19.7 54.8-19.87a17.65 17.65 0 0 1 16.21 1.94c16 11 44.29 30.28 54.26 36.6 4.4 2.79 11.34 5.56 20.62 8.24a.94.94 0 0 0 1.15-.6 1 1 0 0 0-.65-1.18c-9.11-2.62-15.89-5.32-20.13-8-10.32-6.54-41.34-27.75-54.2-36.56a19.54 19.54 0 0 0-18-2.16l-1.42.51-45.16 9.48a8 8 0 0 0-5.88 5l-1.78 4.67-.67.25a5.94 5.94 0 0 0-2.82 2.15l-25.16 35.27-.14.2a.33.33 0 0 0-.06.1l-4.18 5.94a23.86 23.86 0 1 0 24.09 23.52l4.75.38-1.9 5.15c-.07.2-1.82 5-.12 8.33a5.37 5.37 0 0 0 3.54 2.77 7.77 7.77 0 0 0 2.08.29c4.12 0 7-3.47 8-5.58l5-9.68 2.1.17-.06.14c-.07.19-1.63 4.5-.07 7.5a4.86 4.86 0 0 0 3.24 2.53 6.94 6.94 0 0 0 1.86.26c3.71 0 6.29-3.1 7.24-5 .2-.32 1.27-2 2.56-4.19 5.27.45 10.08.88 13.74 1.26a37.41 37.41 0 0 1 11.52 3.13l22 9.58a40.18 40.18 0 0 0 17 4.37l60.95 1.6.15-1.9zm-90-90.95a6.17 6.17 0 0 1 4.5-3.84l32.06-6.73-37.78 13.71zm-36.61 51.23a20.65 20.65 0 0 1 7 1.16 20.42 20.42 0 0 1 3.06 1.37 9.73 9.73 0 0 0-.72 2.89 19.4 19.4 0 0 0 .17 5.29c-9.23 7.59-12.2 4.82-13.64 3.48l-.33-.31a3 3 0 0 1-.87-1.32c-1-3.06 2.07-8 2.09-8l3.16-4.49zm19.64 27.34a20.53 20.53 0 1 1-22.09-27.16l-2.29 3.27a18.34 18.34 0 0 0-2.55 6.44v.36a5.57 5.57 0 0 0 1.68 5l.29.27a7 7 0 0 0 5 2.17c2.48 0 5.79-1.28 10.47-5 1.46 4.14 4.9 6.58 10.22 7.14h.49a20.49 20.49 0 0 1-1.25 7.51zm19.22 3.45c-.12.24-2.95 5.82-8.12 4.4a3.69 3.69 0 0 1-2.28-1.63c0-.09-.12-.16-.16-.25-1.36-2.66.18-6.91.19-6.95l1.48-3.93.63-1.71 4.28.34 8.68.68zm19.27-4.27v.09c-.1.2-2.53 5-6.93 3.81a3 3 0 0 1-2-1.56v-.11c-1.08-2.27.2-5.83.2-5.85l.26-.66h.39l2 .17 8.22.68c-1.23 1.94-2.12 3.43-2.14 3.43z" fill="#121214"></path><path d="m543.44 194.2.08 2.75.05 2v1.65a.94.94 0 0 0 .94.93.93.93 0 0 0 .92-1v-1.66l-.05-2-.08-2.76-.05-1.9-.13-4.75a1 1 0 0 0-1-.92 1 1 0 0 0-.93 1l.13 4.74zm-20.07 3.88a1 1 0 0 0 1.27-.44l3.17-6.56 2.5-5.16a1 1 0 1 0-1.71-.83l-2.54 5.24-3.13 6.48a1 1 0 0 0 .44 1.27z" fill="#121214"></path><path d="m794.17 165.68-.09-.09a1.26 1.26 0 0 1-.09-1.8 1.13 1.13 0 0 1 .44-.32q.2-3.65.2-7.33v-3.12a1.32 1.32 0 0 1-.48.09 1.26 1.26 0 0 1-.86-.33l-.09-.08a1.29 1.29 0 0 1-.09-1.81 1.26 1.26 0 0 1 1.44-.31c-.14-3.52-.4-7-.8-10.47a1.14 1.14 0 0 1-.51.11 1.27 1.27 0 0 1-.86-.33l-.1-.08a1.29 1.29 0 0 1-.09-1.81 1.31 1.31 0 0 1 1.24-.38 138.9 138.9 0 0 0-4-19.45l-49.75-4.76a4.93 4.93 0 0 0-5.18 4.59l-.35 4.62-4.35 57.18-.15 1.9-.83 11a4.92 4.92 0 0 0 3.74 5.15l5.27.95a1.28 1.28 0 0 1 .31-1 1.29 1.29 0 0 1 1.81-.09l.09.09a1.26 1.26 0 0 1 .3 1.48l30.39 5.48a1.27 1.27 0 0 1 2-1.56l.1.09a1.28 1.28 0 0 1 .09 1.8l12.1 2.18a139.88 139.88 0 0 0 9.35-41.49zm-8.93-33.93a1.26 1.26 0 0 1 1.8-.09l.09.08a1.28 1.28 0 1 1-1.71 1.9l-.09-.09a1.26 1.26 0 0 1-.09-1.8zM766.82 128a1.15 1.15 0 0 1-1-.09zm-14.57-1.39 2.51.24a1.29 1.29 0 0 1-.29 1.18 1.31 1.31 0 0 1-1 .42 1.26 1.26 0 0 1-.85-.33l-.1-.09a1.26 1.26 0 0 1-.27-1.39zm-3.78 8a1.27 1.27 0 0 1-1.8.09l-.1-.08a1.28 1.28 0 0 1 1.71-1.9l.1.09a1.28 1.28 0 0 1 .09 1.88zm-3.47 43.5.1.09a1.28 1.28 0 0 1-1.72 1.89l-.09-.08a1.28 1.28 0 0 1 1.71-1.9zm-3.63-25.69a1.28 1.28 0 0 1 1.8-.09l.1.09a1.28 1.28 0 0 1-1.72 1.89l-.09-.08a1.27 1.27 0 0 1-.06-1.81zm-.74-11-.09-.09a1.16 1.16 0 0 1-.32-.47l.08-1.13a1.49 1.49 0 0 1 .15-.2 1.28 1.28 0 0 1 1.8-.09l.1.08a1.29 1.29 0 0 1 .09 1.81 1.27 1.27 0 0 1-1 .42 1.31 1.31 0 0 1-.78-.33zm1.65 23.89a1.29 1.29 0 0 1 1.81-.09l.09.09a1.27 1.27 0 1 1-1.71 1.89l-.1-.08a1.29 1.29 0 0 1-.06-1.81zm-4 8.44a1.32 1.32 0 0 1-.58.36l.18-2.41.22.16.09.08a1.29 1.29 0 0 1 .11 1.81zm.92 12.89a1.27 1.27 0 0 1-1 .42 1.29 1.29 0 0 1-.86-.33l-.09-.09a1.26 1.26 0 0 1-.09-1.8 1.28 1.28 0 0 1 1.8-.09l.1.09a1.28 1.28 0 0 1 .16 1.8zm6.91 6.25a1.26 1.26 0 0 1-.94.43 1.27 1.27 0 0 1-.86-.33l-.09-.09A1.28 1.28 0 1 1 746 191l.09.09a1.26 1.26 0 0 1 .04 1.8zm1.36-45.3a1.28 1.28 0 0 1 1.71-1.9l.1.09a1.27 1.27 0 0 1-.86 2.22 1.24 1.24 0 0 1-.86-.33zm.91 12.89a1.28 1.28 0 1 1 1.72-1.89l.09.08a1.27 1.27 0 0 1 .09 1.81 1.3 1.3 0 0 1-.94.42 1.27 1.27 0 0 1-.86-.33zm.92 12.89a1.28 1.28 0 0 1-.09-1.8 1.26 1.26 0 0 1 1.8-.09l.1.08a1.29 1.29 0 0 1 .09 1.81 1.27 1.27 0 0 1-1 .42 1.31 1.31 0 0 1-.86-.33zm.92 12.89a1.27 1.27 0 0 1 1.71-1.89l.1.08a1.28 1.28 0 0 1-1.72 1.9zm2.81 12.89a1.27 1.27 0 0 1-1.8.09l-.1-.09a1.28 1.28 0 1 1 1.72-1.89l.09.09a1.28 1.28 0 0 1 .11 1.8zm.44-58.2a1.27 1.27 0 0 1 1.71-1.89l.1.08a1.29 1.29 0 0 1 .09 1.81 1.27 1.27 0 0 1-.95.42 1.29 1.29 0 0 1-.86-.33zm.91 12.89a1.28 1.28 0 1 1 1.72-1.89l.09.08a1.28 1.28 0 1 1-1.71 1.9zm.92 12.9a1.28 1.28 0 0 1 1.72-1.9l.09.09a1.27 1.27 0 0 1-.86 2.22 1.26 1.26 0 0 1-.85-.33zm.92 12.89a1.28 1.28 0 0 1 1.71-1.9l.1.09a1.28 1.28 0 0 1-1.72 1.89zm2.81 12.88a1.27 1.27 0 0 1-1.8.09l-.1-.08a1.28 1.28 0 1 1 1.72-1.9l.09.09a1.26 1.26 0 0 1 .11 1.8zm.44-58.19a1.28 1.28 0 0 1 1.71-1.9l.1.09a1.27 1.27 0 0 1-.86 2.22 1.31 1.31 0 0 1-.86-.33zm.92 12.89a1.28 1.28 0 0 1 1.71-1.9l.09.09a1.26 1.26 0 0 1 .09 1.8 1.25 1.25 0 0 1-.94.42 1.27 1.27 0 0 1-.86-.33zm.91 12.89a1.28 1.28 0 0 1 1.72-1.9l.09.09a1.27 1.27 0 0 1-.86 2.22 1.22 1.22 0 0 1-.85-.33zm.92 12.89a1.27 1.27 0 0 1 1.78-1.89l.1.08a1.29 1.29 0 0 1 .09 1.81 1.31 1.31 0 0 1-.95.42 1.29 1.29 0 0 1-.86-.33zm.91 12.89a1.28 1.28 0 1 1 1.72-1.89l.09.08a1.28 1.28 0 1 1-1.71 1.9zm2.87 12.89a1.27 1.27 0 0 1-1.8.09l-.1-.09a1.27 1.27 0 0 1 1.71-1.89l.1.08a1.29 1.29 0 0 1 .09 1.81zm.44-58.2a1.27 1.27 0 0 1 1.71-1.89l.1.08a1.29 1.29 0 0 1 .09 1.81 1.32 1.32 0 0 1-.95.42 1.29 1.29 0 0 1-.86-.33zm.91 12.89a1.28 1.28 0 1 1 1.72-1.89l.09.08a1.28 1.28 0 0 1 .09 1.81 1.27 1.27 0 0 1-1.8.09zm.92 12.89a1.27 1.27 0 0 1 1.71-1.89l.1.08a1.29 1.29 0 0 1 .09 1.81 1.27 1.27 0 0 1-.95.42 1.31 1.31 0 0 1-.86-.33zm.91 12.89a1.28 1.28 0 0 1 1.72-1.89l.1.09a1.28 1.28 0 0 1-1.72 1.89zm2.82 12.89a1.27 1.27 0 0 1-1.8.09l-.1-.08a1.28 1.28 0 0 1 1.72-1.9l.09.09a1.28 1.28 0 0 1 .09 1.8zm.5-58.13-.09-.09a1.26 1.26 0 0 1-.09-1.8 1.28 1.28 0 0 1 1.8-.09l.1.09a1.28 1.28 0 0 1-1.72 1.89zm.82 12.81a1.28 1.28 0 0 1 1.72-1.9l.09.09a1.27 1.27 0 1 1-1.71 1.89zm.92 12.89a1.28 1.28 0 0 1 1.71-1.9l.1.09a1.27 1.27 0 0 1-.86 2.22 1.26 1.26 0 0 1-.85-.33zm.92 12.89a1.27 1.27 0 1 1 1.71-1.89l.1.08a1.28 1.28 0 0 1-1.72 1.89zm.91 12.89a1.28 1.28 0 0 1 1.72-1.9l.09.09a1.28 1.28 0 1 1-1.71 1.9zm2.82 12.89a1.27 1.27 0 0 1-.95.42 1.29 1.29 0 0 1-.86-.33l-.09-.09a1.28 1.28 0 0 1-.09-1.8 1.26 1.26 0 0 1 1.8-.09l.1.08a1.29 1.29 0 0 1 .09 1.83zm.44-58.2a1.28 1.28 0 1 1 1.71-1.9l.09.09a1.28 1.28 0 0 1-.85 2.23 1.23 1.23 0 0 1-.86-.34zm.91 12.89a1.28 1.28 0 1 1 1.72-1.89l.09.08a1.29 1.29 0 0 1 .09 1.81 1.27 1.27 0 0 1-1.8.09zm.92 12.89a1.27 1.27 0 1 1 1.71-1.89l.1.08a1.28 1.28 0 0 1-1.72 1.9zm.92 12.9a1.28 1.28 0 1 1 1.71-1.9l.09.08a1.28 1.28 0 1 1-1.71 1.9zm.91 12.89a1.28 1.28 0 0 1 1.71-1.9l.1.08a1.29 1.29 0 0 1 .09 1.81 1.27 1.27 0 0 1-1.8.09zm2.82 12.88a1.28 1.28 0 0 1-1.81.09l-.09-.08a1.28 1.28 0 0 1 1.71-1.9l.1.09a1.28 1.28 0 0 1 .09 1.82zm.43-58.2a1.28 1.28 0 1 1 1.72-1.89l.09.09a1.27 1.27 0 0 1-.86 2.22 1.26 1.26 0 0 1-.85-.33zm.92 12.9a1.28 1.28 0 0 1 1.71-1.9l.1.09a1.28 1.28 0 0 1-1.72 1.89zm.91 12.89a1.28 1.28 0 1 1 1.72-1.9l.09.09a1.27 1.27 0 1 1-1.71 1.89zm2.82 12.88a1.27 1.27 0 0 1-.95.42 1.25 1.25 0 0 1-.85-.32l-.1-.09a1.28 1.28 0 0 1 1.71-1.9l.1.09a1.28 1.28 0 0 1 .09 1.82z" fill="#dfc4ff"></path><path d="M785.42 133.64a1.28 1.28 0 1 0 1.71-1.9l-.09-.08a1.27 1.27 0 0 0-1.71 1.89zm6.73 4.36a1.29 1.29 0 0 0 .09 1.81l.1.08a1.27 1.27 0 0 0 .86.33 1.14 1.14 0 0 0 .51-.11c-.09-.83-.21-1.66-.32-2.49a1.31 1.31 0 0 0-1.24.38zm.92 12.89a1.29 1.29 0 0 0 .09 1.81l.09.08a1.26 1.26 0 0 0 .86.33 1.32 1.32 0 0 0 .48-.09c0-.82-.05-1.63-.08-2.44a1.26 1.26 0 0 0-1.44.31zm-4.93-4.45a1.28 1.28 0 0 0-.09-1.8l-.09-.09a1.28 1.28 0 1 0-1.72 1.89l.1.09a1.27 1.27 0 0 0 1.8-.09zM766.82 128l-1-.09a1.15 1.15 0 0 0 1 .09zm14.4 12.18a1.26 1.26 0 0 0-.09-1.8l-.09-.09a1.28 1.28 0 1 0-1.71 1.9l.09.08a1.23 1.23 0 0 0 .86.34 1.26 1.26 0 0 0 .94-.43zm-6.91-6.25a1.28 1.28 0 0 0-.09-1.8l-.1-.09a1.28 1.28 0 0 0-1.8.09 1.26 1.26 0 0 0 .09 1.8l.09.09a1.28 1.28 0 0 0 1.81-.09zm.91 12.89a1.26 1.26 0 0 0-.09-1.8l-.09-.09a1.28 1.28 0 0 0-1.72 1.9l.1.08a1.27 1.27 0 0 0 1.8-.09zm-22.55-18.67a1.26 1.26 0 0 0 .85.33 1.31 1.31 0 0 0 1-.42 1.29 1.29 0 0 0 .29-1.18l-2.51-.24a1.26 1.26 0 0 0 .32 1.42zm29.47 24.93a1.29 1.29 0 0 0-.09-1.81l-.09-.08a1.28 1.28 0 1 0-1.72 1.89l.1.09a1.27 1.27 0 0 0 1.8-.09zm6.92 6.25a1.28 1.28 0 0 0-.09-1.8l-.1-.09a1.28 1.28 0 0 0-1.71 1.9l.09.08a1.29 1.29 0 0 0 .86.33 1.27 1.27 0 0 0 .95-.42zm5.02 6.26.09.09.12.08.14-2.29a1.13 1.13 0 0 0-.44.32 1.26 1.26 0 0 0 .09 1.8zm-32.69-31.28a1.28 1.28 0 0 0-.09-1.8l-.1-.09a1.28 1.28 0 0 0-1.71 1.9l.09.08a1.31 1.31 0 0 0 .86.33 1.27 1.27 0 0 0 .95-.42zm6.92 6.26a1.29 1.29 0 0 0-.09-1.81l-.1-.08a1.27 1.27 0 0 0-1.71 1.89l.09.09a1.29 1.29 0 0 0 .86.33 1.32 1.32 0 0 0 .95-.42zm-6.01 6.63a1.26 1.26 0 0 0-.09-1.8l-.09-.09a1.28 1.28 0 0 0-1.71 1.9l.09.08a1.27 1.27 0 0 0 .86.33 1.25 1.25 0 0 0 .94-.42zm6.92 6.26a1.28 1.28 0 0 0-.09-1.81l-.09-.08a1.28 1.28 0 1 0-1.72 1.89l.1.09a1.27 1.27 0 0 0 1.8-.09zm-20.94-20.66a1.28 1.28 0 0 0-1.71 1.9l.1.08a1.27 1.27 0 0 0 1.8-.09 1.28 1.28 0 0 0-.09-1.8zm27.86 26.91a1.28 1.28 0 0 0-.09-1.8l-.1-.09a1.28 1.28 0 0 0-1.71 1.9l.1.08a1.27 1.27 0 0 0 1.8-.09zm6.92 6.29a1.29 1.29 0 0 0-.09-1.81l-.1-.08a1.27 1.27 0 1 0-1.71 1.89l.09.09a1.28 1.28 0 0 0 1.81-.09zm6.94 6.22a1.26 1.26 0 0 0-.09-1.8l-.09-.09a1.28 1.28 0 1 0-1.72 1.9l.1.08a1.27 1.27 0 0 0 1.8-.09zM755.39 141a1.29 1.29 0 0 0-.09-1.81l-.1-.08a1.27 1.27 0 0 0-1.71 1.89l.09.09a1.29 1.29 0 0 0 .86.33 1.27 1.27 0 0 0 .95-.42zm21.66 31.61a1.28 1.28 0 0 0-.08-1.81l-.1-.08a1.27 1.27 0 1 0-1.71 1.89l.09.08a1.28 1.28 0 0 0 1.8-.08zm-6.91-6.26a1.29 1.29 0 0 0-.09-1.81l-.1-.08a1.27 1.27 0 0 0-1.71 1.89l.09.09a1.31 1.31 0 0 0 .86.33 1.27 1.27 0 0 0 .95-.42zM784 178.86a1.27 1.27 0 0 0-.09-1.81l-.09-.08a1.28 1.28 0 1 0-1.71 1.9l.09.08a1.27 1.27 0 0 0 1.8-.09zm-20.78-18.77a1.28 1.28 0 0 0-.09-1.8l-.09-.09a1.28 1.28 0 0 0-1.72 1.9l.1.08a1.22 1.22 0 0 0 .85.33 1.27 1.27 0 0 0 .95-.42zm-13.83-12.51a1.28 1.28 0 0 0-.09-1.8l-.1-.09a1.28 1.28 0 0 0-1.71 1.9l.09.08a1.24 1.24 0 0 0 .86.33 1.28 1.28 0 0 0 .95-.42zm6.91 6.26a1.27 1.27 0 0 0-.09-1.81l-.09-.08a1.28 1.28 0 1 0-1.72 1.89l.1.09a1.27 1.27 0 0 0 1.8-.09zm34.4 29.38a1.28 1.28 0 0 0-1.71 1.9l.1.09a1.25 1.25 0 0 0 .85.32 1.27 1.27 0 0 0 .86-2.22zm-48.23-41.89a1.29 1.29 0 0 0-.09-1.81l-.1-.08a1.28 1.28 0 0 0-1.8.09 1.49 1.49 0 0 0-.15.2l-.08 1.13a1.16 1.16 0 0 0 .32.47l.09.09a1.31 1.31 0 0 0 .86.33 1.27 1.27 0 0 0 .95-.42zM764.14 173a1.29 1.29 0 0 0-.09-1.81l-.1-.08a1.27 1.27 0 0 0-1.71 1.89l.09.09a1.29 1.29 0 0 0 .86.33 1.31 1.31 0 0 0 .95-.42zm-13.84-12.52a1.27 1.27 0 0 0-.09-1.81l-.09-.08a1.28 1.28 0 1 0-1.72 1.89l.1.09a1.27 1.27 0 0 0 .86.33 1.3 1.3 0 0 0 .94-.42zm34.59 31.27a1.29 1.29 0 0 0-.09-1.81l-.1-.08a1.28 1.28 0 0 0-1.71 1.9l.1.08a1.27 1.27 0 0 0 1.8-.09zm-27.67-25.02a1.28 1.28 0 0 0-.09-1.8l-.09-.09a1.28 1.28 0 0 0-1.72 1.9l.1.08a1.27 1.27 0 0 0 1.8-.09zM778 185.49a1.27 1.27 0 0 0-.09-1.8l-.09-.09a1.28 1.28 0 0 0-1.72 1.9l.1.09a1.26 1.26 0 0 0 .85.33 1.28 1.28 0 0 0 .95-.43zm-6.95-6.25a1.27 1.27 0 0 0-.08-1.8l-.1-.09a1.28 1.28 0 0 0-1.72 1.89l.1.09a1.27 1.27 0 0 0 1.8-.09zm-29.47-24.93a1.28 1.28 0 1 0 1.72-1.89l-.1-.09a1.28 1.28 0 0 0-1.71 1.9zm.92 12.89a1.27 1.27 0 0 0 1.71-1.89l-.09-.09a1.28 1.28 0 1 0-1.72 1.9zm43.12 35.55a1.28 1.28 0 0 0-1.71 1.9l.09.08a1.28 1.28 0 1 0 1.72-1.89zm-34.4-29.38a1.29 1.29 0 0 0-.09-1.81l-.1-.08a1.26 1.26 0 0 0-1.8.09 1.28 1.28 0 0 0 .09 1.8l.09.09a1.31 1.31 0 0 0 .86.33 1.27 1.27 0 0 0 .95-.42zm6.92 6.25a1.28 1.28 0 0 0-.09-1.8l-.1-.09a1.28 1.28 0 0 0-1.71 1.9l.09.08a1.28 1.28 0 0 0 1.81-.09zm20.56 16.88a1.26 1.26 0 0 0-1.8.09 1.28 1.28 0 0 0 .09 1.8l.09.09a1.29 1.29 0 0 0 .86.33 1.27 1.27 0 0 0 .95-.42 1.29 1.29 0 0 0-.09-1.81zm-13.65-10.62a1.27 1.27 0 0 0-.09-1.81l-.09-.08a1.28 1.28 0 1 0-1.72 1.89l.1.09a1.27 1.27 0 0 0 1.8-.09zm6.74 4.36a1.28 1.28 0 0 0-1.72 1.9l.1.08a1.27 1.27 0 0 0 1.8-.09 1.28 1.28 0 0 0-.09-1.8zM737.9 171.7l-.18 2.41a1.32 1.32 0 0 0 .58-.36 1.29 1.29 0 0 0-.09-1.81l-.09-.08zm14.24 14.56a1.29 1.29 0 0 0-.09-1.81l-.1-.08a1.27 1.27 0 0 0-1.71 1.89l.09.09a1.28 1.28 0 0 0 1.81-.09zm6.73 4.36a1.28 1.28 0 1 0-1.72 1.9l.1.08a1.27 1.27 0 1 0 1.71-1.89zm19.99 21.08a1.25 1.25 0 0 0 .94-.42 1.27 1.27 0 0 0-.09-1.81l-.09-.08a1.27 1.27 0 1 0-1.71 1.89l.09.09a1.27 1.27 0 0 0 .86.33zm-13.08-14.82a1.27 1.27 0 0 0-1.71 1.89l.1.09a1.27 1.27 0 0 0 1.8-.09 1.29 1.29 0 0 0-.09-1.81zm-22.55-18.68a1.29 1.29 0 0 0 .09 1.81l.09.08a1.29 1.29 0 0 0 .86.33 1.27 1.27 0 0 0 .86-2.22l-.1-.09a1.28 1.28 0 0 0-1.8.09zm29.57 25.02-.1-.09a1.27 1.27 0 0 0-2 1.56 1.19 1.19 0 0 0 .26.34l.09.08a1.28 1.28 0 0 0 1.76 0 1.28 1.28 0 0 0-.01-1.89zm-13.8 2.61a1.28 1.28 0 0 0 .86-2.23l-.1-.09a1.28 1.28 0 0 0-1.71 1.9l.09.09a1.31 1.31 0 0 0 .86.33zM746 191a1.28 1.28 0 1 0-1.71 1.9l.09.09a1.27 1.27 0 0 0 .86.33 1.28 1.28 0 0 0 .85-2.23zm-7-6.25a1.28 1.28 0 0 0-1.8.09 1.26 1.26 0 0 0 .09 1.8l.09.09a1.29 1.29 0 0 0 .86.33 1.27 1.27 0 0 0 .86-2.22zm13.87 12.51a1.28 1.28 0 1 0-1.72 1.89l.1.09a1.27 1.27 0 0 0 1.8-.09 1.28 1.28 0 0 0-.09-1.8zM773.62 216a1.29 1.29 0 0 0-1.81.09 1.37 1.37 0 0 0-.15.21l2.44.44a1.3 1.3 0 0 0-.39-.65zm-7.68-3.92a1.27 1.27 0 0 0 .86-2.22l-.1-.09a1.28 1.28 0 0 0-1.8.09 1.26 1.26 0 0 0 .09 1.8l.09.09a1.29 1.29 0 0 0 .86.33zm-12.94.38a1.27 1.27 0 0 0 .86-2.22l-.1-.09a1.28 1.28 0 0 0-1.71 1.9l.09.08a1.29 1.29 0 0 0 .86.33zm-6.13-8.56a1.28 1.28 0 1 0-1.72 1.89l.1.09a1.26 1.26 0 0 0 .85.33 1.31 1.31 0 0 0 .95-.42A1.29 1.29 0 0 0 747 204zm-6.87-6.17-.09-.09a1.29 1.29 0 0 0-1.81.09 1.31 1.31 0 0 0 .09 1.81l.1.08a1.27 1.27 0 0 0 1.8-.09 1.11 1.11 0 0 0 .21-.32 1.26 1.26 0 0 0-.3-1.48zm.86 12.8a1.27 1.27 0 0 0-1.64-.05l1.92.35a.91.91 0 0 0-.18-.21z" fill="#8e5cff"></path><path d="M592.89 154.09c.07-1.52.38-9.21-.23-11a1.08 1.08 0 0 0-2 .7c.35 1 .27 6.56.11 10.17a1.08 1.08 0 0 0 1 1.13 1.09 1.09 0 0 0 1.12-1zm-6.01-4.22a1.08 1.08 0 0 0 1 1.13h.12a1.08 1.08 0 0 0 1.08-1c.06-1 .29-6.18-.32-7.94a1.08 1.08 0 1 0-2.05.7c.29 1.04.29 4.92.17 7.11z" fill="#121214"></path><ellipse cx="358.93" cy="439.89" rx="136.82" ry="125.8" transform="rotate(-1.55 358.57 439.61)" fill="#efe6ff"></ellipse><path d="m378.12 458.38 56.59 6.73a13.26 13.26 0 0 0 3.21 0l53.08-6.95a12.35 12.35 0 0 0 3.93-1.2l26.34-13.19a11.73 11.73 0 0 0 1.13-.65l22.6-14.79a2.48 2.48 0 0 0 1.07-2.7c-.59-2.24-2.43-5.06-7.89-5.73-9.6-1.17-25.72 9.53-25.88 9.63a1.11 1.11 0 0 1-.29.14L487.44 437a.9.9 0 0 1-.28 0l-16.67.44a1.07 1.07 0 0 1-1.11-1l-8.2.21-9.45-1a126.17 126.17 0 0 1-12.75 1c-2.49.09-5 .16-7.47.23-11.26.34-21.9.65-27 2.43a1.13 1.13 0 0 1-.36.06 1.07 1.07 0 0 1-1-.73 1.08 1.08 0 0 1 .67-1.38c5.45-1.89 16.25-2.21 27.68-2.54 2.47-.07 5-.15 7.45-.24a125.86 125.86 0 0 0 24.88-3.29c2.41-.51 4.9-1 7.82-1.59 6.11-1.18 10.35-4.6 11.64-9.4a10.88 10.88 0 0 0-3.44-11.1c-5.74-5-26.32-2.89-37.37-1.76l-3.64.36a74.27 74.27 0 0 1-32.62-3.7c-12.14-4.1-32.59-6.44-45.6-5.22-13.37 1.25-24.9 9.67-25 9.75a1.09 1.09 0 0 1-1.43-.13c-3.3 2.95-8.93 6.54-13 9l33.66 41.61c9.73-2.88 22.67-.73 23.27-.63zm84.43-49.15c4.12-.72 11.52-1.43 14.81 2a10.43 10.43 0 0 1 2.93 8.46 7.68 7.68 0 0 1-3.5 5.69c-1.12.69-4.84 1.76-11.06 3.19a3.08 3.08 0 0 1-.68.08 3 3 0 0 1-3-2.72l-1.47-14.05a2.42 2.42 0 0 1 1.97-2.65zm-23.12 12.59a1.09 1.09 0 1 1 2.17.11c-.12 2.19-.16 6.06.21 7.12a1.09 1.09 0 0 1-.68 1.38 1 1 0 0 1-.35.06 1.07 1.07 0 0 1-1-.73c-.63-1.76-.4-6.93-.35-7.94zm-3.84-4.11a1.09 1.09 0 1 1 2.17.09c-.17 3.62-.24 9.16.1 10.17a1.08 1.08 0 0 1-.67 1.38 1 1 0 0 1-.35.06 1.1 1.1 0 0 1-1-.74c-.63-1.76-.32-9.44-.25-10.96z" fill="#c2b48f"></path><path d="M545.59 418.12c-.68-2.65-3.82-5.24-10.63-4.54-7.45.77-18 8.41-22.13 11.66a1.1 1.1 0 0 1-.67.22 1.09 1.09 0 0 1-.68-.24l-5.11 3.88 4.85-1.46c1.74-1.14 17.2-11.12 27.22-9.89 4 .5 6.44 2.07 7.87 3.77l.24-.88a4.35 4.35 0 0 0 .24-1.71 1.07 1.07 0 0 1-1.2-.81z" fill="#c2b48f"></path><path d="M511.31 425.05a1.09 1.09 0 0 1 .19-1.53l2.18-1.66-23.8 6.26h-.28a1.08 1.08 0 0 1-.27-2.13l14.67-3.84a4.33 4.33 0 0 0-2.41-2.92c-2.6-1.32-12-.78-15.38-.46a1 1 0 0 1-.53-.09 13 13 0 0 1-.39 2.21c-1.51 5.63-6.36 9.62-13.32 11-2.9.55-5.38 1.08-7.78 1.58-4.29.9-8.08 1.69-12.5 2.29l9.45 1 8.2-.21a1.08 1.08 0 0 1 1.05-1.12l16.53-.43 19.41-5.82 5.11-3.88z" fill="#af9d80"></path><path d="M547.69 417.59c-.9-3.53-4.77-7-13-6.16-4.92.5-10.83 3.58-15.86 6.83l-12.74 3.34a6.44 6.44 0 0 0-3.53-4.31c-3.62-1.83-15.25-.8-16.56-.67a1 1 0 0 0-.3.07 13.1 13.1 0 0 0-4.53-9.11c-6.45-5.59-26.83-3.52-39-2.28l-3.63.36a72.12 72.12 0 0 1-31.62-3.66c-12.38-4.17-33.24-6.56-46.51-5.32-14 1.31-25.61 9.81-26.09 10.17a1.07 1.07 0 0 0-.23 1.51.39.39 0 0 0 .08.1 1.09 1.09 0 0 0 1.43.13c.12-.08 11.65-8.5 25-9.75 13-1.22 33.46 1.12 45.6 5.22a74.27 74.27 0 0 0 32.57 3.78l3.64-.36c11.05-1.13 31.63-3.21 37.37 1.76a10.88 10.88 0 0 1 3.44 11.1c-1.29 4.8-5.53 8.22-11.64 9.4-2.92.56-5.41 1.08-7.82 1.59a125.86 125.86 0 0 1-24.88 3.29c-2.48.09-5 .17-7.45.24-11.43.33-22.23.65-27.68 2.54a1.08 1.08 0 0 0-.67 1.38 1.07 1.07 0 0 0 1 .73 1.13 1.13 0 0 0 .36-.06c5.13-1.78 15.77-2.09 27-2.43 2.48-.07 5-.14 7.47-.23a126.17 126.17 0 0 0 12.75-1c4.42-.6 8.21-1.39 12.5-2.29 2.4-.5 4.88-1 7.78-1.58 7-1.34 11.81-5.33 13.32-11a13 13 0 0 0 .39-2.21 1 1 0 0 0 .53.09c3.4-.32 12.78-.86 15.38.46a4.33 4.33 0 0 1 2.41 2.92L489.33 426a1.08 1.08 0 0 0 .27 2.13h.28l23.8-6.26-2.18 1.66a1.09 1.09 0 0 0-.19 1.53l.17.17a1.09 1.09 0 0 0 .68.24 1.1 1.1 0 0 0 .67-.22c4.17-3.25 14.68-10.9 22.17-11.67 6.81-.7 9.95 1.89 10.63 4.54a1.07 1.07 0 0 0 1.2.81h.11a1.1 1.1 0 0 0 .75-1.34z" fill="#121214"></path><path d="M546.31 421.52c-1.43-1.7-3.83-3.27-7.87-3.77-10-1.23-25.48 8.75-27.22 9.89l-4.85 1.46-19.37 5.82-16.53.43a1.08 1.08 0 0 0-1.05 1.12 1.07 1.07 0 0 0 1.11 1l16.67-.44a.9.9 0 0 0 .28 0l24.52-7.36a1.11 1.11 0 0 0 .29-.14c.16-.1 16.28-10.8 25.88-9.63 5.46.67 7.3 3.49 7.89 5.73a2.48 2.48 0 0 1-1.07 2.7l-22.59 14.79a11.73 11.73 0 0 1-1.13.65L494.93 457a12.35 12.35 0 0 1-3.93 1.2l-53.08 6.93a13.26 13.26 0 0 1-3.21 0l-56.59-6.73c-.6-.1-13.54-2.25-23.33.68l1.48 1.84c9.24-2.41 21.35-.41 21.54-.38l56.65 6.74a15.1 15.1 0 0 0 3.74 0l53.08-6.93a14.32 14.32 0 0 0 4.62-1.41l26.34-13.19a15.1 15.1 0 0 0 1.35-.77l22.59-14.8a4.65 4.65 0 0 0 2-5.06 9.23 9.23 0 0 0-1.87-3.6zm-109.47 7.89a1 1 0 0 0 .35-.06 1.08 1.08 0 0 0 .67-1.38c-.34-1-.27-6.55-.1-10.17a1.09 1.09 0 1 0-2.17-.09c-.07 1.52-.38 9.2.22 11a1.1 1.1 0 0 0 1.03.7zm3.94 1.08a1 1 0 0 0 .35-.06 1.09 1.09 0 0 0 .68-1.38c-.37-1.06-.33-4.93-.21-7.12a1.09 1.09 0 1 0-2.17-.11c-.05 1-.28 6.17.33 7.94a1.07 1.07 0 0 0 1.02.73z" fill="#121214"></path><path d="M462 425.92a3 3 0 0 0 3 2.72 3.08 3.08 0 0 0 .68-.08c6.22-1.43 9.94-2.5 11.06-3.19a7.68 7.68 0 0 0 3.5-5.69 10.43 10.43 0 0 0-2.93-8.46c-3.29-3.42-10.69-2.71-14.81-2a2.42 2.42 0 0 0-2 2.64z" fill="#96826d"></path><path d="m354.79 459.06-33.66-41.61-4.38-5.45a4.49 4.49 0 0 0-6.2-.75L225.93 470a117.53 117.53 0 0 0 7.07 19.72 1.28 1.28 0 0 1 1.28.25l.09.09a1.28 1.28 0 0 1 .09 1.8 1.31 1.31 0 0 1-.32.25 124.4 124.4 0 0 0 20.25 29.4 1.27 1.27 0 0 1 1.55.12l.1.08a1.28 1.28 0 0 1 .16 1.71q2.31 2.4 4.75 4.7l.11-.15a1.28 1.28 0 0 1 1.8-.09l.1.09a1.28 1.28 0 0 1 .09 1.8l-.16.14q2.47 2.22 5.07 4.34a1.27 1.27 0 0 1 1.81-.09l.09.08a1.28 1.28 0 0 1 .18 1.69c1.83 1.44 3.71 2.82 5.62 4.17a1.25 1.25 0 0 1 1 .31l.1.09a1.3 1.3 0 0 1 .39.65l.64.43 39.79-34.32a1.32 1.32 0 0 1 .2-.32 1.37 1.37 0 0 1 .59-.37l5.36-4.62a1.28 1.28 0 0 1 1.86-1.74l.08.07 5.1-4.4a1.31 1.31 0 0 1-.8-.32l-.09-.09a1.28 1.28 0 0 1 1.71-1.9l.09.09a1.26 1.26 0 0 1 .42 1.08L359.62 471a4.5 4.5 0 0 0 .14-5.81l-3.49-4.31zm-116.21 26.17a1.28 1.28 0 0 1 1.72-1.9l.09.09a1.27 1.27 0 0 1-.86 2.22 1.22 1.22 0 0 1-.85-.33zm2.82 12.89a1.31 1.31 0 0 1-1 .42 1.29 1.29 0 0 1-.86-.33l-.09-.09a1.28 1.28 0 0 1 1.71-1.9l.1.09a1.29 1.29 0 0 1 .14 1.81zm3.18-19.53a1.28 1.28 0 1 1 1.72-1.89l.09.08a1.28 1.28 0 1 1-1.71 1.9zm.92 12.89a1.27 1.27 0 0 1 1.71-1.89l.1.08a1.29 1.29 0 0 1 .09 1.81 1.27 1.27 0 0 1-1 .42 1.31 1.31 0 0 1-.86-.33zm2.82 12.89a1.28 1.28 0 0 1-1.81.09l-.09-.09a1.26 1.26 0 0 1-.09-1.8 1.28 1.28 0 0 1 1.8-.09l.1.09a1.28 1.28 0 0 1 .09 1.8zm2.26-32.37a1.57 1.57 0 0 1-.2-.25l2.11-1.46a1.27 1.27 0 0 1-1.81 1.79zm.92 12.89a1.28 1.28 0 0 1 1.71-1.9l.1.09a1.27 1.27 0 0 1-.86 2.22 1.26 1.26 0 0 1-.85-.33zm.92 12.89a1.28 1.28 0 0 1 1.71-1.9l.1.09a1.27 1.27 0 0 1-.86 2.22 1.24 1.24 0 0 1-.86-.33zm2.81 12.89a1.3 1.3 0 0 1-.94.42 1.27 1.27 0 0 1-.86-.33l-.1-.09a1.28 1.28 0 0 1 1.72-1.9l.09.09a1.27 1.27 0 0 1 .09 1.77zm2.37-32.33-.1-.09a1.28 1.28 0 1 1 1.72-1.89l.09.08a1.29 1.29 0 0 1 .09 1.81 1.31 1.31 0 0 1-.95.42 1.26 1.26 0 0 1-.85-.37zm.82 12.8a1.27 1.27 0 0 1 1.71-1.89l.1.08a1.29 1.29 0 0 1 .09 1.81 1.27 1.27 0 0 1-.95.42 1.29 1.29 0 0 1-.86-.33zm.91 12.89a1.28 1.28 0 1 1 1.72-1.89l.09.08a1.28 1.28 0 1 1-1.71 1.9zm2.82 12.89a1.27 1.27 0 0 1-.95.42 1.31 1.31 0 0 1-.86-.33l-.09-.09A1.28 1.28 0 1 1 262 515l.09.09a1.28 1.28 0 0 1 .06 1.79zm71.85-55.7a1.27 1.27 0 0 1 1.8-.08l.1.08a1.28 1.28 0 0 1-.86 2.23 1.23 1.23 0 0 1-.86-.34l-.1-.08a1.28 1.28 0 0 1-.08-1.81zm-4.11 6.64a1.27 1.27 0 1 1-1.71 1.89l-.1-.08a1.28 1.28 0 0 1 1.72-1.9zm-1-13 .1.09a1.28 1.28 0 0 1-1.72 1.89l-.09-.09a1.27 1.27 0 0 1 1.71-1.89zm-2-10.62a1.26 1.26 0 0 1-.56-.29l-.1-.09a1.25 1.25 0 0 1-.41-.94zm-3 30.24a1.27 1.27 0 1 1-1.71 1.89l-.1-.09a1.28 1.28 0 1 1 1.72-1.89zm-10.46-30.15-.1-.08a1.28 1.28 0 1 1 1.72-1.9l.09.09a1.27 1.27 0 1 1-1.71 1.89zm2.72 12.8a1.27 1.27 0 0 1-1 .42 1.31 1.31 0 0 1-.86-.33l-.09-.08a1.28 1.28 0 1 1 1.72-1.9l.09.09a1.28 1.28 0 0 1 .15 1.82zm.73 11 .1.09a1.27 1.27 0 0 1 .08 1.8 1.25 1.25 0 0 1-.94.42 1.27 1.27 0 0 1-.86-.33l-.09-.08a1.28 1.28 0 0 1 1.71-1.9zm6.1-6.55a1.28 1.28 0 0 1-1.72 1.9l-.09-.09a1.27 1.27 0 0 1 1.71-1.89zm-.92-12.89a1.29 1.29 0 0 1 .09 1.81 1.31 1.31 0 0 1-1 .42 1.27 1.27 0 0 1-.86-.34l-.09-.08a1.28 1.28 0 1 1 1.72-1.89zm-.83-11.09a1.25 1.25 0 0 1-.94.42 1.22 1.22 0 0 1-.86-.33l-.09-.08a1.28 1.28 0 0 1-.1-1.81 1.33 1.33 0 0 1 .56-.35l1.58 2a.9.9 0 0 1-.14.17zm-8.9-8.05a.93.93 0 0 1 .18-.16 4.64 4.64 0 0 1 1.84.29 1.28 1.28 0 0 1-1.84 1.76l-.09-.09a1.26 1.26 0 0 1-.08-1.78zm-6 6.64a1.26 1.26 0 0 1 1.8-.09l.1.08a1.29 1.29 0 0 1 .09 1.81 1.32 1.32 0 0 1-.95.42 1.29 1.29 0 0 1-.86-.33l-.09-.09a1.26 1.26 0 0 1-.08-1.78zm-6 6.63a1.28 1.28 0 0 1 1.8-.09l.09.09a1.27 1.27 0 0 1 .1 1.8 1.28 1.28 0 0 1-.95.42 1.27 1.27 0 0 1-.86-.33l-.09-.08a1.27 1.27 0 0 1-.08-1.79zm-6 6.64a1.28 1.28 0 0 1 1.81-.09l.09.08a1.28 1.28 0 1 1-1.71 1.9l-.1-.09a1.28 1.28 0 0 1-.09-1.78zm-4.62-5.06a1.26 1.26 0 0 1-.3.6 1.28 1.28 0 0 1-1 .42h-.2zm-1.38 11.7a1.28 1.28 0 0 1 1.81-.1l.09.09a1.26 1.26 0 0 1 .09 1.8 1.26 1.26 0 0 1-1.8.1l-.1-.09a1.28 1.28 0 0 1-.09-1.78zm-4.1 6.63a1.27 1.27 0 1 1-1.71 1.89l-.1-.08a1.28 1.28 0 0 1 1.72-1.9zm-3.09-12.38 1.32-.92a1.23 1.23 0 0 1 .76.32l.1.09a1.28 1.28 0 0 1-1.72 1.89l-.09-.09a1.25 1.25 0 0 1-.37-1.27zm-5.73 6.13a1.27 1.27 0 0 1 1.81-.09l.09.08a1.27 1.27 0 0 1 .09 1.81 1.25 1.25 0 0 1-.94.42 1.27 1.27 0 0 1-.86-.33l-.09-.09a1.27 1.27 0 0 1-.1-1.78zm-11.91 15.09a1.28 1.28 0 1 1 1.72-1.89l.09.08a1.28 1.28 0 1 1-1.71 1.9zm.92 12.9a1.28 1.28 0 0 1 1.71-1.9l.1.09a1.27 1.27 0 0 1-.86 2.22 1.31 1.31 0 0 1-.86-.33zm.92 12.89a1.28 1.28 0 0 1 1.71-1.9l.09.09a1.26 1.26 0 0 1 .09 1.8 1.25 1.25 0 0 1-.94.42 1.27 1.27 0 0 1-.86-.33zm.91 12.89a1.28 1.28 0 0 1 1.72-1.9l.09.09a1.27 1.27 0 0 1-.86 2.22 1.22 1.22 0 0 1-.85-.33zm2.82 12.89a1.32 1.32 0 0 1-.95.42 1.25 1.25 0 0 1-.86-.34l-.09-.08a1.27 1.27 0 1 1 1.71-1.89l.1.08a1.29 1.29 0 0 1 .09 1.81zm.53-58.14-.1-.08a1.28 1.28 0 1 1 1.72-1.9l.09.09a1.27 1.27 0 1 1-1.71 1.89zm.82 12.81a1.28 1.28 0 0 1 1.71-1.9l.1.09a1.27 1.27 0 0 1-.86 2.22 1.22 1.22 0 0 1-.85-.33zm.92 12.89a1.27 1.27 0 1 1 1.71-1.89l.1.08a1.29 1.29 0 0 1 .09 1.81 1.32 1.32 0 0 1-.95.42 1.29 1.29 0 0 1-.86-.33zm.91 12.89a1.28 1.28 0 1 1 1.72-1.89l.09.08a1.28 1.28 0 1 1-1.71 1.9zm.92 12.89a1.27 1.27 0 1 1 1.71-1.89l.1.09a1.28 1.28 0 0 1-1.72 1.89zm2.83 12.91a1.27 1.27 0 0 1-1.8.09l-.1-.09a1.28 1.28 0 0 1 1.72-1.89l.1.09a1.27 1.27 0 0 1 .08 1.8zm.54-58.11-.1-.09a1.28 1.28 0 1 1 1.72-1.89l.09.08a1.29 1.29 0 0 1 .09 1.81 1.27 1.27 0 0 1-1.8.09zm.82 12.8a1.26 1.26 0 0 1-.09-1.8 1.28 1.28 0 0 1 1.8-.09l.1.08a1.28 1.28 0 0 1-1.72 1.9zm.91 12.89a1.28 1.28 0 1 1 1.72-1.89l.09.09a1.27 1.27 0 1 1-1.71 1.89zm.92 12.9a1.28 1.28 0 1 1 1.72-1.9l.09.09a1.27 1.27 0 0 1-.86 2.22 1.31 1.31 0 0 1-.86-.33zm.92 12.89a1.28 1.28 0 0 1 1.71-1.9l.1.09a1.27 1.27 0 0 1 .08 1.8 1.27 1.27 0 0 1-1.8.09zm2.81 12.88a1.28 1.28 0 0 1-.95.43 1.26 1.26 0 0 1-.85-.33l-.1-.09a1.28 1.28 0 0 1 1.72-1.9l.09.09a1.27 1.27 0 0 1 .07 1.8zm.44-58.19a1.28 1.28 0 0 1 1.71-1.9l.1.09a1.28 1.28 0 0 1-1.72 1.89zm.91 12.89a1.28 1.28 0 0 1 1.72-1.9l.09.09a1.27 1.27 0 0 1 .09 1.81 1.29 1.29 0 0 1-.94.41 1.22 1.22 0 0 1-.86-.33zm.92 12.89a1.28 1.28 0 1 1 1.72-1.89l.09.08a1.29 1.29 0 0 1 .09 1.81 1.31 1.31 0 0 1-.95.42 1.26 1.26 0 0 1-.85-.33zm.92 12.89a1.27 1.27 0 0 1 1.71-1.89l.1.08a1.28 1.28 0 0 1-1.72 1.9zM288.9 529a1.27 1.27 0 0 1-1.8.09l-.1-.09a1.27 1.27 0 1 1 1.71-1.89l.09.08a1.27 1.27 0 0 1 .1 1.81zm.44-58.2a1.28 1.28 0 0 1-.09-1.8 1.26 1.26 0 0 1 1.8-.09l.1.08a1.29 1.29 0 0 1 .09 1.81 1.27 1.27 0 0 1-.95.42 1.31 1.31 0 0 1-.86-.33zm.92 12.89a1.27 1.27 0 1 1 1.71-1.89l.1.08a1.28 1.28 0 0 1 .08 1.81 1.25 1.25 0 0 1-.94.42 1.27 1.27 0 0 1-.86-.33zm.91 12.89a1.28 1.28 0 1 1 1.72-1.89l.09.09a1.27 1.27 0 0 1-.86 2.22 1.26 1.26 0 0 1-.85-.33zm.92 12.89a1.27 1.27 0 0 1 1.71-1.89l.1.09a1.28 1.28 0 0 1-1.72 1.89zm2.82 12.89a1.28 1.28 0 0 1-1.81.09l-.09-.08a1.28 1.28 0 1 1 1.71-1.9l.09.09a1.27 1.27 0 0 1 .1 1.81zm.43-58.2a1.27 1.27 0 1 1 1.71-1.89l.1.09a1.27 1.27 0 0 1-.86 2.22 1.26 1.26 0 0 1-.85-.33zm.92 12.9a1.28 1.28 0 0 1 1.71-1.9l.1.09a1.28 1.28 0 0 1-1.72 1.89zm.91 12.89a1.28 1.28 0 0 1 1.72-1.9l.09.09a1.27 1.27 0 1 1-1.71 1.89zm.92 12.89A1.29 1.29 0 0 1 298 501a1.27 1.27 0 0 1 1.8-.08l.1.08a1.27 1.27 0 0 1-.86 2.22 1.26 1.26 0 0 1-.86-.33zm2.82 12.88a1.27 1.27 0 0 1-1.81.1l-.09-.09a1.28 1.28 0 1 1 1.71-1.9l.09.09a1.27 1.27 0 0 1 .1 1.81zm.43-58.19a1.28 1.28 0 1 1 1.72-1.9l.09.09a1.27 1.27 0 0 1-.86 2.22 1.22 1.22 0 0 1-.85-.33zm.92 12.89a1.27 1.27 0 1 1 1.71-1.89l.1.08a1.29 1.29 0 0 1 .09 1.81 1.32 1.32 0 0 1-1 .42 1.25 1.25 0 0 1-.86-.34zm.91 12.89a1.28 1.28 0 0 1 1.72-1.89l.09.08a1.28 1.28 0 1 1-1.71 1.9zm.92 12.89a1.28 1.28 0 1 1 1.72-1.89l.09.08a1.29 1.29 0 0 1 .09 1.81 1.27 1.27 0 0 1-.95.42 1.31 1.31 0 0 1-.86-.33zm2.82 12.89a1.27 1.27 0 0 1-1 .42 1.29 1.29 0 0 1-.86-.33l-.09-.08a1.28 1.28 0 1 1 1.71-1.9l.09.08a1.28 1.28 0 0 1 .15 1.82zm.43-58.2a1.28 1.28 0 1 1 1.72-1.89l.09.08a1.28 1.28 0 1 1-1.71 1.9zm.92 12.89a1.27 1.27 0 1 1 1.74-1.88l.1.09a1.28 1.28 0 0 1-1.72 1.89zm.91 12.89a1.28 1.28 0 0 1 1.72-1.89l.1.09a1.28 1.28 0 0 1-1.72 1.89zm.92 12.9a1.28 1.28 0 1 1 1.72-1.9l.09.09a1.27 1.27 0 0 1-.9 2.24 1.26 1.26 0 0 1-.85-.33zm2.82 12.88a1.27 1.27 0 0 1-1 .42 1.29 1.29 0 0 1-.86-.33l-.09-.08a1.28 1.28 0 0 1 1.71-1.9l.1.09a1.28 1.28 0 0 1 .14 1.81zm3.18-19.52a1.28 1.28 0 1 1 1.72-1.89l.09.08a1.28 1.28 0 0 1 .09 1.81 1.31 1.31 0 0 1-.95.42 1.23 1.23 0 0 1-.85-.34zm2.82 12.88a1.28 1.28 0 0 1-1 .43 1.26 1.26 0 0 1-.85-.33l-.1-.09a1.28 1.28 0 0 1 1.71-1.9l.1.09a1.28 1.28 0 0 1 .14 1.81zm6-6.63a1.27 1.27 0 0 1-1.8.09l-.1-.08a1.28 1.28 0 0 1 1.71-1.9l.1.08a1.29 1.29 0 0 1 .09 1.82zm6-6.64a1.27 1.27 0 0 1-1 .42 1.25 1.25 0 0 1-.85-.32l-.1-.09a1.28 1.28 0 0 1 1.71-1.9l.1.09a1.28 1.28 0 0 1 .14 1.81zm4.1-6.63a1.28 1.28 0 0 1-.09-1.8 1.26 1.26 0 0 1 1.8-.09l.1.08a1.28 1.28 0 0 1-.86 2.23 1.26 1.26 0 0 1-.85-.33zm2.82 12.89a1.27 1.27 0 0 1-.95.42 1.31 1.31 0 0 1-.86-.33l-.09-.09a1.27 1.27 0 0 1 1.71-1.89l.1.08a1.29 1.29 0 0 1 .09 1.82zm3.17-19.51a1.28 1.28 0 1 1 1.72-1.9l.09.08a1.28 1.28 0 0 1 .09 1.81 1.27 1.27 0 0 1-1.8.09zm2.82 12.88a1.27 1.27 0 0 1-1.8.09l-.1-.08a1.28 1.28 0 0 1 1.71-1.9l.1.09a1.28 1.28 0 0 1 .1 1.8zm6-6.64a1.28 1.28 0 0 1-.95.43 1.26 1.26 0 0 1-.85-.33l-.1-.09a1.28 1.28 0 0 1 1.71-1.9l.1.09a1.28 1.28 0 0 1 .1 1.8z" fill="#8e5cff"></path><path d="M319.25 435.82a1.28 1.28 0 0 0 .1 1.81l.09.08a1.22 1.22 0 0 0 .86.33 1.25 1.25 0 0 0 .94-.42.9.9 0 0 0 .15-.19l-1.58-2a1.33 1.33 0 0 0-.56.39zm7.11 8.18a1.26 1.26 0 0 0 .56.29l-1.07-1.32a1.25 1.25 0 0 0 .41.94zm-13.84-12.54a1.28 1.28 0 0 0 1.84-1.76 4.64 4.64 0 0 0-1.84-.29.93.93 0 0 0-.18.16 1.26 1.26 0 0 0 .09 1.8zm14.66 25.31.09.09A1.28 1.28 0 1 0 329 455l-.1-.09a1.27 1.27 0 0 0-1.71 1.89zm-7.01-8.06a1.29 1.29 0 0 0 .09 1.81l.09.08a1.27 1.27 0 0 0 .86.34 1.31 1.31 0 0 0 1-.42 1.29 1.29 0 0 0-.09-1.81l-.09-.08a1.28 1.28 0 0 0-1.86.08zm14.02 14.4a1.23 1.23 0 0 0 .86.34 1.28 1.28 0 0 0 .86-2.23l-.1-.08a1.28 1.28 0 0 0-1.72 1.89zM354.76 480a1.28 1.28 0 0 0 .09 1.81l.09.08a1.29 1.29 0 0 0 .86.33 1.27 1.27 0 0 0 .95-.42 1.17 1.17 0 0 0 .22-.37l-1.48-1.83a1.3 1.3 0 0 0-.73.4zm-11.85-10.72a1.28 1.28 0 0 0-.09-1.81l-.09-.08a1.28 1.28 0 1 0-1.72 1.9l.1.08a1.27 1.27 0 0 0 1.8-.09zm6.73 4.36a1.28 1.28 0 0 0-1.71 1.9l.1.09a1.26 1.26 0 0 0 .85.33 1.28 1.28 0 0 0 .86-2.23zm-43.12-35.54a1.29 1.29 0 0 0 .86.33 1.32 1.32 0 0 0 .95-.42 1.29 1.29 0 0 0-.09-1.81l-.1-.08a1.27 1.27 0 0 0-1.71 1.89zm8.72 6.16a1.26 1.26 0 0 0-.09-1.8l-.09-.09a1.28 1.28 0 1 0-1.72 1.9l.1.08a1.27 1.27 0 0 0 1.8-.09zm12.76 23.6a1.28 1.28 0 0 0 .08 1.81l.1.08a1.27 1.27 0 1 0 1.71-1.89l-.09-.09a1.28 1.28 0 0 0-1.8.09zm-18.76-16.96a1.27 1.27 0 0 0-.09-1.81l-.09-.08a1.28 1.28 0 1 0-1.72 1.89l.1.09a1.27 1.27 0 0 0 1.8-.09zm6.76 4.36a1.28 1.28 0 1 0-1.72 1.9l.09.08a1.31 1.31 0 0 0 .86.33 1.27 1.27 0 0 0 .86-2.22zm27.64 25.02a1.28 1.28 0 0 0-1.71 1.9l.1.08a1.27 1.27 0 0 0 1.8-.09 1.28 1.28 0 0 0-.09-1.8zm-6.73-4.36a1.28 1.28 0 0 0-.09-1.81l-.1-.08a1.26 1.26 0 0 0-1.8.09 1.28 1.28 0 0 0 .09 1.8l.1.09a1.27 1.27 0 0 0 1.8-.09zm-36.39-31.19a1.27 1.27 0 0 0 .86.33 1.28 1.28 0 0 0 .95-.42 1.27 1.27 0 0 0-.1-1.8l-.09-.09a1.28 1.28 0 0 0-1.71 1.9zm54.95 48.48.8-.69a1.29 1.29 0 0 0-.6.36 1.12 1.12 0 0 0-.2.33zm-34.38-31.6a1.26 1.26 0 0 0 .09 1.8l.09.09a1.28 1.28 0 0 0 1.72-1.9l-.1-.08a1.26 1.26 0 0 0-1.8.09zm28.71 27.24a1.28 1.28 0 0 0 .85-2.23l-.09-.08a1.27 1.27 0 0 0-1.71 1.89l.09.09a1.29 1.29 0 0 0 .86.33zm-55.28-37.48a1.28 1.28 0 0 0 1.71-1.9l-.09-.08a1.28 1.28 0 1 0-1.72 1.89zm20.57 16.87a1.27 1.27 0 0 0 .09 1.81l.09.08a1.27 1.27 0 0 0 .86.33 1.25 1.25 0 0 0 .94-.42 1.27 1.27 0 0 0-.08-1.8l-.1-.09a1.28 1.28 0 0 0-1.8.09zm-4.93-4.45a1.28 1.28 0 0 0-.09-1.8l-.1-.09a1.27 1.27 0 1 0-1.71 1.89l.09.09a1.29 1.29 0 0 0 .86.33 1.27 1.27 0 0 0 .95-.42zm27.48 23.13a1.27 1.27 0 0 0-1.71 1.89l.09.09a1.31 1.31 0 0 0 .86.33 1.27 1.27 0 0 0 .95-.42 1.29 1.29 0 0 0-.09-1.81zM322 474.5a1.28 1.28 0 0 0 .09 1.8l.1.09a1.27 1.27 0 1 0 1.71-1.89l-.09-.09a1.28 1.28 0 0 0-1.81.09zm21.8 20.98a1.28 1.28 0 0 0 .95-.42 1.27 1.27 0 0 0-.1-1.8l-.09-.09a1.28 1.28 0 1 0-1.71 1.9l.09.08a1.24 1.24 0 0 0 .86.33zM289.41 445a1.26 1.26 0 0 0 .3-.6l-1.45 1h.2a1.28 1.28 0 0 0 .95-.4zm41.31 35.66a1.28 1.28 0 0 0-1.71 1.9l.1.09a1.25 1.25 0 0 0 .85.32 1.27 1.27 0 0 0 .86-2.22zm-27.48-23.13a1.28 1.28 0 0 0-.09-1.8l-.09-.09a1.28 1.28 0 1 0-1.72 1.9l.1.08a1.22 1.22 0 0 0 .85.33 1.27 1.27 0 0 0 .95-.42zm34.56 44.59a1.25 1.25 0 0 0 .94-.42 1.27 1.27 0 0 0-.09-1.81l-.09-.08a1.28 1.28 0 1 0-1.71 1.9l.09.08a1.27 1.27 0 0 0 .86.33zm-33.64-31.69a1.29 1.29 0 0 0-.09-1.81l-.1-.08a1.27 1.27 0 1 0-1.71 1.89l.09.08a1.25 1.25 0 0 0 .86.34 1.32 1.32 0 0 0 .95-.42zm-6.92-6.26a1.28 1.28 0 0 0-.09-1.8l-.1-.09a1.27 1.27 0 1 0-1.71 1.89l.1.09a1.27 1.27 0 0 0 1.8-.09zm34.49 29.47-.09-.09a1.28 1.28 0 0 0-1.71 1.9l.09.09a1.31 1.31 0 0 0 .8.32h.06a1.29 1.29 0 0 0 1.27-1.15 1.26 1.26 0 0 0-.42-1.07zM318 482.94a1.28 1.28 0 0 0-.09-1.81l-.09-.08a1.28 1.28 0 1 0-1.72 1.89l.1.08a1.23 1.23 0 0 0 .85.34 1.31 1.31 0 0 0 .95-.42zm6.72 4.36a1.28 1.28 0 0 0-1.71 1.9l.1.08a1.27 1.27 0 0 0 1.8-.09 1.29 1.29 0 0 0-.09-1.81zm-13.65-10.62a1.27 1.27 0 0 0-.08-1.8l-.1-.09a1.28 1.28 0 0 0-1.72 1.89l.1.09a1.27 1.27 0 0 0 1.8-.09zm-29.47-24.93a1.28 1.28 0 1 0 1.72-1.89l-.1-.09a1.23 1.23 0 0 0-.76-.32l-1.32.92a1.25 1.25 0 0 0 .37 1.29zm6.92 6.25a1.28 1.28 0 0 0 1.71-1.9l-.09-.09a1.28 1.28 0 0 0-1.72 1.9zm43.28 50.76a1.3 1.3 0 0 0 .94-.42 1.27 1.27 0 0 0-.09-1.81l-.09-.08a1.28 1.28 0 1 0-1.72 1.89l.1.09a1.27 1.27 0 0 0 .86.33zm-33.64-31.7a1.28 1.28 0 0 0-.09-1.8l-.1-.09a1.28 1.28 0 0 0-1.71 1.9l.09.08a1.28 1.28 0 0 0 1.81-.09zm-15.83-14.31a1.29 1.29 0 0 0 .09 1.81l.1.08a1.27 1.27 0 0 0 1.71-1.89l-.09-.09a1.29 1.29 0 0 0-1.81.09zm8.91 8.06a1.29 1.29 0 0 0-.09-1.81l-.1-.08a1.26 1.26 0 0 0-1.8.09 1.28 1.28 0 0 0 .09 1.8l.09.09a1.31 1.31 0 0 0 .86.33 1.27 1.27 0 0 0 .95-.42zm-15.64-12.42a1.27 1.27 0 0 0 .86.33 1.25 1.25 0 0 0 .94-.42 1.27 1.27 0 0 0-.09-1.81l-.09-.08a1.27 1.27 0 1 0-1.71 1.89zm29.47 24.93a1.27 1.27 0 0 0-.09-1.81l-.09-.08a1.28 1.28 0 0 0-1.72 1.89l.1.09a1.27 1.27 0 0 0 1.8-.09zm13.65 10.61a1.28 1.28 0 0 0-1.71 1.9l.1.09a1.26 1.26 0 0 0 .85.33 1.28 1.28 0 0 0 .86-2.23zm-6.72-4.36a1.28 1.28 0 0 0-.09-1.8l-.09-.09a1.28 1.28 0 1 0-1.72 1.9l.1.08a1.27 1.27 0 0 0 1.8-.09zm11.83 10.71a1.29 1.29 0 0 0-.05 1.65l.15.16.09.08a1.28 1.28 0 0 0 1.81-.09 1.27 1.27 0 0 0-.1-1.8l-.08-.07a1.29 1.29 0 0 0-1.82.07zm1.96 15.11a1.27 1.27 0 0 0 .86-2.22l-.09-.09a1.28 1.28 0 0 0-1.72 1.9l.1.08a1.26 1.26 0 0 0 .85.33zm-13.07-14.82a1.28 1.28 0 0 0-1.71 1.9l.09.08a1.29 1.29 0 0 0 .86.33 1.27 1.27 0 0 0 .86-2.22zm-34.4-29.38a1.29 1.29 0 0 0-.09-1.81l-.09-.08a1.28 1.28 0 1 0-1.72 1.89l.1.09a1.27 1.27 0 0 0 1.8-.09zm-6.92-6.26a1.26 1.26 0 0 0-.09-1.8l-.09-.09a1.28 1.28 0 1 0-1.72 1.9l.1.08a1.27 1.27 0 0 0 1.8-.09zm34.6 31.28a1.29 1.29 0 0 0-.09-1.81l-.09-.08a1.28 1.28 0 1 0-1.72 1.89l.09.09a1.31 1.31 0 0 0 .86.33 1.27 1.27 0 0 0 .95-.42zm-13.85-12.51a1.28 1.28 0 0 0-.08-1.81l-.1-.08a1.27 1.27 0 1 0-1.71 1.89l.09.09a1.27 1.27 0 0 0 .86.33 1.25 1.25 0 0 0 .94-.42zm6.92 6.3a1.26 1.26 0 0 0-.09-1.8l-.09-.09a1.28 1.28 0 0 0-1.72 1.9l.1.08a1.27 1.27 0 0 0 1.8-.09zm-13.83-12.56a1.28 1.28 0 0 0-.09-1.8l-.1-.09a1.28 1.28 0 0 0-1.71 1.9l.09.08a1.29 1.29 0 0 0 .86.33 1.27 1.27 0 0 0 .95-.42zm32.39 29.8a1.26 1.26 0 0 0 .3 1.48l.09.09a1.28 1.28 0 1 0 1.71-1.9l-.09-.08a1.28 1.28 0 0 0-1.22-.28 1.37 1.37 0 0 0-.59.37 1.32 1.32 0 0 0-.2.32zm-3.99 6.22a1.28 1.28 0 1 0-1.71 1.9l.09.09a1.26 1.26 0 0 0 .86.32 1.3 1.3 0 0 0 .95-.42 1.27 1.27 0 0 0-.1-1.8zm-6.92-6.25a1.28 1.28 0 1 0-1.71 1.9l.09.08a1.29 1.29 0 0 0 .86.33 1.27 1.27 0 0 0 1-.42 1.28 1.28 0 0 0-.1-1.81zm-13.65-10.62a1.28 1.28 0 0 0-.09-1.8l-.09-.09a1.28 1.28 0 1 0-1.72 1.89l.1.09a1.27 1.27 0 0 0 1.8-.09zm-20.75-18.77a1.28 1.28 0 0 0-.09-1.8l-.1-.09a1.28 1.28 0 0 0-1.71 1.9l.1.08a1.22 1.22 0 0 0 .85.33 1.27 1.27 0 0 0 .95-.42zm-6.92-6.25a1.27 1.27 0 0 0-.09-1.81l-.09-.08a1.28 1.28 0 1 0-1.72 1.89l.1.09a1.27 1.27 0 0 0 1.8-.09zm13.84 12.51a1.29 1.29 0 0 0-.09-1.81l-.1-.08a1.28 1.28 0 0 0-1.8.09 1.26 1.26 0 0 0 .09 1.8l.09.09a1.28 1.28 0 0 0 1.81-.09zM300 502.85a1.29 1.29 0 0 0-.09-1.81l-.1-.08a1.27 1.27 0 0 0-1.8.08 1.29 1.29 0 0 0 .09 1.81l.09.08a1.26 1.26 0 0 0 .86.33 1.29 1.29 0 0 0 .95-.41zm-13.85-12.51a1.27 1.27 0 0 0-.09-1.81l-.09-.09a1.28 1.28 0 0 0-1.72 1.9l.1.08a1.22 1.22 0 0 0 .86.33 1.29 1.29 0 0 0 .94-.41zM319.79 522a1.27 1.27 0 0 0 .95-.42 1.29 1.29 0 0 0-.09-1.81l-.1-.08a1.28 1.28 0 0 0-1.71 1.9l.1.08a1.26 1.26 0 0 0 .85.33zm-32.72-18.77a1.29 1.29 0 0 0-.09-1.81l-.09-.08a1.28 1.28 0 1 0-1.72 1.89l.1.09a1.26 1.26 0 0 0 .85.33 1.31 1.31 0 0 0 .95-.42zm25.68 23.22a1.28 1.28 0 0 0 .09 1.8l.1.09a1.26 1.26 0 0 0 .85.33 1.28 1.28 0 0 0 .86-2.23l-.1-.09a1.27 1.27 0 0 0-1.8.1zm-5.11-6.35a1.28 1.28 0 1 0-1.72 1.9l.1.08a1.27 1.27 0 0 0 1.8-.09 1.28 1.28 0 0 0-.09-1.81zM280.15 497a1.26 1.26 0 0 0-.09-1.8l-.09-.09a1.28 1.28 0 1 0-1.72 1.89l.1.09a1.27 1.27 0 0 0 1.8-.09zm-27.67-25a1.27 1.27 0 0 0 0-1.7l-2.11 1.46a1.57 1.57 0 0 0 .2.25l.1.08a1.27 1.27 0 0 0 1.8-.09zm6.92 6.21a1.29 1.29 0 0 0-.09-1.81l-.09-.08a1.28 1.28 0 1 0-1.72 1.89l.1.09a1.26 1.26 0 0 0 .85.33 1.31 1.31 0 0 0 .95-.42zm6.92 6.25a1.28 1.28 0 0 0-.09-1.8l-.1-.09a1.28 1.28 0 0 0-1.71 1.9l.09.08a1.31 1.31 0 0 0 .86.33 1.27 1.27 0 0 0 .95-.42zm34.4 29.38a1.28 1.28 0 1 0-1.71 1.9l.09.09a1.27 1.27 0 0 0 1.81-.1 1.27 1.27 0 0 0-.1-1.8zm-6.72-4.36a1.28 1.28 0 0 0-.09-1.8l-.1-.09a1.27 1.27 0 0 0-1.71 1.89l.09.09a1.28 1.28 0 0 0 1.81-.09zm-20.76-18.76a1.29 1.29 0 0 0-.09-1.81l-.1-.08a1.27 1.27 0 1 0-1.71 1.89l.09.09a1.29 1.29 0 0 0 .86.33 1.32 1.32 0 0 0 .95-.42zm.91 12.89a1.27 1.27 0 0 0-.09-1.81l-.09-.08a1.28 1.28 0 1 0-1.72 1.89l.1.09a1.27 1.27 0 0 0 1.8-.09zm-27.67-25.02a1.27 1.27 0 0 0-.09-1.81l-.09-.08a1.28 1.28 0 1 0-1.72 1.89l.1.09a1.27 1.27 0 0 0 1.8-.09zm6.92 6.25a1.28 1.28 0 0 0-.09-1.8l-.1-.09a1.28 1.28 0 0 0-1.71 1.9l.1.08a1.27 1.27 0 0 0 1.8-.09zm41.32 35.64a1.28 1.28 0 1 0-1.71 1.9l.09.08a1.28 1.28 0 0 0 1.81-.09 1.27 1.27 0 0 0-.1-1.8zm12.03 12.6a1.29 1.29 0 0 0 .09 1.81l.1.08a.1.1 0 0 0 .05 0l1.9-1.63a1.38 1.38 0 0 0-.24-.3l-.1-.09a1.28 1.28 0 0 0-1.8.13zm-5.02-6.26-.1-.08a1.27 1.27 0 1 0-1.71 1.89l.1.09a1.27 1.27 0 0 0 1.8-.09 1.28 1.28 0 0 0-.09-1.81zm-41.41-35.72a1.29 1.29 0 0 0-.09-1.81l-.1-.08a1.27 1.27 0 0 0-1.71 1.89l.09.09a1.29 1.29 0 0 0 .86.33 1.27 1.27 0 0 0 .95-.42zm6.91 6.25a1.26 1.26 0 0 0-.09-1.8l-.09-.09a1.28 1.28 0 0 0-1.71 1.9l.09.08a1.27 1.27 0 0 0 .86.33 1.25 1.25 0 0 0 .94-.42zm13.84 12.51a1.28 1.28 0 0 0-.09-1.8l-.09-.09a1.28 1.28 0 1 0-1.72 1.9l.09.08a1.31 1.31 0 0 0 .86.33 1.27 1.27 0 0 0 .95-.42zm6.93 6.26a1.29 1.29 0 0 0-.09-1.81l-.1-.08a1.27 1.27 0 0 0-1.71 1.89l.09.09a1.28 1.28 0 0 0 1.81-.09zm6.87 19.56a1.27 1.27 0 0 0 .86-2.22l-.1-.09a1.28 1.28 0 0 0-1.71 1.9l.1.09a1.25 1.25 0 0 0 .85.32zm5.88 4.04a1.28 1.28 0 0 0-.33.95l1.56-1.33a1.25 1.25 0 0 0-1.23.38zm-25.68-23.22a1.28 1.28 0 0 0-.09-1.8l-.1-.09a1.27 1.27 0 1 0-1.71 1.89l.09.09a1.29 1.29 0 0 0 .86.33 1.27 1.27 0 0 0 .95-.42zm-6.92-6.26a1.28 1.28 0 0 0-.09-1.8l-.09-.09a1.28 1.28 0 0 0-1.72 1.9l.1.08a1.22 1.22 0 0 0 .85.33 1.27 1.27 0 0 0 .95-.42zm-6.92-6.24a1.27 1.27 0 0 0-.09-1.81l-.09-.08a1.28 1.28 0 1 0-1.72 1.89l.1.09a1.27 1.27 0 0 0 1.8-.09zm-13.83-12.52a1.29 1.29 0 0 0-.09-1.81l-.1-.08a1.27 1.27 0 0 0-1.71 1.89l.09.09a1.31 1.31 0 0 0 .86.33 1.27 1.27 0 0 0 .95-.42zm41.32 35.64A1.27 1.27 0 1 0 287 529l.09.09a1.28 1.28 0 0 0 1.71-1.9zm-6.72-4.37a1.27 1.27 0 0 0-.08-1.8l-.1-.09a1.28 1.28 0 0 0-1.71 1.9l.09.08a1.27 1.27 0 0 0 1.8-.09zm-41.52-37.53a1.27 1.27 0 0 0-.09-1.8l-.09-.09a1.28 1.28 0 0 0-1.72 1.9l.1.08a1.22 1.22 0 0 0 .85.33 1.27 1.27 0 0 0 .95-.42zm13.84 12.51a1.28 1.28 0 0 0-.09-1.8l-.1-.09a1.28 1.28 0 0 0-1.71 1.9l.09.08a1.24 1.24 0 0 0 .86.33 1.28 1.28 0 0 0 .95-.42zm21.48 29.77a1.28 1.28 0 0 0-1.72 1.89l.1.09a1.28 1.28 0 0 0 1.72-1.89zM262 515a1.28 1.28 0 1 0-1.72 1.89l.09.09a1.31 1.31 0 0 0 .86.33 1.27 1.27 0 0 0 .86-2.22zm-27.61-24.94-.09-.09a1.28 1.28 0 0 0-1.28-.25c.37.8.75 1.59 1.14 2.39a1.31 1.31 0 0 0 .32-.25 1.28 1.28 0 0 0-.09-1.8zm54.48 52.26a1.27 1.27 0 0 0 .95-.42 1.29 1.29 0 0 0-.09-1.81l-.1-.08a1.28 1.28 0 0 0-1.71 1.9l.1.08a1.26 1.26 0 0 0 .85.33zm-33.82-33.59a1.28 1.28 0 0 0-1.72 1.9l.1.09a1.27 1.27 0 0 0 .86.33 1.3 1.3 0 0 0 .94-.42 1.27 1.27 0 0 0-.09-1.81zm13.83 12.52a1.27 1.27 0 1 0-1.71 1.89l.09.08a1.25 1.25 0 0 0 .86.34 1.32 1.32 0 0 0 .95-.42 1.29 1.29 0 0 0-.09-1.81zm-20.75-18.77a1.28 1.28 0 0 0-1.8.09 1.26 1.26 0 0 0 .09 1.8l.09.09a1.28 1.28 0 1 0 1.72-1.89zm-6.92-6.26a1.28 1.28 0 0 0-1.71 1.9l.09.09a1.29 1.29 0 0 0 .86.33 1.31 1.31 0 0 0 1-.42 1.29 1.29 0 0 0-.09-1.81zm41.51 37.53a1.28 1.28 0 0 0-1.72 1.9l.1.09a1.26 1.26 0 0 0 .85.33 1.28 1.28 0 0 0 .86-2.23zm-12.83.47-.09-.08a1.27 1.27 0 0 0-1.81.09 84.5 84.5 0 0 0 2.09 1.66 1.28 1.28 0 0 0-.19-1.67zm6.82 6.17a1.25 1.25 0 0 0-1-.31l1.51 1a1.3 1.3 0 0 0-.39-.65zM263 528l-.1-.09a1.28 1.28 0 0 0-1.8.09l-.11.15 1.94 1.79.16-.14a1.28 1.28 0 0 0-.09-1.8zm-6.94-6.29-.1-.08a1.27 1.27 0 0 0-1.55-.12l1.81 1.91a1.28 1.28 0 0 0-.16-1.71z" fill="#dfc4ff"></path></svg>
    </div>
    <div className='bookbecomparent2'>
      <span className='bookbecomeh'>Become a host ></span>
      <p>Accelerate your entrepreneurship and start building a small car sharing business on Turo.</p>
    </div>
  </div>
)
}
function Accordian(){
  return(
    <div>
      <div id='accoyourDiv'><h1 id='fuelyourH'>Frequently asked questions  </h1></div>
      <br/>
    <div id='accordinaparent'>  
      <div className='accordiandiv'>
      
      <Accordion>
      
      <Accordion.Item eventKey="0">
        <Accordion.Header>What do I need to book a car on Turo?</Accordion.Header>
        <Accordion.Body>
        To book a car on Turo, you must create a Turo account, be 18 years old or older in the US, 21 years old or older in the UK, 23 years old or older in Canada, have a valid driver’s license, and get approved to drive on Turo. When you’re booking your first trip, you’ll go through a quick approval process by entering your driver’s license and some other information. In most cases, you’ll get approved immediately, and you’ll be set for all future road trips, day trips, and business trips!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Do I need my own insurance?</Accordion.Header>
        <Accordion.Body>
        No, you don’t need personal insurance coverage to book a car on Turo.

In the US, any personal insurance you may have that covers damage to the host’s vehicle would kick in before your Turo protection plan, except in limited situations for trips booked in Maryland. When booking a car in the US, you’ll choose between three protection plans — Premier, Standard, or Minimum — to get the level of coverage that’s right for you. With each plan, you’re covered with third-party automobile liability insurance provided under a policy issued to Turo by Travelers Excess and Surplus Lines Company — $750,000 for the Premier plan.*

In New York state, you’ll also choose between Premier, Standard, or Minimum. With each plan, you’re covered with liability insurance of $1,250,000.* Protection plans for New York trips also include access to roadside assistance, priority phone support, and 24/7 customer assistance.

When booking a car in Canada, you’ll choose between three protection plans — Premier, Standard, or Minimum — and with each plan, you’re covered with liability insurance purchased from Intact Financial Corporation in Alberta, Nova Scotia, Ontario, and Quebec, and Insurance Corporation of British Columbia (ICBC) in British Columbia — up to $2,000,000 for all plans.**

When booking a car in the United Kingdom, you’ll also choose between the Premier, Standard, and Minimum protection plans. Each plan includes different limits of financial responsibility for physical damage, but all three plans include up to £20,000,000 coverage under a third-party automobile liability insurance policy provided by Aioi Nissay Dowa Insurance UK Ltd. via Turo broker Aon UK Ltd.**
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="2">
        <Accordion.Header>Can other people drive a car that I booked?</Accordion.Header>
        <Accordion.Body>
        Yes, multiple guests can drive the car you book on Turo, as long as they are all approved to drive. The primary driver (whoever booked the car) can add additional drivers with no fees or additional charges. Only the primary driver can request to add drivers; Turo hosts cannot do it for you. We encourage you to request to add additional drivers before your trip starts, though guests in the US and Canada can request to add a driver while a trip is in progress.

To speed up the process, have your additional driver create a Turo account and get approved to drive before you request to add them. All drivers must have a valid driver’s license and meet the age requirements for the car you’ve booked. You can request to add drivers via the “Trips” tab in the Turo app without additional driver charges or extra costs.
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="3">
        <Accordion.Header>What is the cancellation policy on Turo?</Accordion.Header>
        <Accordion.Body>
        You can cancel and get a full refund up to 24 hours before your trip starts. If you book a trip with less than 24 hours’ notice, you have one hour after booking to cancel free of charge. If you cancel after the free cancellation period ends, you will be charged a small cancellation fee.

In the rare event a host cancels, you’ll be notified immediately so you can book another car, or we’ll help you find one. Your refund can be temporarily held to expedite rebooking, or the funds can be returned to your bank account — your choice.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>
      <div className='accordiandiv'>
      
      <Accordion>
      
      <Accordion.Item eventKey="0">
        <Accordion.Header>What happens if I have an accident?</Accordion.Header>
        <Accordion.Body>
        If there’s an emergency or an issue with the car, call our emergency roadside assistance provider, available 24/7. We’ll make sure you’re safe, then help you get back on your way.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Can I get my car delivered to me?</Accordion.Header>
        <Accordion.Body>
        Yes, many hosts offer delivery to travel hubs like airports, train stations, and hotels, or to custom delivery locations. There are cars available on Turo at convenient locations near hundreds of airports. Skip the rental counter and have your car delivered for pickup and return at your hotel or vacation rental, or nearby location, to save time and hassle on your weekend getaway or family vacation. Some hosts offer free delivery, while others set their own delivery fee.
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="2">
        <Accordion.Header>How do I get discounts when booking a car?</Accordion.Header>
        <Accordion.Body>
        Many Turo hosts offer discounted prices for weekly and monthly trips, as well as “early bird” discounts for trips booked a week or more in advance. Get the best deals and lowest rates possible on everything from cars to SUVs by booking longer trips, at least a week in advance.*

On your Account page, make sure you’ve checked the box to receive email notifications, and enable push notifications from the Turo app in your phone settings — we’ll send you occasional promo codes, discounts, and deals!
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="3">
        <Accordion.Header>What are the cleaning and safety policies on Turo?</Accordion.Header>
        <Accordion.Body>
        Under the enhanced cleaning policy, hosts are required to clean and disinfect their vehicles thoroughly before every trip, so you can feel safe and comfortable behind the wheel. Turo hosts have access to training materials on enhanced safety measures and cleaning practices to help prevent the spread of COVID-19 or other viruses.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>
    </div>  
    </div>
  )
}
function Footer(){
  return(
    <div
    id='footersabseparent'>
      <div id='footerpara'>
        <p>* Any personal insurance you may have that covers damage to the host’s vehicle would kick in before your protection plan, except in limited situations for trips booked in Maryland, but this protects your own wallet. Liability insurance is provided under a policy issued to Turo by Travelers Excess and Surplus Lines Company. Terms, conditions, and exclusions apply. The policy does not provide coverage for damage to a host’s vehicle.</p>
        <br/>
        <p>For questions or information about the third party liability insurance that is included in protection plans in the US, consumers in Maryland and the licensed states listed here may contact Turo Insurance Agency at (415) 508-0283 or claims@turo.agency. For questions about how damage to a host’s vehicle is handled, visit the Turo Support site.</p>
        <br/>
        <p>When a trip is booked in the state of Washington, physical damage to the host’s vehicle is covered by insurance purchased by Turo, but the Turo insurance does not change the contractual responsibilities of hosts or guests with respect to physical damage to a host’s vehicle.</p>
        <br/>
        <p>** Terms, conditions, and exclusions apply.</p>
      </div>
      <hr/>
      <div id='footerlistdiv'>

<ul className='listul'>
  <li><h5>Turo</h5></li>
  <br/>
  <li>About</li>
  <li>Team</li>
  <li>Policies</li>
  <li>Careers</li>
  <li>Press</li>
  <li>OpenRoad</li>
  <li>Turo shop</li>
</ul>
<ul className='listul'>
  <li><h5>Locations</h5></li>
  <br/>
  <li>USA (EN)</li>
  <li>Canada (EN)</li>
  <li>Canada (FR)</li>
  <li>UK (EN)</li>
  
</ul>
<ul className='listul'>
  <li><h5>Explore</h5></li>
  <br/>
  <li>Book a car</li>
  <li>Weddings</li>
  <li>Trust & safety</li>
  <li>Sustainability</li>
  <li>FAQs</li>
  <li>Get help</li>
  
</ul>
<ul className='listul'>
  <li><h5>Hosting</h5></li>
  <br/>
  <li>List your car</li>
  <li>Carculator</li>
  <li>All-Star Hosts</li>
  <li>Host tools</li>
  <li>Insurance & protection</li>
  <li>FAQs </li>
  
</ul>
<ul className='listul'>
  
  <li id='footericondiv'>
    <li className='footericons'><svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="seo-pages-0" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.001 12c0-5.523-4.477-10-10-10C6.477 2 2 6.477 2 12c0 4.992 3.657 9.13 8.438 9.88V14.89h-2.54v-2.89h2.54V9.796c0-2.506 1.493-3.89 3.777-3.89 1.095 0 2.239.195 2.239.195v2.46h-1.261c-1.242 0-1.63.772-1.63 1.563V12h2.774l-.444 2.891h-2.33v6.988c4.781-.75 8.438-4.887 8.438-9.879Z" fill="currentColor"></path></svg></li>
    <li className='footericons'><svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="seo-pages-0" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 6.73a7.3 7.3 0 0 1-2.125.583A3.678 3.678 0 0 0 20.5 5.27c-.708.417-1.5.729-2.333.896A3.777 3.777 0 0 0 15.458 5a3.681 3.681 0 0 0-3.687 3.688c0 .291.02.583.083.854-3.062-.167-5.77-1.563-7.604-3.792-.313.542-.5 1.104-.5 1.792 0 1.27.646 2.396 1.646 3.062a3.757 3.757 0 0 1-1.667-.458v.041a3.69 3.69 0 0 0 2.959 3.626 3.82 3.82 0 0 1-1.667.062 3.68 3.68 0 0 0 3.437 2.563c-1.25 1-2.854 1.75-4.583 1.75-.292 0-.583-.021-.875-.063 1.625 1.042 3.583 1.5 5.667 1.5 6.791 0 10.5-5.625 10.5-10.5v-.48A7.648 7.648 0 0 0 21 6.73Z" fill="currentColor"></path></svg></li>
    <li className='footericons'><svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="seo-pages-0" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.419A4.411 4.411 0 0 0 4.51 4.51c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.594.5.5 1.002.808 1.594 1.038.572.223 1.226.375 2.184.419.96.044 1.267.054 3.71.054 2.445 0 2.752-.01 3.712-.054.958-.044 1.612-.196 2.184-.419a4.41 4.41 0 0 0 1.594-1.038c.5-.5.808-1.002 1.038-1.594.223-.572.375-1.226.419-2.184.043-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.411 4.411 0 0 0 19.49 4.51a4.41 4.41 0 0 0-1.594-1.038c-.572-.223-1.226-.375-2.184-.419C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.42.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67a2.79 2.79 0 0 1-.673 1.036c-.315.315-.615.51-1.035.673-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.671-.31a2.788 2.788 0 0 1-1.035-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Zm-.017 10.356a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.243 4.622 4.622 0 0 0 0-9.243Zm5.171-.025a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z" fill="currentColor"></path></svg></li>
    <li className='footericons'><svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="seo-pages-0" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.54 6.842a2.721 2.721 0 0 0-1.945-1.894C18.875 4.5 12 4.5 12 4.5s-6.875 0-8.595.448c-.95.25-1.692.972-1.945 1.894C1 8.514 1 12 1 12s0 3.486.46 5.158a2.721 2.721 0 0 0 1.945 1.894C5.125 19.5 12 19.5 12 19.5s6.875 0 8.595-.448a2.721 2.721 0 0 0 1.945-1.894C23 15.486 23 12 23 12s0-3.486-.46-5.158ZM9.75 15.166V8.834L15.5 12l-5.75 3.166Z" fill="currentColor"></path></svg></li>
    
  </li>
  <li id='footericondiv11'>
    <li className='footericons11'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.664 40" aria-hidden="true" class="seo-pages-0" role="img" version="1.1"><path d="M110.135 0H9.535c-.367 0-.73 0-1.095.002-.306.002-.61.008-.919.013A13.215 13.215 0 0 0 5.517.19a6.665 6.665 0 0 0-1.9.627 6.438 6.438 0 0 0-1.62 1.18A6.258 6.258 0 0 0 .82 3.617a6.601 6.601 0 0 0-.625 1.903 12.993 12.993 0 0 0-.179 2.002c-.01.307-.01.615-.015.921V31.56c.005.31.006.61.015.921a12.992 12.992 0 0 0 .18 2.002 6.588 6.588 0 0 0 .624 1.905A6.208 6.208 0 0 0 1.998 38a6.274 6.274 0 0 0 1.618 1.179 6.7 6.7 0 0 0 1.901.63 13.455 13.455 0 0 0 2.004.177c.31.007.613.011.919.011.366.002.728.002 1.095.002h100.6c.36 0 .724 0 1.084-.002.304 0 .617-.004.922-.01a13.279 13.279 0 0 0 2-.178 6.804 6.804 0 0 0 1.908-.63A6.277 6.277 0 0 0 117.666 38a6.395 6.395 0 0 0 1.182-1.614 6.604 6.604 0 0 0 .619-1.905 13.506 13.506 0 0 0 .185-2.002c.004-.31.004-.61.004-.921.008-.364.008-.725.008-1.094V9.536c0-.366 0-.73-.008-1.092 0-.306 0-.614-.004-.92a13.507 13.507 0 0 0-.185-2.003 6.618 6.618 0 0 0-.62-1.903 6.466 6.466 0 0 0-2.798-2.8 6.768 6.768 0 0 0-1.908-.627 13.044 13.044 0 0 0-2-.176c-.305-.005-.618-.011-.922-.013-.36-.002-.725-.002-1.084-.002z" fill="#a6a6a6"></path><path d="M8.445 39.125c-.305 0-.602-.004-.904-.01a12.687 12.687 0 0 1-1.87-.164 5.884 5.884 0 0 1-1.656-.548 5.406 5.406 0 0 1-1.397-1.016 5.32 5.32 0 0 1-1.02-1.397 5.722 5.722 0 0 1-.544-1.657 12.414 12.414 0 0 1-.166-1.875c-.007-.21-.015-.913-.015-.913v-23.1s.009-.692.015-.895a12.37 12.37 0 0 1 .165-1.872 5.755 5.755 0 0 1 .544-1.662 5.373 5.373 0 0 1 1.015-1.398 5.565 5.565 0 0 1 1.402-1.023 5.823 5.823 0 0 1 1.653-.544A12.586 12.586 0 0 1 7.543.887l.902-.012h102.769l.913.013a12.385 12.385 0 0 1 1.858.162 5.938 5.938 0 0 1 1.671.548 5.594 5.594 0 0 1 2.415 2.42 5.763 5.763 0 0 1 .535 1.649 12.995 12.995 0 0 1 .174 1.887c.003.283.003.588.003.89.008.375.008.732.008 1.092v20.929c0 .363 0 .718-.008 1.075 0 .325 0 .623-.004.93a12.731 12.731 0 0 1-.17 1.853 5.739 5.739 0 0 1-.54 1.67 5.48 5.48 0 0 1-1.016 1.386 5.413 5.413 0 0 1-1.4 1.022 5.862 5.862 0 0 1-1.668.55 12.542 12.542 0 0 1-1.869.163c-.293.007-.6.011-.897.011l-1.084.002z"></path><g data-name="<Group>" fill="#fff"><g data-name="<Group>"><path data-name="<Path>" d="M24.769 20.3a4.949 4.949 0 0 1 2.356-4.151 5.066 5.066 0 0 0-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 0 0-4.473 2.728c-1.934 3.348-.491 8.269 1.361 10.976.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.025 2.426-1.332 3.32-2.67a10.962 10.962 0 0 0 1.52-3.092 4.782 4.782 0 0 1-2.92-4.4zm-2.732-8.09a4.872 4.872 0 0 0 1.115-3.49 4.957 4.957 0 0 0-3.208 1.66A4.636 4.636 0 0 0 18.8 13.74a4.1 4.1 0 0 0 3.237-1.53z"></path></g><path d="M42.302 27.14H37.57l-1.137 3.356h-2.005l4.484-12.418h2.083l4.483 12.418h-2.039zm-4.243-1.55h3.752l-1.85-5.446h-.051zm17.1.38c0 2.813-1.505 4.62-3.778 4.62a3.07 3.07 0 0 1-2.848-1.583h-.043v4.484H46.63V21.442h1.8v1.506h.033a3.212 3.212 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.947-3.038-2.392-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.393-1.197 2.393-3.046zm11.876 0c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 0 1-2.848-1.583h-.043v4.484h-1.859V21.442h1.799v1.506h.034a3.212 3.212 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046zm8.495 1.066c.138 1.232 1.334 2.04 2.97 2.04 1.566 0 2.693-.808 2.693-1.919 0-.964-.68-1.54-2.29-1.936l-1.609-.388c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.483 3.614h-1.876c-.112-1.239-1.136-1.987-2.634-1.987s-2.521.757-2.521 1.858c0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.793 3.778-2.754 0-4.614-1.42-4.734-3.667zM83.346 19.3v2.142h1.722v1.472h-1.722v4.991c0 .776.345 1.137 1.102 1.137a5.808 5.808 0 0 0 .611-.043v1.463a5.104 5.104 0 0 1-1.032.086c-1.833 0-2.548-.689-2.548-2.445v-5.189h-1.316v-1.472h1.316V19.3zm2.719 6.67c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638zm6.695 0c0-1.954-.895-3.108-2.401-3.108s-2.4 1.162-2.4 3.108c0 1.962.894 3.106 2.4 3.106s2.401-1.144 2.401-3.106zm3.426-4.528h1.773v1.541h.043a2.16 2.16 0 0 1 2.177-1.635 2.866 2.866 0 0 1 .637.069v1.738a2.598 2.598 0 0 0-.835-.112 1.873 1.873 0 0 0-1.937 2.083v5.37h-1.858zm13.198 6.395c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.19-4.682 2.506 0 4.08 1.72 4.08 4.466v.637h-6.394v.112a2.358 2.358 0 0 0 2.436 2.564 2.048 2.048 0 0 0 2.09-1.273zm-6.282-2.702h4.526a2.177 2.177 0 0 0-2.22-2.298 2.292 2.292 0 0 0-2.306 2.298z"></path></g><path d="M37.826 8.731a2.64 2.64 0 0 1 2.808 2.965c0 1.906-1.03 3.002-2.808 3.002h-2.155V8.73zm-1.228 5.123h1.125a1.876 1.876 0 0 0 1.967-2.146 1.881 1.881 0 0 0-1.967-2.134h-1.125zm5.083-1.41a2.133 2.133 0 1 1 4.247 0 2.134 2.134 0 1 1-4.247 0zm3.333 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.571-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zm6.56 2.254h-.923l-.93-3.317h-.07l-.927 3.317h-.913l-1.242-4.503h.902l.806 3.436h.067l.926-3.436h.852l.926 3.436h.07l.803-3.436h.889zm2.28-4.503h.855v.715h.066a1.348 1.348 0 0 1 1.344-.802 1.465 1.465 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.033 1.033 0 0 0-1.075 1.141v2.635h-.888zm5.24-1.758h.888v6.26h-.888zm2.124 4.007a2.133 2.133 0 1 1 4.247 0 2.134 2.134 0 1 1-4.247 0zm3.333 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.571-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zm1.85.98c0-.81.603-1.278 1.675-1.344l1.22-.07v-.389c0-.475-.315-.744-.922-.744-.497 0-.84.182-.939.5h-.86c.09-.773.818-1.27 1.84-1.27 1.128 0 1.765.563 1.765 1.514v3.077h-.855v-.633h-.07a1.515 1.515 0 0 1-1.353.707 1.36 1.36 0 0 1-1.501-1.348zm2.894-.384v-.377l-1.1.07c-.62.042-.9.253-.9.65 0 .405.351.64.834.64a1.062 1.062 0 0 0 1.166-.983zm2.053-.596c0-1.423.732-2.324 1.87-2.324a1.484 1.484 0 0 1 1.38.79h.067V8.437h.888v6.26h-.851v-.71h-.07a1.563 1.563 0 0 1-1.415.785c-1.145 0-1.869-.901-1.869-2.328zm.918 0c0 .955.45 1.53 1.203 1.53.75 0 1.212-.583 1.212-1.526 0-.938-.468-1.53-1.212-1.53-.748 0-1.203.58-1.203 1.526zm6.964 0a2.133 2.133 0 1 1 4.247 0 2.134 2.134 0 1 1-4.247 0zm3.333 0c0-.976-.438-1.547-1.208-1.547-.772 0-1.207.571-1.207 1.547 0 .984.435 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zm2.106-2.25h.856v.716h.066a1.348 1.348 0 0 1 1.344-.802 1.465 1.465 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.033 1.033 0 0 0-1.075 1.141v2.635h-.889zm8.846-1.12v1.141h.976v.749h-.976v2.315c0 .472.194.679.637.679a2.967 2.967 0 0 0 .339-.021v.74a2.916 2.916 0 0 1-.484.046c-.988 0-1.381-.348-1.381-1.216v-2.543h-.715v-.749h.715V9.074zm2.19-.637h.88v2.481h.07a1.386 1.386 0 0 1 1.374-.806 1.483 1.483 0 0 1 1.55 1.679v2.907h-.889V12.01c0-.72-.335-1.084-.963-1.084a1.052 1.052 0 0 0-1.134 1.142v2.63h-.888zm9.056 5.045a1.828 1.828 0 0 1-1.95 1.303 2.045 2.045 0 0 1-2.081-2.325 2.077 2.077 0 0 1 2.076-2.352c1.253 0 2.009.856 2.009 2.27v.31h-3.18v.05a1.19 1.19 0 0 0 1.2 1.29 1.08 1.08 0 0 0 1.07-.546zm-3.126-1.451h2.275a1.086 1.086 0 0 0-1.109-1.167 1.152 1.152 0 0 0-1.166 1.167z" fill="#fff" data-name="<Group>"></path></svg></li>
    <li className='footericons11'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 44" aria-hidden="true" class="seo-pages-0" role="img" version="1.1"><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="1863.531" y1="535.29" x2="431.916" y2="1966.904" gradientTransform="matrix(.01303 0 0 -.0129 -.052 41.321)"><stop offset="0" stop-color="#00a0ff"></stop><stop offset="0.007" stop-color="#00a1ff"></stop><stop offset="0.26" stop-color="#00beff"></stop><stop offset="0.512" stop-color="#00d2ff"></stop><stop offset="0.76" stop-color="#00dfff"></stop><stop offset="1" stop-color="#00e3ff"></stop></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="2890.226" y1="1498.484" x2="826.121" y2="1498.484" gradientTransform="matrix(.01303 0 0 -.0129 -.052 41.321)"><stop offset="0" stop-color="#ffe000"></stop><stop offset="0.409" stop-color="#ffbd00"></stop><stop offset="0.775" stop-color="orange"></stop><stop offset="1" stop-color="#ff9c00"></stop></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="1410.03" y1="982.528" x2="-531.356" y2="2923.914" gradientTransform="matrix(.01303 0 0 -.0129 -.052 41.321)"><stop offset="0" stop-color="#ff3a44"></stop><stop offset="1" stop-color="#c31162"></stop></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="-85.145" y1="519.067" x2="781.771" y2="1385.975" gradientTransform="matrix(.01303 0 0 -.0129 -.052 41.321)"><stop offset="0" stop-color="#32a071"></stop><stop offset="0.069" stop-color="#2da771"></stop><stop offset="0.476" stop-color="#15cf74"></stop><stop offset="0.801" stop-color="#06e775"></stop><stop offset="1" stop-color="#00f076"></stop></linearGradient></defs><path d="M144.445 43.996H5.555C2.5 43.996 0 41.523 0 38.5V5.504C0 2.48 2.5.004 5.555.004h138.89c3.051 0 5.555 2.476 5.555 5.5V38.5c0 3.023-2.5 5.496-5.555 5.496zm0 0"></path><path d="M144.445.883c2.57 0 4.664 2.074 4.664 4.62V38.5c0 2.543-2.093 4.617-4.664 4.617H5.555C2.98 43.117.89 41.047.89 38.5V5.504C.89 2.957 2.984.883 5.555.883h138.89m0-.88H5.555C2.5.004 0 2.48 0 5.504V38.5C0 41.523 2.5 44 5.555 44h138.89c3.051 0 5.555-2.477 5.555-5.5V5.504c0-3.024-2.5-5.5-5.555-5.5zm0 0" fill="#a6a6a6"></path><path d="M49.41 14.54c-.98 0-1.824-.34-2.515-1.017-.688-.68-1.036-1.527-1.036-2.523s.348-1.844 1.036-2.516c.687-.675 1.535-1.02 2.515-1.02.473 0 .945.095 1.403.286.449.191.808.445 1.074.762l.05.062-.703.703-.062-.074c-.434-.5-1.008-.746-1.762-.746a2.48 2.48 0 0 0-1.762.707c-.492.469-.738 1.086-.738 1.836 0 .754.246 1.375.738 1.844.5.469 1.094.703 1.762.703.719 0 1.32-.238 1.797-.707.293-.293.465-.68.523-1.188h-2.41v-.972h3.387l.016.07c.035.16.054.324.054.52 0 .933-.289 1.699-.851 2.265-.649.664-1.492 1.004-2.516 1.004zm8.485-.153h-4.067v-6.77h4.067v.988h-3.032v1.91h2.735v.973h-2.735v1.91h3.032zm3.613 0h-1.035V8.605h-1.86v-.988h4.758v.988h-1.863zm6.031 0h-1.031v-6.77h1.031zm3.8 0h-1.026V8.605h-1.868v-.988h4.762v.988H71.34zm8.009.152c-.996 0-1.84-.344-2.512-1.027-.668-.68-1.008-1.524-1.008-2.508 0-.988.34-1.836 1.008-2.512.672-.68 1.516-1.027 2.512-1.027.988 0 1.828.347 2.5 1.035.672.68 1.011 1.523 1.011 2.504 0 .984-.34 1.832-1.007 2.512-.672.68-1.516 1.023-2.504 1.023zm-1.754-1.703c.484.48 1.054.715 1.754.715a2.37 2.37 0 0 0 1.742-.715c.476-.477.719-1.094.719-1.836 0-.738-.243-1.355-.72-1.832-.468-.477-1.054-.715-1.741-.715-.696 0-1.27.234-1.754.715-.473.477-.715 1.094-.715 1.832 0 .742.242 1.36.715 1.836zm11.605 1.55h-1.031l-.027-.042-3.258-5.168.031 1.012v4.199h-1.031v-6.77h1.18l3.132 4.957-.03-1.004V7.617h1.034zM75.703 23.93c-2.605 0-4.738 1.965-4.738 4.675 0 2.692 2.133 4.68 4.738 4.68 2.617 0 4.75-1.988 4.75-4.68 0-2.71-2.133-4.675-4.75-4.675zm0 7.511c-1.43 0-2.66-1.171-2.66-2.836 0-1.683 1.23-2.835 2.66-2.835 1.434 0 2.672 1.152 2.672 2.835 0 1.665-1.238 2.836-2.672 2.836zM65.36 23.93c-2.617 0-4.742 1.965-4.742 4.675 0 2.692 2.125 4.68 4.742 4.68 2.614 0 4.743-1.988 4.743-4.68 0-2.71-2.13-4.675-4.743-4.675zm0 7.511c-1.433 0-2.668-1.171-2.668-2.836 0-1.683 1.235-2.835 2.668-2.835 1.43 0 2.664 1.152 2.664 2.835 0 1.665-1.234 2.836-2.664 2.836zm-12.312-6.078v1.989h4.797c-.14 1.109-.516 1.925-1.09 2.496-.7.687-1.79 1.449-3.707 1.449-2.95 0-5.262-2.356-5.262-5.277 0-2.922 2.313-5.282 5.262-5.282 1.598 0 2.758.617 3.613 1.418l1.418-1.402c-1.2-1.133-2.793-2-5.031-2-4.047 0-7.445 3.258-7.445 7.266 0 4.003 3.402 7.265 7.445 7.265 2.187 0 3.832-.71 5.125-2.043 1.324-1.308 1.734-3.152 1.734-4.637 0-.464-.039-.886-.105-1.242h-6.754zm50.344 1.54c-.391-1.048-1.594-2.973-4.047-2.973-2.434 0-4.457 1.894-4.457 4.675 0 2.622 2.004 4.68 4.687 4.68 2.172 0 3.426-1.312 3.938-2.074l-1.61-1.063c-.539.778-1.27 1.293-2.328 1.293-1.05 0-1.804-.476-2.289-1.418l6.32-2.59c.004 0-.214-.53-.214-.53zm-6.446 1.558c-.054-1.805 1.414-2.727 2.47-2.727.823 0 1.522.407 1.757.993l-4.227 1.734zM91.81 33h2.078V19.25h-2.078zm-3.403-8.031h-.07c-.465-.543-1.356-1.04-2.484-1.04-2.368 0-4.532 2.055-4.532 4.692 0 2.625 2.164 4.664 4.532 4.664 1.128 0 2.02-.5 2.484-1.062h.07v.668c0 1.789-.965 2.75-2.523 2.75-1.27 0-2.055-.907-2.383-1.668l-1.805.746c.52 1.238 1.899 2.765 4.188 2.765 2.437 0 4.492-1.418 4.492-4.87v-8.4h-1.969zm-2.379 6.472c-1.43 0-2.629-1.187-2.629-2.82 0-1.648 1.2-2.851 2.63-2.851 1.413 0 2.523 1.203 2.523 2.851 0 1.633-1.11 2.82-2.524 2.82zm27.09-12.191h-4.969V33h2.075v-5.21h2.894c2.305 0 4.559-1.65 4.559-4.27 0-2.622-2.262-4.27-4.559-4.27zm.055 6.629h-2.95v-4.715h2.95c1.547 0 2.43 1.27 2.43 2.356 0 1.062-.883 2.359-2.43 2.359zm12.808-1.977c-1.496 0-3.05.657-3.69 2.106l1.835.762c.398-.762 1.125-1.012 1.895-1.012 1.074 0 2.164.64 2.18 1.77v.144c-.376-.215-1.177-.531-2.165-.531-1.98 0-3.996 1.078-3.996 3.093 0 1.844 1.621 3.028 3.445 3.028 1.395 0 2.164-.625 2.649-1.348h.07v1.063h2v-5.274c0-2.437-1.84-3.8-4.223-3.8zm-.25 7.535c-.68 0-1.62-.335-1.62-1.167 0-1.063 1.175-1.47 2.195-1.47.914 0 1.34.2 1.894.462-.16 1.273-1.27 2.175-2.469 2.175zm11.766-7.234-2.383 5.961h-.07l-2.465-5.96h-2.234l3.699 8.327-2.11 4.637h2.165l5.699-12.965h-2.3zM118.816 33h2.079V19.25h-2.079zm0 0" fill="#fff"></path><path d="M11.594 8.293c-.324.34-.516.863-.516 1.547v24.324c0 .684.188 1.207.516 1.547l.082.074 13.77-13.625v-.32L11.675 8.215zm0 0" fill="url(#a)"></path><path d="m30.031 26.707-4.586-4.547v-.32l4.59-4.543.102.058 5.437 3.063c1.551.871 1.551 2.297 0 3.172l-5.437 3.058c0-.003-.106.059-.106.059zm0 0" fill="url(#b)"></path><path d="M30.137 26.645 25.445 22 11.594 35.71c.515.536 1.355.602 2.312.067l16.23-9.132" fill="url(#c)"></path><path d="m30.137 17.355-16.23-9.132c-.958-.532-1.798-.465-2.313.07L25.445 22zm0 0" fill="url(#d)"></path></svg></li>
  </li>
  
</ul>
      </div>
    </div>
  )
}
// export default Responsive;

export {

  App,
  Head2,
  Poster,
  Findyourdrive,
  BrowserSlider,
  Roundslider,
  Citiesslider,
  Fueldream,
  BrowseExperience,
  Bookorbecome,
  Accordian,
  Footer
  
}  
