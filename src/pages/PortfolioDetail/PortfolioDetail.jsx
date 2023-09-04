import { useParams } from "react-router"
import { Link } from "react-router-dom"
import portfolioProject from "../../data/portfolioProject/portfolioProject"
import { useState } from "react"
import {BiLeftArrow} from 'react-icons/bi'
import {BiRightArrow} from 'react-icons/bi'
import {AiOutlineArrowLeft} from 'react-icons/ai'

import './PortfolioDetail.scss'
export default function PortfolioDetail(){

    const param = useParams()
    const details = portfolioProject[param.id -1].gallery
    const [currentIndex, setCurrentIndex] = useState(0);


    const AfterImage = ()  => {
        const nextIndex = currentIndex === details.length - 1 ? 0: currentIndex + 1
        setCurrentIndex(nextIndex)
    }
    const BeforeImage = () => {
        const nextIndex = currentIndex === 0 ? details.length - 1 : currentIndex - 1
        setCurrentIndex(nextIndex)
    }

    const photoSelection = (photoIndex) => {
        setCurrentIndex(photoIndex)
    }

    const galleryItemElement = details ?  details.map((image, ImageIndex) => (
        <img 
            src={image} 
            key={ImageIndex} 
            style={{width: 80, height:50, objectFit: 'cover', cursor: 'pointer', borderRadius: 8}}
            onClick={() => photoSelection(ImageIndex)}
            className= {currentIndex === ImageIndex ? 'active-Image' : "image-item"}
        />
    )) : false;

    console.log(details)

   

    return(
        <div className="project-gallery">
            <Link to='/portfolio'><AiOutlineArrowLeft/> Back to portfolio</Link>
            {details ? <div className="gallery" >
            <div className="gallery-section" >
                <BiLeftArrow className ="arrow arrow-left" onClick={BeforeImage}/>
                <div className="main-picture">
                    <img src={details.length !== 0 ? details[currentIndex] : portfolioProject[param.id -1].image} alt="" />
                </div>
                <BiRightArrow className ="arrow arrow-right"  onClick={AfterImage}/>
                
            </div>
            <div className="content-item">
            <div className="galiery-item">
                {galleryItemElement}
            </div>
            </div>
        </div> : <p style={{paddingLeft: 10, fontSize: 18}}>The gallery is currently unavailable {`((`}</p>}
        </div>
        
    )
}