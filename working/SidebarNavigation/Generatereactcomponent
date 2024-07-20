// ["SidebarNavigation", "Component"]    


import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, ChartBarIcon, FolderOpenIcon, DocumentTextIcon, ExclamationTriangleIcon, UsersIcon, ChatBubbleLeftRightIcon, QuestionMarkCircleIcon, Cog6ToothIcon, BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Dashboard', href: '/dashboard', icon: ChartBarIcon },
  { name: 'Data Room', href: '/data-room', icon: FolderOpenIcon },
  { name: 'Document Status', href: '/document-status', icon: DocumentTextIcon },
  { name: 'Issue Tracker', href: '/issue-tracker', icon: ExclamationTriangleIcon },
  { name: 'Users List', href: '/users-list', icon: UsersIcon },
  { name: 'Data Chat', href: '/data-chat', icon: ChatBubbleLeftRightIcon },
  { name: 'FAQ', href: '/faq', icon: QuestionMarkCircleIcon },
];

export default function SidebarNavigation_Component() {
  const location = useLocation();

  return (
    <nav className="w-[250px] bg-white border-r h-screen fixed left-0 top-0 overflow-y-auto" aria-label="Main navigation">
      <div className="px-4 py-6">
        {/* User control icons */}
        <div className='flex justify-end mb-6 space-x-2'>
          <QuestionMarkCircleIcon className="h-6 w-6 text-gray-500" />
          <Cog6ToothIcon className="h-6 w-6 text-gray-500" />
          <BellIcon className="h-6 w-6 text-gray-500" />
          <UserCircleIcon className="h-6 w-6 text-gray-500" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">BlankSlateCanvas</h2>

        {/* Navigation menu */}
        <ul>
          {navigation.map((item) => (
            <li key={item.name} className="mb-2">
              <Link
                to={item.href}
                className={`flex items-center p-2 rounded-lg transition-colors duration-150 ease-in-out ${
                  location.pathname === item.href ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
                aria-current={location.pathname === item.href ? 'page' : undefined}
              >
                <item.icon className="h-6 w-6 mr-3" aria-hidden="true" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}