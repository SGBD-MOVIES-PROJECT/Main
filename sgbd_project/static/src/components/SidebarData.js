import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'TOP 10',
    path: '/top10',
    icon: <AiIcons.AiFillTrophy />,
    cName: 'nav-text'
  },
  {
    title: 'Popular',
    path: '/popular',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Help',
    path: '/help',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
];
