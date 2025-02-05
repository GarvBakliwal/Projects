import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: 'Garv',
    lastName: 'Bakliwal'
  };
  return (
    <main className="flex w-full h-screen font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex flex-col size-full">
          <div className="root-layout">
          <Image
          src='/icons/logo.svg'
          alt='Menu Icon'
          width={30}
          height={30}/>
          <div>
            <MobileNavbar user={loggedIn}/>
          </div>
          </div>
      {children}
      </div>
    </main>
  );
}
