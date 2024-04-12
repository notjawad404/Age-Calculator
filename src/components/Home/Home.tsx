import React from 'react';
import { Link } from 'react-router-dom';

interface Project {
    id: number;
    name: string;
    link: string;
    route: string;
}

const Home: React.FC = () => {
    const projects: Project[] = [
        {
            id: 1,
            name: "Age Calculator",
            link: "https://github.com/notjawad404/Age-Calculator.git",
            route: '/AgeCalculator'
        },
        {
            id: 2,
            name: "Age Calculator",
            link: "https://github.com/notjawad404/Age-Calculator.git",
            route: '/AgeCalculator'
        },
        {
            id: 3,
            name: "Age Calculator",
            link: "https://github.com/notjawad404/Age-Calculator.git",
            route: '/AgeCalculator'
        },
        {
            id: 4,
            name: "Age Calculator",
            link: "https://github.com/notjawad404/Age-Calculator.git",
            route: '/AgeCalculator'
        },
    ];

    return (
        <div className="h-screen bg-gray-700 text-white">
            <h1 className='text-5xl font-bold text-center py-10'>All Projects</h1>
            <div className='mx-auto flex justify-center items-center'>
            <div className='flex flex-wrap w-full'>
            {projects.map((project) => (
                    <div key={project.id} className='p-4 w-1/3 text-black'>
                        <div className="px-5 bg-white shadow-2xl py-4">
                        
                       <div className='flex flex-col'>
                        <h1 className='text-2xl font-bold text-center'>{project.name}</h1>
                       <a className='text-blue-500 text-end py-4' href={project.link}>GitHub Link {">"}</a>
                       <Link className='bg-red-400 text-white px-5 py-2 text-xl rounded-xl flex justify-center items-center' to={project.route}><button>View</button></Link>
                        </div> 
                        </div>
                    </div>
                ))}
            </div>
            </div>
                

        </div>
    );
}

export default Home;
