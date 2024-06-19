import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg'

const Footer = () => {
    return(
        <footer class=" shadow ">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={Logo} width={30} height={30} className='pr-2'/>
                        <span class="self-center text-2xl font-semibold whitespace-nowrap ">T-Minus</span>
                    </Link>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to="/TMinus" class="hover:underline me-4 md:me-6">Mission</Link>
                        </li>
                        <li>
                            <Link to="/Contact" class="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            </div>
        </footer>


    )
}

export default Footer;