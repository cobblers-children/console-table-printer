import { wcswidth } from 'simple-wcswidth';

/* eslint-disable no-control-regex */
const colorRegex = /\x1b\[\d{1,3}m/g; // \x1b[30m  \x1b[305m

const stripAnsi = (str: string): string => {
  return str.replace(colorRegex, '');
};

const findWidthInConsole = (str: string): number => {
  return wcswidth(stripAnsi(str));
};

export default findWidthInConsole;
