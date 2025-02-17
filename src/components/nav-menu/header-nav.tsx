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

// lucide-react icons
import { Search, ShoppingCart, User } from "lucide-react"

export function SiteHeader() {
  return (
    <div className="custom-dashed bg-white">
      <div className="container mx-auto flex h-16 items-center px-4 space-x-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 p-2">
          <h2 className="text-center font-bold">WitchCraft <br />Player</h2>
          <Image
            src="/logo.png"
            alt="Site Logo"
            width={100}
            height={100}
            className="object-contain"
          />
          {/* Optionally, a text brand name next to the logo */}
          {/* <span className="font-bold">MyTCG</span> */}
        </Link>

        {/* Category Select + Search */}
        <div className="flex items-center space-x-2 flex-1">
          {/* Category Dropdown */}
          <Select>
            <SelectTrigger className="w-[80px]">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="cards">Cards</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
            </SelectContent>
          </Select>

          {/* Search Bar with Icon */}
          <div className="relative w-full">
            <Input type="text" placeholder="Search..." className="pr-10" />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right Side: Sign in, Wishlist, Cart */}
        <div className="ml-auto flex items-center space-x-4">
          {/* Sign In / Profile */}
          <Link
            href="/signin"
            className="flex items-center space-x-1 hover:underline"
          >
            <User className="h-4 w-4" />
            <span>Sign in</span>
          </Link>

          {/* Wishlist */}
          <Link href="/wishlist" className="hover:underline">
            Wishlist
          </Link>

          {/* Cart */}
          <Link href="/cart" className="hover:underline">
            <ShoppingCart className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
