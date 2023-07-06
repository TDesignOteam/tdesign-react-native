export enum LightColors {
  white = '#ffffff',

  brand1 = '#f2f3ff',
  brand2 = '#d9e1ff',
  brand3 = '#b5c7ff',
  brand4 = '#8eabff',
  brand5 = '#618dff',
  brand6 = '#366ef4',
  brand7 = '#0052d9',
  brand8 = '#003cab',
  brand9 = '#002a7c',
  brand10 = '#001a57',

  error1 = '#fff0ed',
  error2 = '#ffd8d2',
  error3 = '#ffb9b0',
  error4 = '#ff9285',
  error5 = '#f6685d',
  error6 = '#d54941',
  error7 = '#ad352f',
  error8 = '#881f1c',
  error9 = '#68070a',
  error10 = '#490002',

  success1 = '#e3f9e9',
  success2 = '#c6f3d7',
  success3 = '#92dab2',
  success4 = '#56c08d',
  success5 = '#2ba471',
  success6 = '#008858',
  success7 = '#006c45',
  success8 = '#005334',
  success9 = '#003b23',
  success10 = '#002515',

  warning1 = '#fff1e9',
  warning2 = '#ffd9c2',
  warning3 = '#ffb98c',
  warning4 = '#fa9550',
  warning5 = '#e37318',
  warning6 = '#be5a00',
  warning7 = '#954500',
  warning8 = '#713300',
  warning9 = '#532300',
  warning10 = '#3b1700',

  gray1 = '#f3f3f3',
  gray2 = '#eee',
  gray3 = '#e7e7e7',
  gray4 = '#dcdcdc',
  gray5 = '#c5c5c5',
  gray6 = '#a6a6a6',
  gray7 = '#8b8b8b',
  gray8 = '#777',
  gray9 = '#5e5e5e',
  gray10 = '#4b4b4b',
  gray11 = '#383838',
  gray12 = '#2c2c2c',
  gray13 = '#242424',
  gray14 = '#181818',

  fontWhite1 = 'rgba(255, 255, 255, 1)',
  fontWhite2 = 'rgba(255, 255, 255, 0.55)',
  fontWhite3 = 'rgba(255, 255, 255, 0.35)',
  fontWhite4 = 'rgba(255, 255, 255, 0.22)',

  fontGray1 = 'rgba(0, 0, 0, 0.9)',
  fontGray2 = 'rgba(0, 0, 0, 0.6)',
  fontGray3 = 'rgba(0, 0, 0, 0.4)',
  fontGray4 = 'rgba(0, 0, 0, 0.26)',

  shadow1 = 'rgba(0, 0, 0, 0.1)',
  shadow2 = 'rgba(0, 0, 0, 0.08)',
  shadow3 = 'rgba(0, 0, 0, 0.06)',
}

export const colors = {
  white: LightColors.white,
  brand1: LightColors.brand1,
  brand2: LightColors.brand2,
  brand3: LightColors.brand3,
  brand4: LightColors.brand4,
  brand5: LightColors.brand5,
  brand6: LightColors.brand6,
  brand7: LightColors.brand7,
  brand8: LightColors.brand8,
  brand9: LightColors.brand9,
  brand10: LightColors.brand10,
  brand: LightColors.brand7,
  brandLight: LightColors.brand1,
  brandFocus: LightColors.brand2,
  brandDisabled: LightColors.brand3,
  brandHover: LightColors.brand6,
  brandActive: LightColors.brand8,

  error1: LightColors.error1,
  error2: LightColors.error2,
  error3: LightColors.error3,
  error4: LightColors.error4,
  error5: LightColors.error5,
  error6: LightColors.error6,
  error7: LightColors.error7,
  error8: LightColors.error8,
  error9: LightColors.error9,
  error10: LightColors.error10,
  error: LightColors.error6,
  errorLight: LightColors.error1,
  errorFocus: LightColors.error2,
  errorDisabled: LightColors.error3,
  errorHover: LightColors.error5,
  errorActive: LightColors.error7,

  success1: LightColors.success1,
  success2: LightColors.success2,
  success3: LightColors.success3,
  success4: LightColors.success4,
  success5: LightColors.success5,
  success6: LightColors.success6,
  success7: LightColors.success7,
  success8: LightColors.success8,
  success9: LightColors.success9,
  success10: LightColors.success10,
  success: LightColors.success5,
  successLight: LightColors.success1,
  successFocus: LightColors.success2,
  successDisabled: LightColors.success3,
  successHover: LightColors.success4,
  successActive: LightColors.success6,

  warning1: LightColors.warning1,
  warning2: LightColors.warning2,
  warning3: LightColors.warning3,
  warning4: LightColors.warning4,
  warning5: LightColors.warning5,
  warning6: LightColors.warning6,
  warning7: LightColors.warning7,
  warning8: LightColors.warning8,
  warning9: LightColors.warning9,
  warning10: LightColors.warning10,
  warning: LightColors.warning5,
  warningLight: LightColors.warning1,
  warningFocus: LightColors.warning2,
  warningDisabled: LightColors.warning3,
  warningHover: LightColors.warning4,
  warningActive: LightColors.warning6,

  gray1: LightColors.gray1,
  gray2: LightColors.gray2,
  gray3: LightColors.gray3,
  gray4: LightColors.gray4,
  gray5: LightColors.gray5,
  gray6: LightColors.gray6,
  gray7: LightColors.gray7,
  gray8: LightColors.gray8,
  gray9: LightColors.gray9,
  gray10: LightColors.gray10,
  gray11: LightColors.gray11,
  gray12: LightColors.gray12,
  gray13: LightColors.gray13,
  gray14: LightColors.gray14,

  bgPage: LightColors.gray2,
  bgContainer: LightColors.white,
  bgContainerHover: LightColors.gray1,
  bgContainerActive: LightColors.gray3,
  bgContainerSelect: LightColors.white,
  bgSubContainer: LightColors.gray1,
  bgSubContainerHover: LightColors.gray2,
  bgSubContainerActive: LightColors.gray4,
  bgComponent: LightColors.gray3,
  bgComponentHover: LightColors.gray4,
  bgComponentActive: LightColors.gray6,
  bgComponentDisabled: LightColors.gray2,
  bgSubComponent: LightColors.gray4,
  bgSubComponentHover: LightColors.gray5,
  bgSubComponentActive: LightColors.gray6,

  componentStroke: LightColors.gray3,
  componentBorder: LightColors.gray4,

  fontWhite1: LightColors.fontWhite1,
  fontWhite2: LightColors.fontWhite2,
  fontWhite3: LightColors.fontWhite3,
  fontWhite4: LightColors.fontWhite4,

  fontGray1: LightColors.fontGray1,
  fontGray2: LightColors.fontGray2,
  fontGray3: LightColors.fontGray3,
  fontGray4: LightColors.fontGray4,

  textPrimary: LightColors.fontGray1,
  textSecondary: LightColors.fontGray2,
  textPlaceholder: LightColors.fontGray3,
  textDisabled: LightColors.fontGray4,
  textAnti: LightColors.white,
  textBrand: LightColors.brand7,
  textLink: LightColors.brand7,

  shadow1: LightColors.shadow1,
  shadow2: LightColors.shadow2,
  shadow3: LightColors.shadow3,
};
