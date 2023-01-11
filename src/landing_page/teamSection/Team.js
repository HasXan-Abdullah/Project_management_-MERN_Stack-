import React from "react";
import TeamCard from "../../UI/global_components/Cards/TeamCard/TeamCard";
import './team.css';
const Team = () => {
  return (
    <section className="teamSection">
      <div className="container pt--60 teamDiv" id="scrollspyHeading2">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="member1">
            <TeamCard />
          </div>
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </section>
  );
};

export default Team;
