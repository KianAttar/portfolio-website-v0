import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import TestimonialCard from "@/components/sections/testimonials/TestimonialCard";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Testimonial} from "@/types";

const TestimonialSection = ({testimonials} : {testimonials: Testimonial[]}) => {
    return <section className="testimonial section">
        <h2 className="section__title">Testimonial</h2>
        <span className="section__subtitle">My client saying</span>

        <div className="container section__border">
            <Swiper className="testimonial__container swiper"
                    modules={[Navigation, Pagination, Keyboard]}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }}
                    keyboard={{onlyInViewport: true}}
                    loop={true}
            >
                <div className="swiper-wrapper">
                    {testimonials.map((testimonial) => (
                        <SwiperSlide className="testimonial__content swiper-slide" key={testimonial.id}>
                            <TestimonialCard testimonial={testimonial} />
                        </SwiperSlide>
                    ))}
                </div>
                {/*Swiper arrows*/}
                <div className="swiper-button-next">
                    <i className="ri-arrow-right-s-line"></i>
                </div>

                <div className="swiper-button-prev">
                    <i className="ri-arrow-left-s-line"></i>
                </div>
            </Swiper>
        </div>

        <Image src="img/shape-wawes.svg" alt="" className="testimonial__img" width={256} height={256} />
    </section>
}

export default TestimonialSection;