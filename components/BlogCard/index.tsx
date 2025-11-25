

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import { ScribbleLine, StarDoodle } from '../shared/Decorations';
import { BLOG_POSTS } from '../../constants';
import { ArrowRight, BookOpen } from 'lucide-react';

interface BlogCardProps {
  onPostClick?: (id: number) => void;
}

const BlogPostItem = ({ post, isFeatured, onClick }: { post: any, isFeatured: boolean, onClick: () => void }) => {
  return (
    <div className={`group ${isFeatured ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''}`}>
       
       {/* The "Paper" visual for the post */}
       <div 
         className="relative bg-[#FFFCF5] shadow-lg transition-all duration-300 border border-brand-purple/10 flex flex-col h-full hover:-translate-y-2 hover:shadow-xl cursor-pointer"
         onClick={onClick}
       >
          
          {/* Washi Tape Effect */}
          <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 opacity-80 z-20 ${post.color === 'brand-pink' ? 'bg-brand-pink/40' : post.color === 'brand-orange' ? 'bg-brand-orange/40' : 'bg-brand-purple/40'} rotate-1`}></div>

          {/* Post Image - Like a polaroid attached */}
          <div className="w-full h-48 md:h-56 overflow-hidden relative border-b-2 border-dashed border-brand-purple/10">
             <img 
               src={post.image} 
               alt={post.title} 
               className="w-full h-full object-cover sepia-[.15] group-hover:scale-105 group-hover:sepia-0 transition-all duration-700"
             />
             <div className="absolute inset-0 bg-brand-cream/10"></div>
          </div>

          <div className="p-8 flex flex-col h-full relative overflow-hidden">
             
             {/* Background doodles */}
             <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
                <StarDoodle className={`w-full h-full text-${post.color}`} />
             </div>

             {/* Header */}
             <div className="flex justify-between items-start mb-6 pb-2">
                <div>
                  <span className={`inline-block text-[10px] font-bold tracking-[0.2em] uppercase mb-1 text-${post.color}`}>
                     {post.category}
                  </span>
                  <div className="font-sketch text-4xl text-brand-dark leading-none">
                     {post.date}
                  </div>
                </div>
                <BookOpen className={`w-6 h-6 text-${post.color} opacity-50`} />
             </div>

             {/* Content */}
             <div className="flex-grow">
                <h2 className="font-serif font-bold text-2xl text-brand-purple mb-1 group-hover:text-brand-pink transition-colors">
                  {post.title}
                </h2>
                <h3 className="font-serif italic text-sm text-brand-dark/60 mb-4">
                  {post.subtitle}
                </h3>
                
                {/* Always clamped in the list view */}
                <div className="font-sketch text-xl text-brand-dark/80 leading-relaxed whitespace-pre-line line-clamp-4">
                  {post.excerpt}
                </div>
             </div>

             {/* Footer */}
             <div className="mt-8 flex justify-end">
                <span 
                  className="flex items-center gap-2 text-brand-purple font-bold text-xs tracking-widest uppercase hover:text-brand-orange transition-colors group-hover:translate-x-2 duration-300"
                >
                  Ler Completo <ArrowRight size={14} />
                </span>
             </div>
          </div>
       </div>
    </div>
  );
};

export const BlogCard: React.FC<BlogCardProps> = ({ onPostClick }) => {
  const { t } = useTranslation();
  
  return (
    <Section maxWidth="max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="font-sketch text-7xl text-brand-purple mb-4 relative inline-block">
          {t('blog.title')}
          <div className="absolute top-0 right-0 transform translate-x-full translate-y-2">
            <StarDoodle className="w-8 h-8 text-brand-orange animate-pulse" />
          </div>
        </h1>
        <p className="font-serif italic text-brand-dark/60 text-lg max-w-xl mx-auto">
          {t('blog.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {BLOG_POSTS.map((post, index) => (
          <BlogPostItem 
            key={post.id} 
            post={post} 
            isFeatured={index === 0} // Making the first one featured (Manifesto)
            onClick={() => onPostClick && onPostClick(post.id)}
          />
        ))}
      </div>

      <div className="mt-16 text-center">
         <ScribbleLine />
         <p className="mt-4 font-serif text-sm text-brand-dark/40 italic">
           {t('blog.moreStories')}
         </p>
      </div>

    </Section>
  );
};