import Skill from "@/components/sections/skills/Skill";
import {SkillSetProps} from "@/types";
import Image from "next/image";
import skill from "@/components/sections/skills/Skill";
import {useEffect, useState} from "react";
import Modal from "@/components/ui/Modal";
import {AnimatePresence} from "framer-motion";
import {MoreItems} from "@/components/sections/skills/MoreItems";
import SvgImage from "@/components/ui/SvgImage";

const SkillSet = ({title, iconName, skills, filters}: SkillSetProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const filteredSkills = skills.filter((skill) => !skill.tags.length || skill.tags.some((tag) => filters.includes(tag)))
    .sort((a,b) => {
      if(filters.length && a.tags.includes(filters.at(-1)!) && !b.tags.includes(filters.at(-1)!)){
        return -1;
      }
      return 1
    })
  const skillsToRender = filteredSkills.length > 8 ? filteredSkills.slice(0, 7) : filteredSkills;

  return <div className="skills__content">
    <h3 className="skills__title">
      <i className={iconName}></i> {title}
    </h3>

    <div className="skills__info">
      {skillsToRender.map(skill => (
          <Skill key={`${title}-${skill.name}`} name={skill.name} imageName={skill.imageName}/>
        ))}
      {filteredSkills.length > 8 && <button className={"skills__more-items"}
               onClick={() => setIsModalOpen(true)}><MoreItems count={filteredSkills.length - 7} /></button>}
      <AnimatePresence>
        {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}>
            <h3 className="skills__title">
                <i className={iconName}></i> {title}
            </h3>
            <div className="skills__info">
              {filteredSkills.map((skill) => (
                <Skill key={`${title}-${skill.name}`} name={skill.name} imageName={skill.imageName}/>
              ))}
            </div>
        </Modal>}
      </AnimatePresence>
    </div>
  </div>
}

export default SkillSet;