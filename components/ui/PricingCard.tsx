import { ReactNode } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  ctaText: string;
  ctaVariant?: 'primary' | 'secondary' | 'ghost';
  featured?: boolean;
  badge?: string;
}

export function PricingCard({ 
  title, 
  price, 
  period,
  description,
  features, 
  ctaText, 
  ctaVariant = 'primary',
  featured = false,
  badge
}: PricingCardProps) {
  return (
    <Card className={`p-8 relative ${featured ? 'ring-2 ring-[#6C63FF] scale-105' : ''}`} hover>
      {badge && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#FFD66B] text-[#1E1E1E] px-4 py-1 rounded-full text-sm font-medium">
            {badge}
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-[#6C63FF]">{price}</span>
          {period && <span className="text-gray-600 ml-2">{period}</span>}
        </div>
        {description && (
          <p className="text-gray-600">{description}</p>
        )}
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <Button variant={ctaVariant} className="w-full" size="lg">
        {ctaText}
      </Button>
    </Card>
  );
}