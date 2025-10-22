// src/components/PostCard.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const PostCard = ({ post }) => {
    return (
        <article className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
            {/* Image Section */}
            <NavLink to={`/blog/${post.id}`}>
                <div className="relative aspectvideo overflow-hidden">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"   
                    />
                    {/* Category Tag */}
                    <span className="absolute top-3 left-3 bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full opacity-90">
                        {post.category}
                    </span>
                </div>
            </NavLink>

            {/* Content Section */}
            <div className="p-6">
                <div className="text-sm text-gray-500 flex justify-between items-center mb-3">
                    <span>{post.date}</span>
                    <span>{post.readingTime}</span>
                </div>

                <NavLink to={`/blog/${post.id}`} className="block">
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-gray-600 transition duration-300 line-clamp-2 mb-2">
                        {post.title}
                    </h2>
                </NavLink>

                <p className="text-gray-600 text-base line-clamp-3 mb-4">
                    {post.excerpt}
                </p>

                {/* Author and Read More */}
                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <span className="text-sm font-medium text-gray-700">
                        By: {post.author}
                    </span>
                    <NavLink to={`/blog/${post.id}`} className="text-rose-500 font-semibold text-sm hover:text-rose-700 transition duration-200">
                        Read More →
                    </NavLink>
                </div>
            </div>
        </article>
    );
};

export default PostCard;