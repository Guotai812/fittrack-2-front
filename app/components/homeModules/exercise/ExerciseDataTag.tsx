import { ReactNode } from "react";
import Image from "next/image";

type ExerciseDataTagProps = {
  iconUrl: string;
  type: "DURATION" | "VOLUME";
  children: ReactNode;
};

export default function ExerciseDataTag({
  iconUrl,
  type,
  children,
}: ExerciseDataTagProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p className="text-3xl">{children}</p>
      <div className="flex items-center justify-between gap-2">
        <Image src={iconUrl} alt="icon" width={16} height={16} />
        <p className="text-muted-foreground">{type}</p>
      </div>
    </div>
  );
}
