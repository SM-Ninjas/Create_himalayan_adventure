import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css';

// Dummy team data
const teamData = [
  {
    id: 1,
    member_name: "Ram Chandra Lamichhane",
    Mem_position: "Director",
    MemberImg: "/images/team/ram_chandra_lamichhane.jpg"
  },
  {
    id: 2,
    member_name: "Jane Smith",
    Mem_position: "Accountant",
    MemberImg: "/images/team/accountant.jpg"
  },
  {
    id: 3,
    member_name: "Mari engh",
    Mem_position: "Foreign Consultant",
    MemberImg: "/images/team/mary.jpg"
  },
  {
    id: 4,
    member_name: "Nawaraj Bhatta",
    Mem_position: "Advisor",
    MemberImg: "/images/team/advisor.jpg"
  },
  
];

function OurTeam() {
  const [team] = useState(teamData);

  return (
    <div className="container mx-auto p-4" data-aos="fade-up">
      <div className="mt-6">
        <div className="bg-utils flex justify-center h-[160px]">
          <h1 className="text-[2rem] font-bold text-black mbl:text-[18px]">
            Meet The Team
          </h1>
        </div>
        <div className="relative bottom-[90px]">
          <div className="flex justify-center flex-wrap tl:items-center tl:flex-col mbl:flex-col mbl:items-center">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="w-full mbl:w-[90%] lp:w-[80%]"
            >
              {team.map((teamMember) => (
                <SwiperSlide key={teamMember.id}>
                  <div className="m-2 text-center">
                    <img
                      src={teamMember.MemberImg}
                      alt={teamMember.member_name}
                      className="rounded-[8px] w-[450px] h-[380px] object-cover mbl:h-[200px]"
                    />
                    <h1 className="text-utils subtitle-text mt-2 opacity-[0.6] mbl:text-[16px]">
                      {teamMember.member_name}
                    </h1>
                    <h1 className="text-utils regular-text mt-2 mbl:text-[16px]">
                      {teamMember.Mem_position}
                    </h1>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
