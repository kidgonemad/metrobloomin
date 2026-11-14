// Each collab's own dance, on its song's beat. s = MBBeat.get(): { i: beat number, ph: 0..1 through the beat,
// bar: which beat of the bar (0 = the first), len: seconds per beat }. Returns how far to turn / lean / tip, squash
// and hop (scene units, radians); the caller fades it in and out with the music and applies it round the base.
const easeOut = (x) => 1 - Math.pow(1 - x, 3)
const back = (x) => { const c = 1.7; return 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2) }   // overshoot
export const DANCES = {
  // X41 (Rock N Roll): headbang, nodding forward hard on every beat, harder on the bar's first
  headbang: (s) => { const hit = Math.exp(-s.ph * 6), d = s.bar === 0 ? 1.35 : 1; return { rx: 0.2 * hit * d, ry: 0.04 * (s.i % 2 ? 1 : -1) * hit } },
  // QRÖME (Wow Wow): hop, a jump on every beat, landing on the next with a squash
  hop: (s) => { const up = Math.sin(Math.PI * s.ph), land = Math.exp(-s.ph * 9); return { hop: 0.16 * up * (s.bar === 0 ? 1.3 : 1), sy: 1 - 0.09 * land, sx: 1 + 0.06 * land } },
  // JSPAAY (Keep Goin): sway, a lazy lean side to side, one lean every two beats
  sway: (s) => { const q = ((s.i % 2) + s.ph) / 2; return { rz: 0.15 * Math.sin(2 * Math.PI * q), ry: 0.08 * Math.sin(2 * Math.PI * q + 0.6), hop: 0.02 * Math.exp(-s.ph * 6) } },
  // SKYBOX (Skybox): snap, a quarter turn on the first beat of every bar, with an overshoot; a small dip on each beat
  snap: (s) => { const bars = Math.floor((s.i - s.bar) / 4), k = s.bar === 0 ? back(Math.min(1, s.ph * 1.6)) : 1; return { ry: (((bars % 4) + 4) % 4 + k) * Math.PI / 2,   // wraps every full turn (so it never winds up)
    sy: 1 - 0.05 * Math.exp(-s.ph * 8) } },
  // TSUNAMI (Young Wheezy): wave, a twist that flips every beat while it rolls like a wave
  wave: (s) => { const dir = s.i % 2 ? 1 : -1, e = easeOut(Math.min(1, s.ph * 3)); return { ry: dir * 0.16 * (2 * e - 1), rz: 0.08 * Math.sin(Math.PI * (s.i + s.ph)), hop: 0.03 * Math.exp(-s.ph * 5) } },
  // GELATO 41 (Show of Hands): bop, a quick pulse twice a beat, a hop on the snare (beats 2 and 4)
  bop: (s) => { const p2 = (s.ph * 2) % 1, pulse = Math.exp(-p2 * 7), snare = s.bar % 2 === 1 ? Math.sin(Math.PI * s.ph) : 0; return { sx: 1 + 0.045 * pulse, sy: 1 + 0.045 * pulse, hop: 0.09 * snare, rz: 0.05 * snare * (s.bar === 1 ? 1 : -1) } },
  // CONNECTED (Bally Baby): rock, back and forth every two beats, a twist kick on the bar's first beat
  rock: (s) => { const q = ((s.i % 2) + s.ph) / 2, kick = s.bar === 0 ? Math.exp(-s.ph * 5) : 0; return { rx: 0.13 * Math.sin(2 * Math.PI * q), ry: 0.22 * kick } },
  // NIGHTSHADE (Let's Do It): slither, smooth snake-like S-curves, sideways lean and turn half a beat apart
  slither: (s) => { const a = 2 * Math.PI * ((s.i % 2) + s.ph) / 2; return { rz: 0.13 * Math.sin(a), ry: 0.2 * Math.sin(a + Math.PI / 2), hop: 0.015 * Math.sin(2 * a) } },
}

// apply a dance to the group that holds the jar / bag: turned, leaned and squashed round its base (pivotY), hopping
const tmp = { v: null }
export function applyDance(THREE, g, d, amt, pivotY) {
  d = d || {}
  g.rotation.set((d.rx || 0) * amt, (d.ry || 0) * amt, (d.rz || 0) * amt)
  g.scale.set(1 + ((d.sx || 1) - 1) * amt, 1 + ((d.sy || 1) - 1) * amt, 1 + ((d.sx || 1) - 1) * amt)
  g.position.set(0, 0, 0); g.updateMatrix()
  if (!tmp.v) tmp.v = new THREE.Vector3()
  const p = tmp.v.set(0, pivotY, 0).applyMatrix4(g.matrix)              // where the base went; put it back, plus the hop
  g.position.set(-p.x, pivotY - p.y + (d.hop || 0) * amt, -p.z)
}
