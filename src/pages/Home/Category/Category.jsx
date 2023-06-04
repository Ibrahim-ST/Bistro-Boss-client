import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="my-12">
      <SectionTitle
        subHeading={"From 11:00AM to 10:00PM"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="rounded h-full absolute">
          <img className="rounded" src={slide1} alt="" />
          <h3 className="text-4xl relative bottom-16 uppercase text-center text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded" src={slide2} alt="" />
          <h3 className="text-4xl relative bottom-16 uppercase text-center text-white">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded" src={slide3} alt="" />
          <h3 className="text-4xl relative bottom-16 uppercase text-center   text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded" src={slide4} alt="" />
          <h3 className="text-4xl relative bottom-16 uppercase text-center   text-white">
            Dessert
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded" src={slide5} alt="" />
          <h3 className="text-4xl relative bottom-16 uppercase text-center   text-white">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
