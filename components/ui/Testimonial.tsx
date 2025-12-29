import { Card } from './Card';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  rating?: number;
}

export function Testimonial({ quote, author, role, rating = 5 }: TestimonialProps) {
  return (
    <Card className="p-6" hover>
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-[var(--accent-400)] fill-current" />
        ))}
      </div>
      
      <blockquote className="text-gray-700 mb-4 italic">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center">
        <div className="w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center mr-3">
          <span className="text-white font-medium text-sm">
            {author.charAt(0)}
          </span>
        </div>
        <div>
          <div className="font-medium text-gray-900">{author}</div>
          <div className="text-sm text-gray-600">{role}</div>
        </div>
      </div>
    </Card>
  );
}
