import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

interface ObjectProps {
  url: string;
  mtl: string;
  mat?: any;
  colorMap: string;
  normalMap: string;
  aoMap: string;
}

export default function ObjectScene({
  url,
  mtl,
  mat,
  colorMap,
  normalMap,
  aoMap,
}: ObjectProps) {
  const props = useTexture({
    colorMap,
    normalMap,
    aoMap,
  });
  const materials = useLoader(MTLLoader, mtl);
  const obj = useLoader(OBJLoader, url, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  return (
    <>
      <primitive object={obj} />
      <meshStandardMaterial {...props} />
    </>
  );
}
