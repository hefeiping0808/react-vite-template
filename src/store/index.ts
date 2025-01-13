import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface State {
	count: number
}

interface Action {
	setCount: (count: number) => void
}

const storeBase = create(persist<State & Action>(set => ({
	count: 0,
	setCount: (count: number) => { set({count})}
}), {
	name: 'storage-base',
	storage: createJSONStorage(() => localStorage),
}))

export { storeBase }
