import BlockFeature from './ui/block-feature';

interface FeaturedSystemProps {
  onExploreClick?: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function FeaturedSystem(_props: FeaturedSystemProps = {}) {
  return (
    <section className="w-full bg-gallery-white border-t border-slate-200/80">
      <div className="py-14 sm:py-16 max-w-[1240px] mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-display font-medium text-ink tracking-tight leading-[1.04]">
            Software built to solve real <br className="hidden sm:inline" />
            <span className="text-apple-blue font-serif-accent font-normal italic">
              operational bottlenecks
            </span>
          </h2>

          <p className="font-apple text-[16px] sm:text-[17px] text-slate leading-relaxed max-w-2xl mx-auto mt-4">
            We don&apos;t build disposable prototypes. We architect robust software, scalable web platforms, and customer automation that your team can run on for the next decade.
          </p>
        </div>

        {/* 21st.dev @uiable/block-feature 6-Card Feature Highlights Grid */}
        <BlockFeature />
      </div>
    </section>
  );
}
