import calculator from './calculator-preview.png'
import toDo from './toDoListPreview.png'
import instaClone from './instaClonePreview.png'
import './otherWork.css'

export default function OtherWork () {
    return (
        <>
            <section className='smallProjSection'>
                <p>Small Projects</p>
                <h2>Other Work</h2>
                <div className='smallProj'>
                    <div className='calculatorBox'>
                        <img src={calculator} className="calculatorImg" alt="calculator preview" />
                        <h3>Calculator</h3>
                    </div>
                    <div className='toDoBox'>
                        <img src={toDo} className="toDoImg" alt="calculator preview" />
                        <h3>To Do List</h3>
                    </div>
                    <div className='instaCloneBox'>
                        <img src={instaClone} className="instaCloneImg" alt="calculator preview" />
                        <h3>Instagram Clone</h3>
                    </div>
                </div>
            </section>
        </>
    )
}