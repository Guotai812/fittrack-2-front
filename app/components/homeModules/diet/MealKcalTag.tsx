type MealKcalTagProps = {
  mealTime: "BREAKFAST" | "LUNCH" | "DINNER";
  kcal?: number;
};

export default function MealKcalTag({ mealTime, kcal }: MealKcalTagProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p className="text-3xl">
        {kcal === null ? "- -" : kcal}<span className="text-sm">kcal</span>
      </p>
      <p className="text-muted-foreground">{mealTime}</p>
    </div>
  );
}
