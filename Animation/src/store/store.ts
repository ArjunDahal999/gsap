import { create } from 'zustand'

interface CurrentTab
{
    tab: number
    setCurrentTab: (no: number) => void
}

export const useCurrentTab = create<CurrentTab>()((set) => ({
    tab: 1,
    setCurrentTab: (no) => set((state) => ({ tab: no })),
}))