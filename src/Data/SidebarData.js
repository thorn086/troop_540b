import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/About',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Contacts',
    path: '/Contacts',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Gallery',
    path: '/Gallery',
    icon: <FaIcons.FaPhotoVideo />,
    cName: 'nav-text'
  },
  {
    title: 'Resources',
    path: '/Resources',
    icon: <IoIcons.IoIosSearch />,
    cName: 'nav-text'
  }
];