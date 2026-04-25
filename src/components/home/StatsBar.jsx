import SectionWrapper from '../shared/SectionWrapper';
import { useCountUp } from '../../hooks/useCountUp';
import { ST } from '../../data/stats';

function StatItem({ stat }) {
  const { ref, value } = useCountUp(stat.v, stat.s);
  
  return (
    <div ref={ref}>
      <div className="stat-num">{value}</div>
      <div className="stat-label">{stat.l}</div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <SectionWrapper bg="var(--bg)" style={{ padding: '60px 24px' }}>
      <div className="stats-strip">
        {ST.map((stat, index) => (
          <StatItem key={index} stat={stat} />
        ))}
      </div>
    </SectionWrapper>
  );
}
