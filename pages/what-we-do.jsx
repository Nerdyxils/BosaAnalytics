import Head from 'next/head';
import SectionHeader from '../components/SectionHeader';

const sections = [
  {
    title: 'Data Analytics',
    body: 'We design modern data stacks, pipelines and analytics layers that turn scattered data into timely, trusted decision assets.'
  },
  {
    title: 'Business Intelligence',
    body: 'From metrics governance to executive dashboards, we deliver BI that aligns the enterprise and drives accountability.'
  },
  {
    title: 'Agribusiness Development',
    body: 'We build competitive value chains across inputs, production and market linkages to unlock productivity and jobs.'
  },
  {
    title: 'Industrialization',
    body: 'We support policy design, feasibility, zones and incentives—de-risking investment and accelerating industrial growth.'
  },
  {
    title: 'International Trade Solutions',
    body: 'Trade diagnostics, corridor design and export-readiness programs that expand market access and firm competitiveness.'
  },
  {
    title: 'Project Management',
    body: 'We establish PMOs and deliver transformation programs with clear governance, cadence and results tracking.'
  }
];

export default function WhatWeDo() {
  return (
    <>
      <Head>
        <title>What We Do — BOSA Analytics</title>
      </Head>

      <section className="pt-28 container-wide">
        <SectionHeader eyebrow="Expertise" title="What We Do" />
      </section>

      <div className="container-wide my-12 space-y-12">
        {sections.map((s, i) => (
          <div key={s.title} className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 ? 'md:[&>div:first-child]:order-2' : ''}`}>
            <div>
              <h3 className="text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 text-body max-w-prose">{s.body}</p>
            </div>
            <div className="surface-card overflow-hidden">
              <div className="aspect-[16/10] bg-[url('/assets/placeholder-2.svg')] bg-center bg-cover" />
            </div>
          </div>
        ))}
      </div>

      <section className="container-wide my-20 text-center">
        <a href="/contact" className="btn btn-primary">Let’s Discuss Your Next Transformation Project</a>
      </section>
    </>
  );
}


