export default function WeightProcess() {
  const weight = 2.6;
  const isGainWeight = true;
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-55 h-55 rounded-full [background:linear-gradient(180deg,rgba(64,209,42,0.2)_0%,rgba(64,209,42,0)_60%,rgba(64,209,42,0)_100%)]">
      <p className="text-4xl font-bold">{weight.toFixed(1)}</p>
      <p className="text-base font">{isGainWeight ? "GAINED (KG)" : "LOST (KG)"}</p>
    </div>
  );
}
