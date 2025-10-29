import Head from 'next/head';
import Image from 'next/image';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { BarChart3, Database, TrendingUp, Factory, Globe2, ClipboardList, CheckCircle2, Target, Users, Award } from 'lucide-react';

const services = [
  {
    title: 'Data Analytics',
    icon: BarChart3,
    image: '/assets/Data_Analytics.jpg',
    shortDescription: 'We design modern data stacks, pipelines and analytics layers that turn scattered data into timely, trusted decision assets.',
    fullDescription: 'In today\'s data-rich environment, organizations face the challenge of turning information into actionable intelligence. We design and implement comprehensive data analytics solutions that transform raw data into strategic decision-making tools. Our approach encompasses data architecture design, pipeline development, advanced analytics, and visualization platforms that enable organizations to identify trends, optimize performance, and drive innovation.',
    capabilities: [
      'Data architecture and infrastructure design',
      'ETL pipeline development and automation',
      'Advanced analytics and predictive modeling',
      'Interactive dashboard and visualization development',
      'Data governance and quality assurance'
    ]
  },
  {
    title: 'Business Intelligence',
    icon: Database,
    image: '/assets/Business_Intelligence.webp',
    shortDescription: 'From metrics governance to executive dashboards, we deliver BI that aligns the enterprise and drives accountability.',
    fullDescription: 'Effective business intelligence goes beyond reporting—it creates a culture of data-driven decision-making across the organization. We develop enterprise BI solutions that provide executives, managers, and operational teams with the insights they need, when they need them. Our implementations include KPI frameworks, real-time monitoring systems, and strategic dashboards that enhance visibility and enable proactive management.',
    capabilities: [
      'Executive dashboard and reporting design',
      'KPI framework development and governance',
      'Real-time business monitoring systems',
      'Cross-functional data integration',
      'User training and BI program rollout'
    ]
  },
  {
    title: 'Agribusiness Development',
    icon: TrendingUp,
    image: '/assets/Agribusiness_Development.jpg',
    shortDescription: 'We build competitive value chains across inputs, production and market linkages to unlock productivity and jobs.',
    fullDescription: 'Agricultural transformation requires integrated approaches that address the entire value chain. We support agribusiness development through value chain analysis, market system design, and investment facilitation. Our work helps connect farmers to markets, improve productivity, and create sustainable livelihoods while addressing food security challenges across Africa and beyond.',
    capabilities: [
      'Value chain diagnostics and optimization',
      'Market linkage and price discovery mechanisms',
      'Agricultural input system design',
      'Export development and certification support',
      'Rural finance and credit program design'
    ]
  },
  {
    title: 'Industrialization',
    icon: Factory,
    image: '/assets/Industrialization.jpg',
    shortDescription: 'We support policy design, feasibility, zones and incentives—de-risking investment and accelerating industrial growth.',
    fullDescription: 'Successful industrialization requires coordinated policy, infrastructure, and investment strategies. We provide comprehensive support for industrial development, from policy framework design and special economic zone planning to investment attraction and monitoring. Our approach helps governments and institutions create enabling environments that attract manufacturing investment, create jobs, and drive economic diversification.',
    capabilities: [
      'Industrial policy and regulatory framework design',
      'Special economic zone master planning',
      'Investment attraction and facilitation',
      'Industrial project feasibility and structuring',
      'Industrial monitoring and evaluation systems'
    ]
  },
  {
    title: 'International Trade Solutions',
    icon: Globe2,
    image: '/assets/International_Trade_Solutions.jpg',
    shortDescription: 'Trade diagnostics, corridor design and export-readiness programs that expand market access and firm competitiveness.',
    fullDescription: 'International trade is a critical driver of economic growth and competitiveness. We help organizations navigate complex trade environments through diagnostic analysis, corridor design, and export development programs. Our solutions address trade facilitation challenges, improve logistics efficiency, and enhance export competitiveness for businesses and countries seeking to expand their global market presence.',
    capabilities: [
      'Trade diagnostics and competitiveness assessment',
      'Trade corridor and logistics optimization',
      'Export development and market entry strategies',
      'Trade policy analysis and recommendations',
      'Customs and border modernization support'
    ]
  },
  {
    title: 'Project Management',
    icon: ClipboardList,
    image: '/assets/Project_Management.jpg',
    shortDescription: 'We establish PMOs and deliver transformation programs with clear governance, cadence and results tracking.',
    fullDescription: 'Complex transformation initiatives require robust project management capabilities to ensure successful delivery. We establish project management offices (PMOs), implement governance frameworks, and provide hands-on program delivery support. Our approach ensures that strategic initiatives are executed with discipline, tracked with rigor, and deliver measurable outcomes on time and within budget.',
    capabilities: [
      'PMO establishment and operational design',
      'Project governance framework development',
      'Program planning and execution support',
      'Risk management and issue resolution',
      'Stakeholder engagement and communication strategies'
    ]
  }
];

export default function WhatWeDo() {
  return (
    <>
      <Head>
        <title>What We Do — BOSA Analytics</title>
        <meta name="description" content="BOSA Analytics offers comprehensive consulting services in data analytics, business intelligence, agribusiness development, industrialization, international trade, and project management." />
      </Head>

      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container-wide">
          <SectionHeader eyebrow="Our Services" title="What We Do" />
          <p className="mt-4 max-w-3xl text-body">
            We deliver comprehensive consulting and transformation services across six core practice areas, each designed to help organizations achieve measurable impact through strategic rigor and execution excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container-wide py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="surface-card overflow-hidden group hover:shadow-lg transition-all">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <service.icon className="h-6 w-6 text-primary flex-shrink-0" />
                  <h3 className="text-xl font-bold leading-tight">{service.title}</h3>
                </div>
                <p className="text-sm text-body/80">{service.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Service Descriptions */}
      <section className="container-wide py-16">
        <SectionHeader eyebrow="In-Depth Expertise" title="How We Deliver Value" align="center" />
        
        <div className="mt-12 space-y-20">
          {services.map((service, index) => (
            <div key={service.title} className="space-y-6">
              <div className={`grid items-start gap-8 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="surface-card overflow-hidden">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-body mb-6 leading-relaxed">{service.fullDescription}</p>
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-body/70 uppercase tracking-wide">Key Capabilities</h4>
                    <ul className="space-y-2">
                      {service.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-body/80">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="container-wide py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="text-center">
          <SectionHeader eyebrow="How We Work" title="Integrated Service Delivery" align="center" />
          <p className="mt-4 max-w-3xl mx-auto text-center text-body">
            While each service area stands alone, our true value emerges when we integrate capabilities across disciplines—delivering holistic solutions that address complex organizational challenges from multiple angles.
          </p>
        </div>
        
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="surface-card p-6">
              <Target className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Diagnostic Rigor</h3>
              <p className="text-sm text-body/80">
                Every engagement begins with deep diagnostic work—understanding the current state, identifying constraints, and mapping opportunities.
              </p>
            </div>
            <div className="surface-card p-6">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Collaborative Design</h3>
              <p className="text-sm text-body/80">
                We work alongside your team, ensuring solutions are practical, implementable, and aligned with your organizational capability and culture.
              </p>
            </div>
            <div className="surface-card p-6">
              <Award className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Execution Discipline</h3>
              <p className="text-sm text-body/80">
                From inception to completion, we maintain clear governance, regular cadence, and rigorous tracking to ensure outcomes are delivered.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
