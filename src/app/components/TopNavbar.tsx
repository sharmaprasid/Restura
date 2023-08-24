import React from 'react';
import { PiPhoneDisconnect } from 'react-icons/pi';
import { AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import SocialMediaLinks from './SocialMediaLinks';




const TopNavbar = () => {
    return (
        <nav className="bg-[#C59D5F] flex   justify-center  gap-56 text-sm py-1.5">
            {/* Contact */}
            <div className="flex justify-center items-center gap-4 pr-9 text-white">
                <div className="flex justify-center items-center gap-2">
                    <CiLocationOn size="16px" />
                    <p>Location & Updated Hours</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <PiPhoneDisconnect size="16px" />
                    <p>+9779861691967</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <AiOutlineMail size="16px" />
                    <p>restura@gmail.com</p>
                </div>
            </div>
            {/* Social media Handles */}
            <div className='md:flex flex-col'>
                <SocialMediaLinks />
            </div>


        </nav>
    );
};

export default TopNavbar;
