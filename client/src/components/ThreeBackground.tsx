import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollPercentRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const targetMouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0c10, 0.015);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 32;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x090a0f, 1);
    containerRef.current.appendChild(renderer.domElement);

    // --- Particle Configuration ---
    const particleCount = 1300;
    const geometry = new THREE.BufferGeometry();
    
    const currentPositions = new Float32Array(particleCount * 3);
    const dnaPositions = new Float32Array(particleCount * 3);
    const brainPositions = new Float32Array(particleCount * 3);
    const waferPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Color definitions
    const dnaColor = new THREE.Color(0x10b981);   // Emerald / Teal (Biology)
    const brainColor = new THREE.Color(0x8b5cf6); // Violet / Purple (Neural/Brain)
    const waferColor = new THREE.Color(0xf97316); // Amber / Copper Orange (Silicon / GPU Core)

    // Populate positions for the three stages
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // ==========================================
      // 1. DNA HELIX GENERATOR (Scroll: 0.0)
      // ==========================================
      const strand = i % 3;
      const t = (i / particleCount) * Math.PI * 12; // 6 turns
      const helixRadius = 5.5;
      const helixHeight = 36;
      const yCoord = (i / particleCount) * helixHeight - helixHeight / 2;

      if (strand === 0) {
        // Strand A
        dnaPositions[i3] = helixRadius * Math.cos(t);
        dnaPositions[i3 + 1] = yCoord;
        dnaPositions[i3 + 2] = helixRadius * Math.sin(t);
      } else if (strand === 1) {
        // Strand B (180 deg offset)
        dnaPositions[i3] = helixRadius * Math.cos(t + Math.PI);
        dnaPositions[i3 + 1] = yCoord;
        dnaPositions[i3 + 2] = helixRadius * Math.sin(t + Math.PI);
      } else {
        // Rung connecting bases
        const ratio = Math.random();
        const angle = t + (Math.random() > 0.5 ? 0 : Math.PI);
        dnaPositions[i3] = helixRadius * Math.cos(angle) * ratio;
        dnaPositions[i3 + 1] = yCoord;
        dnaPositions[i3 + 2] = helixRadius * Math.sin(angle) * ratio;
      }

      // ==========================================
      // 2. 3D ORGANIC FOLDED BRAIN (Scroll: 0.5)
      // ==========================================
      const isBrainStem = i > particleCount * 0.88;
      
      if (isBrainStem) {
        // Brain stem: a small glowing cylinder extending down
        const stemT = Math.random() * Math.PI * 2;
        const stemR = 1.0 + Math.random() * 0.4;
        const stemY = -6 - Math.random() * 6;
        brainPositions[i3] = stemR * Math.cos(stemT);
        brainPositions[i3 + 1] = stemY;
        brainPositions[i3 + 2] = stemR * Math.sin(stemT) - 1;
      } else {
        // Hemispheres using spherical coordinate folding math
        const isLeftHemisphere = i % 2 === 0;
        
        // Random spherical angles
        const theta = Math.random() * Math.PI * 2; // azimuth
        const phi = Math.random() * Math.PI;       // elevation
        
        // Organic folding perturbation
        const baseRadius = 6.2;
        const foldPattern = 1.0 + 0.18 * Math.sin(6 * theta) * Math.cos(6 * phi);
        const radius = baseRadius * foldPattern;
        
        // Convert to Cartesian
        let bx = radius * Math.sin(phi) * Math.cos(theta);
        let by = radius * Math.cos(phi);
        let bz = radius * Math.sin(phi) * Math.sin(theta);
        
        // Squash and offset to shape into left/right lobes
        bx = bx * 0.72 + (isLeftHemisphere ? -1.8 : 1.8);
        by = by * 0.82 + 1.5; // push up slightly
        bz = bz * 1.15;       // oblong front-to-back
        
        brainPositions[i3] = bx;
        brainPositions[i3 + 1] = by;
        brainPositions[i3 + 2] = bz;
      }

      // ==========================================
      // 3. DENSE GPU/CPU DIE MICROARCHITECTURE (Scroll: 1.0)
      // ==========================================
      // Segment particles into central bus, ALU cores, Cache arrays, and PCB trace pathways
      const sectionSelector = i % 10;

      if (sectionSelector === 0 || sectionSelector === 1) {
        // --- 1. Central High-Speed Data Bus ---
        // A prominent vertical connection highway of parallel lines in the middle
        const busLines = [-1.5, -0.75, 0, 0.75, 1.5];
        const lineX = busLines[i % busLines.length];
        const busY = ((i / particleCount) * 22) - 11; // ranges from -11 to 11
        waferPositions[i3] = lineX;
        waferPositions[i3 + 1] = busY;
        waferPositions[i3 + 2] = (Math.random() - 0.5) * 0.1;
      } else if (sectionSelector >= 2 && sectionSelector <= 5) {
        // --- 2. ALU Shader Execution Cores (4 dense quad grids) ---
        // Top-Left, Top-Right, Bottom-Left, Bottom-Right chip quadrants
        const quadX = i % 2 === 0 ? -6.8 : 6.8;
        const quadY = (i % 4 < 2) ? 6.2 : -6.2;
        
        // Small dense grid elements simulating computing nodes
        const stepX = (i % 10) * 0.42 - 2.1;
        const stepY = (Math.floor(i / 10) % 12) * 0.38 - 2.28;
        
        waferPositions[i3] = quadX + stepX;
        waferPositions[i3 + 1] = quadY + stepY;
        waferPositions[i3 + 2] = (Math.random() - 0.5) * 0.15;
      } else if (sectionSelector === 6 || sectionSelector === 7 || sectionSelector === 8) {
        // --- 3. L1/L2 SRAM Cache Memory blocks (Flanked striped arrays) ---
        // Parallel striped blocks of caches on the left and right flanks
        const isLeftCache = i % 2 === 0;
        const cacheXCenter = isLeftCache ? -6.8 : 6.8;
        const cacheYCenter = 0; // centered vertically between shader blocks
        
        // Arrange in horizontal stripes (representing memory banks)
        const stripeY = ((i % 8) - 4) * 0.9;
        const stripeX = ((i % 32) / 32) * 4.8 - 2.4;
        
        waferPositions[i3] = cacheXCenter + stripeX;
        waferPositions[i3 + 1] = cacheYCenter + stripeY;
        waferPositions[i3 + 2] = (Math.random() - 0.5) * 0.05;
      } else {
        // --- 4. High-Density PCB Motherboard Circuit Traces ---
        // Discrete tracks running horizontally & vertically connecting outer dies
        const tracks = [-9.5, -6.8, -3.2, 0, 3.2, 6.8, 9.5];
        const isHorizontalTrack = i % 2 === 0;
        const coord = ((i % 60) / 60) * 24 - 12; // ranges from -12 to 12
        const selectedTrack = tracks[i % tracks.length];

        if (isHorizontalTrack) {
          waferPositions[i3] = coord;
          waferPositions[i3 + 1] = selectedTrack;
        } else {
          waferPositions[i3] = selectedTrack;
          waferPositions[i3 + 1] = coord;
        }
        waferPositions[i3 + 2] = 0;
      }

      // Initial positions set to DNA state
      currentPositions[i3] = dnaPositions[i3];
      currentPositions[i3 + 1] = dnaPositions[i3 + 1];
      currentPositions[i3 + 2] = dnaPositions[i3 + 2];
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom Canvas Texture for glowing circular particles
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 16;
      canvas.height = 16;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 16, 16);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const material = new THREE.PointsMaterial({
      size: 0.28,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      map: createParticleTexture(),
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // --- dynamic connection lines ---
    const lineCount = 400;
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(lineCount * 2 * 3);
    const lineColors = new Float32Array(lineCount * 2 * 3);
    
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));
    
    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    
    const connectionLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(connectionLines);

    // --- Interaction Listeners ---
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        scrollPercentRef.current = window.scrollY / scrollHeight;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // --- Animation Loop ---
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();
      const scrollPercent = scrollPercentRef.current;

      // Smooth mouse interpolation
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.05;

      const positions = geometry.attributes.position.array as Float32Array;
      const colorArray = geometry.attributes.color.array as Float32Array;

      const linesArray = lineGeometry.attributes.position.array as Float32Array;
      const linesColorArray = lineGeometry.attributes.color.array as Float32Array;
      let lineIdx = 0;

      // Center the point system on all screen sizes
      particleSystem.position.x = 0;
      connectionLines.position.x = 0;

      // Slowly rotate points (less rotation during wafer grid phase)
      const rotationSpeed = THREE.MathUtils.lerp(0.035, 0.008, scrollPercent);
      particleSystem.rotation.y = time * rotationSpeed;
      particleSystem.rotation.x = time * (rotationSpeed * 0.3);
      connectionLines.rotation.y = particleSystem.rotation.y;
      connectionLines.rotation.x = particleSystem.rotation.x;

      // Three-stage linear interpolation calculations
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        let targetX = 0;
        let targetY = 0;
        let targetZ = 0;
        let activeColor = new THREE.Color();

        if (scrollPercent < 0.5) {
          // --- Stage 1: DNA -> Organic Brain ---
          const t = scrollPercent / 0.5;
          targetX = THREE.MathUtils.lerp(dnaPositions[i3], brainPositions[i3], t);
          targetY = THREE.MathUtils.lerp(dnaPositions[i3 + 1], brainPositions[i3 + 1], t);
          targetZ = THREE.MathUtils.lerp(dnaPositions[i3 + 2], brainPositions[i3 + 2], t);
          activeColor.lerpColors(dnaColor, brainColor, t);
        } else {
          // --- Stage 2: Organic Brain -> GPU Silicon Wafer ---
          const t = (scrollPercent - 0.5) / 0.5;
          targetX = THREE.MathUtils.lerp(brainPositions[i3], waferPositions[i3], t);
          targetY = THREE.MathUtils.lerp(brainPositions[i3 + 1], waferPositions[i3 + 1], t);
          targetZ = THREE.MathUtils.lerp(brainPositions[i3 + 2], waferPositions[i3 + 2], t);
          activeColor.lerpColors(brainColor, waferColor, t);
        }

        // Mouse gravity ripple field
        const dx = targetX - mouseRef.current.x * 12;
        const dy = targetY - mouseRef.current.y * 12;
        const distSq = dx * dx + dy * dy;
        const force = Math.max(0, 1.8 - distSq / 40);

        // Apply sine wave organic float (reduce float during the structured flat silicon wafer grid phase)
        const floatMagnitude = THREE.MathUtils.lerp(0.18, 0.02, Math.max(0, (scrollPercent - 0.5) * 2));
        const floatOffset = Math.sin(time * 1.5 + i) * floatMagnitude;

        const finalX = targetX + (dx / (Math.sqrt(distSq) + 0.001)) * force * 0.8;
        const finalY = targetY + floatOffset + (dy / (Math.sqrt(distSq) + 0.001)) * force * 0.8;
        const finalZ = targetZ;

        // Smoothly update point positions
        positions[i3] += (finalX - positions[i3]) * 0.1;
        positions[i3 + 1] += (finalY - positions[i3 + 1]) * 0.1;
        positions[i3 + 2] += (finalZ - positions[i3 + 2]) * 0.1;

        // Apply glowing pulsing variance
        const pulse = Math.sin(time * 2.5 + i) * 0.1 + 0.95;
        colorArray[i3] = activeColor.r * pulse;
        colorArray[i3 + 1] = activeColor.g * pulse;
        colorArray[i3 + 2] = activeColor.b * pulse;

        // --- Connection Lines Logic ---
        if (scrollPercent > 0.15 && lineIdx < lineCount && i % 3 === 0) {
          if (scrollPercent < 0.65) {
            // Brain Stage: Organic synapses connections
            for (let j = i + 1; j < Math.min(i + 12, particleCount); j++) {
              const j3 = j * 3;
              const dist = Math.hypot(
                positions[i3] - positions[j3],
                positions[i3 + 1] - positions[j3 + 1],
                positions[i3 + 2] - positions[j3 + 2]
              );

              if (dist < 3.0) {
                const lIdx = lineIdx * 6;
                linesArray[lIdx] = positions[i3];
                linesArray[lIdx + 1] = positions[i3 + 1];
                linesArray[lIdx + 2] = positions[i3 + 2];
                linesArray[lIdx + 3] = positions[j3];
                linesArray[lIdx + 4] = positions[j3 + 1];
                linesArray[lIdx + 5] = positions[j3 + 2];

                linesColorArray[lIdx] = activeColor.r;
                linesColorArray[lIdx + 1] = activeColor.g;
                linesColorArray[lIdx + 2] = activeColor.b;
                linesColorArray[lIdx + 3] = activeColor.r;
                linesColorArray[lIdx + 4] = activeColor.g;
                linesColorArray[lIdx + 5] = activeColor.b;

                lineIdx++;
                break;
              }
            }
          } else {
            // Wafer Stage: Structured straight circuit lines
            for (let j = i + 1; j < Math.min(i + 35, particleCount); j++) {
              const j3 = j * 3;
              
              // Straight PCB layout check (approx equal X or Y)
              const diffX = Math.abs(positions[i3] - positions[j3]);
              const diffY = Math.abs(positions[i3 + 1] - positions[j3 + 1]);
              const distance = Math.hypot(positions[i3] - positions[j3], positions[i3 + 1] - positions[j3 + 1]);
              
              // If nodes are reasonably close and horizontally or vertically aligned
              if (distance < 5.0 && (diffX < 0.25 || diffY < 0.25)) {
                const lIdx = lineIdx * 6;
                linesArray[lIdx] = positions[i3];
                linesArray[lIdx + 1] = positions[i3 + 1];
                linesArray[lIdx + 2] = positions[i3 + 2];
                linesArray[lIdx + 3] = positions[j3];
                linesArray[lIdx + 4] = positions[j3 + 1];
                linesArray[lIdx + 5] = positions[j3 + 2];

                linesColorArray[lIdx] = activeColor.r;
                linesColorArray[lIdx + 1] = activeColor.g;
                linesColorArray[lIdx + 2] = activeColor.b;
                linesColorArray[lIdx + 3] = activeColor.r;
                linesColorArray[lIdx + 4] = activeColor.g;
                linesColorArray[lIdx + 5] = activeColor.b;

                lineIdx++;
                break;
              }
            }
          }
        }
      }

      // Fade synapse/PCB connection lines in and out dynamically
      if (scrollPercent < 0.15) {
        lineMaterial.opacity = 0;
      } else if (scrollPercent < 0.5) {
        lineMaterial.opacity = (scrollPercent - 0.15) * 0.9;
      } else if (scrollPercent < 0.75) {
        lineMaterial.opacity = 0.35;
      } else {
        lineMaterial.opacity = 0.35 + (scrollPercent - 0.75) * 0.8; // brighter circuit traces
      }

      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.color.needsUpdate = true;
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // --- Window Resize ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-20 overflow-hidden"
      style={{ background: '#090a0f' }}
    />
  );
}
