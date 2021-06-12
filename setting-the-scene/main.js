//We have set up the scene, camera and the renderer
//The first attribute is FOV, which is the extent of the scene that is given moment
//The second attribute is the aspect ratio
//The next two attributes are the near and far clipping plane
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

//This is the renderer, where the magic happens
//The renderer is then added to the html document and displays the scene to us
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//To create a cube, BoxGeometry is needed
const geometry = new THREE.BoxGeometry();
//Colours the materials, works the same as css
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
//The mesh is an object that takes a geometry, and applies a material to it, which we can insert to our scene
const cube = new THREE.Mesh(geometry, material);
//by default when we call a scene.add() and get added to the coords
scene.add(cube);
//To avoid the cube and camera inside each other we then move the camera out a bit 
camera.position.z = 5;



