/* To display a scene, we need three things
  1. Scene
  2. Camera
  3. Renderer
*/

let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


/* Now we have rendered a scene
  1. Need a BoxGeometry which has all vertices and faces of the cube
  2. Need a basic material to color the cube
  3. Need a mesh to apply material to the geometry
  4. Need a method call to add the mesh to the scene
  5. Need a render method call to render it
*/


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

animate();




