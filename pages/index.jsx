import Head from 'next/head';
import Image from 'next/image';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import CTASection from '../components/CTASection';
import { BarChart3, PieChart, Leaf, Factory, Globe2, ClipboardCheck, TrendingUp, Users, Target, Award } from 'lucide-react';

export default function Home() {
  const services = [
    { Icon: BarChart3, title: 'Data Analytics', description: 'From raw data to insight-rich dashboards that guide action. We build modern analytics pipelines that transform information into competitive advantage.' },
    { Icon: PieChart, title: 'Business Intelligence', description: 'Enterprise reporting and decision support that scales. Enable data-driven culture across your organization with platforms that grow with you.' },
    { Icon: Leaf, title: 'Agribusiness Development', description: 'Designing value chains and markets that grow economies. From farm-to-market strategies to export facilitation and food security.' },
    { Icon: Factory, title: 'Industrialization', description: 'Industrial policy support, feasibility and execution planning. Build competitive industrial ecosystems that attract investment and create jobs.' },
    { Icon: Globe2, title: 'International Trade Solutions', description: 'Trade facilitation, export-readiness and cross-border strategy. Expand market access and drive export competitiveness.' },
    { Icon: ClipboardCheck, title: 'Project Management', description: 'PMO setup and delivery for complex transformation programs. We ensure strategic initiatives deliver measurable outcomes on time and on budget.' }
  ];

  const stats = [
    { value: '10+', label: 'Countries Served' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '$2B+', label: 'Investment Facilitated' },
    { value: '98%', label: 'Client Satisfaction' }
  ];

  const whyUs = [
    {
      icon: Target,
      title: 'Deep Sector Expertise',
      description: 'We bring specialized knowledge in agribusiness, industrialization, telecommunications, and data infrastructure.'
    },
    {
      icon: TrendingUp,
      title: 'Proven Methodology',
      description: 'Our systematic approach combines diagnostic rigor, strategic design, and execution discipline.'
    },
    {
      icon: Users,
      title: 'True Partnership',
      description: 'We work alongside your team, transferring capability and ensuring lasting organizational impact.'
    },
    {
      icon: Award,
      title: 'Measurable Results',
      description: 'Every engagement includes clear KPIs, quarterly reviews, and success metrics tied to business outcomes.'
    }
  ];

  return (
    <>
      <Head>
        <title>BOSA Analytics — Consulting & Business Transformation</title>
        <meta name="description" content="Transforming Data. Empowering Decisions. Driving Economies. BOSA Analytics helps organizations achieve measurable growth through data, strategy, and innovation." />
      </Head>

      <HeroSection />

      {/* Stats Section */}
      <section className="container-wide py-12 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5">
          <img src="/assets/svg/dots-pattern.svg" alt="" className="h-96 w-96" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-primary">{stat.value}</div>
              <div className="mt-2 text-sm text-body/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="container-wide py-20 relative" id="what-we-do">
        <div className="absolute top-0 left-0 opacity-5">
          <img src="/assets/svg/accent-circle.svg" alt="" className="h-64 w-64" />
        </div>
        <SectionHeader eyebrow="Expertise" title="What We Do" align="center" />
        <p className="mt-4 max-w-3xl mx-auto text-center text-body">
          We deliver end-to-end solutions across the data-to-impact value chain—from analytics infrastructure and strategic planning to program execution and policy implementation.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="/what-we-do" className="btn btn-primary">Explore All Services</a>
        </div>
      </section>

      {/* Why BOSA */}
      <section className="relative py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-wide">
          <SectionHeader eyebrow="Why BOSA" title="Partner for Transformation" align="center" />
          <p className="mt-4 max-w-3xl mx-auto text-center text-body">
            We combine strategic rigor with practical execution—delivering programs that create lasting value, not just reports that sit on shelves.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div key={item.title} className="surface-card p-6">
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-body/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership / Philosophy */}
      <section className="relative py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0957860f] to-[#0000000a]" />
        <div className="absolute top-0 left-0 w-full -z-10">
          <img src="/assets/svg/wave-divider.svg" alt="" className="w-full h-32 opacity-30" />
        </div>
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <SectionHeader eyebrow="Perspective" title="We See Economy in Everything." />
              <div className="mt-6 space-y-4 text-body">
                <p>
                  At BOSA, we believe every decision creates ripple effects across systems. Our work blends data, strategy and execution to help organizations capture opportunity, manage risk and create measurable impact.
                </p>
                <p>
                  Whether we're designing an industrial park that attracts investment, building a data platform that improves service delivery, or facilitating trade corridors that expand market access—we connect every initiative to the fundamental question: How does this drive economic growth?
                </p>
                <p className="font-medium text-primary">
                  That perspective makes us different. It makes our work more actionable. And it makes the results more durable.
                </p>
              </div>
            </div>
            <div className="surface-card overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/assets/about_2.jpg"
                  alt="BOSA Analytics — strategic consulting in action"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container-wide py-20">
        <SectionHeader eyebrow="Impact" title="Featured Projects" align="center" />
        <p className="mt-4 max-w-2xl mx-auto text-center text-body">
          Discover how we've helped organizations transform strategy into measurable outcomes.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard title="Lesotho Telecommunication Privatization" location="Lesotho" description="Transaction advisory and market design for telecom privatization program, unlocking private investment and expanding connectivity." image="/assets/Lesotho_tel.png" />
          <ProjectCard title="Ekiti Industrial Park Facilitation" location="Nigeria" description="Industrial corridor planning with investment attraction, incentives design, and master planning for sustainable industrial development." image="/assets/Ekiti_park.jpg" />
          <ProjectCard title="Canadian Cadman Power Equipment Facilitation" location="Canada" description="Cross-border market entry strategy, distribution channel design, and trade facilitation for power equipment expansion." image="/assets/Canadian_Cadman_Power.png" />
        </div>
        <div className="mt-8 text-center">
          <a href="/projects" className="text-primary hover:text-accent font-semibold inline-flex items-center gap-2">
            View All Projects
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Testimonial/Approach Section */}
      <section className="container-wide py-20">
        <div className="surface-card overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-[4/3] md:aspect-auto">
              <Image
                src="/assets/about_1.jpg"
                alt="Client collaboration and strategic consulting"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <SectionHeader eyebrow="Our Approach" title="Built for Impact, Designed to Last" />
              <div className="mt-6 space-y-4 text-body">
                <p>
                  We don't just deliver reports. We deliver transformation programs that your organization owns, executes, and benefits from long after we've completed the engagement.
                </p>
                <p>
                  Our approach is collaborative and transparent. We work alongside your team, build internal capability, and ensure every recommendation is grounded in your operational reality. That's why 98% of our clients see measurable results within 12 months—and why they continue to engage us for new initiatives.
                </p>
              </div>
              <div className="mt-8">
                <a href="/contact" className="btn btn-primary">Discuss Your Challenge</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries/Areas */}
      <section className="relative py-20 bg-black text-white">
        <div className="container-wide">
          <SectionHeader eyebrow="Where We Work" title="Across Industries & Markets" align="center" className="text-white" />
          <p className="mt-4 max-w-3xl mx-auto text-center opacity-90">
            From telecommunications and industrial policy to agribusiness and international trade—we bring deep sector knowledge and execution discipline to every engagement.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="p-6 border border-white/20 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Public Sector</h3>
              <p className="text-sm opacity-80">Policy design, program delivery, and capacity building for governments and international institutions.</p>
            </div>
            <div className="p-6 border border-white/20 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Private Sector</h3>
              <p className="text-sm opacity-80">Strategy, operations, and market expansion for enterprises seeking growth and transformation.</p>
            </div>
            <div className="p-6 border border-white/20 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">International Trade</h3>
              <p className="text-sm opacity-80">Cross-border facilitation, export development, and corridor design for regional integration.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
