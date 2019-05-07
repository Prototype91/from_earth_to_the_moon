//Creation of the scene
const scene = new THREE.Scene();

//Creation of the camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);

//The camera is added to the scene
scene.add(camera);

//Position of the camera
camera.position.set(0, 0, 70);

//Creation of the rederer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Creations of the lights
const ambientLight = new THREE.AmbientLight(0xf1f1f1);
scene.add(ambientLight);

const spotLight = new THREE.DirectionalLight(0xffffff);
spotLight.position.set(50, 50, 50);
scene.add(spotLight);

//Creation of Earth
const earthGeometry = new THREE.SphereGeometry(10, 50, 50);

const earthMaterial = new THREE.MeshPhongMaterial({
  map: new THREE.ImageUtils.loadTexture("../assets/img/texture_earth-5400x2700.jpg"),
  color: 0xf2f2f2,
  specular: 0xbbbbbb,
  shininess: 2
});

const earth = new THREE.Mesh(earthGeometry, earthMaterial);

//Earth added to the scene
scene.add(earth);

//Creation of the Moon
const moonGeometry = new THREE.SphereGeometry(3.5, 50, 50);
const moonMaterial = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture("../assets/img/texture_moon-2048x1024.jpg")
});

const moon = new THREE.Mesh(moonGeometry, moonMaterial);
moon.position.set(35, 0, 0);

//The Moon is added to the scene
scene.add(moon);

//Orbit
let r = 35;
let theta = 0;
let dTheta = 2 * Math.PI / 1000;

//Function Render : 
function render() {

  //Rotation of Earth and the Moon
  earth.rotation.y += .0009;
  moon.rotation.y += .0009

  //Orbit of the Moon       
  theta += dTheta;
  moon.position.x = r * Math.cos(theta);
  moon.position.z = r * Math.sin(theta);
  
  //Rendering of the space view with the loop 
  renderer.render(scene, camera);
  requestAnimationFrame(render);

};

//Rendering :
render();