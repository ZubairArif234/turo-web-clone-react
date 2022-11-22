import logo from './logo.svg';
import './App.css';
import Turologo from './assets/turologo.png'
import humburgur from './assets/humburgur.png'
import profile from './assets/profile.png'
import search from './assets/search.png'
import Container from 'react-bootstrap/Container';
import { UserOutlined } from '@ant-design/icons';
import { Input,DatePicker,  Select,  TimePicker  } from 'antd';


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

export {

  App,
  Head2,
  Poster,
}  
