import './skills.css'

export default function Skills () {
    return (
        <>
            <section className='skillsSection'>
                <p>My Skills</p>
                <h2>Expertise</h2>
                <div className="skillsRow">
                    <div className='progFundamentals'>
                    <h3>Programming Fundamentals</h3>
                    <p>Variables | Functions| Data Structures | Algorithms | Problem Solving | Versioning / GIT</p>
                    </div>
                    
                    <div className='backendEng'>
                    <h3>Backend Engineering</h3>
                    <p>Database Design | SQL / NoSQL | CRUD | ORM | REST Principles | HTTP Requests | Agile / Scrum | Package Management | Express | Clean Coding | Dev Ops | AWS / GCP</p>
                    </div>
                    
                    <div className='frontendEng'>
                    <h3>Frontend Engineering</h3>
                    <p>HTML / CSS | Flexbox | DOM and Event Handling | Bootstrap | Accessibility | DRY Principles | SOLID Principles | React | Routing | Hooks | SASS | Branching | Docker | Ant Design | TypeScript | Electron | React Native | Pull Requests | Merging | Python | AI/ML | Automation</p>
                    </div>
                    
                    <div className='softSkills'>
                    <h3>Soft Skills</h3>
                    <p>Agile and SCRUM Methodologies | Project Management | Organizational Skills | Teamwork | Community Builder | Customer Relationship Management </p>
                    </div>
                </div>

                
            </section>
        </>
    )
}