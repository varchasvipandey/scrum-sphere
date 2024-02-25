"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SideNav } from "../";
import { getIcon } from "@/components/icons";
import { useState } from "react";

const MenuIcon = getIcon("menu");

export const SideNavDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnOpenChange = (isOpen: boolean) => setIsOpen(isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={handleOnOpenChange}>
      <SheetTrigger asChild>
        <Button variant="text" className="p-0" aria-label="Open org menu">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="xs:w-[240px] w-[320px]">
        <div className="mt-4">
          <SideNav onItemClick={closeMenu} />
        </div>
      </SheetContent>
    </Sheet>
  );
};
