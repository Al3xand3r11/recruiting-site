import React, {useRef} from "react";
import emailjs from "@emailjs/browser"
import { useState } from "react";

const BottomSection = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [sector, setSector] = useState()
    const [business, setBusiness] = useState()
    const [message, setMessage] = useState('')

    const form = useRef();

    

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceID = 'service_pma3dql'
        const templateID = 'template_e8b1k5m'
        const publicKey = '7rv-9u7Zg-84Mkoh-'

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Terra',
            business: business,
            sector: sector,
            message: message,
        }

        emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then((response) => {
            console.log('Email sent successfully', response)
            setName('');
            setEmail('');
            setSector('');
            setBusiness('');
            setMessage('');
        }).catch((error) => {
            console.error('Error sending email', error);
        });
    }


    return (
    <div className='bg-bottom-section w-full h-auto bg-cover bg-center'>
        <div className=" px-4 mx-auto max-w-screen-md  rounded-lg">
            <div className="p-4">
                <div>
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Whether you are a job seeker or an employer, start your relationship with T Minus Talent today</p>
                </div>
                <form ref={form} onSubmit={sendEmail} className="space-y-8">
                    <div>
                        <label htmlFor="fname" className="block mb-2 text-sm font-medium text-white">Name</label>
                        <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            type="text" 
                            name="user_name"
                            id="fname" 
                            placeholder="John Smith" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                        <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            type="email" 
                            name="user_email" 
                            id="email"  
                            placeholder="name@tminus.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                    </div>
                    <div>
                        <label htmlFor="business" className="block mb-2 text-sm font-medium text-white">About You</label>
                        <select className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            id="business" 
                            name="business"  
                            placeholder="Select One"
                            value={business}
                            onChange={(e) => setBusiness(e.target.value)}
                            required>
                            <option value="" selected="selected" hidden="hidden">Choose here</option>
                            <option value="seeker">Looking for your next opportunity</option>
                            <option value="employer">Looking for staffing services</option>
                            <option value="neither">Neither</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="sector" className="block mb-2 text-sm font-medium text-white">Sector</label>
                        <select className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            id="sector" 
                            name="sector"
                            value={sector}
                            onChange={(e) => setSector(e.target.value)} 
                            >
                            <option value="" selected="selected" hidden="hidden">Choose here</option>
                            <option value="software">IT and Software</option>
                            <option value="corporate">Administrative and Corporate</option>
                            <option value="construction">Engineering and Construction</option>
                            <option value="personal">Personal Services</option>
                        </select>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
                        <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            id="message" 
                            name="message" 
                            rows="6" 
                            placeholder="Leave a comment..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} 
                            > 
                            </textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border">Send message</button>
                </form>
             </div>
        </div>
    </div>
    );
}

export default BottomSection;