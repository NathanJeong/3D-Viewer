import { CameraProps } from "@/types/type";
import { useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

interface CameraControlProps {
  cameraSetting: CameraProps;
}

export default function CameraOrbitContoller({
  cameraSetting,
}: CameraControlProps) {
  const { camera, gl } = useThree();
  useEffect(() => {
    if (cameraSetting !== null) {
      camera.far = cameraSetting.far;
      camera.near = cameraSetting.near;
      // @ts-ignore
      camera.fov = cameraSetting.fov;
    }
    const controls = new OrbitControls(camera, gl.domElement);
    /* 키보드로 카메라 xy축 이동 */
    controls.listenToKeyEvents(document.body);
    controls.keys = {
      LEFT: "ArrowRight",
      UP: "ArrowDown",
      RIGHT: "ArrowLeft",
      BOTTOM: "ArrowUp",
    };
    /* 마우스 클릭 이벤트*/
    // controls.addEventListener("change", (event) =>
    //   console.log("Controls Change", event)
    // );
    // controls.addEventListener("start", (event) =>
    //   console.log("Controls Start Event", event)
    // );
    // controls.addEventListener("end", (event) =>
    //   console.log("Controls End Event", event)
    // );
    camera.position.set(
      cameraSetting.positionX,
      cameraSetting.positionY,
      cameraSetting.positionZ
    );
    controls.update();
    return () => {
      controls.dispose();
    };
  }, [camera, gl, cameraSetting]);
  return <></>;
}
