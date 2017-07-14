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
document.body.appendChild( renderer.domElement );
```