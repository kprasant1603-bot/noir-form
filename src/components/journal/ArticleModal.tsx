import React from 'react';
import { Article } from '../../types';
import { Modal } from '../ui/Modal';
import { Calendar, Clock, User, Tag } from 'lucide-react';

type ArticleModalProps = {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
};

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  isOpen,
  onClose,
}) => {
  if (!article) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={article.title}
      subtitle={`JOURNAL // ${article.category}`}
      maxWidth="4xl"
    >
      <div className="space-y-6">
        {/* Article Meta Header */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-noir-400 pb-4 border-b border-noir-800">
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-acid" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-noir-500" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-noir-500" />
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* Lead Subtitle */}
        <p className="font-sans text-base sm:text-lg text-noir-100 font-medium leading-relaxed border-l-2 border-acid pl-4">
          {article.subtitle}
        </p>

        {/* Article Content Paragraphs */}
        <div className="space-y-4 font-sans text-sm sm:text-base text-noir-300 leading-relaxed pt-2">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-noir-800 flex flex-wrap items-center gap-2">
          <Tag className="w-3.5 h-3.5 text-acid mr-1" />
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-noir-850 border border-noir-700 text-[10px] font-mono text-noir-300 uppercase"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Modal>
  );
};
