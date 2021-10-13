import React from 'react';
import { ArrowRightIcon } from "@heroicons/react/solid";
/* import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub'; */


function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10 ">
         
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Wycliffe Odhiambo
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
        </nav>
        <div className="flex  items-center  justify-between mt-7 md:mr-auto md:ml-4 md:mt-0 md:py-1 md:pl-4 md:border-l md:border-gray-700	">
          
          {/* <a href="https://github.com/santosdave" className="mr-5 hover:w-10 ">
             <GitHubIcon className=" text-blue-700 w-10 h-10"/>
          </a>
          <a href="https://www.linkedin.com/in/wycliffe-o-90563b1b8" className="mr-5 hover:bg-gray-700 ">
             <LinkedInIcon className="w-10 h-10  text-blue-700 "/>
          </a> */}
          
          
        </div>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-7 focus:outline-none hover:bg-gray-700 rounded-sm text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
        <div className="md:mt-0">
                <img
                    className="object-cover object-center rounded-full"
                    alt="hero"
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQFaYwtIZ5k53g/profile-displayphoto-shrink_100_100/0/1622195469007?e=1639612800&v=beta&t=PBjMgGrr1FQv699FfB43brtYocKNg1MG_90xLyI05us"
                />
        </div>
        
      </div>
    </header>
    )
}

export default Navbar
