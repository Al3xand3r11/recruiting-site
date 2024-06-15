import job from '../assets/job.jpeg'
import hiring from '../assets/hiring.jpeg'
import about from '../assets/about.jpeg'
import { Link } from 'react-router-dom'


const InfoSection = () => {
    return (
        <div className='bg-white w-full h-screen bg-cover bg-center '>
            <div className="flex flex-row  justify-around">
                <div class="max-w-lg bg-white border border-gray-200 rounded-lg shadow ">
                    <a href="#">
                        <img class="rounded-t-lg" src={job} alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">Job Seekers</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi leo urna molestie at. 
                        Hendrerit gravida rutrum quisque non tellus orci. Vel elit scelerisque mauris pellentesque. Iaculis eu non diam phasellus vestibulum lorem sed risus 
                        ultricies. Id cursus metus aliquam eleifend mi. Massa placerat duis ultricies lacus sed turpis tincidunt id. Potenti nullam ac tortor vitae purus 
                        faucibus ornare suspendisse. Urna nunc id cursus metus aliquam eleifend mi in. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. 
                        Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Aenean sed adipiscing diam donec adipiscing.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi leo urna molestie at. 
                        Hendrerit gravida rutrum quisque non tellus orci. Vel elit scelerisque mauris pellentesque. Iaculis eu non diam phasellus vestibulum lorem sed risus 
                        ultricies. Id cursus metus aliquam eleifend mi. Massa placerat duis ultricies lacus sed turpis tincidunt id. Potenti nullam ac tortor vitae purus 
                        faucibus ornare suspendisse. Urna nunc id cursus metus aliquam eleifend mi in. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. 
                        Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Aenean sed adipiscing diam donec adipiscing.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi leo urna molestie at. 
                        Hendrerit gravida rutrum quisque non tellus orci. Vel elit scelerisque mauris pellentesque. Iaculis eu non diam phasellus vestibulum lorem sed risus 
                        ultricies. Id cursus metus aliquam eleifend mi. Massa placerat duis ultricies lacus sed turpis tincidunt id. Potenti nullam ac tortor vitae purus 
                        faucibus ornare suspendisse. Urna nunc id cursus metus aliquam eleifend mi in. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. 
                        Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Aenean sed adipiscing diam donec adipiscing.
                        </p>
                        <Link to='/Seekers' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border-black rounded-lg hover:bg-teal focus:ring-4 focus:ring-blue bg-blue-700 ">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div class="max-w-lg bg-white border border-gray-200 rounded-lg shadow ">
                    <a href="#">
                        <img class="rounded-t-lg" src={hiring} alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">Employers</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi leo urna molestie at. 
                        Hendrerit gravida rutrum quisque non tellus orci. Vel elit scelerisque mauris pellentesque. Iaculis eu non diam phasellus vestibulum lorem sed risus 
                        ultricies. Id cursus metus aliquam eleifend mi. Massa placerat duis ultricies lacus sed turpis tincidunt id. Potenti nullam ac tortor vitae purus 
                        faucibus ornare suspendisse. Urna nunc id cursus metus aliquam eleifend mi in. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. 
                        Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Aenean sed adipiscing diam donec adipiscing.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi leo urna molestie at. 
                        Hendrerit gravida rutrum quisque non tellus orci. Vel elit scelerisque mauris pellentesque. Iaculis eu non diam phasellus vestibulum lorem sed risus 
                        ultricies. Id cursus metus aliquam eleifend mi. Massa placerat duis ultricies lacus sed turpis tincidunt id. Potenti nullam ac tortor vitae purus 
                        faucibus ornare suspendisse. Urna nunc id cursus metus aliquam eleifend mi in. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. 
                        Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Aenean sed adipiscing diam donec adipiscing.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi leo urna molestie at. 
                        Hendrerit gravida rutrum quisque non tellus orci. Vel elit scelerisque mauris pellentesque. Iaculis eu non diam phasellus vestibulum lorem sed risus 
                        ultricies. Id cursus metus aliquam eleifend mi. Massa placerat duis ultricies lacus sed turpis tincidunt id. Potenti nullam ac tortor vitae purus 
                        faucibus ornare suspendisse. Urna nunc id cursus metus aliquam eleifend mi in. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. 
                        Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Aenean sed adipiscing diam donec adipiscing.
                        </p>
                        <Link to='/Employers' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border-black rounded-lg hover:bg-teal focus:ring-4 focus:ring-blue bg-blue-700 ">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div class="max-w-lg bg-white border border-gray-200 rounded-lg shadow ">
                    <a href="#">
                        <img class="rounded-t-lg" src={about} alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">Mission</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi leo urna molestie at. 
                        Hendrerit gravida rutrum quisque non tellus orci. Vel elit scelerisque mauris pellentesque. Iaculis eu non diam phasellus vestibulum lorem sed risus 
                        ultricies. Id cursus metus aliquam eleifend mi. Massa placerat duis ultricies lacus sed turpis tincidunt id. Potenti nullam ac tortor vitae purus 
                        faucibus ornare suspendisse. Urna nunc id cursus metus aliquam eleifend mi in. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. 
                        Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Aenean sed adipiscing diam donec adipiscing.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi leo urna molestie at. 
                        Hendrerit gravida rutrum quisque non tellus orci. Vel elit scelerisque mauris pellentesque. Iaculis eu non diam phasellus vestibulum lorem sed risus 
                        ultricies. Id cursus metus aliquam eleifend mi. Massa placerat duis ultricies lacus sed turpis tincidunt id. Potenti nullam ac tortor vitae purus 
                        faucibus ornare suspendisse. Urna nunc id cursus metus aliquam eleifend mi in. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. 
                        Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Aenean sed adipiscing diam donec adipiscing.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi leo urna molestie at. 
                        Hendrerit gravida rutrum quisque non tellus orci. Vel elit scelerisque mauris pellentesque. Iaculis eu non diam phasellus vestibulum lorem sed risus 
                        ultricies. Id cursus metus aliquam eleifend mi. Massa placerat duis ultricies lacus sed turpis tincidunt id. Potenti nullam ac tortor vitae purus 
                        faucibus ornare suspendisse. Urna nunc id cursus metus aliquam eleifend mi in. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. 
                        Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Aenean sed adipiscing diam donec adipiscing.
                        </p>
                        <Link to='/TMinus' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border-black rounded-lg hover:bg-teal focus:ring-4 focus:ring-blue bg-blue-700 ">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
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