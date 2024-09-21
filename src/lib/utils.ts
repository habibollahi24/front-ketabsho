import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function ToPersianDidit(number: number) {
  const farsiDigit = [
    '۰',
    '۱',
    '۲',
    '۳',
    '۴',
    '۵',
    '۶',
    '۷',
    '۸',
    '۹',
  ];
  return number
    .toString()
    .replace(/\d/g, (x) => farsiDigit[parseInt(x)]);
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class ResponseError extends Error {
  response: any;
  constructor(message: string, res: Response) {
    super(message);
    this.response = res;
  }
}
