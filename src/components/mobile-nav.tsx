import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/constant/nav-items";

export default function MobileSidebar() {
  return (
    <aside className="block md:hidden h-full">
      <Sheet  >
        <SheetTrigger className="flex items-center">
          <Menu size={22} />
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>
                <img className="max-sm:w-32" src="/girman-logo.png" width={180} height={62} alt="Girman Logo" />
            </SheetTitle>
          </SheetHeader>
          <SheetDescription>

            <ul className="flex flex-col items-start gap-7 h-full mt-10">
                {
                    navItems?.map((item, index) => {
                        return (
                            <li key={index} className="hover:text-blue-500 hover:underline hover:font-semibold" > <a href={item.href} target={item.newTab ? "_blank" : "_self"} > {item.name} </a></li>
                        )
                    })
                }
               </ul> 
            </SheetDescription>
        </SheetContent>
      </Sheet>
    </aside>
  );
}
