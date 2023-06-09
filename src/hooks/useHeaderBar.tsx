import { EnvironmentProps } from "@/types/type";
import Link from "next/link";
import React, { useState } from "react";

export default function useHeaderBar() {
  const [ambientOn, setAmbientOn] = useState<boolean>(true);
  const [bgPreset, setBgPreset] = useState<EnvironmentProps>("");
  const [pointLightOn, setPointLightOn] = useState<boolean>(true);
  const [controls, setControls] = useState<boolean>(true);
  const [sliderOpen, setSliderOpen] = useState<boolean>(false);
  const headerBar = () => {
    return (
      <div
        style={{
          display: "flex",
          padding: 20,
          backgroundColor: "rgba(0,0,0,0.5)",
          justifyContent: "space-between",
        }}
      >
        <div style={{ marginRight: 10 }}>
          <button
            onClick={() => setSliderOpen((prev) => !prev)}
            style={{
              padding: 10,
              borderRadius: 10,
              marginRight: 10,
              backgroundColor: sliderOpen ? "#6a6ff8" : "rgba(230,230,230,1)",
            }}
          >
            Slider Button
          </button>
          <button
            onClick={() => setAmbientOn((prev) => !prev)}
            style={{
              padding: 10,
              borderRadius: 10,
              marginRight: 10,
              backgroundColor: ambientOn ? "teal" : "rgba(230,230,230,1)",
            }}
          >
            Ambient Light
          </button>
          <button
            onClick={() => setPointLightOn((prev) => !prev)}
            style={{
              padding: 10,
              borderRadius: 10,
              marginRight: 10,
              backgroundColor: pointLightOn ? "teal" : "rgba(230,230,230,1)",
            }}
          >
            Point Light
          </button>
          <Link
            href={`/`}
            onClick={() => setControls((prev) => !prev)}
            style={{
              padding: 10,
              borderRadius: 10,
              marginRight: 10,
              backgroundColor: "rgba(230,230,230,1)",
              fontWeight: "600",
            }}
          >
            Slider Tab
          </Link>
          <Link
            href={`/SceneWithControl`}
            onClick={() => setControls((prev) => !prev)}
            style={{
              padding: 10,
              borderRadius: 10,
              marginRight: 10,
              backgroundColor: "rgba(230,230,230,1)",
              fontWeight: "600",
            }}
          >
            Control Tab
          </Link>
        </div>
        <div>
          <select
            // @ts-ignore
            onChange={(e) => setBgPreset(e.target.value)}
            style={{ padding: 10, borderRadius: 10, width: 150 }}
          >
            Choose Background Preset
            <option key="BG Theme" value="">
              BG Theme
            </option>
            <option key="sunset" value="sunset">
              sunset
            </option>
            <option key="dawn" value="dawn">
              dawn
            </option>
            <option key="night" value="night">
              night
            </option>
            <option key="warehouse" value="warehouse">
              warehouse
            </option>
            <option key="forest" value="forest">
              forest
            </option>
            <option key="apartment" value="apartment">
              apartment
            </option>
            <option key="studio" value="studio">
              studio
            </option>
            <option key="city" value="city">
              city
            </option>
            <option key="park" value="park">
              park
            </option>
            <option key="lobby" value="lobby">
              lobby
            </option>
          </select>
        </div>
      </div>
    );
  };
  return {
    headerBar,
    ambientOn,
    bgPreset,
    pointLightOn,
    controls,
    sliderOpen,
  };
}
