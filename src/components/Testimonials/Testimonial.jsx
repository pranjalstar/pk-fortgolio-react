import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        " Pranjal, your work looks great! It is clear that you care about your work, and I appreciate that you asked the client about their design preferences before creating their website."
    },
    {
      img: profilePic2,
      review:
        "Promoting you to lead Web designer was the best choice for our company. I am glad to see you are challenging yourself and are open to more responsibilities. Management knew your strong attention to detail would make you the right candidate for this role",
    },
    {
      img: profilePic3,
      review:
        "I am pleased with your determination to finish this project. Your helpful attitude shows you are ready to take on new challenges and grow with the company.",
    },
    {
      img: profilePic4,
      review:
        " Thank you for putting in the extra effort during this busy time. The client truly appreciates it and your positive attitude has helped us all stay motivated.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
