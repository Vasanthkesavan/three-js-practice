# Creating a scene

I have created a scene(a simple cube) to the window. The following information explains everything I used from three.js.

## Scene

Scenes allow you to set up what and where is to be rendered by three.js. This is where you place objects, lights and cameras.

[Documentation of Scene from three.js](https://threejs.org/docs/#api/scenes/Scene)

## PerspectiveCamera

This projection mode is designed to mimic the way the human eye sees. It is the most common projection mode used for rendering a 3D scene.

### Constructor

```
PerspectiveCamera( fov, aspect, near, far )

All the constructor arguments are numbers

fiedOfView(fov) — Camera frustum vertical field of view.
aspectRatio — Usually the width / height
near & far is set to rendered the objects only in this perspective
near — Camera frustum near plane.
far — Camera frustum far plane.

```
[Documentation of Camera from three.js](https://threejs.org/docs/#api/cameras/PerspectiveCamera)

## Renderer

The WebGL renderer displays your beautifully crafted scenes using [WebGL](https://en.wikipedia.org/wiki/WebGL)

#### canvas

A HTML canvas tag to draw graphics and animations. Three.js renders the scene inside the canvas of HTML tag

### Methods used to render

#### .setSize (width, height, updateStyle)

Resizes the output canvas to (width, height) with device pixel ratio taken into account, and also sets the viewport to fit that size, starting in (0, 0).

#### .domElement

This is automatically created by the renderer in the constructor (if not provided already); you just need to add it to your page like so:

```
document.body.appendChild(renderer.domElement);
```

## BoxGeometry

BoxGeometry is the quadrilateral primitive geometry class. It is typically used for creating a cube or irregular quadrilateral of the dimensions provided with the 'width', 'height', and 'depth' constructor arguments.

```
Constructor

BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)

width — Width of the sides on the X axis.
height — Height of the sides on the Y axis.
depth — Depth of the sides on the Z axis.
widthSegments — Optional. Number of segmented faces along the width of the sides. Default is 1.
heightSegments — Optional. Number of segmented faces along the height of the sides. Default is 1.
depthSegments — Optional. Number of segmented faces along the depth of the sides. Default is 1.
```

## MeshBasicMaterial

A material for drawing geometries in a simple shaded (flat or wireframe) way. This material is not affected by lights.

```
MeshBasicMaterial( parameters )
```
### Mesh

Class representing triangular polygon mesh based objects. Also serves as a base for other classes such as MorphBlendMesh and SkinnedMesh.

```
Mesh( geometry, material )
```

Example of creating a mesh

```
var geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );
```

### Why set the camera position ?

If not set, it would cause both the camera and the cube to be inside each other. To avoid this, we simply move the camera out a bit.

```
camera.position.z += VALUE;
```

The value can be += / -= depends on the side you wish to rotate the cube.

## RequestAnimationFrame method call

The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint. The method takes as an argument a callback to be invoked before the repaint.

```
Parameters

callback
A parameter specifying a function to call when it's time to update your animation for the next repaint. The callback has one single argument, a DOMHighResTimeStamp, which indicates the current time (the time returned from performance.now() ) for when requestAnimationFrame starts to fire callbacks.
```

# [OFFICIAL TUTORIAL LINK](https://threejs.org/docs/index.html#manual/introduction/Creating-a-scene)