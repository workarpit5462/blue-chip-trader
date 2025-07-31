import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Pause, BarChart3, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface StrategyCardProps {
  name: string;
  description: string;
  status: "running" | "paused" | "stopped";
  performance: string;
  performanceType: "positive" | "negative";
  trades: number;
  winRate: string;
  risk: "Low" | "Medium" | "High";
}

export function StrategyCard({
  name,
  description,
  status,
  performance,
  performanceType,
  trades,
  winRate,
  risk
}: StrategyCardProps) {
  return (
    <Card className="trading-card-hover">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg font-semibold">{name}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
          <Badge 
            variant={status === "running" ? "default" : "secondary"}
            className={cn(
              "capitalize",
              status === "running" && "bg-success text-success-foreground",
              status === "paused" && "bg-warning text-warning-foreground",
              status === "stopped" && "bg-muted"
            )}
          >
            {status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Performance Metrics */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-muted-foreground">Performance</p>
            <p className={cn(
              "text-lg font-bold",
              performanceType === "positive" ? "text-success" : "text-danger"
            )}>
              {performance}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Trades</p>
            <p className="text-lg font-bold">{trades}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Win Rate</p>
            <p className="text-lg font-bold">{winRate}</p>
          </div>
        </div>
        
        {/* Risk Level */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Risk:</span>
            <Badge 
              variant="outline" 
              className={cn(
                risk === "Low" && "border-success text-success",
                risk === "Medium" && "border-warning text-warning",
                risk === "High" && "border-danger text-danger"
              )}
            >
              {risk}
            </Badge>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center space-x-2 pt-2">
          <Button
            size="sm"
            variant={status === "running" ? "outline" : "default"}
            className="flex-1"
          >
            {status === "running" ? (
              <>
                <Pause className="h-4 w-4 mr-1" />
                Pause
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-1" />
                Start
              </>
            )}
          </Button>
          
          <Button size="sm" variant="outline">
            <BarChart3 className="h-4 w-4" />
          </Button>
          
          <Button size="sm" variant="outline">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}