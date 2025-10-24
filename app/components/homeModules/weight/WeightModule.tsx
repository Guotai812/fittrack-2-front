import Module from "../../ui/Module";
import Image from "next/image";
import WeightProcess from "./WeightProcess";
import WeightTag from "./WeightTag";

type WeightModuleProps = React.HTMLAttributes<HTMLDivElement>;

export default function WeightModule({ ...props }: WeightModuleProps) {
  return (
    <Module title="WEIGHT" {...props}>
      <div className="flex justify-between">
        <WeightTag weight={80.1} footer="CURRENT"/>
        <WeightProcess />
        <WeightTag weight={70.6} footer="TARGET"/>
      </div>
    </Module>
  );
}
