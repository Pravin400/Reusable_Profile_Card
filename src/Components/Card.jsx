import React from 'react'
import fb from '../assets/facebook.svg'
import ig from '../assets/instagram.svg'
import li from '../assets/linkedin.svg'
import tw from '../assets/twitter.svg'
import pi from '../assets/profile.svg'
import pb from '../assets/profileback.svg'
import '../Components/Card.css'
const Card = (props) => {
  return (
    <div className='main'>
        <div className="picture">
            <img className='profile-img' src={pi}></img>
            {/* <img className='profile-back' src={pb}></img> */}
        </div>
        <div className="details">
            <h3 className='name'>Name : {props.name}</h3>
            <h5>Profession : {props.profession}</h5>
            <p>Bio : {props.Bio}</p>
            <div className="socialMedia">
                <a href="http://facebook.com"><img src= {fb} alt="facebook" /></a>
                <a href=""> <img src={ig} alt="linkedin" /></a>
                <a href=""><img src={li} alt="instagram" /></a>
                <a href=""><img src={tw} alt="twitter" /></a>
            </div>
            <button >Buy me a coffee</button>
        </div>
    </div>
  )
}

export default Card
