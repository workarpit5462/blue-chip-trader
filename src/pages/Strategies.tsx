import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Plus, 
  TrendingUp, 
  TrendingDown,
  Star,
  Copy,
  Play,
  BarChart3
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";

export default function Strategies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [riskFilter, setRiskFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const strategies = [
    {
      id: 1,
      name: "Momentum Breakout Pro",
      description: "Advanced momentum strategy with volume confirmation and dynamic risk management",
      performance: "+24.7%",
      performanceType: "positive",
      winRate: "72%",
      trades: 1247,
      risk: "Medium",
      type: "Momentum",
      rating: 4.8,
      author: "QuantLab",
      price: "$49/month",
      tags: ["Breakout", "Volume", "Risk Management"]
    },
    {
      id: 2,
      name: "Mean Reversion Master",
      description: "Statistical arbitrage strategy using mean reversion principles",
      performance: "+18.3%",
      performanceType: "positive",
      winRate: "68%",
      trades: 890,
      risk: "Low",
      type: "Mean Reversion",
      rating: 4.6,
      author: "AlgoExperts",
      price: "$39/month",
      tags: ["Statistical", "Low Risk", "Consistent"]
    },
    {
      id: 3,
      name: "Scalping Lightning",
      description: "High-frequency scalping strategy for quick profits",
      performance: "+31.2%",
      performanceType: "positive",
      winRate: "59%",
      trades: 3456,
      risk: "High",
      type: "Scalping",
      rating: 4.4,
      author: "SpeedTraders",
      price: "$79/month",
      tags: ["High Frequency", "Scalping", "Active"]
    },
    {
      id: 4,
      name: "Trend Following Elite",
      description: "Long-term trend following with advanced filters",
      performance: "+15.8%",
      performanceType: "positive",
      winRate: "65%",
      trades: 234,
      risk: "Low",
      type: "Trend Following",
      rating: 4.7,
      author: "TrendMasters",
      price: "$59/month",
      tags: ["Long Term", "Trend", "Stable"]
    },
    {
      id: 5,
      name: "Options Arbitrage",
      description: "Complex options arbitrage strategy for advanced traders",
      performance: "+12.1%",
      performanceType: "positive",
      winRate: "78%",
      trades: 156,
      risk: "Medium",
      type: "Options",
      rating: 4.5,
      author: "OptionsGuru",
      price: "$99/month",
      tags: ["Options", "Arbitrage", "Advanced"]
    },
    {
      id: 6,
      name: "AI Sentiment Trader",
      description: "Machine learning based sentiment analysis trading",
      performance: "+28.9%",
      performanceType: "positive",
      winRate: "64%",
      trades: 678,
      risk: "High",
      type: "AI/ML",
      rating: 4.9,
      author: "AI Trading Co",
      price: "$129/month",
      tags: ["AI", "Sentiment", "Machine Learning"]
    }
  ];

  const filteredStrategies = strategies.filter(strategy => {
    const matchesSearch = strategy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         strategy.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRisk = riskFilter === "all" || strategy.risk.toLowerCase() === riskFilter;
    const matchesType = typeFilter === "all" || strategy.type.toLowerCase().replace(/[^a-z]/g, '') === typeFilter;
    
    return matchesSearch && matchesRisk && matchesType;
  });

  return (
    <Layout>
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Strategy Library</h1>
            <p className="text-muted-foreground mt-1">
              Discover and deploy proven trading strategies from top quantitative firms
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 lg:mt-0">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filter
            </Button>
            <Button className="btn-primary">
              <Plus className="h-4 w-4 mr-2" />
              Create Strategy
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search strategies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={riskFilter} onValueChange={setRiskFilter}>
                <SelectTrigger className="w-full lg:w-[180px]">
                  <SelectValue placeholder="Risk Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Risk Levels</SelectItem>
                  <SelectItem value="low">Low Risk</SelectItem>
                  <SelectItem value="medium">Medium Risk</SelectItem>
                  <SelectItem value="high">High Risk</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full lg:w-[180px]">
                  <SelectValue placeholder="Strategy Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="momentum">Momentum</SelectItem>
                  <SelectItem value="meanreversion">Mean Reversion</SelectItem>
                  <SelectItem value="scalping">Scalping</SelectItem>
                  <SelectItem value="trendfollowing">Trend Following</SelectItem>
                  <SelectItem value="options">Options</SelectItem>
                  <SelectItem value="aiml">AI/ML</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Strategy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredStrategies.map((strategy, index) => (
            <Card key={strategy.id} className="trading-card-hover animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <CardTitle className="text-lg">{strategy.name}</CardTitle>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-muted-foreground">{strategy.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{strategy.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">by {strategy.author}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mt-3">
                  {strategy.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Performance</p>
                    <p className="text-lg font-bold text-success">{strategy.performance}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Win Rate</p>
                    <p className="text-lg font-bold">{strategy.winRate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Trades</p>
                    <p className="text-sm font-medium">{strategy.trades.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Risk</p>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        strategy.risk === "Low" ? "border-success text-success" :
                        strategy.risk === "Medium" ? "border-warning text-warning" :
                        "border-danger text-danger"
                      }`}
                    >
                      {strategy.risk}
                    </Badge>
                  </div>
                </div>
                
                {/* Pricing */}
                <div className="flex items-center justify-between pt-2 border-t">
                  <span className="text-lg font-bold text-primary">{strategy.price}</span>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline">
                      <BarChart3 className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="btn-primary">
                      <Play className="h-4 w-4 mr-1" />
                      Deploy
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredStrategies.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-muted-foreground">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium mb-2">No strategies found</h3>
                <p>Try adjusting your search terms or filters</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
}