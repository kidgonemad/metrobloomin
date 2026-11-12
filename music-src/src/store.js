import { create } from 'zustand'

const useChannelStore = create((set, get) => ({
  // TV power + phase
  phase: 'off', // 'off' | 'intro' | 'glitch' | 'drb-logos' | 'drb-psa' | 'channels'
  setPhase: (phase) => set({ phase }),
  tvOn: false,
  togglePower: () => set((s) => ({ tvOn: !s.tvOn })),

  // Channel state
  currentChannel: 1,
  // one channel per Metro Bloomin video (the site's own files, ../shop/videos/)
  channels: Object.fromEntries([1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) =>
    [n, import.meta.env.BASE_URL + '../shop/videos/0' + n + '.mp4'])),
  noSignal: false,
  buffering: false,

  setChannel: (ch) => {
    set({ currentChannel: ch, noSignal: false, inProgressChannelNumber: '' })
  },

  nextChannel: () => {
    const { currentChannel, channels } = get()
    const keys = Object.keys(channels).map(Number).sort((a, b) => a - b)
    const idx = keys.indexOf(currentChannel)
    const next = idx >= keys.length - 1 ? keys[0] : keys[idx + 1]
    get().setChannel(next)
  },

  prevChannel: () => {
    const { currentChannel, channels } = get()
    const keys = Object.keys(channels).map(Number).sort((a, b) => a - b)
    const idx = keys.indexOf(currentChannel)
    const prev = idx <= 0 ? keys[keys.length - 1] : keys[idx - 1]
    get().setChannel(prev)
  },

  // Channel number entry (progressive digit input)
  inProgressChannelNumber: '',
  channelEntryTimeout: null,

  enterChannelNumber: (digit) => {
    const state = get()
    const newNum = state.inProgressChannelNumber + digit.toString()
    if (newNum.length > 3) return

    if (state.channelEntryTimeout) clearTimeout(state.channelEntryTimeout)

    if (newNum.length === 3) {
      const ch = parseInt(newNum, 10)
      set({ inProgressChannelNumber: newNum, channelEntryTimeout: null })
      get().setChannel(ch)
      return
    }

    const timer = setTimeout(() => {
      const current = get().inProgressChannelNumber
      if (!current) return
      const ch = parseInt(current, 10)
      set({ inProgressChannelNumber: '', channelEntryTimeout: null })
      get().setChannel(ch)
    }, 2000)

    set({ inProgressChannelNumber: newNum, channelEntryTimeout: timer })
  },

  // Volume state
  volume: 0.5,
  volumeUpCount: 0,
  volumeDownCount: 0,

  volumeUp: () => set((s) => ({
    volume: Math.min(1, +(s.volume + 0.05).toFixed(2)),
    isMuted: false,
    volumeUpCount: s.volumeUpCount + 1,
  })),

  volumeDown: () => set((s) => ({
    volume: Math.max(0, +(s.volume - 0.05).toFixed(2)),
    isMuted: false,
    volumeDownCount: s.volumeDownCount + 1,
  })),

  // Mute state
  isMuted: true,
  mutedCount: 0,

  toggleMute: () => set((s) => ({
    isMuted: !s.isMuted,
    mutedCount: s.mutedCount + 1,
  })),

  // UI display state (prevents buffering/volume text overlap)
  isVolumeBeingDisplayed: false,
  setIsVolumeBeingDisplayed: (val) => set({ isVolumeBeingDisplayed: val }),

}))

export default useChannelStore
