"use client"

import Link from "next/link"
import Image from "next/image"

// shadcn/ui components
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/components/ui/drawer"

// lucide-react icons
import { Search, ShoppingCart, User, Menu } from "lucide-react"
import logo from '@/static/logo.png'

export function SiteHeader() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="container mx-auto flex h-16 items-center px-4 space-x-4">
        {/* Mobile Drawer Icon on the left */}
        <div className="block sm:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerClose asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-4"
                >
                  <span className="sr-only">Close</span>
                </Button>
              </DrawerClose>
              <div className="p-4">
                <h2 className="text-lg font-bold">Menu</h2>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      Yu-Gi-Oh!
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Magic
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Pokémon
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Cardfight!! Vanguard
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Weiß Schwarz
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      More
                    </a>
                  </li>
                </ul>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 p-2">
          <h2 className="text-center font-bold hidden md:block">
            WitchCraft <br />Player
          </h2>
          <Image
            src={logo}
            alt="Site Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </Link>

        {/* Desktop Search Bar (only on sm and up) */}
        <div className="flex-1 hidden sm:block">
          <div className="relative w-full">
            <Input type="text" placeholder="Search..." className="pr-10" />
            <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right Side: Sign in, Wishlist, Cart (always visible) */}
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/cart" className="hover:underline">
            <ShoppingCart className="h-5 w-5" />
          </Link>
          <Link href="/sign-in" className="flex items-center space-x-1 hover:underline">
            <User className="h-4 w-4" />
            <span>Sign in</span>
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar (visible below header on mobile) */}
      <div className="sm:hidden bg-white px-4 py-2">
        <div className="relative w-full">
          <Input type="text" placeholder="Search..." className="pr-10" />
          <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:block bg-gray-900 text-white py-4 dark:bg-slate-600">
        <div className="container mx-auto">
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Yu-Gi-Oh!
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Magic
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pokémon
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cardfight!! Vanguard
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Weiß Schwarz
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                More
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
