import React from 'react'
import { FiYoutube, FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi';
const socialMediaLinks = [
    { icon: <FiFacebook size="16px" />, href: 'https://www.facebook.com/prasid.sharma.73/' },
    { icon: <FiLinkedin size="16px" />, href: 'https://www.linkedin.com/in' },
    { icon: <FiYoutube size="16px" />, href: 'https://www.youtube.com/' },
];
const SocialMediaLinks = () => {
    return (
        <div className="flex justify-center  items-center gap-4">
            {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.href} target='_blank' className="hover:cursor-pointe text-white">
                    {link.icon}
                </a>
            ))}
        </div>
    )
}

export default SocialMediaLinks