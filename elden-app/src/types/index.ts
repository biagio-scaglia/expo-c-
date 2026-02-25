export interface Character {
    id: number;
    name: string;
    title: string;
    description: string;
    vigor?: number;
    mind?: number;
    endurance?: number;
    strength?: number;
    dexterity?: number;
    intelligence?: number;
    faith?: number;
    arcane?: number;
    locationId?: number;
    imageUrl?: string;
}

export interface Location {
    id: number;
    name: string;
    region: string;
    description: string;
    imageUrl?: string;
}

export interface Lore {
    id: number;
    title: string;
    content: string;
    characterId?: number;
}
