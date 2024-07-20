// ["SidebarNavigation", "Component"]    


import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, FolderOpenIcon, UsersIcon, ChatBubbleLeftRightIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Data Room", href: "/data-room", icon: FolderOpenIcon },
  { name: "Users List", href: "/users-list", icon: UsersIcon },
  { name: "Data Chat", href: "/data-chat", icon: ChatBubbleLeftRightIcon },
  { name: "FAQ", href: "/faq", icon: QuestionMarkCircleIcon },
];

export default function SidebarNavigation_Component() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 h-screen w-1/5 fixed left-0 top-0 transition-all duration-300 ease-in-out lg:translate-x-0 overflow-y-auto"
         style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
      <div className="px-4 py-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">BlankSlateCanvas</h2>
        <ul>
          {navigation.map((item) => (
            <li key={item.name} className="mb-2">
              <Link
                to={item.href}
                className={`flex items-center p-2 rounded-lg transition-colors duration-150 ease-in-out
                  ${location.pathname === item.href
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                  }`}
              >
                <item.icon className="h-6 w-6 mr-3" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="lg:hidden fixed top-4 left-4 z-20 p-2 rounded-md bg-gray-200 text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>
    </nav>
  );
}