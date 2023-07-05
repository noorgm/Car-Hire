import React from 'react';

import team from '../../Assets/Data/team';
import './team.css';

const Team = () => {
  return (
    <main className="team-bg">

      <section className="top-team-bg">
        <div className="top-team container">
          <h2>Why work for us?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore obcaecati eum maiores Lorem ipsum dolor sit amet consectetur adipisicing elit. In non accusantium assumenda vitae eveniet voluptas dolores laborum velit quidem? Consequatur, libero. Vel, tempora excepturi sunt consequatur inventore nulla deleniti magnam! Tempore quam laudantium pariatur laboriosam voluptatum, dignissimos debitis voluptatibus exercitationem minus explicabo culpa ratione commodi, possimus quos harum, iure consequatur beatae ab aliquid? praesentium, exercitationem, ad minus consequuntur tempora dolore, deserunt nam officia unde quam! Officiis totam temporibus, quos ex similique soluta.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit hic quam perspiciatis harum dicta tempora ipsam amet.</p>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
          </ul>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa totam quo quisquam, velit corrupti magnam aliquam dolore quae maiores. Placeat expedita corporis molestiae! Dolores.</p>
        </div>
      </section>

      <h1 className='meet-team'>Meet the team</h1>
      <section className="end-team container">
        {
          team.map((teams) => (
            <div key={teams.id} className="team-box">
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