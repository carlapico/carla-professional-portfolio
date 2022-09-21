// import Header from './components/header/Header.jsx';
import Hero from './components/hero/Hero.jsx';
import Skills from './components/skills/Skills.jsx';
import biddit from './biddit-project-image.png';
import './App.css';

function App() {
  return (
    <>

      {/* <Header /> */}
      <Hero />
      <Skills />


      <section className='finalProjSection'>
          <p>Featured Project </p>
          <h2>Final Project</h2>
          <img src={biddit} alt="Biddit Project" />
      </section>

      <section className='smallProjSection'>
          <p>Small Projects</p>
          <h2>Other Work</h2>

          <div className='calculator'>
            <h3>Calculator</h3>
          </div>
          <div className='toDo'>
            <h3>To Do List</h3>
          </div>
          <div className='instaClone'>
            <h3>Instagram Clone</h3>
          </div>
      </section>

    </>
  );
}

export default App;
