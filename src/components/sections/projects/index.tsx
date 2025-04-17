import { Project } from "@/types";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import ProjectCard from "@/components/sections/projects/ProjectCard";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useNav} from "@/components/hooks/useNav";

const Index = ({projects} : {projects: Project[]}) => {
  const ref = useNav("projects")
  return (
        <section className="projects section" id="projects" ref={ref}>
          <h2 className="section__title">Projects</h2>
          <span className="section__subtitle">Most recent work</span>

          <div className="container section__border">
            <Swiper className="projects__container swiper"
                    modules={[Navigation, Pagination, Keyboard]}
                  spaceBetween={24}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                  }}
                  pagination={{el: ".swiper-pagination", clickable: true}}
                    keyboard={{onlyInViewport: true}}

                  breakpoints={{
                    1200: {
                      slidesPerView: 2,
                      spaceBetween: 56,
                    }
                  }}
                  loop={true}
              >
              <div className="swiper-wrapper">
                  {projects.map((project) => (
                      <SwiperSlide className="projects__content swiper-slide" style={{display: 'grid'}} key={project.id}>
                        <ProjectCard project={project} />
                      </SwiperSlide>))
                  }
              </div>

              {/*Swiper arrows*/}
              <div className="swiper-button-next">
                <i className="ri-arrow-right-s-line"></i>
              </div>

              <div className="swiper-button-prev">
                <i className="ri-arrow-left-s-line"></i>
              </div>
              {/*Swiper pagination*/}
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </section>)
};

export default Index;
