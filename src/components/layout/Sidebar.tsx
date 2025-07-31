import { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  Brain, 
  DollarSign, 
  Home, 
  LineChart, 
  Settings, 
  Target, 
  TrendingUp,
  User,
  Zap
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/dashboard" },
  { icon: LineChart, label: "Live Trading", path: "/trading" },
  { icon: Brain, label: "Strategies", path: "/strategies" },
  { icon: Target, label: "Backtesting", path: "/backtest" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: TrendingUp, label: "Performance", path: "/performance" },
  { icon: DollarSign, label: "Portfolio", path: "/portfolio" },
  { icon: Zap, label: "Signals", path: "/signals" },
  { icon: User, label: "Profile", path: "/profile" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-16 left-0 z-40 w-64 h-[calc(100vh-4rem)] bg-background border-r border-border transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="p-6">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )
                }
                onClick={onClose}
              >
                <item.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </div>
          
          {/* Status Indicator */}
          <div className="mt-8 p-4 bg-success/10 rounded-lg border border-success/20">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse-subtle"></div>
              <span className="text-sm font-medium text-success">Market Open</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              6 strategies running
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}