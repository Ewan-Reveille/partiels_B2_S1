<template>
  <div ref="canvasContainer" style="margin-top:150px"></div>
</template>

<script>
import * as THREE from 'three';

export default {
  mounted() {
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    renderer.setClearColor(0x000000, 0);
    
    this.$refs.canvasContainer.appendChild(renderer.domElement);
    
    const numPoints = 300;
    const geometry = new THREE.BufferGeometry();
    
    const positions = [];
    for (let i = 0; i < numPoints; i++) {
      const vector = new THREE.Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
      vector.normalize();
      vector.multiplyScalar(1);
      positions.push(vector.x, vector.y, vector.z);
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    
    const material = new THREE.PointsMaterial({
      size: 0.05,
      color: '#2EC7D3'
    });
    
    const points = new THREE.Points(geometry, material);
    points.scale.set(3,3,3);
    scene.add(points);
    
    const lineMaterial = new THREE.LineBasicMaterial({
      color: '#2EC7D3'
    });
    
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    lines.scale.set(3,3,3);
    scene.add(lines);
    
    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.y += 0.0025;
      lines.rotation.y += 0.0025;
      renderer.render(scene, camera);
    };
    animate();
  }
};
</script>

<style>
#canvasContainer {
  width: 100%;
  height: 100%;
}
</style>
