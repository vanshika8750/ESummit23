import React from 'react'
import TeamMember from '../components/TeamMember'
import dummyimg from "../images/dummyimg.png";
import "../css/TeamMember.css";

const Team = () => {
  return (
    <div className='body mb-1'>
        <div className='text-white text-2xl font-semibold mx-20 pt-6'>Let us introduce our fantastic team who are dedicated to achieving our goals and making a difference!
</div>
<div className='flex flex-row justify-center'>
<TeamMember 
image={dummyimg}
position="PRESIDENT"
name="Punit palial"
description="It's an honor to present the brains and heart behind this incredible event, the driving force behind our E Summit"
/>

<TeamMember 
image={dummyimg}
position="VICE PRESIDENT"
name="Shwetansh Dixit"
description="whose dedication and expertise have been instrumental in shaping this summit into a platform for aspiring entrepreneurs and industry pioneers alike.
"
/>

<TeamMember 
image={dummyimg}
position="CTC"
name="Mayank Majila"
description="A champion of entrepreneurship and a catalyst for fostering innovation and driving  growth of our summit."
/>
</div>

<div className='flex flex-row justify-center'>
<TeamMember 
image={dummyimg}
position="Co- CTC"
name="Gopal Gupta "
description="whose leadership and expertise helped to make this entrepreneurship summit a reality."
/>

<TeamMember 
image={dummyimg}
position="GEN SECRETARY"
name="Samridh Pathela"
description="With unwavering passion and a vision for innovation. A drive to nurture entrepreneurial spirit and paving the way for this summit.
"
/>

<TeamMember 
image={dummyimg}
position="ADMINISTRATIVE HEAD"
name="Sahil Mishra "
description="In the world of entrepreneurship, every successful journey needs a captain. The leader who steers the ship of our E summit with passion and expertise.
"
/>
</div>

<div className='flex flex-row justify-center'>
<TeamMember 
image={dummyimg}
position="OPERATION HEAD"
name="Sohail Ansari "
description="A leader who passionately operating our events with students towards a future of innovation and business excellence."
/>

<TeamMember 
image={dummyimg}
position="OUTREACH HEAD"
name="Akshita Agarwal"
description="Her skills of communication which helped us to connect and engage with our partners and speakers. The dedication which drive our event towards success 
"
/>

<TeamMember 
image={dummyimg}
position="OUTREACH HEAD"
name="Shubhangi Saini"
description="Thier skills of communication which helped us to connect and engage with our partners and speakers. The dedication which drive our event towards success "
/>
</div>

<div className='flex flex-row justify-center'>
<TeamMember 
image={dummyimg}
position="DESIGN HEAD"
name="Ankita Gupta"
description="Meet the mastermind of aesthetics.
the creative visionary behind our innovative designs.The driving force behind our design excellence.
"
/>

<TeamMember 
image={dummyimg}
position="TECHNICAL HEAD"
name="Yash Gupta "
description="Meet the mastermind behind our technical achievements, Who orchestrates our technological advancements with precision and expertise. 
"
/>

<TeamMember 
image={dummyimg}
position="MEDIA HEAD"
name="Nitin Singh"
description="Meet the guardian of our media presence,
dynamic visionary at the helm of our media endeavors, steering us toward innovative communication strategies."
/>
</div>
    </div>
  )
}

export default Team