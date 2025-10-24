type MealKcalProps = {
  mealTime: "BREAKFAST" | "LUNCH" | "DINNER";
  kcal?: number;
};

export default function MealKcal({ mealTime, kcal }: MealKcalProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p className="text-3xl">
        {kcal === null ? "- -" : kcal} <span className="text-sm">kcal</span>
      </p>
      <p className="text-muted-foreground">{mealTime}</p>
    </div>
  );
}
