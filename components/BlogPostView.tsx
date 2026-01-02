import React from 'react';
import { BlogPost } from '../types';
import { ArrowLeft, Twitter, Linkedin, Mail, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
}

const BlogPostView: React.FC<BlogPostViewProps> = ({ post, onBack }) => {
  // Enhanced typography styles for content
  const fullContent = post.content || (
    <div className="font-serif text-lg md:text-xl text-gray-800 leading-[1.8] md:leading-[1.9]">
      <p className="mb-8 first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-4 first-letter:mt-[-6px] first-letter:text-black">
        Cinema is not merely a sequence of moving images; it is a temporal architecture. 
        When we discuss the framework of this particular piece, we must consider the negative space—the silence between the dialogue, the stillness between the action. 
        It is in these voids that the true narrative breathes.
      </p>
      <p className="mb-8">
        Consider the lighting in the third act. It eschews the typical three-point setup for something far more naturalistic, almost hostile in its refusal to beautify the subject. 
        This is not an accident. It is a declaration of intent. The director is forcing us to look not at the performance, but at the reality it simulates.
      </p>
      <blockquote className="border-l-4 border-black pl-8 py-4 my-12 text-2xl md:text-3xl italic text-black bg-gray-50 rounded-r-lg">
        "To capture the truth, one must first dismantle the expectation of entertainment."
      </blockquote>
      <p className="mb-8">
        In conclusion, what we are witnessing here is a dismantling of the traditional hero's journey. 
        There is no return with the elixir, only a deeper descent into the ambiguity of the human condition. 
        It is uncomfortable, it is grainy, and it is utterly essential viewing.
      </p>
      <p className="mb-8">
        We leave the theater not with answers, but with a heavier set of questions. The screen goes dark, but the afterimage remains burned into our retinas—a ghost of the story that refuses to be exorcised by the lights of the lobby.
      </p>
    </div>
  );

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Reading "${post.title}" on F**k Off Letterboxd`;

  const shareLinks = [
    {
      name: 'Twitter',
      icon: <Twitter size={18} />,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:text-[#1DA1F2]'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={18} />,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`,
      color: 'hover:text-[#0077b5]'
    },
    {
      name: 'Email',
      icon: <Mail size={18} />,
      url: `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(shareText + "\n\n" + shareUrl)}`,
      color: 'hover:text-gray-900'
    }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto pt-28 pb-24 px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="group flex items-center text-sm font-sans font-medium text-gray-400 hover:text-black transition-colors mb-12 tracking-wide"
        >
          <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
          BACK TO ARCHIVE
        </button>

        {/* Header */}
        <header className="mb-14">
          <div className="flex flex-wrap items-center gap-3 text-xs font-sans font-semibold text-gray-400 uppercase tracking-widest mb-6">
            <span>{post.date}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span className="text-black">{post.category}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ink leading-[1.1] mb-8 tracking-tight">
            {post.title}
          </h1>
          <div className="h-1 w-24 bg-black" />
        </header>

        {/* Content */}
        <article className="mb-20">
          {fullContent}
        </article>

        {/* Footer / Sharing */}
        <footer className="border-t border-gray-200 pt-10 mt-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-sm font-sans font-medium text-gray-500 uppercase tracking-wider">
              <Share2 size={16} />
              <span>Share this article</span>
            </div>
            
            <div className="flex items-center gap-3">
              {shareLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-500 bg-white transition-all hover:border-gray-900 hover:bg-gray-900 hover:text-white ${link.color} hover:!text-white`}
                  aria-label={`Share on ${link.name}`}
                  title={`Share on ${link.name}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default BlogPostView;