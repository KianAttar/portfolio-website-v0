interface FiltersProps {
  filters: string[];
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

const filteredTags = [
  { label: "JavaScript Stack", value: "javascript" },
  { label: "Python Stack", value: "python" },
  { label: "AI Integration", value: "ai" },
];

const Filters: React.FC<FiltersProps> = ({ filters, setFilters }) => {
  const toggleFilter = (filter: string) => {
    setFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  return (
    <div className="skills__filters">
      {filteredTags.map((tag) => (
        <button
          key={tag.value}
          onClick={() => toggleFilter(tag.value)}
          className={`${filters.includes(tag.value) ? '' : 'inactive'}`}
        >
          {tag.label}
        </button>
      ))}
    </div>
  );
};

export default Filters;