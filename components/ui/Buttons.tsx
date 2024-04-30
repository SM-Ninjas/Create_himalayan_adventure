interface ButtonProps {
  customColor?: string;
  text: string;
}

const Buttons = ({ customColor, text }: ButtonProps) => {
  return (
    <button
      className={`inline-block min-w-fit rounded-full px-6 py-3 text-sm font-thin transition duration-300
          ease-in-out ${
            customColor ??
            "border-[1px] border-[#ffffff8f] hover:bg-white hover:text-black"
          } `}
    >
      {text}
    </button>
  );
};

export default Buttons;
