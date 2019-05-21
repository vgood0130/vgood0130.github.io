var camera, scene, renderer;

init();
function init() {
	// 무대
	scene = new THREE.Scene();

    // 촬영 perspectiveCamera : 원근 카메라 기능
	camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window. innerHeight, 1, 500 );
	camera.position.set(0, 5, 10);
	scene.add( camera );

	renderer = new THREE.WebGLRenderer( { antialias : ture } );
	renderer.setClearColor(0xffffff);
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

    // loader : js 파일 실행
    // material : 재질
    // texture : 모델링 피부를 담당
	var loader = new THREE.JSONLoader();
	var material = new THREE.MeshBasicMaterial;
	var texture = new THREE.TextureLoader().load(Obj_name + '.jpg');

	loader.load(Obj_name + ".js", function (geometry) {
		material.map = texture;
		body = new THREE.Mesh(geometry, material);
		body.rotation.y = 3;
		scene.add(body);
		render();
	});

	var controls = new THREE.OtbitControls( camera, renderer.domElement );
	controls.addEventListener( 'change', render );
	window.addEventListener( 'resize', onWindowResize, false );
}
    // 윈도우 사이즈에 맞게 화면 조정
function onWindowResize( event ){
	     camera.aspect = window.innerWidth / window.innerHeight;
	     camera.updateProjectionMatrix();
	     renderer.setSize( window.innerWidth, window.innerHeight );
	     renderer();
     }

function render() {
	renderer.render( scene, camera );
}