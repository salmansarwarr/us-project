import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const projects = [];

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-1/5 p-4 bg-gray-800 text-white">
                <ul>
                    <li className="mb-2 border-b border-gray-700 hover:bg-gray-700 px-2 py-1">
                        Home
                    </li>
                    <li className="mb-2 border-b border-gray-700 hover:bg-gray-700 px-2 py-1">
                        Item 2
                    </li>
                    <li className="mb-2 border-b border-gray-700 hover:bg-gray-700 px-2 py-1">
                        Item 3
                    </li>
                    <li className="mb-2 border-b border-gray-700 hover:bg-gray-700 px-2 py-1">
                        Item 4
                    </li>
                    <li className="border-b border-gray-700 hover:bg-gray-700 px-2 py-1">
                        Item 5
                    </li>
                </ul>
            </aside>

            {/* Main Content */}
            <div className="w-4/5 p-4">
                {/* Existing Projects */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold mb-4">
                        Existing Projects
                    </h1>
                    {projects.length == 0 ? (
                        <p className="text-red-600">No Existing Projects!</p>
                    ) : (
                        <ul>
                            {projects.map((project, i) => (
                                <li key={i} className="mb-2 hover:bg-gray-200">
                                    <Link to={`/project/${project}`}>
                                        {project}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Create new project */}
                <div>
                    <h1 className="text-2xl font-bold mb-4">
                        Create New Project
                    </h1>
                    <button className="bg-green-500 flex items-center gap-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        <AiOutlinePlus /> Add Project
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
