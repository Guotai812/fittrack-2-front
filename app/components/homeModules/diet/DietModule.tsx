import DietExModuleTemp from "../DietExModuleTemp";
import MealKcalTag from "./MealKcalTag";

type DietModuleProps = React.HTMLAttributes<HTMLDivElement>;

export default function DietModule({ ...props }: DietModuleProps) {
  return (
    <DietExModuleTemp kcal={200} className="justify-between gap-6"{...props}>
      <MealKcalTag mealTime="BREAKFAST" kcal={200} />
      <MealKcalTag mealTime="LUNCH" kcal={500} />
      <MealKcalTag mealTime="DINNER" kcal={200} />
    </DietExModuleTemp>
  );
}
