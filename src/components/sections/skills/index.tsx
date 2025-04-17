import {useNav} from "@/components/hooks/useNav";
import {SkillSet as SkillSetType} from "@/types"
import SkillSet from "@/components/sections/skills/SkillSet";
import {useState} from "react";
import Filters from "@/components/sections/skills/Filters";

const Skills = ({skillSets}: { skillSets: SkillSetType[]}) => {
    const ref = useNav("skills")
    const [filters, setFilters] = useState<string[]>(["javascript"]);

    return <section className="skills section" id="skills" ref={ref}>
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My favorite technologies</span>
        <Filters filters={filters} setFilters={setFilters} />
        <div className="skills__container container grid section__border">
            {skillSets.map((skillSet) => <SkillSet title={skillSet.title} key={skillSet.title} iconName={skillSet.iconName} skills={skillSet.skills} filters={filters} />)}
        </div>
    </section>
}

export default Skills;