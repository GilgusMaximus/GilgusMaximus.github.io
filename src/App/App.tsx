import { useRef } from 'react'
import './App.css'
import TopElement from '../TopElement/TopElement';
import SideBar from '../SideBar/SideBar';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';
import ProjectPage from '../ProjectPage/ProjectPage';

function App() {
  const myRef = useRef(null);
  // const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <div className="App">
      <header className="App-header">
          <TopElement/>
          <AboutPage/>
          <ContactPage/>
          <ProjectPage/>
          {/* <SideBar executeScroll={ executeScroll }></SideBar> */}
          {/* <div ref={myRef} className="test">I wanna be seen</div> */}
      </header>
    </div>
  )
}

export default App
