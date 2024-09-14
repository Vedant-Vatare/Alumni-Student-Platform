import React from "react"

function PlatformBenefits() {
return (
  <>
      <h1 className="heading-text">Benefits of using Campus Connect</h1>
    <section className="benefits-section">
      <h3>For Students</h3>
      <div className="perks-container">
        <div className="card" style={{"--card-bg": "#fcbf49"}}>
          <span>Career Guidance</span>
          <p className="brief">
            Access mentorship and career advice from experienced alumni.
          </p>
        </div>
        <div className="card" style={{"--card-bg": "#0077b6"}}>
          <span>Networking Opportunity</span>
          <p className="brief">
            Connect with professionals and peers in your field of interest.
          </p>
        </div>
        <div className="card" style={{"--card-bg": "#57cc99"}}>
          <span>Skill Development</span>
          <p className="brief">
            Participate in webinars, workshops, and projects to enhance your
            skills.
          </p>
        </div>
      </div>
      <h3>For Alumni</h3>
      <div className="perks-container">
        <div className="card" style={{"--card-bg": "#7209b7"}}>
          <span>Showcase Achievements</span>
          <p className="brief">
            Highlight your career accomplishments and projects on the platform.
          </p>
        </div>
        <div className="card" style={{"--card-bg": "#f72585"}}>
          <span>Stay Updated</span>
          <p className="brief">
            Keep up with the latest developments and opportunities in your
            field.
          </p>
        </div>
        <div className="card" style={{"--card-bg": "#4cc9f0"}}>
          <span>Mentorship Opportunities</span>
          <p className="brief">
            Guide and mentor current students, sharing valuable knowledge and
            experience.
          </p>
        </div>
      </div>
      <h3>For Institutes</h3>
      <div className="perks-container">
        <div className="card" style={{"--card-bg": "#06d6a0"}}>
          <span>Alumni Tracking</span>
          <p className="brief">
            Maintain an up-to-date alumni database to track their achievements
            and contributions.
          </p>
        </div>
        <div className="card" style={{"--card-bg": "#fee440"}}>
          <span>Career Services Improvement</span>
          <p className="brief">
            Utilize alumni networks to provide better job and internship
            opportunities for current students.
          </p>
        </div>
        <div className="card" style={{"--card-bg": "#118ab2"}}>
          <span>Institutional Branding</span>
          <p className="brief">
            Strengthen your brand by showcasing successful alumni and
            institutional achievements.
          </p>
        </div>
      </div>
    </section>
  </>
)
}

export default PlatformBenefits;