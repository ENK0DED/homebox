/* eslint-disable perfectionist/sort-objects */
import { isString } from 'radash';
import { colors } from 'unocss/preset-mini';

export const noRealColors = ['inherit', 'current', 'transparent'];
export const basicColors = ['black', 'white'];
export const oldColors = ['lightblue', 'lightBlue', 'warmgray', 'warmGray', 'truegray', 'trueGray', 'coolgray', 'coolGray', 'bluegray', 'blueGray'];
export const specialColors = ['primary', 'secondary', 'tertiary', 'neutral', 'success', 'warning', 'danger', 'info'];

export const defaultColors = {
  inherit: colors.inherit,
  current: colors.current,
  transparent: colors.transparent,
  black: colors.black,
  white: colors.white,
  slate: colors.slate,
  gray: colors.gray,
  zinc: colors.zinc,
  neutral: colors.neutral,
  stone: colors.stone,
  red: colors.red,
  orange: colors.orange,
  amber: colors.amber,
  yellow: colors.yellow,
  lime: colors.lime,
  green: colors.green,
  emerald: colors.emerald,
  teal: colors.teal,
  cyan: colors.cyan,
  sky: colors.sky,
  blue: colors.blue,
  indigo: colors.indigo,
  violet: colors.violet,
  purple: colors.purple,
  fuchsia: colors.fuchsia,
  pink: colors.pink,
  rose: colors.rose,
};

export const customColors = {
  primary: {
    50: '#fff7eb',
    100: '#ffecd1',
    200: '#ffd6a3',
    300: '#ffb86b',
    400: '#ff8f33',
    500: '#ff700a',
    600: '#ff5500',
    700: '#ca3b02',
    800: '#a22e0b',
    900: '#832a0c',
    950: '#481204',
    DEFAULT: '#ff5500',
  },
  primarySafellows: {
    50: '#f3f6f3',
    100: '#e5e8e3',
    200: '#cad2c8',
    300: '#a5b2a3',
    400: '#7c8d7a',
    500: '#596c58',
    600: '#455645',
    700: '#374537',
    800: '#2d382d',
    900: '#262e26',
    950: '#141a14',
    DEFAULT: '#596c58',
  },
  dark: { DEFAULT: '#353535' },
  secondary: { ...defaultColors.pink, DEFAULT: defaultColors.pink[500] },
  tertiary: { ...defaultColors.purple, DEFAULT: defaultColors.purple[500] },
  neutral: { ...defaultColors.stone, DEFAULT: defaultColors.stone[500] },
  success: { ...defaultColors.green, DEFAULT: defaultColors.green[500] },
  warning: { ...defaultColors.amber, DEFAULT: defaultColors.amber[500] },
  danger: { ...defaultColors.red, DEFAULT: defaultColors.red[500] },
  info: { ...defaultColors.blue, DEFAULT: defaultColors.blue[500] },
};

export const allColors = { ...defaultColors, ...customColors };
export const allColorNames = Object.keys(allColors) as (keyof typeof allColors)[];
export type ColorName = (typeof allColorNames)[number];

export const allNewColorNames = allColorNames.filter((k) => !oldColors.includes(k));
export const allNewColors = Object.fromEntries(allNewColorNames.map((name) => [name, allColors[name]]));
export type NewColorName = (typeof allNewColorNames)[number];

export const allRealColorNames = allNewColorNames.filter((k) => !noRealColors.includes(k));
export const allRealColors = Object.fromEntries(allRealColorNames.map((name) => [name, allColors[name]]));
export type RealColorName = (typeof allRealColorNames)[number];

export const allSelectableColorNames = allRealColorNames.filter((k) => !specialColors.includes(k));
export const allSelectableColors = Object.fromEntries(allSelectableColorNames.map((name) => [name, allColors[name]]));
export type SelectableColorName = (typeof allSelectableColorNames)[number];

export const allColorEntries = Object.entries(allColors);
export const variableColors = allColorEntries.filter(([k, v]) => !isString(v) && !oldColors.includes(k));
export const invariableColorNames = allColorEntries.filter(([k, v]) => isString(v) && !oldColors.includes(k)).map(([k]) => k);
