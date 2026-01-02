import React from 'react';
import { BlogPost } from '../types';
import BlogPostItem from './BlogPostItem';
import { motion } from 'framer-motion';

interface FeedProps {
  posts: BlogPost[];
  onPostClick: (id: string) => void;
}

const Feed: React.FC<FeedProps> = ({ posts, onPostClick }) => {
  return (
    <div className="w-full max-w-2xl mx-auto pt-24 pb-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col">
          {posts.map((post) => (
            <BlogPostItem 
              key={post.id} 
              post={post} 
              onClick={() => onPostClick(post.id)}
            />
          ))}
        </div>
        
        {/* Pagination / End of content */}
        <div className="mt-16 text-center">
          <button className="px-6 py-2 border border-gray-200 rounded-full text-sm font-sans text-gray-500 hover:border-black hover:text-black transition-all">
            Load More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Feed;