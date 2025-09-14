import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'stars' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

export function Section({ 
  children, 
  className, 
  background = 'white',
  padding = 'lg',
  id 
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    stars: 'section-stars',
    gradient: 'hero-gradient'
  };
  
  const paddings = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20',
    xl: 'py-24'
  };

  return (
    <section 
      id={id}
      className={cn(backgrounds[background], paddings[padding], className)}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}