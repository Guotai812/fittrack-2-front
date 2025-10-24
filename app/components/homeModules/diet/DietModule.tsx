import DietExModuleTemp from "../DietExModuleTemp";
import MealKcal from "./MealKcal";

type DietModuleProps = React.HTMLAttributes<HTMLDivElement>;

export default function DietModule({ ...props }: DietModuleProps) {
  return (
    <DietExModuleTemp kcal={200} {...props}>
      <MealKcal mealTime="BREAKFAST" kcal={200} />
      <MealKcal mealTime="LUNCH" kcal={500} />
      <MealKcal mealTime="DINNER" kcal={200} />
    </DietExModuleTemp>
  );
}
