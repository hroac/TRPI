import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Box } from '@mui/material';
import { MBTIProfiles } from '../utils/mbtiMapping';
import { typesData } from './typesData';

interface BigFiveValues {
    openness: number;
    conscientiousness: number;
    extraversion: number;
    agreeableness: number;
    neuroticism: number;
  }

interface MBTISphereProps {
    currentTraits: BigFiveValues;
    onTypeClick: (type: string) => void;
  }
  
  const MBTISphereVisualization: React.FC<MBTISphereProps> = ({ currentTraits, onTypeClick }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const markersRef = useRef<THREE.Object3D[]>([]);
  
    // Scaling factors for coordinate mapping:
    // X = (Extraversion - Neuroticism) * scaleX
    // Y = normalized Openness (from [0.4,0.8] to [-1,1]) * scaleY
    // Z = (Conscientiousness - Agreeableness) * scaleZ
    const scaleX = 3;
    const scaleY = 2;
    const scaleZ = 3;
  
    const computeCoordinates = (traits: BigFiveValues) => {
      const x = (traits.extraversion - traits.neuroticism) * scaleX;
      const yNormalized = ((traits.openness - 0.4) / (0.8 - 0.4)) * 2 - 1;
      const y = yNormalized * scaleY;
      const z = (traits.conscientiousness - traits.agreeableness) * scaleZ;
      return new THREE.Vector3(x, y, z);
    };
  
    // Helper: Create a text sprite with configurable font size.
    const makeTextSprite = (message: string, fontSize = 48) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (!context) return null;
      context.font = `${fontSize}px Arial`;
      const textWidth = context.measureText(message).width;
      canvas.width = textWidth + 20;
      canvas.height = fontSize + 10;
      context.font = `${fontSize}px Arial`;
      context.fillStyle = "primary";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(message, canvas.width / 2, canvas.height / 2);
      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(1.5, 0.75, 1);
      return sprite;
    };
  
    // Add axis labels (positioned further out)
    const addAxisLabels = (scene: THREE.Scene) => {
      // X-axis: positive = E (Extraversion), negative = N (Neuroticism)
      const labelE = makeTextSprite("E", 48);
      if (labelE) { labelE.position.set(6, 0, 0); scene.add(labelE); }
      const labelN_X = makeTextSprite("N", 48);
      if (labelN_X) { labelN_X.position.set(-6, 0, 0); scene.add(labelN_X); }
      // Y-axis: positive = N (Intuition, i.e. high Openness) and negative = S (Sensing)
      const labelN_Y = makeTextSprite("I", 48);
      if (labelN_Y) { labelN_Y.position.set(0, 6, 0); scene.add(labelN_Y); }
      const labelS = makeTextSprite("S", 48);
      if (labelS) { labelS.position.set(0, -6, 0); scene.add(labelS); }
      // Z-axis: positive = C (Conscientiousness) and negative = A (Agreeableness)
      const labelC = makeTextSprite("C", 48);
      if (labelC) { labelC.position.set(0, 0, 6); scene.add(labelC); }
      const labelA = makeTextSprite("A", 48);
      if (labelA) { labelA.position.set(0, 0, -6); scene.add(labelA); }
    };
  
    useEffect(() => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
  
      // Create scene with transparent background.
      const scene = new THREE.Scene();
      scene.background = null;
  
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      // Set default camera position using spherical coordinates:
      // radius = 12, theta = 45° from vertical (Y), phi = 45° from positive X.
      const radius = 12;
      const theta = Math.PI / 4; // 45° from vertical.
      const phi = Math.PI / 4;   // 45° around Y axis.
      // In Three.js (with Y up): 
      // x = r * sin(theta) * cos(phi)
      // y = r * cos(theta)
      // z = r * sin(theta) * sin(phi)
      camera.position.set(
        radius * Math.sin(theta) * Math.cos(phi),  // x
        radius * Math.cos(theta),                  // y
        radius * Math.sin(theta) * Math.sin(phi)     // z
      );
      camera.lookAt(new THREE.Vector3(0, 0, 0));
  
      // Create renderer with transparency enabled.
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0); // Transparent.
      containerRef.current.appendChild(renderer.domElement);
  
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.1;
  
      // Add a reference wireframe sphere and axes helper.
      const wireGeometry = new THREE.SphereGeometry(4, 32, 32);
      const wireMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        wireframe: true,
        opacity: 0.2,
        transparent: true
      });
      const wireSphere = new THREE.Mesh(wireGeometry, wireMaterial);
      scene.add(wireSphere);
      scene.add(new THREE.AxesHelper(5));
  
      // Add axis labels further out.
      addAxisLabels(scene);
  
      // Prepare an array for clickable markers.
      markersRef.current = [];
  
      // Create markers for each MBTI profile.
      MBTIProfiles.forEach((profile) => {
        const pos = computeCoordinates({
          openness: profile.traits.openness,
          conscientiousness: profile.traits.conscientiousness,
          extraversion: profile.traits.extraversion,
          agreeableness: profile.traits.agreeableness,
          neuroticism: profile.traits.neuroticism,
        });
        // Get marker color from typesData (each type's 4F color)
        const typeInfo = typesData.find((t) => t.type === profile.name);
        const markerColor = typeInfo ? typeInfo.bgColor : "#3366ff";
        const markerGeometry = new THREE.SphereGeometry(0.08, 16, 16);
        const markerMaterial = new THREE.MeshStandardMaterial({ color: new THREE.Color(markerColor) });
        const marker = new THREE.Mesh(markerGeometry, markerMaterial);
        marker.position.copy(pos);
        // Store type name in userData.
        marker.userData.type = profile.name;
        scene.add(marker);
        markersRef.current.push(marker);
  
        const label = makeTextSprite(profile.name, 32);
        if (label) {
          label.position.copy(pos.clone().add(new THREE.Vector3(0, 0.2, 0)));
          scene.add(label);
        }
      });
  
      // Create a red sphere for the current (selected) type.
      const currentGeometry = new THREE.SphereGeometry(0.12, 16, 16);
      const currentMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
      const currentPoint = new THREE.Mesh(currentGeometry, currentMaterial);
      currentPoint.position.copy(computeCoordinates(currentTraits));
      scene.add(currentPoint);
  
      // Add lights.
      scene.add(new THREE.AmbientLight(0xffffff, 0.8));
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);
  
      // Set up raycaster for detecting clicks on markers.
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();
      const onClick = (event: MouseEvent) => {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(markersRef.current);
        if (intersects.length > 0) {
          const clickedMarker = intersects[0].object;
          const typeClicked = clickedMarker.userData.type;
          if (typeClicked) {
            onTypeClick(typeClicked);
          }
        }
      };
      renderer.domElement.addEventListener('click', onClick);
  
      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();
  
      return () => {
        renderer.domElement.removeEventListener('click', onClick);
        if (containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
      };
    }, [currentTraits, onTypeClick]);
  
    return (
      <Box ref={containerRef} sx={{ width: '100%', height: '400px', backgroundColor: 'transparent' }} />
    );
  };

  export default MBTISphereVisualization;