import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <Badge className="bg-primary/20 text-primary border-primary/30 text-sm px-4 py-1">
            Sistemas Próprios • Estabilidade Garantida
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Soluções completas para donos de{" "}
            <span className="gradient-text">servidor IPTV</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Estáveis, próprias e lucrativas. DRM OTT V4, Sistema de VOD e planos de servidor prontos para você assumir o controle.
          </p>

          {/* Pricing Bar */}
          <div className="flex flex-wrap justify-center gap-4 py-6">
            <div className="bg-card/50 backdrop-blur border border-border rounded-lg px-6 py-3">
              <div className="text-sm text-muted-foreground">DRM OTT V4</div>
              <div className="text-2xl font-bold text-primary">R$ 1.800</div>
            </div>
            <div className="bg-card/50 backdrop-blur border border-border rounded-lg px-6 py-3">
              <div className="text-sm text-muted-foreground">Sistema VOD</div>
              <div className="text-2xl font-bold text-primary">R$ 1.100</div>
            </div>
            <div className="bg-card/50 backdrop-blur border border-primary rounded-lg px-6 py-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-xs px-2 py-1 text-white">MELHOR</div>
              <div className="text-sm text-muted-foreground">Combo Patrão</div>
              <div className="text-2xl font-bold gradient-text">R$ 2.500</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-bold text-lg h-14 px-8"
              asChild
            >
              <a href="#combo">Comprar Combo Patrão — R$ 2.500</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 font-bold text-lg h-14 px-8"
              asChild
            >
              <a href="https://wa.me/5544991082160" target="_blank" rel="noopener noreferrer">
                Falar com Especialista
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Instalação Completa</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Suporte Técnico</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Sistemas Próprios</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
