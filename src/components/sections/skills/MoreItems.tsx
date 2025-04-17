import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0.1, scale: 0 },
  visible: {
    opacity: 0.75,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  },
  whileHover: {
    scale: 1.05,
    rotate: 7,  // Slight rotation
    opacity: 1,  // Slightly reduce opacity
    transition: {
      type: "spring",
      stiffness: 300
    },
    delayChildren: 3000,
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  },
  whileHover: {
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 300
    },
  }
};

type MoreItemsProps = {
  count: number
}

export const MoreItems = ({ count }: MoreItemsProps) => {
  return <div className="skills__data">
    <div className="skills__blob">
      <motion.ul
        key={count} //change in count will cause re-render
        className={`container ${count === 2 ? "two" : (count === 3 ? "three" : "")}`}
        variants={container}
        initial="hidden"
        animate="visible"
        whileHover="whileHover" // Apply hover effect to the entire ul
      >
        {Array.from({length: count > 4 ? 4 : count}, (_, index) => (
          <motion.li
            key={index}
            className="item"
            variants={item}
          />
        ))}
      </motion.ul>
    </div>

    <h3 className="skills__name">
      {`+${count} more`}
    </h3>
  </div>
}
