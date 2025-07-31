import { MetricCard } from "@/components/dashboard/MetricCard";
import { StrategyCard } from "@/components/dashboard/StrategyCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  DollarSign, 
  TrendingUp, 
  Target, 
  Activity,
  Plus,
  Play,
  BarChart3,
  Bell
} from "lucide-react";

export default function Dashboard() {
  const strategies = [
    {
      name: "Momentum Scalper",
      description: "Short-term momentum based on RSI and MACD",
      status: "running" as const,
      performance: "+12.4%",
      performanceType: "positive" as const,
      trades: 247,
      winRate: "68%",
      risk: "Medium" as const
    },
    {
      name: "Mean Reversion",
      description: "Buy oversold, sell overbought conditions",
      status: "running" as const,
      performance: "+8.7%",
      performanceType: "positive" as const,
      trades: 156,
      winRate: "72%",
      risk: "Low" as const
    },
    {
      name: "Breakout Hunter",
      description: "Trades breakouts with volume confirmation",
      status: "paused" as const,
      performance: "-2.1%",
      performanceType: "negative" as const,
      trades: 89,
      winRate: "45%",
      risk: "High" as const
    }
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's your trading overview.
          </p>
        </div>
        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            Alerts
          </Button>
          <Button className="btn-primary">
            <Plus className="h-4 w-4 mr-2" />
            New Strategy
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Portfolio"
          value="$125,430"
          change="+$2,340 (1.9%)"
          changeType="positive"
          icon={DollarSign}
          trend={[8, 12, 6, 14, 18, 16, 20]}
        />
        <MetricCard
          title="Today's P&L"
          value="+$1,247"
          change="+0.99%"
          changeType="positive"
          icon={TrendingUp}
          trend={[10, 8, 12, 15, 11, 17, 14]}
        />
        <MetricCard
          title="Active Strategies"
          value="6"
          change="2 running"
          changeType="neutral"
          icon={Target}
          trend={[5, 7, 6, 8, 6, 7, 9]}
        />
        <MetricCard
          title="Win Rate"
          value="68.4%"
          change="+2.1%"
          changeType="positive"
          icon={Activity}
          trend={[12, 14, 11, 16, 13, 18, 15]}
        />
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Play className="h-5 w-5 mr-2" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <Plus className="h-6 w-6" />
              <span>Create Strategy</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <BarChart3 className="h-6 w-6" />
              <span>Backtest</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <Play className="h-6 w-6" />
              <span>Paper Trade</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <TrendingUp className="h-6 w-6" />
              <span>Live Trading</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Active Strategies */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Active Strategies</h2>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {strategies.map((strategy, index) => (
            <div key={strategy.name} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <StrategyCard {...strategy} />
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "Strategy Started", name: "Momentum Scalper", time: "2 minutes ago", type: "success" },
              { action: "Trade Executed", name: "AAPL Buy Order", time: "5 minutes ago", type: "neutral" },
              { action: "Alert Triggered", name: "High Volume Alert", time: "12 minutes ago", type: "warning" },
              { action: "Strategy Paused", name: "Breakout Hunter", time: "1 hour ago", type: "warning" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.name}</p>
                </div>
                <span className="text-sm text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}