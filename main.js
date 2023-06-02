import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(24,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z=5;

const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry(1,1,1,10,10,10);
const material = new THREE.MeshBasicMaterial({color:'#c1c1c1', wireframe:true});
material.wireframeLinewidth =3;

const cube = new THREE.Mesh(geometry,material);


scene.add(cube);

function renderObject(){
	requestAnimationFrame(renderObject);
    
	cube.rotation.x +=0.01;
	cube.rotation.y +=0.01;

	renderer.render(scene, camera);
}

renderObject();