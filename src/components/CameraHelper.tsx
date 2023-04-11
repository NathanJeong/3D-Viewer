import { PerspectiveCamera } from "three";

export default function CameraHelper() {
  const camera = new PerspectiveCamera(45, 1, 0.1, 1000);
  return (
    <group position={[0, 0, 2]}>
      <cameraHelper args={[camera]} />
    </group>
  );
}
