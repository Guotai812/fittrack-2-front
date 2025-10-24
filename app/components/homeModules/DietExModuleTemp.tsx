import { ReactNode } from "react";
import Module from "../ui/Module";
import TotalKcal from "./TotalKcal";

type DietExModuleTempProps = React.HTMLAttributes<HTMLDivElement> & {
  kcal: number;
  children: ReactNode;
  type: "DIET" | "EXERCISE";
  className?: string;
};

export default function DietExModuleTemp({
  kcal,
  children,
  type,
  className,
  ...props
}: DietExModuleTempProps) {
  return (
    <Module title={type} {...props}>
      <div className="flex flex-col justify-center gap-8">
        <TotalKcal kcal={kcal} />
        <div className={`flex items-center ${className}`}>{children}</div>
      </div>
    </Module>
  );
}
