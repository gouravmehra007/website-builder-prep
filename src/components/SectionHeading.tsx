import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) => {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      {/* Decorative Om */}
      {centered && (
        <span className="text-3xl text-gold/40 mb-2 block">ॐ</span>
      )}
      
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
        {title}
      </h2>
      
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      
      {/* Decorative Line */}
      <div className={cn("mt-6", centered ? "section-divider" : "w-24 h-1 rounded-full bg-gradient-devotional")} />
    </div>
  );
};

export default SectionHeading;
