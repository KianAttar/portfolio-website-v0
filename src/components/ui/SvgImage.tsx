import Image from "next/image"
const SvgImage = ({ name, dataset }: { name: string; dataset?: any }) => {
  return (
    <Image src={`/img/${name}.svg`} width={40} height={40} alt={`${name} logo`}/>
  );
};

export default SvgImage;