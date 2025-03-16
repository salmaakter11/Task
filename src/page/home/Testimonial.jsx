import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Add the autoplay CSS

// Testimonial Data
const testimonials = [
  {
    id: 1,
    text: "“I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Rizz, my hair has grown, thickened, and darkened tremendously.”",
    name: "John Williams",
    position: "Lead Designer",
    image: "assets/image/profile.jfif",
  },
  {
    id: 2,
    text: "“I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Rizz, my hair has grown, thickened, and darkened tremendously.”",
    name: "John Williams",
    position: "Lead Designer",
    image: "assets/image/profile.jfif",
  },
  {
    id: 3,
    text: "“I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Rizz, my hair has grown, thickened, and darkened tremendously.”",
    name: "John Williams",
    position: "Lead Designer",
    image: "assets/image/profile.jfif",
  },
  {
    id: 4,
    text: "“I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Rizz, my hair has grown, thickened, and darkened tremendously.”",
    name: "John Williams",
    position: "Lead Designer",
    image: "assets/image/profile.jfif",
  },
  {
    id: 5,
    text: "“I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Rizz, my hair has grown, thickened, and darkened tremendously.”",
    name: "John Williams",
    position: "Lead Designer",
    image: "assets/image/profile.jfif",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-area mb-5">
      <h2 className="mt-4 text-center">
        Hear What <span style={{ color: "#f4c430" }}>Rizz</span> Patients Have To Say
      </h2>
      <div className="mt-5">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 1000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            600: { slidesPerView: 2 },
            1000: { slidesPerView: 4 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card">
                <p>{testimonial.text}</p>
                <div className="stars">★★★★★</div>
                <div className="d-flex align-items-center justify-content-center">
                  <div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="profile-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="ms-3 text-center">
                    <h5 className="mb-0">{testimonial.name}</h5>
                    <p className="text-muted mb-0">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
