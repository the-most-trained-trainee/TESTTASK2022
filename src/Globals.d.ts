declare module "*.module.css";
declare module "*.module.scss";
declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "react-scroll/modules/mixins/scroller";

// declare module "*.svg" {
//   const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//   export default content;
// }
