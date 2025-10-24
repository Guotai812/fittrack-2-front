import { Card } from "@/components/ui/card";

type ModuleProps = {
  children?: React.ReactNode;
  title?: string;
};

export default function Module({ title, children }: ModuleProps) {
  return (
    <Card className="text-white w-[550px] h-[250px] bg-gradient-to-r from-[#FOFFF0]/100 to-[#FOFFF0]/50 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl py-6 px-8">
      <div className="text-md">{title}</div>
      {children}
    </Card>
  );
}
