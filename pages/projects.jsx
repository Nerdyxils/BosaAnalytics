import Head from 'next/head';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import CTASection from '../components/CTASection';
import { CheckCircle2, TrendingUp, Globe2, Factory, Building2, Leaf } from 'lucide-react';

export default function Projects() {
  const projects = [
    { 
      title: 'Lesotho Telecommunication Privatization', 
      location: 'Lesotho', 
      description: 'Transaction advisory and market design for telecom privatization program, enabling private sector investment and expanding connectivity across rural regions.',
      image: '/assets/Lesotho_tel.png',
      category: 'Telecommunications',
      impact: ['Private investment mobilization', 'Rural connectivity expansion', 'Market structure optimization']
    },
    { 
      title: 'Ekiti Industrial Park Facilitation', 
      location: 'Nigeria', 
      description: 'Comprehensive industrial corridor planning with investment attraction framework, incentive design, and master planning for sustainable industrial development.',
      image: '/assets/Ekiti_park.jpg',
      category: 'Industrialization',
      impact: ['Industrial ecosystem design', 'Investment attraction framework', 'Job creation facilitation']
    },
    { 
      title: 'Canadian Cadman Power Equipment Facilitation', 
      location: 'Canada', 
      description: 'Cross-border market entry strategy, distribution channel design, and trade facilitation for power equipment expansion into emerging markets.',
      image: '/assets/Canadian_Cadman_Power.png',
      category: 'International Trade',
      impact: ['Market entry strategy', 'Distribution network design', 'Trade facilitation']
    },
    { 
      title: 'SME Data Platform Rollout', 
      location: 'West Africa', 
      description: 'Enterprise analytics platform enabling access to finance through performance benchmarking, credit scoring, and data-driven lending decisions.',
      image: '/assets/sme_data.webp',
      category: 'Data Analytics',
      impact: ['Financial inclusion enhancement', 'Credit decision support', 'Performance benchmarking']
    },
    { 
      title: 'Food Systems Diagnostics', 
      location: 'Multiple', 
      description: 'Comprehensive value chain diagnostics for agrifood systems, identifying bottlenecks, opportunities, and investment priorities for food security.',
      category: 'Agribusiness',
      impact: ['Value chain optimization', 'Investment pipeline development', 'Food security enhancement']
    }
  ];

  const categories = [
    { icon: Building2, name: 'Telecommunications', count: 1 },
    { icon: Factory, name: 'Industrialization', count: 1 },
    { icon: Globe2, name: 'International Trade', count: 1 },
    { icon: TrendingUp, name: 'Data Analytics', count: 1 },
    { icon: Leaf, name: 'Agribusiness', count: 1 }
  ];

  return (
    <>
      <Head>
        <title>Our Projects — BOSA Analytics</title>
        <meta name="description" content="Explore BOSA Analytics' portfolio of transformation projects across telecommunications, industrialization, agribusiness, and data analytics." />
      </Head>

      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container-wide">
          <SectionHeader eyebrow="Our Work" title="Project Portfolio" />
          <p className="mt-4 max-w-3xl text-body">
            From telecommunications privatization to industrial park development, each project demonstrates our commitment to delivering measurable impact through strategic rigor and execution excellence.
          </p>
        </div>
      </section>

      {/* Project Categories */}
      <section className="container-wide py-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <div 
              key={category.name}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              <category.icon className="h-4 w-4" />
              <span className="text-sm font-medium">{category.name}</span>
              <span className="text-xs opacity-70">({category.count})</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container-wide py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="surface-card overflow-hidden group hover:shadow-lg transition-all">
              {project.image && (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-semibold text-primary">{project.category}</span>
                  </div>
                </div>
              )}
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <h3 className="font-semibold text-lg leading-tight">{project.title}</h3>
                  {project.location && (
                    <span className="text-xs text-body/60 whitespace-nowrap">{project.location}</span>
                  )}
                </div>
                <p className="text-sm text-body/80 mb-4">{project.description}</p>
                
                {project.impact && (
                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-xs font-semibold text-body/60 mb-2 uppercase tracking-wide">Impact</p>
                    <ul className="space-y-1">
                      {project.impact.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-body/70">
                          <CheckCircle2 className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mt-4">
                  <a href="#" className="text-primary hover:text-accent text-sm font-semibold inline-flex items-center gap-1">
                    Learn more
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Impact Summary */}
      <section className="container-wide py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <SectionHeader eyebrow="Results" title="Measurable Impact Across Sectors" align="center" />
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="surface-card p-6 text-center">
              <div className="text-3xl font-extrabold text-primary mb-2">$2B+</div>
              <p className="text-sm text-body/70">Investment Facilitated</p>
            </div>
            <div className="surface-card p-6 text-center">
              <div className="text-3xl font-extrabold text-primary mb-2">50+</div>
              <p className="text-sm text-body/70">Projects Delivered</p>
            </div>
            <div className="surface-card p-6 text-center">
              <div className="text-3xl font-extrabold text-primary mb-2">10+</div>
              <p className="text-sm text-body/70">Countries Served</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="surface-card p-8">
            <h3 className="text-xl font-bold mb-4">How We Deliver Impact</h3>
            <p className="text-body mb-4">
              Every project starts with a clear understanding of the challenge, followed by rigorous diagnostic analysis, strategic design, and execution planning. We work alongside our clients to ensure that outcomes are not just delivered, but sustained long-term.
            </p>
            <p className="text-body">
              Our approach emphasizes collaborative partnership, transparent process, and measurable results—ensuring that every engagement creates lasting value for the organizations and communities we serve.
            </p>
          </div>
        </div>
      </section>

      <CTASection title="Ready to Start Your Transformation?" ctaText="Discuss a Project" />
    </>
  );
}
