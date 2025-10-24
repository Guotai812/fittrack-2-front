type WeightTagProps = {
  footer: string;
  weight: number;
};

export default function WeightTag({ weight, footer }: WeightTagProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <p className="text-4xl">{weight.toFixed(1)}</p>
      <p className="text-lg">{footer}</p>
    </div>
  );
}
