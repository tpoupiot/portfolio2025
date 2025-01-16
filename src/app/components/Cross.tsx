"use client";
import { useEffect } from 'react';
import * as THREE from 'three';

export default function Cross3D() {
    useEffect(() => {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0D0C0C);

        const textureLoader = new THREE.TextureLoader();
        const heightTexture = textureLoader.load("images/textures/heightmap.jpg");

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 8;
        camera.position.y = -1;

        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        const canvasElement = document.querySelector('.canvas');

        if (canvasElement) {
            canvasElement.appendChild(renderer.domElement);
        }

        const ambientLight = new THREE.AmbientLight(0x404040, 30);
        scene.add(ambientLight);

        const geometry = new THREE.BoxGeometry(1, 2.38, 1, 2, 2, 2);
        const material = new THREE.MeshStandardMaterial({ color: 0x404040, wireframe: true });
        material.displacementMap = heightTexture;
        material.displacementScale = 0.5;

        const cube1 = new THREE.Mesh(geometry, material);
        const cube2 = new THREE.Mesh(geometry, material);
        cube2.rotation.z = Math.PI / 2;
        const cube = new THREE.Group();
        cube.scale.set(2.5, 2.5, 2.5);
        cube.rotation.z = Math.PI / 4;

        cube.add(cube1);
        cube.add(cube2);
        scene.add(cube);

        let mouseX = 0;
        let mouseY = 0;

        const onMouseMove = (event: { clientX: number; clientY: number; }) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('mousemove', onMouseMove);

        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', onResize);

        const animate = function () {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01 * (mouseY - cube.rotation.x - Math.PI / 5);
            cube.rotation.y += 0.01 * (mouseX - cube.rotation.y);

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onResize);
            if (canvasElement) {
                canvasElement.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div className="canvas" style={
            {
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: -1,
                overflow: 'hidden'
            }
        }></div>
    )
}