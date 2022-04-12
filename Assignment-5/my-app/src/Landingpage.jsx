import React from 'react';
import { useNavigate} from "react-router-dom"
import './Landingpage.css'


function Landingpage() {
    let history = useNavigate();
  return (
    <div className='container'>
        <img className='imageP' src='https://helios-i.mashable.com/imagery/articles/00SxhNRX0d7bgGeQPBq9Bf6/hero-image.fill.size_1248x702.v1639606473.jpg' alt=''/>
        <div className='text-wrapper'>
            <h5>Instagram Page</h5>
            <button className='button1' onClick={() => {
                history('/Allcomponent');
            } } >Enter</button>
        </div>
    </div>
  )
}
export default Landingpage;
