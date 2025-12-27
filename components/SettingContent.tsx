"use client";

import { User, Bell, Lock, Globe, Database, HelpCircle } from "lucide-react";

export function SettingContent() {
  return (
    <div className="flex-1 p-8 bg-[#F5F6FA] min-h-screen overflow-y-auto ml-64 mr-80">
      <h2 className="text-2xl font-bold mb-8">Settings</h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <User size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Profile Settings</h3>
            <p className="text-gray-500 text-sm">Update your personal information and profile picture.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-yellow-600">
                <Bell size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Notifications</h3>
            <p className="text-gray-500 text-sm">Manage your email and push notification preferences.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                <Lock size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Security</h3>
            <p className="text-gray-500 text-sm">Change your password and configure 2FA.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
                <Globe size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Language & Region</h3>
            <p className="text-gray-500 text-sm">Set your preferred language and time zone.</p>
        </div>

         <div className="bg-white p-6 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-600">
                <Database size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Data Management</h3>
            <p className="text-gray-500 text-sm">Export your data or manage storage settings.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-600">
                <HelpCircle size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Help & Support</h3>
            <p className="text-gray-500 text-sm">Get help with using the dashboard.</p>
        </div>
      </div>
    </div>
  );
}
