import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
import  Logo from '../assets/CompanyLogo.png'

const HeroSection = () => {
    return (
        <div className='bg-hero-image w-full h-screen bg-cover bg-center content-center'>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 pt-128">
                <div className='flex justify-center items-center'>
                <img src={Logo}/>
                </div>
                <p className="mb-8 text-lg font-large font-bold lg:text-xl sm:px-16 xl:px-48 ">Partner With an Agency that Understands Your Needs</p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Link to='/Seekers' className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center border border-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Job Seekers
                        <div className='pl-2'>
                        <FaArrowRight/>
                        </div> 
                    </Link>
                    <Link to="/Employers" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center border border-black rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Employers
                        <div className='pl-2'>
                        <FaArrowRight/>
                        </div> 
                    </Link>  
                </div>
            </div>
        </div>
    )
}

export default HeroSection;