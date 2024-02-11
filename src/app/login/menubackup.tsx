"use client"

import { MdDashboard, MdManageAccounts, MdSettings, MdAnalytics } from 'react-icons/md';
import { IoMdPeople } from 'react-icons/io';
import { GrTransaction } from 'react-icons/gr';
import { RiShoppingCartLine, RiSettings3Line } from 'react-icons/ri';

import Link from 'next/link'
import { usePathname } from 'next/navigation';

const menu = [
  {
    title: 'Dashboard',
    icon: <MdDashboard />,
    href: '/admin/dashboard',
  },
  {
    title: 'Manage Accounts',
    icon: <MdManageAccounts />,
    href: '/admin/manage-accounts',
  },
  {
    title: 'Settings',
    icon: <MdSettings />,
    href: '/admin/settings',
  },
  {
    title: 'Analytics',
    icon: <MdAnalytics />,
    href: '/admin/analytics',
  },
  {
    title: 'Users',
    icon: <IoMdPeople />,
    href: '/admin/users',
  },
  {
    title: 'Transactions',
    icon: <GrTransaction />,
    href: '/admin/transactions',
  },
  {
    title: 'Shopping Cart',
    icon: <RiShoppingCartLine />,
    href: '/admin/shopping-cart',
  },
  {
    title: 'General Settings',
    icon: <RiSettings3Line />,
    href: '/admin/general-settings',
  },
];

const Sidebar = () => {
  const currentPath = usePathname();

  return (
    <div className="bg-gray-800 h-screen text-white p-4">
      {menu.map((item) => (
        <div key={item.title} className="mb-4">
          <Link href={item.href} className={`text-xl font-bold ${currentPath === item.href ? 'text-blue-500' : ''}`}>
              {item.icon} {item.title}
          </Link>
        </div>
      ))}
      
    </div>
    
  );
};

export default Sidebar;
