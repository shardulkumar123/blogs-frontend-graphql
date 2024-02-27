import { IButton } from "@/interfaces";

const Button = ({ label }: IButton) => {
  return (
    <div className="w-1/3">
      <button className="border border-slate-500 bg-slate-500 p-1 w-full text-white rounded-lg">
        {label}
      </button>
    </div>
  );
};

export default Button;
