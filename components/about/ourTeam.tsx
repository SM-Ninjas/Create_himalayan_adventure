import next from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Pagination from "swiper";
// import 'swiper/swiper-bundle.min.css';

// Dummy team data
export const teamData = [
  {
    id: 1,
    member_name: "Ram Chandra Lamichhane",
    Mem_position: "Director",
    MemberImg: "/images/team/ram_chandra_lamichhane.jpg",
    bio: "Ram is the Director of Create Himalaya Adventure, with over 15 years of experience in the trekking and adventure tourism industry. He has led numerous expeditions across Nepal, specializing in high-altitude trekking and peak climbing.",
    experience: "15+ years",
    email: "ram@example.com",
  },
  {
    id: 2,
    member_name: "Sanju Bhatta",
    Mem_position: "Accountant",
    MemberImg: "/images/team/accountant.jpg",
    bio: "Sanju manages the finances at Create Himalaya Adventure. With a background in accounting and financial management, she ensures that the company operates smoothly and efficiently.",
    experience: "8 years",
    email: "sanju@example.com",
  },
  {
    id: 3,
    member_name: "Mari Engh",
    Mem_position: "Foreign Consultant",
    MemberImg: "/images/team/mary.jpg",
    bio: "Mari is an experienced consultant who advises Create Himalaya Adventure on matters related to international tourism, ensuring that the company meets global standards and provides the best services to foreign clients.",
    experience: "12 years",
    email: "mari@example.com",
  },
  {
    id: 4,
    member_name: "Nawaraj Bhatta",
    Mem_position: "Advisor",
    MemberImg: "/images/team/advisor.jpg",
    bio: "Nawaraj is a senior advisor with a deep understanding of Nepal's trekking routes and cultural heritage. His advice has been instrumental in developing unique trekking packages.",
    experience: "20 years",
    email: "nawaraj@example.com",
  }
];

function OurTeam() {
  const [team] = useState(teamData);
  const router = useRouter();

  return (
    <div className="container mx-auto p-4 mt-8" data-aos="fade-up">
      <div className="mt-6">
        <div className="bg-utils flex justify-center h-[60px]">
          <h1 className="title-text text-black mbl:text-[18px]">
            Meet The Team
          </h1>
        </div>
        <div className="relative">
          <div className="flex justify-center flex-wrap tl:items-center tl:flex-col mbl:flex-col mbl:items-center">
            <Swiper
              spaceBetween={50}
               pagination={{
                clickable: true, // Enable clickable pagination dots
              }}
              slidesPerView={4}
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
                  <div
                    onClick={() => router.push(`/team/${teamMember.id}`)}
                    className="m-2 text-center cursor-pointer"
                  >
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
