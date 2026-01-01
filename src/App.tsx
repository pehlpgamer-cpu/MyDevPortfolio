import './App.css'
import { useState } from 'react'
// IMGs/SVGs

import reactSvg from './assets/react-svgrepo-com.svg'
import tsSvg from './assets/typescript-icon-svgrepo-com.svg'
import laravelSvg from './assets/laravel-svgrepo-com.svg'
import mysqlSvg from './assets/mysql-svgrepo-com.svg'
import sqliteSvg from './assets/sqlite-svgrepo-com.svg'
import tailwindSvg from './assets/tailwind-svgrepo-com.svg'

import githubSvg from './assets/github-142-svgrepo-com.svg'
import linkedinSvg from './assets/linkedin-svgrepo-com.svg'
import gmailSvg from './assets/gmail-svgrepo-com.svg'

import { FaX } from 'react-icons/fa6'

import phFlag from './assets/flag-for-flag-philippines-svgrepo-com.svg'

import pfp1 from './assets/gigachad-1.png'
import pfp2 from './assets/gigachad-2.png'

// Components
import WorkExperience from './components/Work Experience'
import EducationBackround from './components/Education Backround' // FIXME spelling error lmao
import MyProjects from './components/My Projects'
//-------------------------------------------

// TODO add proiritized page-load-in animations for elements 
function App() {
  const [InfoComponent, setInfoComponent] = useState<string>('edu');  
  return (
    // Centers the sections
    <div className='flex flex-col gap-6 justify-center items-center'>
      {/* Main container */}
      <div className='p-6 flex flex-col gap-6 justify-center items-center'>
        <div className='rounded-2xl flex gap-2 w-full justify-center'>
          <button onClick={() => setInfoComponent('edu')} className='grow p-4 border rounded-xl bg-black/70 
          hover:scale-y-110 hover:bg-black hover:font-extrabold duration-150 ease-in-out'>
            Education</button>
          <button onClick={() => setInfoComponent('workXP')} className='grow p-4 border rounded-xl bg-black/70 
          hover:scale-y-110 hover:bg-black hover:font-extrabold duration-150 ease-in-out'>
            Work Experience</button>
          <button onClick={() => setInfoComponent('projects')} className='grow p-4 border rounded-xl bg-black/70 
          hover:scale-y-110 hover:bg-black hover:font-extrabold duration-150 ease-in-out'>
            Projects</button>
          <button onClick={() => setInfoComponent('resume')} className='grow p-4 border rounded-xl bg-black/70 
          hover:scale-y-110 hover:bg-black hover:font-extrabold duration-150 ease-in-out'>
            Resume</button>
        </div>

        <header className='flex gap-6 p-6 rounded-3xl MajorSectionBg'>
          
          
          <img className="size-52 rounded-[9000px] border" src={pfp1}/>
          
          <section className='flex flex-col '>
            <div className='flex'>
              <span className='flex gap-1'>
                <a target='_blank' href='https://github.com/pehlpgamer-cpu'><img className='size-8 bg-white rounded-md p-1 
                hover:scale-110 duration-150 ease-in-out' src={githubSvg}/></a>
                <img className='size-8 
                hover:scale-110 duration-150 ease-in-out' src={gmailSvg}/> 
                <img className='size-8 bg-white rounded-md 
                hover:scale-110 duration-150 ease-in-out' src={linkedinSvg}/>
              </span>
              <h3 className="ml-1.5 text-3xl">Paulo E. Heymann</h3>
            </div>
            
            <h1 className='text-6xl font-extrabold'>FULLSTACK DEVELOPER</h1>
            
            <span className="flex gap-2 items-center">
              <img src={phFlag} className="size-6"/><label className="text-xl">Philippines, Mindoro</label>
            </span>

            <span className='flex gap-2 items-center w-full'>
              <FaX className='p-0.5 text-xl size-6 bg-red-600'/>
              <label className='text-xl'>Not available for hire</label> 
            </span>
            {/*Tech Stack*/}
            <div className="flex gap-2 mt-2">
              
              <div className='techStackContainer'>
                <img className="techStackIcons" src={reactSvg} />
                <label className=''>React</label>
              </div>

              <div className='techStackContainer'>
                <img className="techStackIcons" src={tailwindSvg} />
                <label className=''>Tailwind</label>
              </div>

              <div className='techStackContainer'>
                <img className="techStackIcons rounded-xs" src={tsSvg} />
                <label className=''>Typescript</label>
              </div>

              <div className='techStackContainer'>
                <img className="techStackIcons" src={laravelSvg} />
                <label className=''>Laravel</label>
              </div>

              <div className='techStackContainer'>
                <img className="techStackIcons" src={mysqlSvg} />
                <label className=''>MySQL</label>
              </div>

              <div className='techStackContainer'>
                <img className="techStackIcons" src={sqliteSvg} />
                <label className=''>Sqlite</label>
              </div>
            </div>
          </section>
        </header>
        {/*MAIN CONTENT*/}
        <section className='flex w-full'>
          <div>

          </div>
          <div>

          </div>
          
          {InfoComponent == 'workXP' ? <WorkExperience/> : null}
          {InfoComponent == 'edu' ? <EducationBackround/> : null}
          {InfoComponent == 'projects' ? <MyProjects/> : null}
          
        </section>
      </div>        
    </div> 
  ) 
}

export default App;

