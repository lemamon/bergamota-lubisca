

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import { PaperCard } from '../ui/PaperCard';
import { DiamondDivider, ScribbleLine, StarDoodle } from '../shared/Decorations';
import { BLOG_POSTS } from '../../constants';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { JarLogo } from '../Icons';

interface BlogPostDetailCardProps {
  postId: number | null;
  onBack: () => void;
}

export const BlogPostDetailCard: React.FC<BlogPostDetailCardProps> = ({ postId, onBack }) => {
  const { t } = useTranslation();
  const post = BLOG_POSTS.find(p => p.id === postId);

  if (!post) {
    return (
      <Section className="text-center py-20">
        <h2 className="font-sketch text-4xl text-brand-purple">{t('blog.notFound')}</h2>
        <button onClick={onBack} className="mt-4 underline font-sketch text-2xl text-brand-pink">{t('blog.backToBlog')}</button>
      </Section>
    );
  }

  // Determine styles based on post color/category (mocked logic based on existing data structure)
  const accentColor = post.color === 'brand-pink' ? 'text-brand-pink' : post.color === 'brand-orange' ? 'text-brand-orange' : 'text-brand-purple';
  
  return (
    <Section maxWidth="max-w-4xl">
      {/* Navigation */}
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-brand-purple font-sketch text-2xl hover:text-brand-pink transition-colors group px-4"
      >
        <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        <span>{t('blog.backToBlog')}</span>
      </button>

      {/* Main Content Card */}
      <PaperCard className="overflow-hidden min-h-[80vh]">
        
        {/* Visual Header Decoration */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-purple via-brand-pink to-brand-orange opacity-50"></div>
        <StarDoodle className={`absolute top-6 right-6 w-8 h-8 ${accentColor} animate-spin-slow opacity-50`} />

        <article className="max-w-3xl mx-auto w-full">
          
          {/* Header Info */}
          <header className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-6 opacity-60">
               <div className={`flex items-center gap-1 font-sans text-xs font-bold tracking-[0.2em] uppercase ${accentColor}`}>
                  <Tag size={12} />
                  {post.category}
               </div>
               <div className="w-1 h-1 bg-brand-dark rounded-full"></div>
               <div className="flex items-center gap-1 font-sans text-xs font-bold tracking-[0.2em] uppercase text-brand-dark">
                  <Calendar size={12} />
                  {post.date}
               </div>
            </div>

            <h1 className="font-sketch text-5xl md:text-7xl text-brand-dark mb-4 leading-none">
              {post.title}
            </h1>
            <h2 className={`font-serif italic text-xl md:text-2xl ${accentColor}`}>
              {post.subtitle}
            </h2>
          </header>

          {/* Featured Image - Polaroid Style */}
          <div className="mb-12 flex justify-center transform -rotate-1 hover:rotate-0 transition-transform duration-500">
             <div className="bg-white p-3 md:p-4 shadow-xl border border-brand-purple/5 max-w-2xl w-full">
                <div className="aspect-video w-full overflow-hidden bg-brand-cream">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover sepia-[.1]"
                  />
                </div>
             </div>
          </div>

          <div className="flex justify-center mb-12">
             <div className="w-1/2 opacity-30">
               <ScribbleLine />
             </div>
          </div>

          {/* Body Content */}
          <div className="font-serif text-xl text-brand-dark/90 leading-loose space-y-6 whitespace-pre-line px-4 md:px-8 text-justify">
             {/* First letter drop cap effect */}
             <span className={`float-left text-7xl font-sketch ${accentColor} mr-4 mt-[-10px] leading-none`}>
               {post.excerpt.charAt(0)}
             </span>
             {post.excerpt.substring(1)}
          </div>

          {/* TEAM MEMBERS GALLERY (Dynamic Rendering for Post ID 4 or any post with teamMembers) */}
          {/* @ts-ignore - Allowing dynamic property for this prototype */}
          {post.teamMembers && post.teamMembers.length > 0 && (
             <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-2">
                {/* @ts-ignore */}
                {post.teamMembers.map((member, index) => (
                   <div key={index} className={`relative group ${index % 2 === 0 ? 'md:rotate-2' : 'md:-rotate-1'}`}>
                      {/* Photo Frame */}
                      <div className="bg-white p-3 shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border border-gray-100">
                         {/* Tape */}
                         <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-yellow-100/80 rotate-1 shadow-sm opacity-80 z-10"></div>
                         
                         <div className="aspect-square w-full overflow-hidden mb-4 bg-brand-cream relative">
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500" />
                         </div>
                         
                         <div className="text-center px-2 pb-2">
                            <h3 className="font-sketch text-3xl text-brand-dark mb-1">{member.name}</h3>
                            <p className="font-sans text-[10px] font-bold tracking-[0.2em] text-brand-purple uppercase mb-3">{member.role}</p>
                            <p className="font-serif text-sm italic text-brand-dark/70 leading-relaxed">"{member.description}"</p>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          )}

          {/* Footer Signature */}
          <div className="mt-20 pt-10 border-t-2 border-dashed border-brand-purple/10 flex flex-col items-center">
             <div className="w-16 h-16 opacity-50 mb-4">
                <JarLogo />
             </div>
             <p className="font-sketch text-2xl text-brand-purple/60">
               Com amor, Bergamota & Lubisca
             </p>
          </div>

        </article>

      </PaperCard>
    </Section>
  );
};