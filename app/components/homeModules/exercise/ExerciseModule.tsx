import DietExModuleTemp from "../DietExModuleTemp";
import ExerciseDataTag from "./ExerciseDataTag";

type ExerciseModuleProps = React.HTMLAttributes<HTMLDivElement>;

export default function ExerciseModule({ ...props }: ExerciseModuleProps) {
  const h = 3;
  const m = 20;
  const volume = 18021;
  return (
    <DietExModuleTemp
      type={"EXERCISE"}
      kcal={200}
      className="justify-center gap-32"
      {...props}
    >
      <ExerciseDataTag iconUrl="/clock.svg" type="DURATION">
        {h}
        <span className="text-sm">h</span>
        {m}
        <span className="text-sm">min</span>
      </ExerciseDataTag>
      <ExerciseDataTag iconUrl="/volume.svg" type="VOLUME">
        {volume}
        <span className="text-sm">kg</span>
      </ExerciseDataTag>
    </DietExModuleTemp>
  );
}
