import corporate from '../assets/corporate.png'
import software from '../assets/software.png'
import personal from '../assets/personal.png'
import construction from '../assets/construction.png'
import { Link } from 'react-router-dom'

const SecondSection = () => {
    return (
        <div className='bg-white w-full h-auto bg-cover bg-center '>
            <div classname='flex flex-col text-center mx-auto max-w-screen-xl'>
            <h1 className='text-4xl font-extrabold place-self-center lg:text-6xl text-center'>
                Services
            </h1>
            </div>
             <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Administrative and Corporate</h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">We have years of experience in recruiting and sourcing for large and small organizations looking to fill Human Resources, Legal, Finance and Business Operations roles.</p>
                    <Link to='/Contact' class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Contact Us
                    </Link> 
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img className='' src={corporate} alt="mockup"/>
                </div>                
            </div>
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={software} alt="mockup"/>
                </div>
                <div class="ml-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">IT and Software</h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl "> Whether it’s Software Engineers and Specialists, Data and SQL Analysts, IT Support Technicians, Help Desk Associates, Hardware Installers and Specialists, we know that having the right talent in IT can make all the difference in accomplishing your business goals.</p>
                    <Link to='/Contact' class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Contact Us
                    </Link> 
                </div>                
            </div>
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Engineering and Construction</h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Our team is experienced in finding talented Commissioning Engineers, Construction Engineers, Project Engineers and Executive Level Engineers that would be pivotal to the progress and development of your company and brand.</p>
                    <Link to='/Contact' class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Contact Us
                    </Link> 
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img className='' src={construction} alt="mockup"/>
                </div>                
            </div>
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={personal} alt="mockup"/>
                </div>
                <div class="ml-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Personal Services</h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Aside from being able to provide exceptional staffing for major industries and fields, we can also assist if you are in need of a pet/child-care provider, a personal assistant, a chef/caterer, an estate manager, we can easily assist with finding the best personal service professionals with the utmost confidentiality and expertise.</p>
                    <Link to='/Contact' class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Contact Us
                    </Link> 
                </div>                
            </div>
        </div>
    )
}

    export default SecondSection;