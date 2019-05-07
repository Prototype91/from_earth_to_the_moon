//Creation of the scene
let scene = new THREE.Scene();

//Creation of the camera
let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);

//The camera is added to the scene
scene.add(camera);

//Position of the camera
camera.position.set(0, 0, 70);

//Creation of the rederer
let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Creations of the lights
let ambientLight = new THREE.AmbientLight(0xf1f1f1);
scene.add(ambientLight);

let spotLight = new THREE.DirectionalLight(0xffffff);
spotLight.position.set(50, 50, 50);
scene.add(spotLight);

//Creation of Earth
let earthGeometry = new THREE.SphereGeometry(10, 50, 50);

let earthMaterial = new THREE.MeshPhongMaterial({
  map: new THREE.ImageUtils.loadTexture("../assets/img/texture_earth-5400x2700.jpg"),
  color: 0xf2f2f2,
  specular: 0xbbbbbb,
  shininess: 2
});

let earth = new THREE.Mesh(earthGeometry, earthMaterial);

//Earth added to the scene
scene.add(earth);

//Creation of the Moon
let moonGeometry = new THREE.SphereGeometry(3.5, 50, 50);
let moonMaterial = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture("../assets/img/texture_moon-2048x1024.jpg")
});

let moon = new THREE.Mesh(moonGeometry, moonMaterial);
moon.position.set(35, 0, 0);

//The Moon is added to the scene
scene.add(moon);

//Camera vector
let earthVec = new THREE.Vector3(0, 0, 0);
let r = 35;
let theta = 0;
let dTheta = 2 * Math.PI / 1000;
let dx = .01;
let dy = -.01;
let dz = -.05;

//Function Render : 
let render = function () {

  //Rotation of Earth
  earth.rotation.y += .0009;

  //Rotation of the Moon       
  theta += dTheta;
  moon.position.x = r * Math.cos(theta);
  moon.position.z = r * Math.sin(theta);
  
  //Rendering of the space view
  renderer.render(scene, camera);
  requestAnimationFrame(render);

};

//Rendering :
render();