/* To display a scene, we need three things
  1. Scene
  2. Camera
  3. Renderer
*/


let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );