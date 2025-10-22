
import React from 'react';
import { NavLink } from 'react-router-dom';
import allPosts from "../allPosts.json"
import Footer from "../Footer";

const groupPostsByDate = (posts) => {
    // 1
    const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

    // 2
    const archive = {};

    sortedPosts.forEach(post => {
        // 
        const dateObj = new Date(post.date);
        const year = dateObj.getFullYear();
        // 
        const month = dateObj.toLocaleString('en-US', { month: 'long' }); 
        
        if (!archive[year]) {
            archive[year] = {};
        }
        if (!archive[year][month]) {
            archive[year][month] = [];
        }
        
        archive[year][month].push(post);
    });

    return archive;
};


const ArchivePage = () => {
    const archivedPosts = groupPostsByDate(allPosts);
    const years = Object.keys(archivedPosts).sort((a, b) => b - a); // 

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gray-500 py-20 mb-12">
                <div className="mx-auto max-w-7xl px-4 text-center">
                    <h1 className="text-6xl font-extrabold text-white mb-4">
                        Blog Archive
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        A chronological history of all our published articles and insights. Explore our past collections and guides.
                    </p>
                </div>
            </div>

            <section className='mx-auto max-w-7xl px-4 py-8'>
                
                {/* */}
                <div className="space-y-12">
                    {years.length === 0 ? (
                        <p className="text-center text-xl text-gray-600 py-10">
                            No posts found in the archive.
                        </p>
                    ) : (
                        years.map(year => (
                            <div key={year} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200">
                                
                                {/* Title*/}
                                <h2 className="text-4xl font-extrabold text-gray-900 border-b-4 border-rose-600 inline-block pb-1 mb-8">
                                    {year}
                                </h2>

                                {/* Months List*/}
                                <div className="space-y-6">
                                    {Object.keys(archivedPosts[year]).map(month => (
                                        <div key={month}>
                                            {/* Month Title*/}
                                            <h3 className="text-2xl font-bold text-gray-700 bg-gray-100 p-3 rounded-md mb-4 border-l-4 border-rose-400">
                                                {month}
                                            </h3>

                                            {/* list*/}
                                            <ul className="space-y-3 pl-4">
                                                {archivedPosts[year][month].map(post => (
                                                    <li key={post.id} className="border-b border-gray-100 pb-2 hover:bg-gray-50 transition duration-150 p-1 rounded-sm">
                                                        <NavLink 
                                                            to={`/blog/${post.id}`} 
                                                            className="flex justify-between items-center text-gray-800 hover:text-red-600 group"
                                                        >
                                                            <span className="text-lg font-medium group-hover:underline">
                                                                {post.title}
                                                            </span>
                                                            <span className="text-sm text-gray-500 min-w-max ml-4">
                                                                {/* Display The Date */}
                                                                {new Date(post.date).toLocaleDateString('en-US', { day: 'numeric' })} | {post.readingTime}
                                                            </span>
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    )}
                </div>
                
            </section>

            <Footer />
        </div>
    );
};

export default ArchivePage;