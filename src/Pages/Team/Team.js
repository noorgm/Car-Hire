import React from 'react';

import team from '../../Assets/Data/team';
import src from '../../Assets/images/tip3.jpg';
import './team.css';

const Team = () => {
  return (
    <main className="team-bg">

      <section className="top-team-bg">
        <div className="top-team">
          <h2>What its like to work for us?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos numquam veritatis necessitatibus?</p>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.</p>
        </div>
      </section>

      <section className="end-team">
      <h1 className='meet-team'>Meet the team</h1>
        {
          team.map((teams) => (
            <div key={teams.id} className="team-box grid">
              <img src={teams.img} alt="ceo" />
              <div className="team-box-info">
                <h4>{teams.fullName}</h4>
                <p>{teams.job}</p>
              </div>
            </div>
          ))
        }
      </section>
      
    </main>
  )
}

export default Team