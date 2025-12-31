import './App.css'

// IMGs/SVGs

import reactSvg from './assets/react-svgrepo-com.svg'
import tsSvg from './assets/typescript-icon-svgrepo-com.svg'
import laravelSvg from './assets/laravel-svgrepo-com.svg'
import mysqlSvg from './assets/mysql-svgrepo-com.svg'
import sqliteSvg from './assets/sqlite-svgrepo-com.svg'
import tailwindSvg from './assets/tailwind-svgrepo-com.svg'

import phFlag from './assets/flag-for-flag-philippines-svgrepo-com.svg'

import pfp1 from './assets/gigachad-1.png'
import pfp2 from './assets/gigachad-2.png'

// Components
import WorkExperience from './components/Work Experience'



function App() {
  
  return (
    // Centers the sections
    <div className='flex flex-col gap-6 justify-center items-center'>
      {/* Main container */}
      <div className='p-6 flex flex-col gap-6 justify-center items-center'>
        <nav>
          <button className='p-2 border bg-black'>Education</button>
        </nav>

        <header className='flex gap-6 p-6 rounded-3xl MajorSectionBg'>
          
          <div className='size-68 rounded-[9000px]'>
            <img className="size-68 rounded-[9000px] border" src={pfp1}/>
          </div>
          <section>
            <h3 className="text-2xl">Paulo E. Heymann</h3>
            <h1 className='text-6xl'>FULLSTACK DEVELOPER</h1>
            
            <span className="flex gap-2 items-center">
              <img src={phFlag} className="size-8"/><label className="text-2xl">Philippines, Mindoro</label>
            </span>

            <span>

            </span>
            {/*Tech Stack*/}
            <div className="flex gap-2 mt-2">
              
              <div className='techStackContainer'>
                <img className="techStackIcons" src={reactSvg} />
                <label className='text-2xl'>React</label>
              </div>

              <div className='techStackContainer'>
                <img className="techStackIcons" src={tailwindSvg} />
                <label className='text-2xl'>Tailwind</label>
              </div>

              <div className='techStackContainer'>
                <img className="techStackIcons rounded-lg" src={tsSvg} />
                <label className='text-2xl'>Typescript</label>
              </div>

              
            </div>

            <div className="flex gap-2 mt-2">
              <div className='techStackContainer'>
                <img className="techStackIcons" src={laravelSvg} />
                <label className='text-2xl'>Laravel</label>
              </div>

              <div className='techStackContainer'>
                <img className="techStackIcons" src={mysqlSvg} />
                <label className='text-2xl'>MySQL</label>
              </div>

              <div className='techStackContainer'>
                <img className="techStackIcons" src={sqliteSvg} />
                <label className='text-2xl'>Sqlite</label>
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
          <WorkExperience/>
        </section>
      </div>    
    </div>
  )
}

export default App
