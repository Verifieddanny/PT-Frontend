import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  PieChart,
  BarChart3,
  LineChart,
  Globe,
  TrendingUp,
  HelpCircle,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SettingsModal } from "@/components/dashboard/settings/SettingsModal";
import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  return (
    <>
      <aside className="hidden md:flex w-64 flex-col bg-black/40 backdrop-blur-md border-r border-white/10">
        <div className="flex h-14 items-center border-b border-white/10 px-4">
          <div className="flex items-center gap-2">
            <div className="relative flex items-center">
              <Link href="/dashboard" className="flex items-center gap-2">
                <img
                  src="https://res.cloudinary.com/dfxes8tvx/image/upload/v1742517136/logo_mvmqsx.webp"
                  alt="PolarisTrade Logo"
                  width={35}
                  height={35}
                  className="object-contain"
                />
                <span className="text-lg font-bold text-white">
                  PolarisTrade
                </span>
              </Link>
            </div>
          </div>
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-xs font-semibold text-white/70 uppercase tracking-wider">
              Dashboard
            </h2>
            <div className="space-y-1">
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-white/10 hover:text-gray-200 bg-white/10"
              >
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Overview
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-white/10 hover:text-gray-200"
              >
                <PieChart className="mr-2 h-4 w-4" />
                Portfolio
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-white/10 hover:text-gray-200"
              >
                <BarChart3 className="mr-2 h-4 w-4" />
                Analytics
              </Button>
              <Link href="/dashboard/markets" passHref>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-white/10 hover:text-gray-200"
                >
                  <LineChart className="mr-2 h-4 w-4" />
                  Markets
                </Button>
              </Link>
            </div>
          </div>
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-xs font-semibold text-white/70 uppercase tracking-wider">
              Ecosystems
            </h2>
            <div className="space-y-1">
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-white/10 hover:text-gray-200"
              >
                <Globe className="mr-2 h-4 w-4" />
                Starknet
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-white/10 hover:text-gray-200"
              >
                <Globe className="mr-2 h-4 w-4" />
                Stellar
              </Button>
            </div>
          </div>
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-xs font-semibold text-white/70 uppercase tracking-wider">
              Tools
            </h2>
            <div className="space-y-1">
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-white/10 hover:text-gray-200"
              >
                <TrendingUp className="mr-2 h-4 w-4" />
                Trading
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-white/10 hover:text-gray-200"
              >
                <LineChart className="mr-2 h-4 w-4" />
                Simulator
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-white/10 hover:text-gray-200"
              >
                <HelpCircle className="mr-2 h-4 w-4" />
                Advisory
              </Button>
            </div>
          </div>
        </nav>
        <div className="border-t border-white/10 p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback className="bg-white/10 text-white">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-white">John Doe</span>
              <span className="text-xs text-white/70">john@example.com</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSettingsModalOpen(true)}
              className="ml-auto text-white hover:bg-white/10 hover:text-gray-200"
            >
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </aside>
      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
      />
    </>
  );
}
