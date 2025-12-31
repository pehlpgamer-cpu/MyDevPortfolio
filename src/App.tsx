import { FaMapLocationDot } from "react-icons/fa6";
import reactSvg from './assets/react-svgrepo-com.svg'
import tsSvg from './assets/typescript-icon-svgrepo-com.svg'
import laravelSvg from './assets/laravel-svgrepo-com.svg'
import mysqlSvg from './assets/mysql-logo-svgrepo-com.svg'
import sqliteSvg from './assets/sqlite-svgrepo-com.svg'
import tailwindSvg from './assets/tailwind-svgrepo-com.svg'

import './App.css'

function App() {
  
  return (
    <section className="p-4 border">
      <nav>
        
      </nav>

      <header>
        <img className="h-16 w-16" src={reactSvg}/>
        <article>
          <h1 className='text-6xl'>Paulo E. Heymann</h1>
          <h3 className="text-2xl">Full Stack Dev</h3>
          <span className="flex gap-2 items-center">
            <FaMapLocationDot className="text-red-500 text-2xl"/><label className="text-2xl">Philippines, Mindoro</label>
          </span>
          {/*Tech Stack*/}
          <div className="flex gap-2 max-h-16 max-w-16 mt-2">
            <img className="" src={reactSvg} />
            <img className="" src={tsSvg} />
            <img className="" src={laravelSvg} />
            <img className="" src={tailwindSvg} />
            <img className="" src={mysqlSvg} />
            <img className="" src={sqliteSvg} />
          </div>
        </article>
        
        
        
        
        
        
        
        

      </header>
      
          
    </section>
  )
}

export default App
