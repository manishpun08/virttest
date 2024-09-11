"use client";
import React, { useState } from "react";
import SearchFilter from "./SearchFilter";
import UserLists from "./UserLists";
import LoginPage from "./LoginPage";

interface Tab {
  id: number;
  name: string;
  content: React.ReactNode;
}

const tabs: Tab[] = [
  { id: 1, name: "Task 1", content: <SearchFilter /> },
  { id: 2, name: "Task 2", content: <UserLists /> },
  { id: 3, name: "Task 4", content: <LoginPage /> },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<number>(tabs[0].id);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return <SearchFilter />;
      case 2:
        return <UserLists />;
      case 3:
        return <LoginPage />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full p-6">
      <div className="border-b border-gray-200 mb-4">
        <ul className="flex space-x-4">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`cursor-pointer mb-2 py-2 px-4 text-center font-bold rounded-lg ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              aria-selected={activeTab === tab.id}
              role="tab"
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4">{renderTabContent()}</div>
    </div>
  );
}
