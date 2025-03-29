import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6';
import USAImage from '../../image/USA.png';
import IndiaImage from '../../image/india.png';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, link: 'https://www.facebook.com/cssoftsolutionsindiaprivateltd' },
    { icon: <FaLinkedinIn />, link: '#' },
    { icon: <FaXTwitter />, link: '#' },
    { icon: <FaInstagram />, link: '#' },
    { icon: <FaYoutube />, link: '#' }
  ];

  const sections = [
    {
      title: 'Quick Links',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Blog', href: '/blog' },
        { text: 'Careers', href: '/careers' },
        { text: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Legal & Compliance',
      links: [
        { text: 'Privacy Policy', href: '/privacy' },
        { text: 'Terms & Conditions', href: '/terms' },
        { text: 'Cookie Policy', href: '/cookie' },
        { text: 'Disclaimer', href: '/disclaimer' }
      ]
    }
  ];

  const offices = [
    {
      country: 'INDIA', flag: IndiaImage, address: 'E - 300 Phase 8A, Industrial area, Sector 75, Sahibzada Ajit Singh Nagar, Punjab 160055'
    },
    {
      country: 'USA', flag: USAImage, address: '11705 Airport Way, Suite 303, Broomfield, CO 80021, USA: +1 347 281 7901'
    }
  ];

  return (
    <footer className="bg-gray-50 pt-8 text-gray-700 text-sm">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map((section, index) => (
          <div key={index}>
            <div className="font-bold text-gray-800 mb-3 text-2xl">{section.title}</div>
            <ul className="space-y-2 text-lg">
              {section.links.map((link, i) => (
                <li key={i}><a href={link.href} className="hover:text-indigo-600">{link.text}</a></li>
              ))}
            </ul>
          </div>
        ))}
        {offices.map((office, index) => (
          <div key={index}>
            <div className="font-bold text-gray-800 mb-3 text-2xl">{index === 0 ? 'Headquarters' : 'Our Corporate Offices'}</div>
            <div className="flex items-center mb-1  text-lg">
              <span className="mr-2"><img src={office.flag} alt="flag image"/></span>
              <span className="font-semibold">{office.country}</span>
            </div>
            <address className="not-italic text-gray-600  text-lg">{office.address}</address>
          </div>
        ))}
      </div>

      <div className="flex space-x-3 mb-3 max-w-6xl mx-auto">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-xl text-white rounded-full w-10 h-10 flex items-center justify-center ml-3 my-4">
              {social.icon}
            </a>
          ))}
        </div>
      <div className="bg-indigo-600  text-center px-4 mt-6 py-4 border-t border-gray-200  text-white">
        © {new Date().getFullYear()} C.S. Soft Solutions (I) Pvt. Ltd.
      </div>
    </footer>
  );
};

export default Footer;
