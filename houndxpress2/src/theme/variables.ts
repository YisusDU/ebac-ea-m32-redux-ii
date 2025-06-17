//General variables

const primaryColor = (props: any) => props.theme.colors.primaryColor;
const secondaryColor = (props: any) => props.theme.colors.secondaryColor;

//Responsives designs
const sizesMedia = {
  xl: "69rem", //1104px
  lg: "61rem", //976px
  xmd: "52.5rem", //840px
  md: "48rem", //768px
  sm: "44rem", //704px
  xsm: "33rem", //528px
};

export { primaryColor, secondaryColor, sizesMedia };
