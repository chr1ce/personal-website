import * as THREE from 'three';

const width = window.innerWidth, height = window.innerHeight;
const canvas = document.querySelector('#c'); 

// init

const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();
scene.background = new THREE.Color('rgb(230, 242, 255)')

const radius = 0.2;  
const detail = 1;  
const geometry = new THREE.DodecahedronGeometry( radius, detail );
const material = new THREE.MeshPhongMaterial({
		color: "rgb(134, 173, 224)",
		flatShading: true,
	});

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const renderer = new THREE.WebGLRenderer( {antialias: true, canvas} );
renderer.setSize( width, height );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

// animation

function animate( time ) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	{
    const color = 0x555555;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 5);
    scene.add(light);
    }

	renderer.render( scene, camera );

}