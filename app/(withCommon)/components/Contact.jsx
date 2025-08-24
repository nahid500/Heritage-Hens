"use client"

import { Mail, MapPinIcon, Phone } from "lucide-react";
import { toast } from "react-toastify";



export default function Contact() {
    return ( 
        <div id="contact" className="bg-gray-100 py-12">

            <h3 className=" text-2xl md:text-4xl font-bold text-center">Contact Us</h3>
            <div className="w-24 h-1 bg-amber-500 my-2 mx-auto"></div>
            <p className="max-w-3xl mx-4 text-gray-600 text-center md:mx-auto py-4 md:pb-8">Have questions about our chickens, ordering process, or need advice? We're here to help! Fill out the form below and we'll get back to you as soon as possible.</p>

            
            <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl md:mx-auto">
                <div className="text-white bg-[#d97706] py-6 px-6 mx-4 md:mx-0 rounded-t-lg md:rounded-none md:rounded-l-lg">
                    <h3 className="text-white text-xl font-bold">Get in Touch</h3>
                    <p className="pt-4">We'd love to hear from you! Whether you're a first-time chicken owner or an experienced farmer, we're here to provide guidance and help you find the perfect chickens for your needs.</p>
                    
                    <ul className=" ">  
                              <li className="flex pt-4 gap-2 items-center">
                                <Phone  className=""/>
                                <p>(555) 123-4567</p>
                              </li>
                              <li className="flex pt-4 gap-2 items-center">
                                <Mail className=""/>
                                <p>info@heritagehens.com</p>
                              </li>
                              <li className="flex pt-4 gap-2 items-center">
                                <MapPinIcon style={{ width: "32px", height: "32px" }} className="" />
                                <p>Heritage Farms, 123 Rural Route, Countryside, CA 98765</p>
                              </li>
                    </ul>
                
                </div>

                <div className=" mx-4 md:mx-0">
                    <form className="bg-white p-6 rounded-b-lg md:rounded-r-lg md:rounded-none shadow-md">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded" type="text" id="name" name="name" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded" type="email" id="email" name="email" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
                            <textarea className="w-full px-3 py-2 border border-gray-300 rounded" id="message" name="message" rows="5" required></textarea>
                        </div>
                    <button onClick={() => toast.success("Item added to cart!")}className="bg-[#d97706] text-white px-4 py-2 rounded hover:bg-orange-600" type="submit">Send Message</button>
                    </form>

                </div>
            </div>
            

        </div>  
    )

}