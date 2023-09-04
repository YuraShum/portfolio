import data from './../../data/lastWork/lastWork'
import titleImg from './../../assets/images/bg.jpg'
import './Home.scss'
import { Link } from 'react-router-dom'
export default function Home(){
    const LastWorkElements = data.map(work => {
        return(
            <Link to = {`/portfolio/${work.id}`} className="last-work-gallery" key={work.title}>
                    <img src={work.image} alt="" />
                    <p>{work.title}</p>
                    <span>{work.description}</span>
                </Link>
        )
    })
    return(
        <div className="home-section">
            <div className="image-section">
                <img src={titleImg} alt="" />
            </div>
            <div className="last-work">
                <div className="last-work-title">
                    <span></span>
                    <h4>SOME OF MY LATEST WORK</h4>
                    <span></span>
                </div>
                <div className='gallery-section'>
                    {LastWorkElements}
                </div>
                
            </div>
        </div>
    )
}