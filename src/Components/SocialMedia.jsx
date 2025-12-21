import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareInstagram, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const SocialMedia = () => {
    return (
        <div className='flex gap-4 md:gap-5 items-center md:justify-start justify-center'>
            <div className='p-2 border border-gray-300 text-gray-300 hover:text-white  rounded-full hover:animate-pulse  hover:bg-cyan-500 hover:border-cyan-500 '>
                <Link to="https://github.com/junayed-khan24"><FaGithub size={24}></FaGithub></Link>
            </div>
            <div className='p-2 border border-gray-300 text-gray-300 hover:text-white  rounded-full hover:animate-pulse   hover:border-cyan-500 hover:bg-cyan-500'>
                <Link to="/"><FaLinkedin size={24}></FaLinkedin></Link>
            </div>
            <div className='p-2 border border-gray-300 text-gray-300 hover:text-white rounded-full hover:animate-pulse  hover:bg-cyan-500 hover:border-cyan-500'>
                <FaXTwitter size={24}></FaXTwitter>
            </div>
            <div className='p-2 border border-gray-300  text-gray-300 hover:text-white rounded-full hover:animate-pulse  hover:bg-cyan-500 hover:border-cyan-500'>
                <FaSquareInstagram size={24}></FaSquareInstagram>
            </div>
            <div className='p-2 border border-gray-300 text-gray-300 hover:text-white  hover:bg-cyan-500 hover:border-cyan-500 rounded-full '>
                <Link to="https://www.facebook.com/md.junayed.khan.162210"><FaFacebook size={24} ></FaFacebook></Link>
            </div>
        </div>
    );
};

export default SocialMedia;