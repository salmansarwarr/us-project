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
                <div className="mb-8 rounded-lg bg-gray-200 h-[40%] shadow-md p-4">
                    <h1 className="text-2xl font-bold mb-4">
                        Existing Projects
                    </h1>
                    {projects.length === 0 ? (
                        <p className="text-red-600 w-full text-center mt-20">No Existing Projects!</p>
                    ) : (
                        <ul>
                            {projects.map((project, i) => (
                                <li
                                    key={i}
                                    className="mb-2 hover:bg-gray-300 p-2 rounded"
                                >
                                    <Link to={`/project/${project}`}>
                                        {project}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Create new project */}
                <div className="flex justify-center items-center h-60 bg-blue-400 rounded-lg">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-2xl font-bold mb-4 text-white">
                            Create New Project
                        </h1>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center gap-2">
                            <AiOutlinePlus /> Add Project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
