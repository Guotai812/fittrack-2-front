"use client";
import Module from "../../ui/Module";
import CalorieGauge from "./CalorieGauge";

type CalorieModuleProps = React.HTMLAttributes<HTMLDivElement>;

export default function CalorieModule({ ...props }: CalorieModuleProps) {
  return (
    <Module title="COLORIE" {...props}>
      <div className="flex items-center justify-center">
        <CalorieGauge total={3200} consumed={1200} />
      </div>
    </Module>
  );
}
