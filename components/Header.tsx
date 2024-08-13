import Link from "next/link";

import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl text-accent font-semibold">MedEasy</h1>
        </Link>

        <div className="hidden lg:flex xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="bg-accent hover:bg-hover hover:text-black/80 ">
              Sign In
            </Button>
          </Link>
        </div>
        <div className="xl:hidden lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
