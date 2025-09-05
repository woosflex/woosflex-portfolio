/**
 * 404 Not Found Page Component
 * Lord of the Rings themed error page with modern design matching the portfolio aesthetic
 */

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4 relative overflow-hidden">
      {/* Background mesh pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-30"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <Card className="w-full max-w-lg mx-4 project-card border backdrop-blur-xl relative z-10">
        <CardContent className="pt-8 pb-10 text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold gradient-text tracking-tight" data-testid="not-found-title">
              404 - Not Found
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            <div className="text-6xl">🧙‍♂️</div>
            <p className="text-muted-foreground leading-relaxed text-lg" data-testid="not-found-message">
              <span className="text-foreground font-semibold">"You shall not pass!"</span><br />
              It seems you've taken a wrong turn in Middle-earth. Let's get you back to a known path.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              className="btn-primary text-primary-foreground px-8 py-3 rounded-xl font-medium shadow-lg"
              data-testid="button-return-home"
            >
              <a href="/" className="inline-flex items-center">
                <Home className="mr-2 h-4 w-4" />
                Return to Homepage
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline"
              className="border-2 border-primary/30 text-foreground px-8 py-3 rounded-xl font-medium hover:border-primary hover:bg-primary/5 transition-all duration-300"
              data-testid="button-go-back"
            >
              <a href="javascript:history.back()" className="inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </a>
            </Button>
          </div>

          {/* Easter egg hint */}
          <div className="text-xs text-muted-foreground/60 font-mono">
            💡 Lost? Try the secret code: ↑↑↓↓←→←→BA
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
