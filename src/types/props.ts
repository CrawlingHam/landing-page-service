export type HeroProps = {
    scrollToSection: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>, ref: React.RefObject<HTMLElement | null>) => void;
    featuresOverviewRef: React.RefObject<HTMLElement | null>;
    heroRef: React.RefObject<HTMLElement | null>;
};

export type StatsProps = {
    statsRef: React.RefObject<HTMLElement | null>;
    statsInView: boolean;
};

export type FeaturesProps = {
    scrollToSection: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>, ref: React.RefObject<HTMLElement | null>) => void;
    featuresOverviewRef: React.RefObject<HTMLElement | null>;
    musicRef: React.RefObject<HTMLElement | null>;
    aiRef: React.RefObject<HTMLElement | null>;
    featuresOverviewInView: boolean;
};
