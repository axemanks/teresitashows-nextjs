// declare .glb files as modules so that typescript doesn't complain about importing them

declare module "*.glb" {
    const value: any;
    export default value;
  }