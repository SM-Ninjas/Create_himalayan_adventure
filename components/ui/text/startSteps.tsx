interface StartStepsProps {
  number: number;
  text: string;
  title: string;
}

const StartSteps = ({ number, text, title }: StartStepsProps) => (
  <div className={`flex flex-row items-center justify-center gap-4`}>
    <div
      className={`flex h-[70px] w-[70px] items-center justify-center rounded-lg bg-blue-600 bg-opacity-20 backdrop-blur-sm`}
    >
      <p className="text-md font-bold text-white">0{number}</p>
    </div>
    <div className="flex flex-1 flex-col gap-y-2">
      <p className="font-bold leading-tight text-gray-100">{title}</p>
      <p className="small-text flex-1 font-normal leading-tight text-gray-300">
        {text}
      </p>
    </div>
  </div>
);

export default StartSteps;
