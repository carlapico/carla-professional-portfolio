import bidditpreview from './Biddit-Project-Preview.png'
import './featureProject.css'

export default function FeatureProj () {
    return (
        <>
            <section className='finalProjSection'>
                <p>Featured Project </p>
                <h2>Final Project</h2>
                <img src={bidditpreview} className='bidditImg' alt="Biddit Project" />
            </section>

        </>
    )
}