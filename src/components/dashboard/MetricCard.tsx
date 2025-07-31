import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  trend?: number[];
  className?: string;
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  changeType = "neutral", 
  icon: Icon,
  trend,
  className 
}: MetricCardProps) {
  return (
    <div className={cn("trading-card trading-card-hover", className)}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold mt-2">{value}</p>
          {change && (
            <p className={cn(
              "text-sm mt-1 font-medium",
              changeType === "positive" && "text-success",
              changeType === "negative" && "text-danger",
              changeType === "neutral" && "text-muted-foreground"
            )}>
              {change}
            </p>
          )}
        </div>
        <div className="flex flex-col items-end">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          {trend && (
            <div className="mt-2 flex items-end space-x-1">
              {trend.map((height, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-1 rounded-full transition-all duration-300",
                    changeType === "positive" ? "bg-success" : "bg-danger"
                  )}
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}