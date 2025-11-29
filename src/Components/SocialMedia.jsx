import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SocialMedia = () => {
    return (
        <div className='flex gap-4 md:gap-5 items-center md:justify-start justify-center'>
            <div className='p-2 border border-gray-600 bg-black  rounded-full hover:animate-pulse'>
                <FaGithub className='text-gray-600' size={24}></FaGithub>
            </div>
            <div className='p-2 border border-gray-600 bg-black  rounded-full hover:animate-pulse'>
                <FaLinkedin size={24} className='text-gray-600'></FaLinkedin>
            </div>
            <div className='p-2 border border-gray-600 bg-black  rounded-full hover:animate-pulse'>
                <FaXTwitter className='text-gray-600' size={24}></FaXTwitter>
            </div>
            <div className='p-2 border border-gray-600 bg-black  rounded-full hover:animate-pulse'>
                <FaInstagram className='text-gray-600' size={24}></FaInstagram>
            </div>
            <div className='p-2 border border-gray-600 bg-black  rounded-full hover:animate-pulse'>
                <FaFacebook size={24} className='text-gray-600'></FaFacebook>
            </div>
        </div>
    );
};

export default SocialMedia;