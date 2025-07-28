import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <span
      onClick={onClick}
      className="inline-block bg-gray-200 hover:bg-gray-300 text-sm text-gray-700 px-4 py-1 rounded-full cursor-pointer transition"
    >
      {label}
    </span>
  );
};

export default Pill;
