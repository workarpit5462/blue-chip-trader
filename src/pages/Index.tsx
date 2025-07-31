import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  BarChart3, 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp,
  DollarSign,
  Target,
  CheckCircle,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import heroImage from "@/assets/hero-trading-dashboard.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 gradient-hero">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              🚀 New: Advanced AI Trading Algorithms
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Professional Algorithmic Trading Platform
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Build, test, and deploy sophisticated trading strategies with our cutting-edge platform. 
              No coding required, institutional-grade results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/dashboard">
                <Button size="lg" className="btn-primary text-lg px-8 py-4">
                  Start Trading
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="mt-12 animate-slide-up">
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-xl"></div>
              <img 
                src={heroImage} 
                alt="Professional Trading Dashboard" 
                className="w-full h-auto rounded-xl shadow-2xl border border-border"
              />
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-up">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98.7%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$2.4B+</div>
              <div className="text-muted-foreground">Volume Traded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15,000+</div>
              <div className="text-muted-foreground">Active Traders</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Trade Like a Pro
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform combines advanced algorithms, real-time data, and intuitive tools 
              to give you the edge in financial markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-Powered Strategies",
                description: "Machine learning algorithms that adapt to market conditions and optimize your trading performance."
              },
              {
                icon: BarChart3,
                title: "Advanced Backtesting",
                description: "Test your strategies against years of historical data with millisecond precision."
              },
              {
                icon: Zap,
                title: "Lightning Fast Execution",
                description: "Ultra-low latency trading with direct market access and smart order routing."
              },
              {
                icon: Shield,
                title: "Risk Management",
                description: "Sophisticated risk controls and position sizing to protect your capital."
              },
              {
                icon: TrendingUp,
                title: "Real-time Analytics",
                description: "Live performance monitoring with detailed metrics and customizable dashboards."
              },
              {
                icon: Target,
                title: "Multi-Asset Support",
                description: "Trade stocks, options, futures, forex, and crypto from a single platform."
              }
            ].map((feature, index) => (
              <Card key={index} className="trading-card-hover animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Performance
            </h2>
            <p className="text-xl text-muted-foreground">
              Our strategies have consistently outperformed the market
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center trading-card">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-success mb-2">+187%</div>
                <div className="text-muted-foreground">Average Annual Return</div>
                <div className="text-sm text-muted-foreground mt-1">vs 12% market average</div>
              </CardContent>
            </Card>
            
            <Card className="text-center trading-card">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">0.89</div>
                <div className="text-muted-foreground">Sharpe Ratio</div>
                <div className="text-sm text-muted-foreground mt-1">Risk-adjusted returns</div>
              </CardContent>
            </Card>
            
            <Card className="text-center trading-card">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-warning mb-2">8.2%</div>
                <div className="text-muted-foreground">Max Drawdown</div>
                <div className="text-sm text-muted-foreground mt-1">Capital preservation</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of successful traders who trust our platform with their investments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/dashboard">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Schedule Demo
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-success" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-success" />
              30-day free trial
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-success" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 AlgoTrade Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
