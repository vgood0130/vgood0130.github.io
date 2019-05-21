
//Scene 객체 생성 
var scene = new THREE.Scene();
//Camera 객체 생성 : 원근법 적용
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// Renderer 객체 생성 : 3차원 수식을 우리가 보는 형태로 바꿈
var renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Geometry 생성(Cube)
var geometry = new THREE.CubeGeometry(100,100,100);
var material = new THREE.MeshBasicMaterial({color: 0x1ec876});
var cube = new THREE.Mesh( geometry, material);

scene.add(cube);

camera.position.y = 160;
camera.position.z = 400;

camera.lookAt(cube.position);
//Light
var skyboxGeometry = new THREE.CubeGeometry(10000, 10000, 10000);
var skyboxMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide });
var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
 
scene.add(skybox);

var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 30, 20);
 
scene.add(pointLight);
//렌더링
function render(){
	requestAnimationFrame( render );
	renderer.render(scene, camera);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
}
render();