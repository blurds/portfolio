const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display font-bold text-lg">
            <span className="text-primary">J</span>L
          </div>
          
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Jason Durana Lomibao. All rights reserved.
          </p>
          
          <p className="text-muted-foreground text-sm">
            Built with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;