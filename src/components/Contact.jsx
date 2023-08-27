import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full pt-96 bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
          <div>
            <div className="w-full grid grid-cols-4 lg:grid-cols-3 gap-8 py-8 px-12 sm:px-8">
              <FaWhatsapp size={30} />
              :0766216791
            </div>
          </div>
        </div>
      </div>

      {/* <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/bb09f93a-4261-415a-a76f-caef12a91a47" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="text" name='email' placeholder='Enter your email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name="message" placeholder='Enter your message' rows="10" className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 
                    my-8 mx-auto flex item-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                </form>
            </div> */}
    </div>
  );
};

export default Contact;
