import job from '../assets/job.jpeg'
import hiring from '../assets/hiring.jpeg'
import about from '../assets/about.jpeg'
import { Link } from 'react-router-dom'


const InfoSection = () => {
    return (
        <div className='bg-white w-full h-auto md:h-auto bg-cover bg-center '>
            <div className=" flex-row justify-around grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow ">
                    <a href="#">
                        <img className="rounded-t-lg" src={job} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Job Seekers</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 pb-6">
                        When it comes to seeking employment, everyone has a different journey. Here at TMinus Talent we want to make that journey simple. 
                        Assisting with landing a role within sectors such as Engineering and Construction or even connecting you with those looking for assistance 
                        on personal services such as child care and catering. TMinus will help you step into the next phase of your career
                        </p>
                        <Link to='/Seekers' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border-black rounded-lg hover:bg-teal focus:ring-4 focus:ring-blue bg-blue-700 ">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow ">
                    <a href="#">
                        <img className="rounded-t-lg" src={hiring} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Employers</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 pb-6">
                        Here at TMinus Talent, it is our goal to ensure that employers are connected with the right candidate in a quick and efficient matter. 
                        TMinus handles professions ranging from Administrative and Corporate work such as in Human relations, to IT & Software and much more. 
                        Whatever your hiring needs looks like. TMinus can accommodate to help you find the best candidate for the role
                        </p>
                        <Link to='/Employers' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border-black rounded-lg hover:bg-teal focus:ring-4 focus:ring-blue bg-blue-700 ">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow ">
                    <a href="#">
                        <img className="rounded-t-lg" src={about} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Mission</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Whether you’re an employer looking for staff or a job seeker waiting to take their next step, TMinus has the expertise, resources and connections to make the process seamless. 
                        We will go above and beyond to make sure that on both side of the isle, your needs are met. We have what it takes to conquer the ever changing technology field, realize the importance of administrative staffing,
                        and connect you with those personal service professionals as well

                        </p>
                        <Link to='/TMinus' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border-black rounded-lg hover:bg-teal focus:ring-4 focus:ring-blue bg-blue-700 ">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSection;