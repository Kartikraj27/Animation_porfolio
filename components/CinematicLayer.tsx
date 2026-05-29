'use client'
import { useEffect, useRef } from 'react'

export default function CinematicLayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let THREE: typeof import('three')
    let rafId: number
    let renderer: import('three').WebGLRenderer
    let geometry: import('three').BufferGeometry
    let material: import('three').PointsMaterial
    let texture: import('three').CanvasTexture

    const init = async () => {
      THREE = await import('three')

      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setClearColor(0x000000, 0)

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
      camera.position.z = 5

      const COUNT = 200
      const positions = new Float32Array(COUNT * 3)
      const colors = new Float32Array(COUNT * 3)
      const speeds = new Float32Array(COUNT)
      const offsets = new Float32Array(COUNT)

      const warmOrange = new THREE.Color(0xff8c42)
      const softWhite  = new THREE.Color(0xfff5e6)
      const blueGlow   = new THREE.Color(0x7eb8d4)

      for (let i = 0; i < COUNT; i++) {
        positions[i * 3]     = (Math.random() - 0.5) * 16
        positions[i * 3 + 1] = (Math.random() - 0.5) * 10
        positions[i * 3 + 2] = (Math.random() - 0.5) * 6

        const t = Math.random()
        const c = t < 0.55 ? warmOrange : t < 0.82 ? softWhite : blueGlow
        colors[i * 3]     = c.r
        colors[i * 3 + 1] = c.g
        colors[i * 3 + 2] = c.b

        speeds[i]  = Math.random() * 0.35 + 0.1
        offsets[i] = Math.random() * Math.PI * 2
      }

      geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('color',    new THREE.BufferAttribute(colors, 3))

      // Soft bokeh sprite
      const tc = document.createElement('canvas')
      tc.width = tc.height = 64
      const ctx = tc.getContext('2d')!
      const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
      g.addColorStop(0,   'rgba(255,255,255,1)')
      g.addColorStop(0.25,'rgba(255,255,255,0.7)')
      g.addColorStop(0.6, 'rgba(255,255,255,0.15)')
      g.addColorStop(1,   'rgba(255,255,255,0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, 64, 64)
      texture = new THREE.CanvasTexture(tc)

      material = new THREE.PointsMaterial({
        size: 0.18,
        map: texture,
        vertexColors: true,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      })

      const particles = new THREE.Points(geometry, material)
      scene.add(particles)

      // Mouse parallax
      const mouse  = { x: 0, y: 0 }
      const camPos = { x: 0, y: 0 }
      const onMouse = (e: MouseEvent) => {
        mouse.x =  (e.clientX / window.innerWidth  - 0.5) * 2
        mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2
      }
      window.addEventListener('mousemove', onMouse)

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
      window.addEventListener('resize', onResize)

      const posArr = geometry.attributes.position.array as Float32Array

      const animate = (time: number) => {
        rafId = requestAnimationFrame(animate)
        const t = time * 0.001

        for (let i = 0; i < COUNT; i++) {
          posArr[i * 3 + 1] += Math.sin(t * speeds[i] + offsets[i]) * 0.0013
          posArr[i * 3]     += Math.cos(t * speeds[i] * 0.5 + offsets[i]) * 0.0009
        }
        geometry.attributes.position.needsUpdate = true

        particles.rotation.y = t * 0.014
        particles.rotation.x = t * 0.007

        camPos.x += (mouse.x * 0.45 - camPos.x) * 0.04
        camPos.y += (mouse.y * 0.28 - camPos.y) * 0.04
        camera.position.x = camPos.x
        camera.position.y = camPos.y
        camera.lookAt(scene.position)

        renderer.render(scene, camera)
      }

      animate(0)

      // cleanup captures
      ;(canvas as any)._cleanup = () => {
        cancelAnimationFrame(rafId)
        window.removeEventListener('mousemove', onMouse)
        window.removeEventListener('resize', onResize)
        geometry.dispose()
        material.dispose()
        texture.dispose()
        renderer.dispose()
      }
    }

    init()
    return () => { (canvas as any)._cleanup?.() }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        zIndex: 3, pointerEvents: 'none',
      }}
    />
  )
}
