import React from 'react';
import { Article } from '../types';
import { ARTICLES } from '../data/articles';
import { BookOpen, ArrowUpRight, Clock, User } from 'lucide-react';

type JournalSectionProps = {
  onReadArticle: (article: Article) => void;
};

export const JournalSection: React.FC<JournalSectionProps> = ({ onReadArticle }) => {
  return (
    <section id="journal" className="py-24 bg-noir-950 relative border-t border-noir-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-12 border-b border-noir-850 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-acid tracking-widest uppercase mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>THE ARCHIVAL JOURNAL</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-noir-50 tracking-tight uppercase">
              DISPATCHES.
            </h2>
          </div>
          <p className="font-mono text-xs text-noir-400 max-w-md">
            Critical essays on digital fashion, subcultural anthropology, and architectural tailoring from the NOIR//FORM design team.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => onReadArticle(article)}
              className="group bg-noir-900 border border-noir-800 hover:border-acid/60 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-lg"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between pb-4 border-b border-noir-850 text-[11px] font-mono text-noir-400">
                  <span className="text-acid uppercase font-bold">{article.category}</span>
                  <div className="flex items-center gap-1 text-noir-500">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-noir-50 tracking-wide group-hover:text-acid transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-noir-300 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Read Action */}
              <div className="pt-6 mt-6 border-t border-noir-850 flex items-center justify-between font-mono text-xs text-noir-300 group-hover:text-acid transition-colors">
                <span className="flex items-center gap-1.5 text-[10px] text-noir-500">
                  <User className="w-3 h-3" />
                  <span>{article.author.split('//')[0].trim()}</span>
                </span>
                <span className="inline-flex items-center gap-1 font-bold text-[11px] uppercase tracking-wider">
                  Read Essay <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
