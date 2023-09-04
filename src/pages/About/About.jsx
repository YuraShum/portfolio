import './About.scss'
import { useState, useEffect } from 'react'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import { BarChart } from '../../components/BarChart/BarChart'
import { ReactP5Wrapper } from 'react-p5-wrapper'
import sketch from '../../utils/skatch'

import {BsFillEraserFill} from 'react-icons/bs'

import gallery1 from './../../assets/images/1.jpg'
import gallery2 from './../../assets/images/2.jpg'
import gallery3 from './../../assets/images/3.jpg'
import gallery4 from './../../assets/images/4.jpg'
import gallery5 from './../../assets/images/5.jpg'
import gallery6 from './../../assets/images/6.jpg'
import aboutImg from './../../assets/images/about_img-new.png'
import facts from './../../assets/images/facts.png'




export default function About(){
    const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);

    function handleResize() {
        setCanvasWidth(window.innerWidth)
    }
    useEffect(() =>{
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
          };
    }, [])
    console.log(canvasWidth)

    const liStyle = {minWidth: 40, minHeight: 40}

    return(
        <>
            <div className='container'>
            <div className="about-section">
                <div className="about-section--text">
                    <h1>about.</h1>
                    <h3>I am a student who found a 
                        niche that really interests 
                        me and now I am developing in 
                        web development.</h3>
                    <p>I have been developing web applications 
                        for six months now,
                        I like to create something 
                        with my own hands and solve
                        problems that often arise in 
                        development, in everyday life 
                        I am friendly, and in my free 
                        time I do sports or study.</p>
                </div>
                <img src={aboutImg} alt="" />
            </div>
            <span className='line'></span>
            <div className="about-gallery">
                <img src={gallery1} alt="" />
                <img src={gallery2} alt="" />
                <img src={gallery3} alt="" />
                <img src={gallery4} alt="" />
                <img src={gallery5} alt="" />
                <img src={gallery6} alt="" />
            </div>
            </div>
            <div className='random__facts'>
                <img src={facts} alt="" style={{borderRadius: '50%'}}/>
                <div className='random__facts-section'>
                    <p>Random facts</p>
                    <ul className='random__facts-list'>
                        <li>I like to walk</li>
                        <li>Always for any adventure</li>
                        <li>persistent in solving issues</li>
                        <li>A bit of a perfectionist</li>
                        <li>I ride a bicycle in the evenings</li>
                        <li>I like to meet new people</li>
                </ul>
                </div>
            </div>
            {canvasWidth >= 767 && 
                <div className='chart'>
                    <h2>My skills</h2>
                    <BarChart></BarChart>
                </div>
            }
            
            <div className='sketch' >
                <span><BsFillEraserFill/>Clean up</span>
            <div className='conteiner' >
                 
                <div className='content-sketch' style={canvasWidth > 1200 ? {maxWidth: 1200 -25}: {maxWidth: canvasWidth - 75}}>
                    <h1>Also familiar with such technologies</h1>
                    <ul className='content-sketch-item'>
                        <li><AiOutlineCheckCircle style={liStyle}/><span>Tailwind </span></li>
                        <li><AiOutlineCheckCircle style={liStyle}/><span>Basic understanding and study Redux Toolkit</span></li>
                        <li><AiOutlineCheckCircle style={liStyle}/><span>Familiar with GSAP (GreenSock Animation Platform)</span></li>
                        <li><AiOutlineCheckCircle style={liStyle}/><span>I use it skillfully React Router</span></li>
                        <li><AiOutlineCheckCircle style={liStyle}/><span>I can create custom scrolls using the react-scroll library</span></li>
                    </ul>
                    
                </div>
                <ReactP5Wrapper sketch={p => sketch(p, { width: canvasWidth })}  style={{ maxWidth: canvasWidth, width: '100%' }}/>
            </div>
            </div>
            
            
        </>
    )
}//width > 1200 ? 1200 : width - 55