import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import { BsPaperclip } from "react-icons/bs";

const SocialLinks = () => {
  // Array for displaying socials
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/pavan-kumar-vipparla-86b30828a/',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/pkchoudary',
    },
    {
      id: 3,
      child: (
        <>
          E-Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'vipparlapavankumar2001@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsPaperclip size={30} />
        </>
      ),
      href: 'https://drive.google.com/file/d/1lfFhWMRhu1lta8D5AwUHcGUgnQ2zTEl4/view?usp=sharing',
      style: 'rounded-br-md',
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-black ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
