import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="">
      <Header />

      <div className="flex gap-5 container  mx-auto ">
        <Sidebar />
        {children}
      </div>
    </main>
  );
}
