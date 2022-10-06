import headshot from './floating-headshot-carla.png';
import './hero.css'

export default function Hero() {
    return(
        <>
            <section className='hero'>
                <div className='heroLeft'>
                    <h1>Hi, I am Carla Pico.  Software Engineer based in South Florida.</h1>
                    <h3>Tech professional with experience in the tech space for 3+ years and a passion for user experience currently  looking to contribute to a great team as a Junior Software Engineer. </h3>
                    <a href="https://firebasestorage.googleapis.com/v0/b/bocacode-fb.appspot.com/o/candidates%2Fresumes%2Fpico_resume_2022.pdf?alt=media" target="_blank" rel="noopener noreferrer"> Resume</a>
                </div>
                <div className='heroRight'>
                    <img src={headshot} className="headshot" alt="Carla Pico's Headshot" />

                </div>
            </section> 
        </>
    )
}