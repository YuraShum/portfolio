import { Link } from 'react-router-dom'
import data from './../../data/portfolioProject/portfolioProject.js'
import './Portfolio.scss'
export default function Portfolio(){
    const portfolioProjects = data.map(project => {
        return (
            <Link className='project__conteiner' key={project.id} to={`${project.id}`}>
                <div className='box-img'>
                    <img src={project.image} alt=""/>
                </div>
                <div className='content'>
                    <h2>{project.title} <br/> <span>{project.description}</span></h2>
                </div>
            </Link>
        )
    })
    return(
        <>
            <div className='introdaction'>
                <h1>portfolio.</h1>
                <h3>You can familiarize yourself with examples of my latest works.</h3>
                <p>Most of my projects are made from scratch, 
                    usually I found an interesting 
                    idea for development and tried 
                    to implement it, there are also 
                    projects as completed in courses</p>
                
            </div>
            <div className='portfolio-gallery'>
                {portfolioProjects}
            </div>
        </>
    )
}