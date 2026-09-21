import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export type WithElementRef<T, E extends HTMLElement = HTMLElement> = T & {
  ref?: E | null;
};
