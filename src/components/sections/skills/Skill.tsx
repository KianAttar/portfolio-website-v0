import {SkillProps} from "@/types";
import SvgImage from "@/components/ui/SvgImage";

const Skill = ({name, imageName}: SkillProps) => {
  return <div className="skills__data">
    <div className="skills__blob">
      {<SvgImage name={imageName} key={`${name}-${imageName}`} />}
    </div>

    <h3 className="skills__name">
      {name.split(" ").map((word, index) => (
        <span className="one-line-span" key={word}>{word}</span>
      ))}
    </h3>
  </div>
}

export default Skill;