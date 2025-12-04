import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <section className="container py-20">
        <div className="text-center space-y-6 animate-fade-in-up">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-gradient-devotional">
            Sachin-Jatin
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Spreading Divine Music Through Devotion
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <a 
              href="/bhajans" 
              className="px-8 py-3 bg-gradient-devotional text-primary-foreground rounded-lg font-medium hover:shadow-glow transition-all duration-300"
            >
              Listen to Bhajans
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      
      {/* Placeholder sections - to be built */}
      <section className="container py-16 border-t border-border">
        <h2 className="font-heading text-3xl font-semibold text-center mb-8">
          Featured Bhajans
        </h2>
        <p className="text-center text-muted-foreground">
          Coming soon...
        </p>
      </section>
      
      <section className="container py-16 border-t border-border">
        <h2 className="font-heading text-3xl font-semibold text-center mb-8">
          Music Production Services
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          We also produce devotional music for other singers. Contact us to collaborate on your next spiritual project.
        </p>
      </section>
    </Layout>
  );
};

export default Index;
