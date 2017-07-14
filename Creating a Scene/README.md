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

fov — Camera frustum vertical field of view.
aspect — Camera frustum aspect ratio.
near — Camera frustum near plane.
far — Camera frustum far plane.

```
[Documentation of Camera from three.js](https://threejs.org/docs/#api/cameras/PerspectiveCamera)

## Renderer


