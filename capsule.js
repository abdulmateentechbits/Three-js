import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(44,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z= 5;

const renderer = new THREE.WebGL1Renderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.CapsuleGeometry(1,1,26,26);

const material = new THREE.MeshPhongMaterial({color:'red',wireframe:true});

const ambientLight = new THREE.AmbientLight(0xffffff,0.5);
scene.add(ambientLight);
const mesh = new THREE.Mesh(geometry,material);
const directionalLight = new THREE.DirectionalLight(0xff2fff,0.5);
scene.add(directionalLight);
scene.add(mesh);


function animate(){
    requestAnimationFrame(animate);
    mesh.rotation.x +=0.01;
    mesh.rotation.y +=0.01;

    renderer.render(scene, camera)
}

animate();