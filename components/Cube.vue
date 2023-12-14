<!-- <script>
import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'

export default {
  data() {
    return {
      color: new THREE.Color(0x2EC7D3),
      canvasColor: '#ffffff',
    };
  },
  mounted() {
    this.updateCanvasColor();
    this.animateColor();
    this.setupDarkModeListener();
  },
  methods: {
    animateColor() {
      const startColor = new THREE.Color(0x2EC7D3); // Blue
      const endColor = new THREE.Color(0x000000); // Black
      const color = startColor.clone();

      const tween = new TWEEN.Tween(color)
        .to(endColor, 2000) // Duration of the animation in milliseconds
        .onUpdate(() => {
          this.color.copy(color);
        })
        .repeat(Infinity) // Repeat the animation indefinitely
        .yoyo(true) // Make the animation go back and forth
        .start();

      const animate = () => {
        requestAnimationFrame(animate);
        TWEEN.update();
      };

      animate();
    },
    updateCanvasColor() {
      const bodyHasDarkMode = document.documentElement.classList.contains('dark-mode');
      this.canvasColor = bodyHasDarkMode ? '#3b3b3c' : '#ffffff';
    },
    setupDarkModeListener() {
      const darkModeObserver = new MutationObserver(() => {
        this.updateCanvasColor();
      });
      darkModeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      });
    },
  },
};
</script>

<template>
  <div style="max-width: 400px; height: auto; max-height: 500px">
    <TresCanvas :clear-color="canvasColor">
      <TresPerspectiveCamera :args="[25, 1, 1, 100]"/>
      <OrbitControls enableZoom="false"/>
      <TresMesh>
        <TresBoxGeometry />
        <TresMeshBasicMaterial :color="color.getHex()"/>
      </TresMesh>
    </TresCanvas>
  </div>
</template>
 -->
