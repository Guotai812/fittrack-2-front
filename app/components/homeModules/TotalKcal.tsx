import { Span } from "next/dist/trace";
import Image from "next/image";

type TotalKcalProps = {
  kcal: number;
};

export default function TotalKcal({ kcal }: TotalKcalProps) {
  return (
    <div className="flex justify-start gap-8 mt-8">
      <div className="text-5xl">
        {kcal}
        <span className="text-xl mx-2">kcal</span>
      </div>
      <Image src="/fire.svg" alt="arrow icon" width={24} height={24} />
    </div>
  );
}
