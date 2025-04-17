import {useNav} from "@/components/hooks/useNav";
import Image from "next/image";
import Link from "next/link";
const Qualification = () => {
  const ref = useNav("qualification")
  return <section className="qualification section" id="qualification" ref={ref}>
    <h2 className="section__title">Qualification</h2>
    <span className="section__subtitle">Experience & education</span>

    <div className="qualification__container container grid section__border">
      {/*==================== QUALIFICATION 1 ====================*/}
      <div className="qualification__content">
        <h3 className="qualification__title">
          <i className="ri-pencil-ruler-2-line"></i> Education
        </h3>

        <div className="qualification__info">
          {/* <div>
            <h3 className="qualification__name">
              Continuous Learning
            </h3>
            <span className="qualification__country">
              MIT OpenCourseWare, Standford Online, Udemy
            </span>
            <span className="qualification__year">2020 - Present</span>
          </div> */}
          <div>
            <h3 className="qualification__name">
              Diploma In Computer Science
            </h3>
            <span className="qualification__country">Langara College - Canada</span>
            <span className="qualification__year">2022 - 2024</span>
          </div>
        </div>
      </div>

      {/*==================== QUALIFICATION 2 ====================*/}

      <div className="qualification__content">
        <h3 className="qualification__title">
          <i className="ri-building-line"></i> Work
        </h3>
        <div className="qualification__info">
        <div>
            <h3 className="qualification__name">
              Software Developer
            </h3>
            <span className="qualification__country">Freelance &mdash; Canada/USA</span>
            <span className="qualification__year">2023 - Present</span>
          </div>

          <div>
            <h3 className="qualification__name">
              Computer Science Lab Assistant
            </h3>
            <span className="qualification__country">Langara College &mdash; Canada</span>
            <span className="qualification__year">2024 - Present</span>
          </div>

          <div>
            <h3 className="qualification__name">
              IT Admin
            </h3>
            <span className="qualification__country">Abniye Sazan - Iran</span>
            <span className="qualification__year">2017 - 2022</span>
          </div>
        </div>
      </div>
    </div>

    <Image src="/img/shape-circle.svg" alt="qualification image" className="qualification__img" width={256}
           height={256}/>
  </section>
}

export default Qualification;