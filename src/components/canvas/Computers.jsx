/* eslint-disable react/no-unknown-property */
//Warning: Dont leave a space between a comment and the following line. it will crash the app.
// To find 3D models: https://sketchfab.com/explore/downloadable

// Suspense is a component to wrap things that are loading.
import { Suspense, useEffect, useState } from "react";

// Canvas is a wrapper to place things on it.
import { Canvas } from "@react-three/fiber";

// OrbitControls is a camera controller, Preload is a component to preload assets, 
// useGLTF is a hook to load gltf models. "to help us draw things in 3D"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -3, -1.5] : [0, -3.85, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size for Mobile
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      // 20=x axis, 3=y axis, 5=z axis, fov=field of view
      camera={{ position: [20, 3, 5], fov: 25 }}
      // To properly render model.
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* //While canvas is loading, show CanvasLoader. */}
      <Suspense fallback={<CanvasLoader />}>
        {/* // To help us move around the canvas. */}
        <OrbitControls
          enableZoom={false}
          // To only move around the x and y axis = Left & Right only.
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;