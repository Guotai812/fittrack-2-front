import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto h-screen max-w-7xl p-4 sm:p-6 lg:p-8 ${className}`}
    >
      {children}
    </div>
  );
}