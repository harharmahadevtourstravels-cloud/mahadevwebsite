import { ReactNode } from "react";
import { MarketingShell } from "./_components/marketing-shell";

type MarketingLayoutProps = {
  children: ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return <MarketingShell>{children}</MarketingShell>;
}
