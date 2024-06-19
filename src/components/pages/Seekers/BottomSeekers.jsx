import Tool from '../../../assets/tool.svg'
import Software from '../../../assets/software.svg'
import Personal from '../../../assets/personal.svg'
import PaperClip from '../../../assets/paperclip.svg'
import { Link } from 'react-router-dom'

const BottomSeekers = () => {
    return (
        <div className="bg-white h-auto content-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl text-center">Sectors</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-between pl-10 pr-10 pt-16">
                <div>
                    <img className='mx-auto pb-8' src={Software} width={50} height={50} />
                    <h2 className='text-center font-extrabold'>IT and Software</h2>
                    <p className='text-center'>Whether you're a Software Engineer, Data and SQL Analyst, IT Support Technician, 
                    or more we know that working for the right company can propel your career goals.</p>
                </div>
                <div>
                    <img className='mx-auto pb-8' src={Tool} width={50} height={50}/>
                    <h2 className='text-center font-extrabold'>Engineering and Construction</h2>
                    <p className='text-center'>We understand that hiring a skilled engineering partner and crew gives a company the opportunity to cultivate solutions to complex problems
                     and produce innovative solutions that improve quality of the business and brand. </p>
                </div>
                <div>
                    <img className='mx-auto pb-8' src={PaperClip} width={50} height={50}/>
                    <h2 className='font-extrabold text-center'>Administrative and Corporate</h2>
                    <p className='text-center'>We also understand that the importance of matching qualified candidates with positions commensurate with their skillsets to propel organizations and careers.</p>
                </div>
                <div>
                    <img className='mx-auto pb-8' src={Personal} width={50} height={50}/>
                    <h2 className='text-center font-extrabold'>Personal Services</h2>
                    <p className='text-center'>We can assist if you are a pet/child-care provider, a personal assistant, a chef/caterer, or an estate manager.</p>
                </div>
            </div>
            <div className='text-center pt-24 pb-8'>
            <Link to='/Contact' className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center border border-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'>Get Started</Link>
            </div>
        </div>
    )
}

export default BottomSeekers;