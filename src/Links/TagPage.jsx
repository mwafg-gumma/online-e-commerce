// src/pages/TagPage.jsx
import React, { useState, useMemo } from 'react';
// import { NavLink } from 'react-router-dom';
import allPosts from "../allPosts.json"
import PostCard from "../Links/PostCard"
import Footer from "../Footer"; 

// (Categories) 
const getTagsWithCount = (posts) => {
    const tagMap = {};
    posts.forEach(post => {
        const tag = post.category;
        tagMap[tag] = (tagMap[tag] || 0) + 1;
    });
    
    return Object.entries(tagMap).map(([name, count]) => ({ name, count }));
};

const TagPage = () => {
    const [activeTag, setActiveTag] = useState(null); 

    
    const availableTags = useMemo(() => getTagsWithCount(allPosts), []);

    
    const filteredPosts = useMemo(() => {
        if (!activeTag || activeTag === 'All') {
            return allPosts;
        }
        return allPosts.filter(post => post.category === activeTag);
    }, [activeTag]);

    // Hero Section 
    const TagHero = () => (
        <div className="bg-gray-900 py-20 mb-12">
            <div className="mx-auto max-w-7xl px-4 text-center">
                <h1 className="text-6xl font-extrabold text-white mb-4">
                    Explore By Topic
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Filter and discover posts that matter to you. Select a tag below to dive deep into a specific subject.
                </p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-white">
            <TagHero />

            <section className='mx-auto max-w-7xl px-4 py-8'>
                
                {/* */}
                <div className="mb-12 border-b border-gray-200 pb-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Available Tags ({availableTags.reduce((sum, tag) => sum + tag.count, 0)} Posts)
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        
                        {/* (All) */}
                        <button
                            onClick={() => setActiveTag('All')}
                            className={`px-5 py-2 text-base font-semibold rounded-full transition duration-200 shadow-md ${
                                (!activeTag || activeTag === 'All')
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            All ({allPosts.length})
                        </button>
                        
                        {/* */}
                        {availableTags.map((tag) => (
                            <button
                                key={tag.name}
                                onClick={() => setActiveTag(tag.name)}
                                className={`px-5 py-2 text-base font-semibold rounded-full transition duration-200 shadow-md ${
                                    activeTag === tag.name
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                {tag.name} <span className="ml-1 text-sm opacity-80">({tag.count})</span>
                            </button>
                        ))}
                    </div>
                </div>
                
                {/*  */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">
                        {activeTag || 'All'} Posts
                    </h2>
                    
                    {filteredPosts.length === 0 ? (
                        <p className="text-center text-xl text-gray-600 py-10">
                            Sorry, no posts found for the tag "{activeTag}".
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                            {filteredPosts.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>
                    )}
                </div>

            </section>

            <Footer />
        </div>
    );
};

export default TagPage;