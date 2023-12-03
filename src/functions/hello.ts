import { HttpMessage } from '@models/hello.model';

export function message(): void {
  console.log('hello world !');
}

export function inc(x: number): number {
  return x + 1;
}

export function httpMessage(message: string): HttpMessage {
  return {
    message,
    code: 200,
  };
}
