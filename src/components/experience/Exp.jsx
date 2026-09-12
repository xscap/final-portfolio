
import './exp.css'
import { FaBriefcase, FaChartSimple, FaUserTie } from 'react-icons/fa6'

const experiences = [
     {
    period: ['Jul 2026', '- Present'],
    duration: '3 mos',
    title: 'Data Analyst',
    company: 'MedTourEasy',
    companyLogo: 'https://logo.clearbit.com/medtoureasy.com',
    location: 'Apprenticeship  ·  Remote',
    status: '',
    icon: FaChartSimple,
    color: 'lavender',
    points: [
      'Helped with data cleaning, processing and analysis using Python.',
      'Worked on data visualization with Matplotlib and NumPy.',
    ],
  },
  {
    period: ['Sep 2024', '- Jul 2026'],
    duration: '1 yr 11 mos',
    title: 'Associate Software Engineer',
    company: 'Tech Mahindra',
    companyLogo: 'https://logo.clearbit.com/techmahindra.com',
    location: 'Kolkata, West Bengal, India',
    status: '',
    icon: FaUserTie,
    color: 'rose',
    points: [
      'Worked on basic training and shadow resource work, fixing UI issues, checking Figma designs and validating UI.',
      'Got introduced to US-based telecom project “BrightSpeed”.',
      'Collaborated with leads and team members, and learned Git, Jira and Agile workflows.',
    ],
  },
 
  {
    period: ['Jul 2026', '- Present'],
    duration: 'Current',
    title: 'Junior Software Engineer',
    company: 'Tech Mahindra',
    companyLogo: 'https://logo.clearbit.com/techmahindra.com',
    location: 'Kolkata, West Bengal, India',
    status: 'Current',
    icon: FaBriefcase,
    color: 'mint',
    points: [
      'Working on frontend development and API integrations.',
      'Building responsive UI components using React.js and JavaScript.',
      'Collaborating with teams for feature implementation and debugging.',
      'Working with Git/GitHub for version control.',
      'Handling API payloads and testing workflows.',
    ],
  },
]

const Exp = () => {
  return (
    <section id="experience" className="experience-section">
      
      <h2>Experience</h2>

      <div className="container timeline">
        {experiences.map(({ period, duration, title, company, companyLogo, location, status, icon: Icon, color, points }) => (
          <article className={`timeline__item timeline__item--${color}`} key={`${title}-${company}`}>
            <div className="timeline__marker" aria-hidden="true" />

            <div className="timeline__date">
              <span>{period[0]}</span>
              <span>{period[1]}</span>
              <small className={status === 'Current' ? 'timeline__pill timeline__pill--current' : 'timeline__pill'}>
                {status || duration}
              </small>
            </div>

            <div className="timeline__card">
              <div className="timeline__icon"><Icon /></div>
              <div className="timeline__body">
                <div className="timeline__heading">
                  <div>
                    <h3>{title}</h3>
                    <p>
                      <strong>{status === 'Current' ? '(Current Role)  ·  ' : ''}</strong>
                      <img className="timeline__company-logo" src={companyLogo} alt={`${company} logo`} />
                      <span>{location}</span>
                    </p>
                  </div>
                  {status && status !== 'Current' && <span className="timeline__status">{status}</span>}
                </div>
                <ul>
                  {points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Exp