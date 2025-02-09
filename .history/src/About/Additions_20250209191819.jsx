import React from 'react'
import "./Additions.css"

const Additions = () => {
  const teamMembers = [
    {
      name: "Philip Lenaiyasa",
      email: "plenaiyasa@ndotoforestcco.com",
      image: "https://ik.imagekit.io/fcuzgktdi/assets/PHOTO-2025-02-09-15-44-35.jpg?updatedAt=1739117664912",
      position: "right"
    },
    {
      name: "John Learamo",
      email: "jlearamo@ndotoforestcco.com",
      image: "https://ik.imagekit.io/fcuzgktdi/assets/PHOTO-2025-02-09-15-44-35.jpg?updatedAt=1739117664912",
      position: "left"
    }
  ];

  return (
    <div className="team-container">
      <div className="team-info">
        <h2>Meet Our Team</h2>
        <p>
          Philip Lenaiyasa and John Learamo are key members of our team. With years of experience in their fields, they bring invaluable knowledge and skills to the table. Philip is known for his innovative solutions and leadership, while John brings a wealth of expertise in project management. Together, they make a dynamic and efficient team.
        </p>
      </div>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`member-card ${member.position}`}
          >
            <img src={member.image} alt={member.name} className="member-image" />
            <div className="member-details">
              <h3>{member.name}</h3>
              <p>{member.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Additions
