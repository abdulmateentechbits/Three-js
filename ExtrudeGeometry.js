import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(44, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Define a 2D shape as a path of vertices
const shape = new THREE.Shape();
shape.moveTo(0, 0);
shape.lineTo(1, 0);
shape.lineTo(1, 1);
shape.lineTo(0, 1);
shape.lineTo(0, 0);
shape.lineTo(1, 0);
shape.lineTo(1, 1);
shape.lineTo(0, 1);
shape.lineTo(0, 0);

// Define extrusion settings
const extrudeSettings = {
    steps: 1, // Number of divisions for the extrusion
    depth: 1, // Extrusion depth
    bevelEnabled: true, // Add beveling to the extrusion
    bevelThickness: 0.1, // Bevel thickness
    bevelSize: 0.4, // Bevel size
    bevelSegments: 3 // Number of bevel segments
};

// Create the extruded geometry
const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

const material = new THREE.MeshPhongMaterial({ color: 'red', wireframe: true });

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const directionalLight = new THREE.DirectionalLight(0xff2fff, 0.5);
scene.add(directionalLight);

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
