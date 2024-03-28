import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="h-full lg:pl-[256px] pt-[50px] lg:pt-0">
        <div className="h-full">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
