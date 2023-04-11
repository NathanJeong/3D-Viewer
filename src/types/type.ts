export interface CameraProps {
  fov: number;
  near: number;
  far: number;
  positionX: number;
  positionY: number;
  positionZ: number;
}
export interface Cursor {
  x: number;
  y: number;
}
export type EnvironmentProps =
  | "sunset"
  | "dawn"
  | "night"
  | "warehouse"
  | "forest"
  | "apartment"
  | "studio"
  | "city"
  | "park"
  | "lobby"
  | "";
