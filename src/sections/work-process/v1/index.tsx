import { WorkprocessCardProps } from './card';
import { workprocessSectionData } from '@/data/work-process/v1';
import { WorkCardsCaraousl } from './cards-carousel';

export interface WorkprocessSectionProps {
  texts: string[];
  cards: WorkprocessCardProps[];
}

export function WorkprocessSection() {
  const { cards } = workprocessSectionData;
  return (
    <section className="section-padding-primary overflow-hidden !pt-0">
      <WorkCardsCaraousl cards={cards} />
    </section>
  );
}
