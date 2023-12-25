import type {DateTime} from "luxon";

export interface About {
    _id?: number;
    title?: string;
    text?: string[];
}

export interface User {
    email?: string;
    isAdmin?: boolean;
    isAuthorized: boolean;
    encodedJwt?: string;
}

export interface Experience {
    _id?: number,
    title: string,
    items: ExperienceItem[]
}

export interface ExperienceItem {
    company: string,
    companyLogo: string,
    load: string,
    position: string,
    startDate: string,
    endDate: string,
    current: boolean,
    region: string,
    place: string,
    intro: string,
    achievements: string[],
    skills: string[]
}
