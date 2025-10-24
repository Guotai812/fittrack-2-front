import Container from "./components/Container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Module from "./components/Module";

export default function Home() {
  return (
    <Container className="">
      <div className="flex flex-col items-center justify-center gap-6 mb-18">
        <Avatar className="w-24 h-24">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-3xl">Welcome, Guest</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12">
        <Module title="CALORIES"/>
        <Module title="WEIGHT"/>
        <Module title="DIET"/>
        <Module title="EXERCISE"/>
      </div>
    </Container>
  );
}
