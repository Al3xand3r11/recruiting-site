import Tool from '../../../assets/tool.svg'
import Software from '../../../assets/software.svg'
import Personal from '../../../assets/personal.svg'
import PaperClip from '../../../assets/paperclip.svg'
import { Link } from 'react-router-dom'

const EmpBottomSection = () => {
    return (
        <div className="h-lg bg-white w-full content-center ">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl text-center">Sectors</h1>
            <div className="grid grid-cols-4 gap-4 justify-between pl-10 pr-10 pt-16">
                <div>
                    <img className='mx-auto pb-8' src={Software} width={50} height={50} />
                    <h2 className='text-center font-extrabold'>IT and Software</h2>
                    <p className='text-center'>Using our highly strategic approach to the ever-changing technology field, 
                        we aim to produce the most talented and skilled candidates for your review.</p>
                </div>
                <div>
                    <img className='mx-auto pb-8' src={Tool} width={50} height={50}/>
                    <h2 className='text-center font-extrabold'>Engineering and Construction</h2>
                    <p className='text-center'>We understand that hiring a skilled engineering partner and crew gives a company the opportunity to cultivate solutions 
                        to complex problems and produce innovative solutions that improve quality of the business and brand</p>
                </div>
                <div>
                    <img className='mx-auto pb-8' src={PaperClip} width={50} height={50}/>
                    <h2 className='font-extrabold text-center'>Administrative and Corporate</h2>
                    <p className='text-center'>We take pride in sourcing the best administrative staff as we know how important these roles are to an organization. 
                        It is our purpose to find the most efficient and professional candidates to fill your organization’s needs.</p>
                </div>
                <div>
                    <img className='mx-auto pb-8' src={Personal} width={50} height={50}/>
                    <h2 className='text-center font-extrabold'>Personal Services</h2>
                    <p className='text-center'>We can easily assist with finding the best personal service professionals with the utmost confidentiality and expertise</p>
                </div>
            </div>
            <div className='text-center pt-24'>
            <Link to='/Contact' className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center border border-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'>Get Started</Link>
            </div>
        </div>
    )
}

export default EmpBottomSection;