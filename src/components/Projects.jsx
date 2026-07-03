import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { customProjectData, customProjectIds } from '../data/projects';
import { imgPortfolio } from '../assets/index.js';

const excludedRepos = [
  'engali983.github.io', 'react-components-practice', 'JavaScript-Course-Reference',
  'course-js', 'My-Portfolio', 'Ramadan-companion', 'learn-git',
  'Artificial-intelligence-templates-', 'engAli983', 'JS_Practice', 'eldwaly',
  'My-Portfolio-React', 'daniels-portfolio-bootstrap', '3likha1ed-portfolio', 'ali-khaled-portfolio',
  ...customProjectIds,
];


export default function Projects() {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  const [projects, setProjects]       = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading]         = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res  = await fetch('https://api.github.com/users/engAli983/repos?sort=updated');
        const data = await res.json();
        if (Array.isArray(data)) {
          const extra = data
            .filter(repo => !excludedRepos.includes(repo.name) && !repo.fork)
            .map(repo => ({
              id: repo.id,
              name: repo.name.replace(/-|_/g, ' '),
              description: repo.description || 'A web development project built with modern technologies.',
              image: imgPortfolio,
              html_url: repo.html_url,
              homepage: repo.homepage,
              topics: repo.topics?.length ? repo.topics : [repo.language || 'JavaScript'],
            }));
          setProjects([...customProjectData, ...extra]);
        }
      } catch {
        setProjects([...customProjectData]);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const displayed = projects.slice(0, visibleCount);

  return (
    <section id="projects" className="py-[100px] bg-[#151f32]">
      <div
        ref={ref}
        className={`w-[90%] max-w-[1200px] mx-auto px-[15px] fade-in${isVisible ? ' visible' : ''}`}
      >
        {/* Section Header */}
        <div className="mb-[60px] text-center">
          <p className="text-primary font-semibold uppercase tracking-[2px]">Portfolio</p>
          <h2 className="text-[40px] font-bold mb-[15px] text-white">My Projects</h2>
        </div>

        {/* Project Cards */}
        {loading ? (
          <div className="text-center py-[40px] text-[20px] text-primary">
            <i className="fa-solid fa-spinner fa-spin mr-[10px]" />
            Loading projects...
          </div>
        ) : (
          <>
            <div
              className="grid gap-[30px]"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
            >
              {displayed.map(project => (
                <article
                  key={project.id}
                  className="bg-bg-card rounded-[12px] overflow-hidden transition-all duration-300 flex flex-col border border-transparent hover:-translate-y-[5px] hover:border-primary"
                  style={{ ':hover': { boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' } }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                >
                  {/* Card Image */}
                  <div className="relative overflow-hidden h-[220px]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-[25px] flex flex-col flex-grow">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-[15px]">
                      {project.topics.slice(0, 4).map((tag, i) => (
                        <span key={i} className="tech-tag">{tag}</span>
                      ))}
                    </div>

                    <h3 className="text-[22px] font-bold text-text-main capitalize mb-3">{project.name}</h3>
                    <p className="text-text-muted text-[15px] leading-relaxed flex-grow mb-5">{project.description}</p>

                    {/* Card Footer */}
                    <div className="flex justify-between items-center mt-auto pt-[15px]" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text-main text-[14px] font-semibold hover:text-primary transition-colors duration-300"
                      >
                        <i className="fa-brands fa-github text-base" /> GitHub
                      </a>
                      {project.homepage && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white py-2 px-[18px] rounded-[30px] text-[14px] font-bold inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02]"
                          style={{
                            background: 'linear-gradient(45deg, #ff335f, #ff6b8b)',
                            boxShadow: '0 4px 15px rgba(255,51,95,0.4)',
                          }}
                        >
                          <i className="fa-solid fa-arrow-up-right-from-square text-[15px]" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More / Show Less */}
            <div className="flex justify-center gap-[15px] mt-[40px]">
              {visibleCount > 6 && (
                <button
                  onClick={() => { setVisibleCount(6); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="inline-block px-[30px] py-3 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                >
                  Show Less
                </button>
              )}
              {visibleCount < projects.length && (
                <button
                  onClick={() => setVisibleCount(v => v + 3)}
                  className="inline-block px-[30px] py-3 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                >
                  Load More
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
