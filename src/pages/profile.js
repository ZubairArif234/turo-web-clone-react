
import { useLocation } from "react-router-dom";

function Profilefun (){

    const location = useLocation();

  console.log("location", location.state);
    return(

        <>
    <App />
    <Head2 />
    <Poster />
    <Findyourdrive/>
    <BrowserSlider/>
    <Roundslider/>
    <Citiesslider/>
    <Fueldream/>
    <BrowseExperience/>
    <Bookorbecome/>
    <Accordian/>
    <Footer></Footer>
    </>
        )
}
 export {Profilefun}