import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";

interface ShopLayoutProps {
  children: React.ReactNode;
}

const ShopLayout = ({ children }: ShopLayoutProps) => {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="h-full lg:pl-[256px] pt-[50px] lg:pt-0">
        <div className="h-full max-w-[1056px] mx-auto pt-6">{children}</div>
      </main>
    </>
  );
};

export default ShopLayout;
