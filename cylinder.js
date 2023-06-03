import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(34,window.innerWidth/window.innerHeight,0.1,1000);

camera.position.z= 5;

const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.CylinderGeometry(1,0,1,32,6,false);
const material = new THREE.MeshPhongMaterial({color:'red',wireframe:true});
const cylinder = new THREE.Mesh(geometry,material);

scene.add(cylinder);

const ambientLight = new THREE.AmbientLight(0xffffff,0.5);
scene.add(ambientLight);

const directionalLigth = new THREE.DirectionalLight(0xffffff,0.5);
directionalLigth.position.set(1,1,1);
scene.add(directionalLigth);

function animate(){
    requestAnimationFrame(animate);
     
    cylinder.rotation.x +=0.01;
    cylinder.rotation.y +=0.01;

    renderer.render(scene,camera)
}

animate();

