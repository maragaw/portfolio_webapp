import codingGraphic from '../assets/coding_resize.png'
import { Link } from 'react-router-dom'
import ScrollFadeIn from '../components/FadeIn'
import SocialMediaBar from '../components/SocialMediaBar'
    
const About = () =>{

    return(
        <div className="about">
        <section className="intro">
            
            <div className="landing">

                <div className='landing-intro'>
                <h1>Matthew Aragaw</h1>
                <h3 className='myJobTitle'>Software Engineering</h3>
                <p>I work in multi-threaded Operating System development 
                    and embedded systems engineering. Currently I am an engineer at Amazon,
                    helping develop Alexa platforms.
                </p>
                <p>I'm currently self-learning full-stack application development. This site is a deep dive into MERN stack capability</p>
                {/* <p>This website is a fully operational MERN stack with client-side operating from React, 
                    communicating with server-side Express and Node.js over custom API endpoints, 
                    and caching data into a MongoDB cluster. I'll be using an AWS Lambda function for serverless backend framework, and AWS S3 bucket for front-end hosting 
                    </p> */}
                <p>Click here to see it in action!
                    </p>
                <Link to='/blog'>
                    <button className='blogButton'>Get Started</button>                   
                </Link>
                    <SocialMediaBar />
                </div>
                <div className='landing-graphic'>
                    <img className='codinggraphic' src={codingGraphic} alt='code graphic'/>
                </div>
            </div>
        </section>
        <ScrollFadeIn id="my-fadein-component" offset={100}>
        <section className="description">
            <div className='interests'>
              <h4>Hello!</h4>
              <p>My name is Matthew. I've been coding since the age of 15. This site serves as a platform for hosting my projects and thoughts, updated periodicaly
                I've had experience in developing web apps, automation scripts, and hardware designs for various purposes, with a handful of 
                other personal domains and legacy services that I keep running.
              </p>
              <p>
                My most recent domain is in Operating System development, where I generally utilize Linux (Ubuntu distro's) for developing multi-threaded
                systems in C++.
              </p>
              <p>
                Graduated in 2022 with a concentration in AI/Machine Learning, and am well-versed in the development of machine learning
                models for image recognition tasks, sequence modeling, transformers, and classification problems.
              </p>
              <p>
                This year I've been heavily interested in alleviating two huge problems in AI:
                <ul>
                    <li>The Black Box Problem</li>
                    <li>The Alignment Problem</li>
                </ul>
                Currently have projects in development that aim to tackle these well recognized issues. Reach out to me for more information!
              </p>
            </div>
            <div className='research'>
                <h3>Projects</h3>
                <div className='project-tile'>
                    <h4>Project Portunus Native Android App integrated with Firebase and Google Maps API</h4>
                     <p>Check this out on Github/Linkedin</p>
                     <h4>Scaling Network IDS's with UCSB Department of Computer Science</h4>
                     <p>Check this out on Linkedin</p>
                     <h4>This Website</h4>
                     <p>This website is a fully operational MERN stack with client-side operating from React, 
                    communicating with server-side Express and Node.js over custom API endpoints, 
                    and caching data into a MongoDB cluster. I'll be using an AWS Lambda function for serverless backend computing through API gateway, and AWS S3 bucket for front-end hosting 
                    </p>
                </div>
                <h4>Interests</h4>
                <ul>
                    <li>Machine Learning</li>
                    <li>Distributed Networks/Distributed Computing</li>
                    <li>System Design/Network Design</li>
                    <li>Operating Systems</li>
                </ul>
                <div className='spacing'></div>
                <div className='buttoncenter'>
                    <Link to='/blog'>
                        <button className='button2'>Leave a Comment</button>                   
                    </Link>                    
                </div>

            </div>
        </section>
        </ScrollFadeIn>

      </div>
    )
}
export default About