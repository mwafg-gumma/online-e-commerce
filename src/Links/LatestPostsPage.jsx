// src/pages/LatestPostsPage.jsx
import React from 'react';
import allPosts from "../allPosts.json"
import PostCard from "../Links/PostCard"
import Footer from "../Footer"; // استخدم الـ Footer الجديد

// ممكن تستخدم useMemo أو useState عشان تتحكم في الفلترات لو عايز
const categories = ["All", "Fashion Tips", "Style Guide", "Sustainability", "Men's Style"];

const LatestPostsPage = () => {
    // نفترض إنك عاوز تعرض كل المقالات في الصفحة دي
    const latestPosts = allPosts; 

    // Hero Section للتدوينات
    const BlogHero = () => (
        <div className="bg-gray-100 py-20 mb-12">
            <div className="mx-auto max-w-7xl px-4 text-center">
                <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
                    Our Latest Stories
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Stay updated with the newest trends, style guides, and sustainable insights from the SHOW team.
                </p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-white">
            <BlogHero />

            <section className='mx-auto max-w-7xl px-4 py-8'>
                
                {/* 1. الفلترات والأقسام */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Explore Topics</h2>
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                // هنا ممكن تضيف منطق لتفعيل الفلتر (onClick)
                                className={`px-4 py-2 text-sm font-medium rounded-full transition duration-200 ${
                                    category === "All" // نفترض أن "All" هو الفلتر النشط مبدئياً
                                        ? "bg-gray-900 text-white shadow-md"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 2. عرض المقالات في شبكة */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                    {latestPosts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>

                {/* 3. زر المزيد أو ترقيم الصفحات */}
                <div className="text-center mt-16">
                    <button className="px-8 py-3 border border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition duration-300">
                        Load More Posts
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LatestPostsPage;