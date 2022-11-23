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
import losanglecityblack from './assets/losanglecityblack.png'
import miamicityblack from './assets/miamicityblack.png'
import holulucitublack from './assets/holulucitublack.png'
import denvercityblack from './assets/denvercityblack.png'
import londoncityblack from './assets/londoncityblack.png'
import torontocityblack from './assets/torontocityblack.png'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { UserOutlined } from '@ant-design/icons';
import { Input,DatePicker,  Select,  TimePicker  } from 'antd';
import React, { Component } from "react";
import Slider from "react-slick";

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
   

     <Container > 

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
    </Container>
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
            slidesToShow: 1.5,
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
          <Card style={{ width: '158px',   boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'5px' }}>
      <Card.Img variant="top" src={losanglecityblack} alt='' style={{ width: '115px' }} />
      <Card.Body>
        <Card.Title className='carname'>Los Angeles</Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '158px' , boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={miamicityblack}style={{ width: '115px' }} />
      <Card.Body>
        <Card.Title className='carname'>Miami</Card.Title>
        <Card.Text>
        
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '158px' , boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={holulucitublack} style={{ width: '115px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Honolulu</Card.Title>
        <Card.Text>
        
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '158px' , boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={denvercityblack} style={{ width: '115px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Denver</Card.Title>
        <Card.Text>
         
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '158px' , boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={londoncityblack} style={{ width: '115px' }} />
      <Card.Body>
        <Card.Title  className='carname'>London</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '158px' , boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={torontocityblack} style={{ width: '115px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Toronto</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
        <Card style={{ width: '192px' , boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={toyota} style={{ width: '192px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Toyota</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
        <Card style={{ width: '192px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px' }}>
      <Card.Img variant="top" src={nissan} style={{ width: '192px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Nissan</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
        <Card style={{ width: '192px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px' }}>
      <Card.Img variant="top" src={lamborghini} style={{ width: '192px' }} />
      <Card.Body>
        <Card.Title  className='carname'>lamborghini</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
        <Card style={{ width: '192px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px' }}>
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
            slidesToShow: 1.5,
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
          <Card style={{ width: '192px',   boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'5px' }}>
      <Card.Img variant="top" src={jeep} alt='' style={{ width: '192px' }} />
      <Card.Body>
        <Card.Title className='carname'>Jeep</Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '192px' , boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={tesla}style={{ width: '192px' }} />
      <Card.Body>
        <Card.Title className='carname'>Tesla</Card.Title>
        <Card.Text>
        
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '192px' , boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={subaro} style={{ width: '192px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Subaro</Card.Title>
        <Card.Text>
        
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '192px' , boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={porsche} style={{ width: '192px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Porsche</Card.Title>
        <Card.Text>
         
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '192px' , boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={bmw} style={{ width: '192px' }} />
      <Card.Body>
        <Card.Title  className='carname'>BWM</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card style={{ width: '192px' , boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={mercedesbenz} style={{ width: '192px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Mercedes-benz</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
        <Card style={{ width: '192px' , boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
      <Card.Img variant="top" src={toyota} style={{ width: '192px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Toyota</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
        <Card style={{ width: '192px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px' }}>
      <Card.Img variant="top" src={nissan} style={{ width: '192px' }} />
      <Card.Body>
        <Card.Title  className='carname'>Nissan</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
        <Card style={{ width: '192px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px' }}>
      <Card.Img variant="top" src={lamborghini} style={{ width: '192px' }} />
      <Card.Body>
        <Card.Title  className='carname'>lamborghini</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div>
        <Card style={{ width: '192px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px' }}>
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
              <img src={roundposter1} alt=''/>
            </div>
            <div className='rounddetail'><p className='roundsliderP'>Find the perfect car <span className='ppcolour'>to conquer the great outdoors</span></p>
            <p>Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
            <button className='roundbtn'>Browse car</button></div>
          </div>
          </div>
          <div>
          <div className='roundparentdiv'>
            <div className='roundimgdiv'>
              <img src={roundposter2} alt=''/>
            </div>
            <div className='rounddetail'><p className='roundsliderP'>Find the perfect car <span className='ppcolour'>to unwind for the weekend</span></p>
            <p>From daily drivers to spirited sports cars, ditch the grind with convenient nearby cars.</p>
            <button className='roundbtn'>Browse car</button></div>
          </div>
          </div>
          <div>
          <div className='roundparentdiv'>
            <div className='roundimgdiv'>
              <img src={roundposter3} alt=''/>
            </div>
            <div className='rounddetail'><p className='roundsliderP'>Find the perfect car <span className='ppcolour'>to upgrade your vacation plans</span></p>
            <p>Skip the rental car counter and find the perfect car to complement your vacation vibe.</p>
            <button className='roundbtn'>Browse car</button></div>
          </div>
          </div>
          <div>
          <div className='roundparentdiv'>
            <div className='roundimgdiv'>
              <img src={roundposter4} alt=''/>
            </div>
            <div className='rounddetail'><p className='roundsliderP'>Find the perfect car <span className='ppcolour'>for scenic corners & curves</span></p>
            <p>Get your fill of high-performance thrills, with the richest selection of luxury and exotic vehicles anywhere.</p>
            <button className='roundbtn'>Browse car</button></div>
          </div>
          </div>
          <div>
          <div className='roundparentdiv'>
            <div className='roundimgdiv'>
              <img src={roundposter5} alt=''/>
            </div>
            <div className='rounddetail'><p className='roundsliderP'>Find the perfect car <span className='ppcolour'>to try before you buy</span></p>
            <p>Make sure your future wheels work well with your lifestyle by taking your time in the driver’s seat.</p>
            <button className='roundbtn'>Browse car</button></div>
          </div>
          </div>
          <div>
          <div className='roundparentdiv'>
            <div className='roundimgdiv'>
              <img src={roundposter5} alt=''/>
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

<div id='browsliderpsrentdiv'>
  {/* <h3>Browse by make</h3> */}
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
    <div>
    <Responsive3/>
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
  
}  
