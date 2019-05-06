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

// --- plateau
const geometry = new THREE.PlaneGeometry(100, 100);
const material = new THREE.MeshLambertMaterial({
  color: 0xffffff
});
const plane = new THREE.Mesh(geometry, material);
plane.translateY(-10);
plane.rotateX(THREE.Math.degToRad(-90));

const sphere = new THREE.Mesh(new THREE.SphereGeometry(10, 16, 16), material);
sphere.position.set(20, 0, 0);

const box = new THREE.Mesh(new THREE.TorusKnotGeometry(10, 3, 100, 16), material);
box.position.set(-20, 0, 0);

const torus = new THREE.Mesh(new THREE.IcosahedronGeometry(10), material);
torus.position.set(20, 0, 30);

const cylinder = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 20, 16), material);
cylinder.position.set(-20, 0, 30);

scene.add(plane, sphere, box, torus, cylinder);

renderer.render(scene, camera);
