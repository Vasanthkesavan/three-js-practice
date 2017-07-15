/* To display a scene, we need three things
  1. Scene
  2. Camera
  3. Renderer
*/

var handleResize;

function init() {
  let scene = new THREE.Scene();

  let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

  let renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0x000000, 1.0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMapEnabled = true;
  document.body.appendChild( renderer.domElement );

  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 10;

  let animate = function () {
    requestAnimationFrame( animate );
    cube.rotation.x -= 0.1;
    cube.rotation.y -= 0.1;
    renderer.render(scene, camera);
  };

  handleResize = function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate();
}

window.onload = init;

window.addEventListener('resize', handleResize, false);