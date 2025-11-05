import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { Target, Users, TrendingUp, Award } from 'lucide-react';

export default function About() {
  const [expandedBios, setExpandedBios] = useState({});

  const toggleBio = (name) => {
    setExpandedBios(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const team = [
    { 
      name: 'Alain Hoodashtian', 
      title: 'Global Development Lead', 
      bio: 'Leading international partnerships and economic development initiatives.',
      image: '/assets/placeholder-1.svg'
    },
    { 
      name: 'Rajib Verman', 
      title: 'Systems Analyst', 
      bio: 'Transforming complex data into actionable business intelligence.',
      image: '/assets/placeholder-1.svg'
    },
    { 
      name: 'Francis Elimimian', 
      title: 'Technology Analyst', 
      bio: 'Designing scalable technology solutions for enterprise transformation.',
      image: '/assets/placeholder-1.svg'
    },
    { 
      name: 'Sufuyanu Kadiri', 
      title: 'Financial Analyst', 
      bio: 'Strategic financial modeling and investment advisory expertise.',
      image: '/assets/placeholder-1.svg'
    },
    { 
      name: 'Sanmi Obasa', 
      title: 'Economic Models Lead', 
      bio: 'Advanced econometric modeling and policy analysis specialist.',
      image: '/assets/placeholder-1.svg'
    },
    {
      name: 'Dr. Michael Adebayo Adebiyi',
      title: 'Senior Economist & Policy Advisor',
      bio: 'Seasoned economist and former Director of Research at Central Bank of Nigeria with 30+ years of experience in monetary policy, econometric research, and institutional development.',
      fullBio: 'Dr. Michael Adebayo Adebiyi is a Seasoned economist, executive leader, and strategic policy expert with over 30 years of experience delivering and advancing data-driven research & insights, micro/macroeconomic policy development, high-level advisory support, and institutional leadership. Proven expertise in monetary policy, econometric research, and institutional development, with a track record of shaping national economic strategies and strengthening financial systems. Former Director of Research at the Central Bank of Nigeria, with deep involvement in policy formulation, publication leadership, and strategic committee engagement. Adept at translating complex data into actionable solutions, supporting fiscal and development outcomes across Nigeria and West Africa. Globally trained, with advanced exposure to executive programs at the IMF and Harvard Kennedy School.',
      credentials: 'BSc, MSc, PhD (Econ), HCIB, MIoD, ECPL (Harvard)',
      image: '/assets/Michael.png'
    },
    {
      name: 'Silas A.',
      title: 'Technology Specialist',
      bio: 'Seasoned web developer and techpreneur crafting digital solutions that transform data into actionable insights for organizational growth.',
      fullBio: 'Silas A. is a technology specialist and seasoned web developer with a background as a techpreneur, bringing practical expertise in building scalable digital solutions. He focuses on translating complex technical requirements into clean, effective platforms that enable organizations to leverage data-driven insights. His approach combines technical excellence with business acumen, ensuring that every solution delivers measurable value and supports strategic objectives.',
      image: '/assets/Founder.JPG'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'We align every initiative with organizational objectives and measurable outcomes.'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'Building partnerships that endure, with transparency and shared commitment to results.'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Decisions',
      description: 'Grounding strategy in rigorous analysis, not assumptions.'
    },
    {
      icon: Award,
      title: 'Proven Excellence',
      description: 'Delivering transformation programs that set new standards in execution.'
    }
  ];

  return (
    <>
      <Head>
        <title>About Us — BOSA Analytics</title>
        <meta name="description" content="BOSA Analytics is a consulting and business transformation company helping organizations achieve measurable growth through data, strategy, and innovation." />
      </Head>

      {/* Hero Section with Image */}
      <section className="pt-28 pb-16">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <SectionHeader eyebrow="About BOSA Analytics" title="Transforming Data. Empowering Decisions. Driving Economies." />
              <div className="mt-6 space-y-4 text-body">
                <p>
                  BOSA Analytics Limited is a consulting and business transformation company that helps organizations harness data, strategy, and innovation to achieve measurable growth across Africa and beyond.
                </p>
                <p>
                  We specialize in turning complex information into clear action—delivering analytics, intelligence, and execution support that helps governments, enterprises, and institutions make smarter decisions.
                </p>
              </div>
            </div>
            <div className="surface-card overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/assets/about_1.jpg"
                  alt="BOSA Analytics — strategic consulting and transformation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="surface-card p-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-body">
                To empower organizations with the analytical capabilities, strategic frameworks, and execution expertise needed to navigate complexity, capture opportunity, and drive sustainable economic growth.
              </p>
            </div>
            <div className="surface-card p-8">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-body">
                A future where every decision-maker has access to world-class data intelligence, enabling organizations to operate with clarity, precision, and measurable impact across industries and markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="container-wide py-16">
        <SectionHeader eyebrow="Our Philosophy" title="We See the Economy in Every Process." align="center" />
        <div className="mt-8 max-w-4xl mx-auto space-y-6 text-body">
          <p className="text-lg">
            Every decision creates impact. We exist to help organizations make those decisions smarter—combining rigorous analysis with practical execution to deliver outcomes that compound.
          </p>
          <p>
            Our approach integrates deep sector expertise with modern analytics capabilities, ensuring that strategy is grounded in evidence and implementation is built to last. Whether we're supporting industrial policy, designing data platforms, or facilitating international trade, our work always connects to measurable economic outcomes.
          </p>
          <p>
            We believe in the power of transparent process, collaborative partnership, and continuous learning. Our clients succeed when we succeed—and we measure success by the tangible impact they achieve long after we've completed the engagement.
          </p>
        </div>
        
        {/* Image Section */}
        <div className="mt-12 surface-card overflow-hidden">
          <div className="relative aspect-[21/9]">
            <Image
              src="/assets/about_2.jpg"
              alt="Strategic consulting and data analytics in action"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container-wide py-16">
        <SectionHeader eyebrow="What Drives Us" title="Our Core Values" align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="surface-card p-6">
              <v.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-body/80">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container-wide py-16">
        <SectionHeader eyebrow="The People Behind BOSA" title="Leadership & Analysts" align="center" />
        <p className="mt-4 max-w-2xl mx-auto text-center text-body">
          Our team combines deep technical expertise with practical industry experience, bringing a unique perspective to every challenge.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="surface-card p-6">
              <div className="flex items-start gap-4">
                <Image
                  src={m.image || '/assets/placeholder-1.svg'}
                  alt={m.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{m.name}</h3>
                  {m.credentials && (
                    <p className="text-xs text-body/60 mt-0.5">{m.credentials}</p>
                  )}
                  <p className="text-sm text-primary font-medium mt-1">{m.title}</p>
                  <div className="mt-2">
                    <p className={`text-sm text-body/70 ${expandedBios[m.name] ? '' : 'line-clamp-3'}`}>
                      {expandedBios[m.name] && m.fullBio ? m.fullBio : m.bio}
                    </p>
                    {m.fullBio && (
                      <button
                        onClick={() => toggleBio(m.name)}
                        className="text-xs text-primary hover:underline mt-2 font-medium"
                      >
                        {expandedBios[m.name] ? 'Show less' : 'Read more'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partner with Us */}
      <section className="container-wide py-16">
        <div className="surface-card overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <SectionHeader eyebrow="Ready to Transform?" title="Partner with BOSA" />
              <p className="mt-4 text-body">
                Whether you're looking to modernize your analytics capability, design a new industrial policy framework, or accelerate cross-border trade, we bring the expertise and execution discipline to make it happen.
              </p>
              <div className="mt-6">
                <a href="/contact" className="btn btn-primary">Start the Conversation</a>
              </div>
            </div>
            <div className="relative aspect-[4/3] md:aspect-auto">
              <Image
                src="/assets/about_3.jpg"
                alt="Strategic partnership for transformation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
