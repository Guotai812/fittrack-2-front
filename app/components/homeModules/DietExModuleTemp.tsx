import { ReactNode } from "react";
import Module from "../ui/Module";
import TotalKcal from "./TotalKcal";

type DietExModuleTempProps = React.HTMLAttributes<HTMLDivElement> & {
  kcal: number;
  children: ReactNode;
  className?: string;
};

export default function DietExModuleTemp({
  kcal,
  children,
  className,
  ...props
}: DietExModuleTempProps) {
  return (
    <Module title="DIET" {...props}>
      <div className="flex flex-col justify-center gap-8">
        <TotalKcal kcal={kcal} />
        <div className={`flex items-center ${className}`}>{children}</div>
      </div>
    </Module>
  );
}
