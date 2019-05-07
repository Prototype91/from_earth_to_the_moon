// --- scene
const scene = new THREE.Scene();

// --- camera
const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspect, 1, 5000);
camera.position.set(0, 20, 50);
camera.rotateX(THREE.Math.degToRad(-40));
scene.add(camera);

// --- renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// --- lights
const light = new THREE.PointLight(0xff0000, 1);
light.position.set(30, 10, 10);
scene.add(light);

const light2 = new THREE.PointLight(0x0000ff, 1);
light2.position.set(-30, 10, 20);
scene.add(light2);

const material = new THREE.MeshLambertMaterial({
  color: 0xffffff
});

const sphere = new THREE.Mesh(new THREE.SphereGeometry(16, 16, 16), material);
sphere.position.set(5, -20, 0);

scene.add(sphere);

renderer.render(scene, camera);
