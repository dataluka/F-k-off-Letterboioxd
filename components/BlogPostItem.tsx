import React from 'react';
import { BlogPost } from '../types';

interface BlogPostItemProps {
  post: BlogPost;
  onClick: () => void;
}

const BlogPostItem: React.FC<BlogPostItemProps> = ({ post, onClick }) => {
  return (
    <article 
      onClick={onClick}
      className="group cursor-pointer py-10 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors px-4 -mx-4 rounded-lg"
    >
      <div className="flex flex-col gap-2 mb-2">
        <div className="flex items-center gap-3 text-xs font-sans text-gray-400 uppercase tracking-wider">
          <span>{post.date}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span>{post.category}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-ink group-hover:text-gray-700 transition-colors leading-tight">
          {post.title}
        </h2>
      </div>
      
      <p className="text-base md:text-lg text-gray-600 font-serif leading-relaxed line-clamp-3 mb-3">
        {post.excerpt}
      </p>
      
      <div className="flex items-center text-xs font-sans font-medium text-gray-400 group-hover:text-black transition-colors">
        Read more <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
      </div>
    </article>
  );
};

export default BlogPostItem;