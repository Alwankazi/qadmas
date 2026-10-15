import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface CardItem {
  id: string;
  category: string;
  title: ReactNode;
  src: string;
  alt?: string;
  desc?: string;
  quoteService?: string;
  badge?: {
    name: string;
    href: string;
    isInternal?: boolean;
  };
}

const defaultCards: CardItem[] = [
  {
    id: "1",
    category: "AI-Powered CRM",
    title: <>Intelligent CRM &amp; Automation</>,
    src: "/services/crm-erp.jpg",
    quoteService: "Wantik-X CRM",
    badge: {
      name: "Wantik-X",
      href: "https://wantikx.com/",
    },
  },
  {
    id: "2",
    category: "Digital Marketing",
    title: <>Performance Ads &amp; SEO</>,
    src: "/services/digital-marketing.jpg",
    quoteService: "Digital Marketing",
  },
  {
    id: "3",
    category: "Website Development",
    title: <>High-Converting Web Platforms</>,
    src: "/services/website-dev.jpg",
    quoteService: "Website Development",
  },
  {
    id: "4",
    category: "Mobile Application Development",
    title: <>Native iOS &amp; Android Apps</>,
    src: "/services/mobile-app.jpg",
    quoteService: "Mobile Application Development",
  },
];

export interface AppleCardCarouselProps {
  cards?: CardItem[];
  title?: ReactNode;
  subtitle?: ReactNode;
  onCardClick?: (card: CardItem) => void;
  className?: string;
  hideHeader?: boolean;
}

const AppleCardCarousel = ({
  cards = defaultCards,
  title,
  subtitle,
  onCardClick,
  className = "",
  hideHeader = false,
}: AppleCardCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(true);
  const dragDistanceRef = React.useRef(0);
  const startPosRef = React.useRef({ x: 0, y: 0 });

  const handlePointerDown = (e: React.PointerEvent) => {
    startPosRef.current = { x: e.clientX, y: e.clientY };
    dragDistanceRef.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const dx = e.clientX - startPosRef.current.x;
    const dy = e.clientY - startPosRef.current.y;
    dragDistanceRef.current = Math.sqrt(dx * dx + dy * dy);
  };

  React.useEffect(() => {
    if (!api) return;
    const update = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);

    const rootNode = api.rootNode();
    let accumulatedDelta = 0;
    let wheelTimeout: ReturnType<typeof setTimeout> | null = null;

    const onWheel = (e: WheelEvent) => {
      // Support horizontal trackpad gestures and shift+wheel
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = isHorizontal ? e.deltaX : (e.shiftKey ? e.deltaY : 0);

      if (delta !== 0) {
        e.preventDefault();
        accumulatedDelta += delta;

        if (Math.abs(accumulatedDelta) >= 25) {
          if (accumulatedDelta > 0) {
            api.scrollNext();
          } else {
            api.scrollPrev();
          }
          accumulatedDelta = 0;
        }

        if (wheelTimeout) clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => {
          accumulatedDelta = 0;
        }, 150);
      }
    };

    if (rootNode) {
      rootNode.addEventListener("wheel", onWheel, { passive: false });
    }

    return () => {
      api.off("select", update);
      api.off("reInit", update);
      if (rootNode) {
        rootNode.removeEventListener("wheel", onWheel);
      }
      if (wheelTimeout) clearTimeout(wheelTimeout);
    };
  }, [api]);

  return (
    <div className={`w-full py-2 sm:py-3 ${className}`}>
      {/* Header */}
      {!hideHeader && (
        <div className="px-4 sm:px-8 mb-6 sm:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-display font-medium text-ink tracking-tight leading-[1.04]">
              {title || (
                <>
                  Software built to solve{" "}
                  <span className="text-apple-blue font-serif-accent font-normal italic">
                    real operational bottlenecks
                  </span>
                </>
              )}
            </h2>
          </div>
          {subtitle && (
            <p className="font-apple text-[16px] text-slate max-w-[500px] leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Card Strip */}
      <Carousel
        setApi={setApi}
        opts={{ align: "start", dragFree: true, loop: false, containScroll: "trimSnaps", watchDrag: true }}
        className="w-full cursor-grab active:cursor-grabbing"
      >
        <CarouselContent className="-ml-6 px-4 sm:px-8 py-4">
          {cards.map((card) => (
            <CarouselItem key={card.id} className="pl-6 basis-auto">
              <div
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onClick={() => {
                  if (dragDistanceRef.current > 6) return;
                  onCardClick?.(card);
                }}
                className="group relative w-[280px] h-[440px] sm:w-[320px] sm:h-[490px] lg:w-[360px] lg:h-[530px] border border-slate-200/80 overflow-hidden flex flex-col justify-between p-6 sm:p-8 rounded-3xl hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl select-none"
              >
                {/* Background Image */}
                <img
                  src={card.src}
                  alt={
                    card.alt ||
                    (typeof card.title === "string"
                      ? card.title
                      : card.category)
                  }
                  draggable={false}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none select-none",
                    card.id === "digital-marketing" ? "object-top origin-top" : "object-center"
                  )}
                />

                {/* Dark gradient overlay for typography readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20 z-1 pointer-events-none" />

                {/* Card Top Category & Title */}
                <div className="relative z-10 flex flex-col gap-2.5 sm:gap-3.5 text-white">
                  <p className="font-apple text-xs sm:text-sm font-semibold tracking-wider uppercase text-white">
                    {card.category}
                  </p>
                  <p className="font-apple text-2xl sm:text-3xl font-semibold tracking-tight leading-tight text-white">
                    {card.title}
                  </p>
                </div>

                {/* Card Bottom: Optional Badge (Wantik-X) & Interactive Action Button */}
                <div className="relative z-10 flex items-center justify-between gap-3">
                  {card.badge ? (
                    card.badge.isInternal ? (
                      <Link
                        to={card.badge.href}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-ink text-[12px] font-semibold backdrop-blur-md transition-all border border-white/30"
                        title={`Visit ${card.badge.name}`}
                      >
                        <span>{card.badge.name}</span>
                        <ArrowRight size={13} />
                      </Link>
                    ) : (
                      <a
                        href={card.badge.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-ink text-[12px] font-semibold backdrop-blur-md transition-all border border-white/30"
                        title={`Visit ${card.badge.name}`}
                      >
                        <span>{card.badge.name}</span>
                        <ArrowUpRight size={13} />
                      </a>
                    )
                  ) : (
                    <div />
                  )}
                  <Button
                    size="icon"
                    className="h-10 w-10 rounded-full shadow-md bg-white hover:bg-white/90 text-ink cursor-pointer flex items-center justify-center transition-all group-hover:bg-apple-blue group-hover:text-white shrink-0"
                    aria-label="View Service Details"
                  >
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:text-white will-change-transform" />
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Bottom-right controls */}
      <div className="flex justify-end gap-2 px-4 sm:px-8 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={() => api?.scrollPrev()}
          disabled={!canScrollPrev}
          className="h-10 w-10 rounded-full border-hairline-silver bg-studio-mist hover:bg-paper-frost text-ink shadow-xs cursor-pointer disabled:opacity-30"
          aria-label="Previous slide"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => api?.scrollNext()}
          disabled={!canScrollNext}
          className="h-10 w-10 rounded-full border-hairline-silver bg-studio-mist hover:bg-paper-frost text-ink shadow-xs cursor-pointer disabled:opacity-30"
          aria-label="Next slide"
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AppleCardCarousel;
