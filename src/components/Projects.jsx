import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { customProjectData } from '../data/projects';

const excludedRepos = [
  "engali983.github.io", "react-components-practice", 
  "JavaScript-Course-Reference", "course-js", "My-Portfolio", 
  "Ramadan-companion", "learn-git", "Artificial-intelligence-templates-", 
  "engAli983", "JS_Practice", "eldwaly"
];

const filters = ['All', 'JavaScript', 'API', 'CSS', 'React'];

export default function Projects() {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/engAli983/repos?sort=updated');
        const data = await response.json();
        
        if (Array.isArray(data)) {
          const formattedRepos = data
            .filter(repo => !excludedRepos.includes(repo.name) && !repo.fork)
            .map(repo => ({
              id: repo.id,
              name: repo.name.replace(/-/g, ' '),
              description: repo.description || 'A web development project built with modern technologies.',
              image: '/image/Portfolio.webp', // fallback image
              html_url: repo.html_url,
              homepage: repo.homepage,
              topics: repo.topics && repo.topics.length > 0 ? repo.topics : (repo.language ? [repo.language] : ['JavaScript']),
            }));

          // Combine with custom projects
          setProjects([...customProjectData, ...formattedRepos]);
        }
      } catch (error) {
        console.error("Error fetching repos", error);
        setProjects([...customProjectData]); // Fallback to custom data only
      } finally {
        setLoading(false);
      }
    };

    fetchGithubRepos();
  }, []);

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    const lowerTopics = project.topics.map(t => t.toLowerCase());
    return lowerTopics.includes(activeFilter.toLowerCase());
  });

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    if (visibleCount >= filteredProjects.length) {
      setVisibleCount(6); // Show less
    } else {
      setVisibleCount(prev => prev + 6); // Load more
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#151f32]">
      <div 
        ref={ref}
        className={`container mx-auto px-6 lg:px-24 fade-in ${isVisible ? 'visible' : ''}`}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-main inline-block relative font-cairo">
            My <span className="text-primary">Projects</span>
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setVisibleCount(6);
              }}
              className={`px-6 py-2 rounded-full font-semibold font-cairo transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(255,51,95,0.5)]' 
                  : 'bg-bg-card text-text-main hover:bg-primary-hover hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center text-primary text-2xl py-10">
            <i className="fa-solid fa-spinner fa-spin"></i> Loading...
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {displayedProjects.map(project => (
                <div 
                  key={project.id} 
                  className="bg-bg-card rounded-xl overflow-hidden shadow-card group hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-primary"
                >
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a 
                        href={project.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-bg-dark rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors"
                        title="GitHub Repo"
                      >
                        <i className="fa-brands fa-github text-xl"></i>
                      </a>
                      {project.homepage && (
                        <a 
                          href={project.homepage} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-bg-dark rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors"
                          title="Live Demo"
                        >
                          <i className="fa-solid fa-link text-xl"></i>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.topics.slice(0, 3).map((topic, i) => (
                        <span key={i} className="text-xs font-semibold bg-[#0f172a] text-primary px-3 py-1 rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-text-main mb-2 font-cairo capitalize">
                      {project.name}
                    </h3>
                    <p className="text-text-muted text-sm line-clamp-3 font-cairo">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length > 6 && (
              <div className="text-center">
                <button 
                  onClick={handleLoadMore}
                  className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-colors duration-300 font-cairo"
                >
                  {visibleCount >= filteredProjects.length ? 'Show Less' : 'Load More'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
