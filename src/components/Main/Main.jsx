import React from 'react'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img5 from '../../Assets/img5.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {HiOutlineTag} from 'react-icons/hi';
const Data = [
    {
    id:1,
    
    imgSrc: img1,
    
    destTitle: 'Bora Bora',
    
    Location: 'New Zealand',
    
    grade: 'CULTURAL RELAX',
    
    Fees: '$700',
    
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities'
    },
     {
      id:2,
      
      imgSrc: img2,
      
      destTitle: 'Machu Picchu',
      
      Location: 'Peru',
      grade: 'CULTURAL RELAX',
      
      Fees: '$600',
      
      description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the Sunrise from the Sun Gate is simply spectacular.'
      }
  
    ,
    {id:3,
    imgSrc: img5,
    
    destTitle: 'Great Barrier Reef',
    
    location: 'Australia',
    
    grade: 'CULTURAL RELAX',
    fees: '$700',
    
    description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish and beauty. Always interesting to be in this place'
    
}];

const Main=()=> {
   
  return (
    
    <section className='main container section'>
        <div className="secTitle">
            <h3 className="title">
                Most visited Destinations
            </h3>
        </div>
        <div className="secContent grid">
            {
                Data.map(({id,imgSrc,destTitle,Location,grade,fees,description})=>{
                    return(
                        <div key={id} className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex"><HiOutlineLocationMarker className="icon"/></span>
                                    <span className="name">{Location}</span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small>
                                            </span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className='btn flex'>
                                        Book <HiOutlineTag className='icon'/>
                                    </button>
                                </div>
                        </div>
                    )

                })
            }
        </div>
    </section>


  )
}
export default Main