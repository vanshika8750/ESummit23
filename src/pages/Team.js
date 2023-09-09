import React from "react";
import TeamMember from "../components/TeamMember";
import dummyimg from "../images/dummyimg.png";
import "../css/TeamMember.css";
import punit from '../images/Punit.png';
import shwetansh from "../images/Shwetansh.jpg";
import mayank from "../images/Mayank.jpg";
import gopal from "../images/Gopal.jpg";
import sahil from "../images/Sahil.jpg";
import sohail from "../images/Sohail.jpg";
import tejas from "../images/Tejas.jpg";
import yash from "../images/Yash.jpg";
import shubhangi from "../images/Shubhangi.jpg";
import nitin from "../images/Nitin.jpg";
import akshita from "../images/Akshita.jpg";
import ankita from "../images/Ankita.jpg";
import samridh from "../images/Samridh.jpg";

const Team = () => {
  return (
    <div className="body mb-1">
      <div className="w-[100vw] flex justify-center text-center">
      <div className="text-white text-2xl font-semibold flex justify-center w-3/5 pt-6">
        Let us introduce our fantastic team who are dedicated to achieving our
        goals and making a difference!
      </div>
      </div>
      <div className="flex flex-row justify-center">
        <div data-aos="zoom-in-right" data-aos-duration="500">
          <TeamMember
            image={punit}
            position="PRESIDENT"
            name="Punit palial"
            description="It's an honor to present the brains and heart behind this incredible event, the driving force behind our E Summit"
          />
        </div>

        <div data-aos="zoom-in" data-aos-duration="500">
          <TeamMember
            image={shwetansh}
            position="VICE PRESIDENT"
            name="Shwetansh Dixit"
            description="whose dedication and expertise have been instrumental in shaping this summit into a platform for aspiring entrepreneurs and industry pioneers alike.
"
          />
        </div>

        <div data-aos="zoom-in-left" data-aos-duration="500">
          <TeamMember
            image={mayank}
            position="CTC"
            name="Mayank Majila"
            description="A champion of entrepreneurship and a catalyst for fostering innovation and driving  growth of our summit."
          />
        </div>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        className="flex flex-row justify-center"
      >
        <div div data-aos="zoom-in-right" data-aos-duration="500">
          <TeamMember
            image={gopal}
            position="Co- CTC"
            name="Gopal Gupta "
            description="whose leadership and expertise helped to make this entrepreneurship summit a reality."
          />
        </div>

        <div div data-aos="zoom-in" data-aos-duration="500">
          <TeamMember
            image={samridh}
            position="GEN SECRETARY"
            name="Samridh Pathela"
            description="With unwavering passion and a vision for innovation. A drive to nurture entrepreneurial spirit and paving the way for this summit.
"
          />
        </div>

        <div div data-aos="zoom-in-left" data-aos-duration="500">
          <TeamMember
            image={sahil}
            position="ADMINISTRATIVE HEAD"
            name="Sahil Mishra "
            description="In the world of entrepreneurship, every successful journey needs a captain. The leader who steers the ship of our E summit with passion and expertise.
"
          />
        </div>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        className="flex flex-row justify-center"
      >
        <div div data-aos="zoom-in-right" data-aos-duration="500">
          <TeamMember
            image={sohail}
            position="OPERATION HEAD"
            name="Sohail Ansari "
            description="A leader who passionately operating our events with students towards a future of innovation and business excellence."
          />
        </div>

        <div div data-aos="zoom-in" data-aos-duration="500">
          <TeamMember
            image={akshita}
            position="OUTREACH HEAD"
            name="Akshita Agarwal"
            description="Her skills of communication which helped us to connect and engage with our partners and speakers. The dedication which drive our event towards success 
"
          />
        </div>

        <div div data-aos="zoom-in-left" data-aos-duration="500">
          <TeamMember
            image={shubhangi}
            position="OUTREACH HEAD"
            name="Shubhangi Saini"
            description="Thier skills of communication which helped us to connect and engage with our partners and speakers. The dedication which drive our event towards success "
          />
        </div>
      </div>

      <div
        data-aos="zoom-in-right"
        data-aos-duration="500"
        className="flex flex-row justify-center"
      >
        <div div data-aos="zoom-in-right" data-aos-duration="500">
          <TeamMember
            image={ankita}
            position="DESIGN HEAD"
            name="Ankita Gupta"
            description="Meet the mastermind of aesthetics.
the creative visionary behind our innovative designs.The driving force behind our design excellence.
"
          />
        </div>

        <div div data-aos="zoom-in" data-aos-duration="500">
          <TeamMember
            image={yash}
            position="TECHNICAL HEAD"
            name="Yash Gupta "
            description="Meet the mastermind behind our technical achievements, Who orchestrates our technological advancements with precision and expertise. 
"
          />
        </div>

        <div div data-aos="zoom-in-left" data-aos-duration="500">
          <TeamMember
            image={nitin}
            position="MEDIA HEAD"
            name="Nitin Singh"
            description="Meet the guardian of our media presence,
dynamic visionary at the helm of our media endeavors, steering us toward innovative communication strategies."
          />
        </div>
      </div>

      <div
        data-aos="zoom-in-right"
        data-aos-duration="500"
        className="flex flex-row justify-center"
      >
        <div div data-aos="zoom-in" data-aos-duration="500">
          <TeamMember
            image={tejas}
            position="EDITORIAL HEAD            "
            name="Tejas Jaiswal            "
            description="With the passion and dedication in leading our editorial team to create content that informs, inspires, and captivates our readers.
"
          />
        </div>

      </div>
    </div>
  );
};

export default Team;
