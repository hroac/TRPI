import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { Card, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Drawer, IconButton, useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';

// --- MUI Theme ---
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

// --- Data for the Hypercube ---
const nodeData = [
    // User-defined order
    { pos: new THREE.Vector3(1, 1, -1), name: "FiSe | TeNi" },
    { pos: new THREE.Vector3(-1, 1, -1), name: "TiSe | FeNi" },
    { pos: new THREE.Vector3(1, 1, 1), name: "FeSi | TiNe" },
    { pos: new THREE.Vector3(-1, 1, 1), name: "TeSi | FiNe" },
    { pos: new THREE.Vector3(1, -1, 1), name: "SiFe | NeTi" },
    { pos: new THREE.Vector3(1, -1, -1), name: "SeFi | NiTe" },
    { pos: new THREE.Vector3(-1, -1, -1), name: "SeTi | NiFe" },
    { pos: new THREE.Vector3(-1, -1, 1), name: "SiTe | NeFi" },
];


const labelColors = [
    '#FF8A8A', // Soft Red
    '#FFC28A', // Soft Orange
    '#FFF28A', // Soft Yellow
    '#99E6A9', // Soft Green
    '#99CFFF', // Soft Blue
    '#C7A9D9', // Soft Purple
    '#FFA8C7', // Soft Pink
    '#A0E7E5', // Soft Cyan
];

// --- Helper function to average two hex colors ---
const averageHexColors = (color1: string, color2: string): string => {
    const c1 = parseInt(color1.slice(1), 16);
    const c2 = parseInt(color2.slice(1), 16);
    const r1 = (c1 >> 16) & 255, g1 = (c1 >> 8) & 255, b1 = c1 & 255;
    const r2 = (c2 >> 16) & 255, g2 = (c2 >> 8) & 255, b2 = c2 & 255;
    const r = Math.floor((r1 + r2) / 2);
    const g = Math.floor((g1 + g2) / 2);
    const b = Math.floor((b1 + b2) / 2);
    return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
};

// --- Type Definition for Legend Props ---
interface LegendProps {
    onNodeClick: (index: number) => void;
    selectedNodeIndex: number | null;
}

// --- Legend Component ---
const Legend: React.FC<LegendProps> = ({ onNodeClick, selectedNodeIndex }) => (
    <Box sx={{ width: 280, p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Typography alignContent={'center'} variant="h6" component="h3" gutterBottom>Meta-State Visualizer</Typography>
        <List dense sx={{ overflowY: 'auto' }}>
            {nodeData.map((node, i) => (
                <ListItem key={node.name} disablePadding>
                    <ListItemButton 
                        onClick={() => onNodeClick(i)}
                        sx={{ 
                            transition: 'opacity 0.3s ease-in-out',
                            opacity: selectedNodeIndex === null || selectedNodeIndex === i ? 1 : 0.4 
                        }}
                    >
                        <ListItemIcon sx={{minWidth: '32px'}}>
                            <Box sx={{ width: 16, height: 16, borderRadius: '50%', backgroundColor: labelColors[i] }} />
                        </ListItemIcon>
                        <ListItemText primary={node.name} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Box>
);


const StateVisualizer: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const [selectedNodeIndex, setSelectedNodeIndex] = useState<number | null>(null);
    const selectedNodeIndexRef = useRef<number | null>(selectedNodeIndex);
    const [isLegendOpen, setIsLegendOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const pressTimerRef = useRef<NodeJS.Timeout | null>(null);
    const tooltipTimerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        selectedNodeIndexRef.current = selectedNodeIndex;
    }, [selectedNodeIndex]);


    useEffect(() => {
        if (!mountRef.current) return;

        const currentMount = mountRef.current;
        const spheres: THREE.Mesh[] = [];
        const lines: Line2[] = [];

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        
        const distance = 4;
        const elevation = Math.PI / 5;
        const azimuth = -Math.PI / 4;
        camera.position.x = distance * Math.cos(elevation) * Math.sin(azimuth);
        camera.position.y = distance * Math.sin(elevation);
        camera.position.z = distance * Math.cos(elevation) * Math.cos(azimuth);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        currentMount.appendChild(renderer.domElement);
        
        const labelRenderer = new CSS2DRenderer();
        labelRenderer.setSize( currentMount.clientWidth, currentMount.clientHeight );
        labelRenderer.domElement.style.position = 'absolute';
        labelRenderer.domElement.style.top = '0px';
        labelRenderer.domElement.style.pointerEvents = 'none';
        currentMount.appendChild( labelRenderer.domElement );

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.1;

        nodeData.forEach((node, i) => {
            const geometry = new THREE.SphereGeometry(0.1, 32, 32);
            const material = new THREE.MeshBasicMaterial({ color: labelColors[i] });
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.copy(node.pos);
            sphere.userData = { name: node.name, index: i };
            spheres.push(sphere);
            scene.add(sphere);
        });
        
        for (let i = 0; i < nodeData.length; i++) {
            for (let j = i + 1; j < nodeData.length; j++) {
                const points = [
                    nodeData[i].pos.x, nodeData[i].pos.y, nodeData[i].pos.z,
                    nodeData[j].pos.x, nodeData[j].pos.y, nodeData[j].pos.z
                ];
                const geometry = new LineGeometry();
                geometry.setPositions(points);
                const material = new LineMaterial({
                    color: new THREE.Color(averageHexColors(labelColors[i], labelColors[j])),
                    linewidth: 5, 
                    dashed: true, dashSize: 0.1, gapSize: 0.05,
                    transparent: true, opacity: 0.75,
                    resolution: new THREE.Vector2(currentMount.clientWidth, currentMount.clientHeight)
                });
                const line = new Line2(geometry, material);
                line.computeLineDistances();
                line.userData = { indices: [i, j] }; 
                lines.push(line);
                scene.add(line);
            }
        }

        const tooltipDiv = document.createElement('div');
        tooltipDiv.style.background = 'rgba(0, 0, 0, 0.8)';
        tooltipDiv.style.color = 'white';
        tooltipDiv.style.padding = '5px 10px';
        tooltipDiv.style.borderRadius = '5px';
        tooltipDiv.style.visibility = 'hidden';
        const tooltip = new CSS2DObject(tooltipDiv);
        scene.add(tooltip);

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        const onPointerDown = (event: PointerEvent) => {
            const bounds = currentMount.getBoundingClientRect();
            mouse.x = ((event.clientX - bounds.left) / currentMount.clientWidth) * 2 - 1;
            mouse.y = -((event.clientY - bounds.top) / currentMount.clientHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(spheres);

            if (intersects.length > 0) {
                const intersectedObject = intersects[0].object;
                const intersectedIndex = intersectedObject.userData.index as number;
                pressTimerRef.current = setTimeout(() => {
                    setSelectedNodeIndex(prev => prev === intersectedIndex ? null : intersectedIndex);
                    tooltipDiv.style.visibility = 'hidden';
                    pressTimerRef.current = null;
                }, 250);
            }
        };

        const onPointerUp = () => {
            if (pressTimerRef.current) {
                clearTimeout(pressTimerRef.current);
                pressTimerRef.current = null;
                raycaster.setFromCamera(mouse, camera);
                const intersects = raycaster.intersectObjects(spheres);
                if (intersects.length > 0) {
                    const intersectedObject = intersects[0].object;
                    tooltip.position.copy(intersectedObject.position);
                    tooltip.position.y += 0.2;
                    tooltipDiv.textContent = intersectedObject.userData.name as string;
                    tooltipDiv.style.visibility = 'visible';
                    if(tooltipTimerRef.current) clearTimeout(tooltipTimerRef.current);
                    tooltipTimerRef.current = setTimeout(() => {
                        tooltipDiv.style.visibility = 'hidden';
                    }, 2000);
                }
            }
        };

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();

            lines.forEach(line => {
                const material = line.material as LineMaterial;
                const isConnected = selectedNodeIndexRef.current !== null && (line.userData.indices as number[]).includes(selectedNodeIndexRef.current);
                const targetOpacity = selectedNodeIndexRef.current === null ? 0.75 : (isConnected ? 0.9 : 0.1);
                const targetWidth = selectedNodeIndexRef.current === null ? 5 : (isConnected ? 6 : 3);
                material.opacity = THREE.MathUtils.lerp(material.opacity, targetOpacity, 0.1);
                material.linewidth = THREE.MathUtils.lerp(material.linewidth, targetWidth, 0.1);
            });

            renderer.render(scene, camera);
            labelRenderer.render(scene, camera);
        };
        animate();
        
        currentMount.addEventListener('pointerdown', onPointerDown);
        currentMount.addEventListener('pointerup', onPointerUp);

        const handleResize = () => {
            if (!currentMount) return;
            const width = currentMount.clientWidth;
            const height = currentMount.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
            labelRenderer.setSize(width, height);
            lines.forEach(line => (line.material as LineMaterial).resolution.set(width, height));
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            currentMount.removeEventListener('pointerdown', onPointerDown);
            currentMount.removeEventListener('pointerup', onPointerUp);
            if (pressTimerRef.current) clearTimeout(pressTimerRef.current);
            if (tooltipTimerRef.current) clearTimeout(tooltipTimerRef.current);
            if (currentMount) {
                if (renderer.domElement.parentNode === currentMount) {
                    currentMount.removeChild(renderer.domElement);
                }
                if (labelRenderer.domElement.parentNode === currentMount) {
                    currentMount.removeChild(labelRenderer.domElement);
                }
            }
        };
    }, []);

    const handleNodeClick = (index: number) => {
        setSelectedNodeIndex(prev => prev === index ? null : index);
        if (isMobile) {
            setIsLegendOpen(false);
        }
    };

    return (
        <Card sx={{ mt: 10, ml: isMobile ? 4: 8.75, borderRadius: '8px', display: 'flex', height: '90vh', width: isMobile ? '85vw' :'90vw', flexDirection: 'row', position: 'relative' }}>
            {isMobile ? (
                <>
                    <Box sx={{ display: 'flex', alignItems: 'center', position: 'absolute', top: 8, left: 8, zIndex: 1 }}>
                        <IconButton onClick={() => setIsLegendOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="h3" sx={{ ml: 1 }}>
                            Meta-State Visualizer
                        </Typography>
                    </Box>
                    <Drawer anchor="left" open={isLegendOpen} onClose={() => setIsLegendOpen(false)}>
                        <Legend onNodeClick={handleNodeClick} selectedNodeIndex={selectedNodeIndex} />
                    </Drawer>
                </>
            ) : (
                <Box sx={{ borderRight: '1px solid grey.800' }}>
                    <Legend onNodeClick={handleNodeClick} selectedNodeIndex={selectedNodeIndex} />
                </Box>
            )}
            <Box ref={mountRef} sx={{ flexGrow: 1, position: 'relative', cursor: 'grab' }} />
        </Card>
    );
};

export default StateVisualizer