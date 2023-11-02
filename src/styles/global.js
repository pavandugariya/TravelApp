const defaultColor = {
  linearFColor: '#0565FF',
  linearSColor: '#3363AF',
};
const primaryColors = {
  light: {
    primary: '#003282',
    bgWhite: '#ffffff',
    bgDarkWhite: '#CBCDCF',
    lightDark: '#0D1118',
    textWhite: '#fff',
    textBlack: '#000',
    ...defaultColor,
  },
  dark: {
    primary: '#003282',
    bgWhite: '#000000',
    bgDarkWhite: '#1f1f1f',
    lightDark: '#dedede',
    textWhite: '#000',
    textBlack: '#fff',
    ...defaultColor,
  },
};

export {primaryColors};
