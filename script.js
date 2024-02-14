// 
// Importing Utilities 
// 
import * as THREE from "three";

// 
// Canvas
// 
let canvas = document.querySelector('.webgl');

// 
// Sizes 
//
let sizes = {
    height: window.innerHeight,
    width: window.innerWidth
}

//
// Scene
// 
let scene = new THREE.Scene();

//
// Object
//

// Geometry
let width = 3;
let height = 3;
let depth = 3;
let boxGeometry = new THREE.BoxGeometry(width, height, depth);
// Material
let boxMaterial = new THREE.MeshBasicMaterial({ color: 'red' });

// Mesh
let boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

scene.add(boxMesh);

//
// Camera
//

let camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.01, 1000);
camera.position.z = 10;
scene.add(camera);

//
// Renderer
//
let renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera);
renderer.setAnimationLoop( animation );


// animation func
function animation( time ) {
	boxMesh.rotation.x = time / 2000;
	boxMesh.rotation.y = time / 1000;
	renderer.render( scene, camera );
}