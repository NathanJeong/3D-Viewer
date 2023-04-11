import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import { CameraProps } from "@/types/type";

const WHITE = "rgba(255,255,255,0.9)";

interface CameraWorkProps {
  cameraSetting: CameraProps;
  setCameraSetting: React.Dispatch<React.SetStateAction<CameraProps>>;
  onPress: boolean;
  setOnPress: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SliderComponent({
  cameraSetting,
  setCameraSetting,
  onPress,
  setOnPress,
}: CameraWorkProps) {
  const [loading, setLoading] = useState(false);
  const savePosition = () => {
    localStorage.setItem("camera_setting", JSON.stringify(cameraSetting));
  };
  const resetPosition = () => {
    const storageSetting: CameraProps = JSON.parse(
      localStorage.getItem("camera_setting")!
    );
    setCameraSetting({
      fov: storageSetting.fov,
      far: storageSetting.far,
      near: storageSetting.near,
      positionX: storageSetting.positionX,
      positionY: storageSetting.positionY,
      positionZ: storageSetting.positionZ,
    });
  };
  useEffect(() => {
    if (cameraSetting !== null) {
      setLoading(false);
    }
  }, [loading, cameraSetting]);
  return (
    <>
      {!loading && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(0,0,0,0.3)",
            width: 300,
            top: 100,
            left: 20,
            zIndex: 1,
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 20,
            paddingRight: 20,
            borderRadius: 20,
            justifyContent: "center",
          }}
        >
          <div style={{ marginBottom: 10, marginTop: 10 }}>
            <h1 style={{ color: WHITE }}>Camera Settings</h1>
          </div>
          <div>
            <span style={{ color: WHITE }}>
              FOV
              <Slider
                valueLabelDisplay="auto"
                min={10}
                max={120}
                defaultValue={cameraSetting.fov ? cameraSetting.fov : 45}
                value={cameraSetting.fov}
                step={5}
                onChange={(e) => {
                  if (e) {
                    setOnPress(true);
                    setCameraSetting((prev) => {
                      // @ts-ignore
                      return { ...prev, fov: e.target.value };
                    });
                  }
                }}
              />
            </span>
          </div>
          <div>
            <span style={{ color: WHITE }}>
              Near
              <Slider
                valueLabelDisplay="auto"
                min={0.1}
                max={5}
                defaultValue={cameraSetting.near ? cameraSetting.near : 0.1}
                value={cameraSetting.near}
                step={0.1}
                onChange={(e) => {
                  if (e) {
                    setOnPress(true);
                    setCameraSetting((prev) => {
                      // @ts-ignore
                      return { ...prev, near: e.target.value };
                    });
                  }
                }}
              />
            </span>
          </div>
          <div>
            <span style={{ color: WHITE }}>
              Far
              <Slider
                valueLabelDisplay="auto"
                min={0}
                max={1000}
                defaultValue={cameraSetting.far ? cameraSetting.far : 1000}
                value={cameraSetting.far}
                step={100}
                onChange={(e) => {
                  if (e) {
                    setOnPress(true);
                    setCameraSetting((prev) => {
                      // @ts-ignore
                      return { ...prev, far: e.target.value };
                    });
                  }
                }}
              />
            </span>
          </div>
          <div>
            <span style={{ color: WHITE }}>
              Position X
              <Slider
                valueLabelDisplay="auto"
                min={-10}
                max={10}
                defaultValue={
                  cameraSetting.positionX ? cameraSetting.positionX : -1.5
                }
                value={cameraSetting.positionX}
                step={0.1}
                onChange={(e) => {
                  if (e) {
                    setOnPress(true);
                    setCameraSetting((prev) => {
                      // @ts-ignore
                      return { ...prev, positionX: e.target.value };
                    });
                  }
                }}
              />
            </span>
          </div>
          <div>
            <span style={{ color: WHITE }}>
              Position Y
              <Slider
                valueLabelDisplay="auto"
                min={-10}
                max={10}
                defaultValue={
                  cameraSetting.positionY ? cameraSetting.positionY : 1.5
                }
                value={cameraSetting.positionY}
                step={0.1}
                onChange={(e) => {
                  if (e) {
                    setOnPress(true);
                    setCameraSetting((prev) => {
                      // @ts-ignore
                      return { ...prev, positionY: e.target.value };
                    });
                  }
                }}
              />
            </span>
          </div>
          <div>
            <span style={{ color: WHITE }}>
              Position Z
              <Slider
                valueLabelDisplay="auto"
                min={-10}
                max={10}
                defaultValue={
                  cameraSetting.positionZ ? cameraSetting.positionZ : 1.5
                }
                value={cameraSetting.positionZ}
                step={0.1}
                onChange={(e) => {
                  if (e) {
                    setOnPress(true);
                    setCameraSetting((prev) => {
                      // @ts-ignore
                      return { ...prev, positionZ: e.target.value };
                    });
                  }
                }}
              />
            </span>
          </div>

          <button
            onClick={savePosition}
            style={{
              padding: 10,
              marginRight: 10,
              borderRadius: 10,
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            Save Camera Position
          </button>
          <button
            onClick={resetPosition}
            style={{
              padding: 10,
              marginRight: 10,
              borderRadius: 10,
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            Reset Camera Position
          </button>
        </div>
      )}
    </>
  );
}
