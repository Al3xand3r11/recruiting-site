const BottomSection = () => {
    return (
    <div className='bg-bottom-section w-full h-auto bg-cover bg-center'>
        <div className=" px-4 mx-auto max-w-screen-md  rounded-lg">
            <div className="p-4">
                <div>
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Whether you are a job seeker or an employer, start your relationship with T Minus Talent today</p>
                </div>
                <form action="#" className="space-y-8">
                    <div>
                        <label for="fname" className="block mb-2 text-sm font-medium text-white">First Name</label>
                        <input type="text" id="fname" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John" required/>
                    </div>
                    <div>
                        <label for="lname" className="block mb-2 text-sm font-medium text-white">Last Name</label>
                        <input type="text" id="lname" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Doe" required/>
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@tminus.com" required/>
                    </div>
                    <div>
                        <label for="business" className="block mb-2 text-sm font-medium text-white">About You</label>
                        <select id="business" name="business" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Select One" required>
                            <option value="seeker">Looking for your next opportunity</option>
                            <option value="employer">Looking for staffing services</option>
                            <option value="neither">Neither</option>
                        </select>
                    </div>
                    <div>
                        <label for="sector" className="block mb-2 text-sm font-medium text-white">Sector</label>
                        <select id="sector" name="sector" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
                            <option value="software">IT and Software</option>
                            <option value="corporate">Administrative and Corporate</option>
                            <option value="construction">Engineering and Construction</option>
                            <option value="personal">Personal Services</option>
                        </select>
                    </div>
                    <div className="sm:col-span-2">
                        <label for="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border">Send message</button>
                </form>
             </div>
        </div>
    </div>
    );
}

export default BottomSection;