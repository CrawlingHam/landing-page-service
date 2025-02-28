import { IconType } from "react-icons";

export declare type FooterLink = {
    icon?: IconType;
    name: string;
    href: string;
};

export declare type FooterLinks = {
    product: FooterLink[];
    support: FooterLink[];
    company: FooterLink[];
    social: FooterLink[];
};

export declare type FooterSectionProps = Partial<FooterLinks>;
