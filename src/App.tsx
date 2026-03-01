import { useState, useRef, useEffect } from 'react'
import './App.css'
import profileSvg from './assets/pb_li.png'
import northernLightsVideo from './assets/northern_lights_sd.mp4'

type Tab = 'experience' | 'education' | 'skills'

interface Entry { date: string; text: string }
const content: Record<Tab, { title: string; items: Entry[] }> = {
  experience: {
    title: 'Experience',
    items: [
      { date: '05/25–Now 🇫🇮', text: 'IT Architect at Boston Consulting Group (BCG) Platinion' },
      { date: '10/24–Now 🇫🇮', text: 'Software Engineer at Netcetera in digital payments solutions' },
      { date: '05/23–10/24 🇫🇮', text: 'Junior Software Developer at Giesecke+Devrient in digital payments solutions' },
      { date: '10/20–09/21 🇩🇪', text: 'Student assistant in E-Government and online platforms' },
      { date: '10/18–09/20 🇩🇪', text: 'Student assistant in medical research with ML and AR' },
    ],
  },
  education: {
    title: 'Education',
    items: [
      { date: "2022–2023", text: "M.Sc in Informatics: Games Engineering @ Technical University of Munich" },
      { date: "2021–2022", text: "Master's computer science exchange to Aalto University, Finland 🇫🇮" },
      { date: "2017–2020", text: "B.Sc in Informatics: Games Engineering @ Technical University of Munich" },
    ],
  },
  skills: {
    title: 'Skills',
    items: [
      { date: '', text: 'Development with SpringBoot and Reactor in Java & NodeJS + Vue/React & Python backend' },
      { date: '', text: 'Cloud experience with Azure AZ-900 and Firebase' },
      { date: '', text: 'Security topics: security evaluation, secure system design' },
    ],
  },
}

function App() {
  const [tab, setTab] = useState<Tab>('experience')
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5 // Slow down to 50% of normal speed
    }
  }, [])

  return (
    <div className="page-root">
      <main className="container">
        <section className="left">
          <div className="avatar-container">
            <video ref={videoRef} className="avatar-video" autoPlay muted loop>
              <source src={northernLightsVideo} type="video/mp4" />
            </video>
            <div className="avatar-wrap">
              <img src={profileSvg} alt="Profile" className="avatar" />
            </div>
          </div>
          <div className="person">
            <h1 className="name">Luca Hohmann</h1>
            <p className="meta">
              Helsinki, Finland —<br />
              <span className="job">IT Architect @ Boston Consulting Group (BCG) Platinion</span>
            </p>
            <div className="links">
              <a href="https://de.linkedin.com/in/luca-hohmann" aria-label="LinkedIn" className="link" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.6 4.13 5.5 2.99 5.5 1.85 5.5 1 4.6 1 3.5 1 2.4 1.85 1.5 2.99 1.5 4.13 1.5 4.98 2.4 4.98 3.5zM.5 8.98h3v12.02h-3V8.98zM8.5 8.98h2.88v1.64h.04c.4-.76 1.38-1.56 2.86-1.56 3.06 0 3.63 2.01 3.63 4.62v6.32h-3V14.3c0-1.45-.03-3.33-2.03-3.33-2.03 0-2.34 1.58-2.34 3.21v6.03h-3V8.98z"/>
                </svg>
                LinkedIn
              </a>
              <a href="#" className="link" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16l4-2 4 2 4-2 4 2V6a4 4 0 0 0-4-4h-2z" />
                </svg>
                CV
              </a>
              <a href="https://github.com/GilgusMaximus" className="link" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                  <path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.9 3.17 9.06 7.57 10.52.55.1.75-.24.75-.53v-1.86c-3.08.67-3.73-1.48-3.73-1.48-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.07-.67.07-.67 1.1.08 1.68 1.14 1.68 1.14.97 1.66 2.54 1.18 3.16.9.1-.7.38-1.18.69-1.45-2.46-.28-5.05-1.23-5.05-5.47 0-1.21.43-2.2 1.13-2.98-.12-.28-.49-1.41.11-2.95 0 0 .92-.29 3.02 1.13.87-.24 1.8-.36 2.72-.36.92 0 1.85.12 2.72.36 2.1-1.42 3.02-1.13 3.02-1.13.6 1.54.23 2.67.11 2.95.7.78 1.13 1.77 1.13 2.98 0 4.25-2.6 5.19-5.08 5.47.39.34.73 1.01.73 2.04v3.02c0 .29.2.64.76.53 4.4-1.46 7.56-5.62 7.56-10.52C23.25 5.48 18.27.5 12 .5z"/>
                </svg>
                GitHub
              </a>
              <a href="mailto:business@lucahohmann.com" className="link" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M2 4h20v16H2z" fill="none" />
                  <path d="M20 4H4v2l8 5 8-5V4zM4 20h16V8l-8 5-8-5v12z" />
                </svg>
                Email
              </a>
            </div>
          </div>
        </section>

        <section className="right">
          <div className="tabs">
            <div className="tab-buttons" role="tablist" aria-label="Sections">
              <button
                className={tab === 'experience' ? 'active' : ''}
                onClick={() => setTab('experience')}
              >
                Experience
              </button>
              <button
                className={tab === 'education' ? 'active' : ''}
                onClick={() => setTab('education')}
              >
                Education
              </button>
              <button
                className={tab === 'skills' ? 'active' : ''}
                onClick={() => setTab('skills')}
              >
                Skills
              </button>
            </div>

            <div className="tab-panel">
              <h2>{content[tab].title}</h2>
              {tab === 'experience' || tab === 'education' ? (
                <div className="timeline">
                  {content[tab].items.map((it, i) => (
                    <div className="event" key={i}>
                      <div className="event-date">{it.date}</div>
                      <div className="event-desc">{it.text}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <ul>
                  {content[tab].items.map((it, i) => (
                    <li key={i}>{it.text}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
