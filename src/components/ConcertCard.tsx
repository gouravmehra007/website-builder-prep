import { Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Concert {
  id: string;
  title: string;
  date: string;
  location: string;
  description?: string;
  image?: string;
}

interface ConcertCardProps {
  concert: Concert;
  className?: string;
}

const ConcertCard = ({ concert, className }: ConcertCardProps) => {
  return (
    <div
      className={cn(
        "group relative rounded-xl overflow-hidden bg-card border border-border/50",
        "hover:shadow-devotional hover:border-gold/30 transition-all duration-300",
        "hover:-translate-y-1",
        className
      )}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {concert.image ? (
          <img
            src={concert.image}
            alt={concert.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-maroon flex items-center justify-center">
            <Calendar className="w-12 h-12 text-cream/40" />
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-saffron transition-colors">
          {concert.title}
        </h3>
        
        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-gold" />
            <span>{concert.date}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-maroon" />
            <span>{concert.location}</span>
          </div>
        </div>
        
        {concert.description && (
          <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
            {concert.description}
          </p>
        )}
      </div>
      
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-devotional opacity-20 rotate-45" />
      </div>
    </div>
  );
};

export default ConcertCard;
