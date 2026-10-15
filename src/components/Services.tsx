import { useState } from 'react';
import AppleCardCarousel, { type CardItem } from '@/components/ui/carousel-08';
import ContactModal from './ContactModal';

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeQuoteService, setActiveQuoteService] = useState('');

  const serviceCards: CardItem[] = [
    {
      id: 'ai-crm',
      category: 'AI-Powered CRM',
      title: <>Intelligent CRM &amp; Automation</>,
      src: '/services/crm-erp.jpg',
      quoteService: 'Wantik-X CRM',
      badge: {
        name: 'Wantik-X',
        href: 'https://wantikx.com/',
      },
    },
    {
      id: 'digital-marketing',
      category: 'Digital Marketing',
      title: <>Performance Ads &amp; SEO</>,
      src: '/services/digital-marketing.jpg',
      quoteService: 'Digital Marketing',
      badge: {
        name: 'Explore Page',
        href: '/services/digital-marketing',
        isInternal: true,
      },
    },
    {
      id: 'website-development',
      category: 'Website Development',
      title: <>High-Converting Web Platforms</>,
      src: '/services/website-dev.jpg',
      quoteService: 'Website Development',
    },
    {
      id: 'mobile-app-development',
      category: 'Mobile Application Development',
      title: <>Native iOS &amp; Android Apps</>,
      src: '/services/mobile-app.jpg',
      quoteService: 'Mobile Application Development',
    },
  ];

  const handleCardClick = (card: CardItem) => {
    setActiveQuoteService(card.quoteService || 'Website Development');
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="w-full bg-gallery-white">
        <div className="pt-6 pb-10 sm:pt-8 sm:pb-14 max-w-[1280px] mx-auto px-4 sm:px-6">
          <AppleCardCarousel
            cards={serviceCards}
            title={
              <>
                Digital solutions built for{' '}
                <span className="text-apple-blue font-serif-accent font-normal italic">
                  business growth
                </span>
              </>
            }
            subtitle="From CRM platforms like Wantik-X to digital marketing, website development, and mobile applications, we build technology solutions that simplify operations, strengthen your digital presence, and accelerate growth."
            onCardClick={handleCardClick}
          />
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={activeQuoteService}
      />
    </>
  );
}
