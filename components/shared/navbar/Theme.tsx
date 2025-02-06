"use client";
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import { themes } from "@/constants";
const Theme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Menubar className=' relative border-none bg-transparent shadow-none'>
      <MenubarMenu>
        <MenubarTrigger className=' focus-within:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-160 dark:data-[state=open]:bg-dark-200'>
          {theme === "light" ? (
            <Image
              src='/assets/icons/sun.svg'
              alt='light'
              width={20}
              height={20}
              className='active-theme'
            />
          ) : (
            <Image
              src='/assets/icons/moon.svg'
              alt='light'
              width={20}
              height={20}
              className='active-theme'
            />
          )}
        </MenubarTrigger>
        <MenubarContent className=' absolute right-[-4rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300 '>
          {themes.map((item) => (
            <MenubarItem key={item.value}>
              <Image
                src={item.icon}
                alt={item.label}
                width={16}
                height={16}
                className={`${theme === item.value && "active-theme"}`}
              />
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
