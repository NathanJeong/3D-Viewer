import Scene from "@/components/Scene";
import useHeaderBar from "@/hooks/useHeaderBar";
import useWindowSize from "@/hooks/useWindowSize";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { NextPage } from "next";
import { Suspense, useState } from "react";

const SceneWithControl: NextPage = () => {
  const { headerBar, ambientOn, bgPreset, pointLightOn } = useHeaderBar();
  const windowSize = useWindowSize();
  const [grab, setGrab] = useState<boolean>(false);
  return (
    <>
      {headerBar()}
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: windowSize.height,
          cursor: grab ? "grabbing" : "grab",
        }}
      >
        <Canvas
          dpr={[1, 2]}
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 1000,
            position: [-1.5, 1.5, 1.5],
          }}
          onMouseDown={() => {
            setGrab(true);
          }}
          onMouseUp={() => {
            setGrab(false);
          }}
        >
          <Suspense fallback={null}>
            {ambientOn && <ambientLight />}
            {pointLightOn && <pointLight position={[50, 50, 50]} />}
            <Scene />
          </Suspense>
          {bgPreset !== "" && <Environment preset={bgPreset} background />}
        </Canvas>
      </main>
    </>
  );
};

export default SceneWithControl;
