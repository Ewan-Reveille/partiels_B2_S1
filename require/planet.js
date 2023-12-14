// Create a new Three.js scene
document.addEventListener('DOMContentLoaded', function () {

    // Create a new Three.js scene
    var scene = new THREE.Scene();
    
    // Create a new Three.js camera
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Create a new Three.js renderer
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth*2, window.innerHeight*2);
    renderer.setClearColor(0x000000, 0);
    
    renderer.domElement.id = "canvas";
    document.body.appendChild(renderer.domElement);
    
    
    // Define the number of points/lines on the sphere
    var numPoints = 400;
    
    // Create a new Three.js geometry
    // Create a new Three.js geometry
    var geometry = new THREE.BufferGeometry();
    
    // Create the points and lines for the sphere
    var positions = [];
    for (var i = 0; i < numPoints; i++) {
      var vector = new THREE.Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
      vector.normalize();
      vector.multiplyScalar(1);
    
      positions.push(vector.x, vector.y, vector.z);
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    
    
    // Create the Three.js material for the points and lines
    var material = new THREE.PointsMaterial({
      size: 0.02,
      color: 'green'
    });
    
    // Create the Three.js points for the sphere
    var points = new THREE.Points(geometry, material);
    
    // Add the points to the scene
    scene.add(points);
    
    // Render the scene
    function render() {
        requestAnimationFrame(render);
        
        // Rotate the sphere around the y-axis
        points.rotation.y += 0.0025;
        lines.rotation.y += 0.0025;
        
        renderer.render(scene, camera);
      }
      
    
    // Create a new Three.js material for the lines
    var lineMaterial = new THREE.LineBasicMaterial({
        color: 'green'
      });
      
      // Create a new Three.js geometry for the lines
      var lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      
      // Create the Three.js lines for the sphere
      var lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      
      // Add the lines to the scene
      scene.add(lines);
      
    render();
    });
    
    