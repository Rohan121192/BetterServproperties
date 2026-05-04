import { Link } from 'react-router-dom';
import SectionWrapper from '../shared/SectionWrapper';
import ScrollReveal from '../shared/ScrollReveal';
import { LuQuote, LuAward, LuGlobe, LuUsers } from 'react-icons/lu';

const PILLARS = [
  { icon: LuAward,  label: '12+ Years',    sub: 'Industry Experience'   },
  { icon: LuGlobe,  label: '2 Countries',  sub: 'Market Expertise'      },
  { icon: LuUsers,  label: '1,500+',       sub: 'Happy Clients'         },
];

export default function CeoAboutSection() {
  return (
    <SectionWrapper bg="var(--bg)">
      <div className="ceo-grid">
        {/* Left — image + quote card */}
        <ScrollReveal className="fl ceo-left">
          <div className="ceo-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=540&h=640&fit=crop&face"
              alt="CEO of Better Serv Properties"
              className="ceo-img"
            />
            {/* floating quote */}
            <div className="ceo-quote-card">
              <LuQuote size={20} className="ceo-quote-icon" />
              <p>"Real estate is not just an investment — it's a lifestyle choice. We make sure yours is exceptional."</p>
              <span>— Founder &amp; CEO, Better Serv Properties</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Right — text + pillars */}
        <div className="ceo-right">
          <ScrollReveal delay={1}>
            <span className="ceo-eyebrow">From Our Founder</span>
            <h2 className="section-title ceo-heading">
              Built on Trust,<br />Driven by Excellence
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <p className="section-subtitle ceo-para">
              At Better Serv Properties, we believe every family deserves a home that matches their aspirations. 
              From our offices in Dubai and India, we have helped over 1,500 clients secure premium properties 
              across two of the world's most dynamic real estate markets.
            </p>
            <p className="section-subtitle ceo-para" style={{ marginTop: '16px' }}>
              Our edge lies in deep local knowledge, international exposure, and a genuine commitment to your 
              long-term success — not just the transaction. We walk with you from the first consultation all 
              the way to the keys in your hand.
            </p>
          </ScrollReveal>

          {/* Pillars */}
          <div className="ceo-pillars">
            {PILLARS.map(({ icon: Icon, label, sub }, i) => (
              <ScrollReveal key={i} delay={i + 3} className="ceo-pillar">
                <div className="ceo-pillar-icon"><Icon size={22} /></div>
                <div>
                  <strong>{label}</strong>
                  <span>{sub}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={6}>
            <Link to="/about" className="btn btn-dark">
              Our Story <span className="btn-icon">→</span>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
