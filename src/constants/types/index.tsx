export * from './project'
export * from './navbar'

/*  MISC TYPES */
export interface NavbarLink {
    name: string
    value: string
}

export interface Persona {
    id: number;
    name: string;
    shortDescription: string;
    longDescription: string;
}