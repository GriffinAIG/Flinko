import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

export type Turn = {
    id: number
    description: string
    status: Status
}
export type Status = 'IN_PROGRESS' | 'DONE'

export type State = {
    turns: Turn[]
}

export type Actions = {
    addTurn: (description: string) => void
    removeAllTurn: () => void
    updateTurn: (id: number, status: Status) => void
    // dragTask: (id: string | null) => void
}

export const useTurnStore = create<State & Actions>()(
    devtools(persist(
        set => ({
            turns: [],
            addTurn: (description: string) =>
                set(state => ({
                    turns: [
                        ...state.turns,
                        { id: state.turns.length, description, status: 'IN_PROGRESS' }
                    ]
                })),

            removeAllTurn: () =>
                set(state => ({
                    turns: []
                    // turns: state.turns.filter(turn => turn.id !== id)
                })),

            updateTurn: (id: number, status: Status) =>
                set(state => ({
                    turns: state.turns.map(turn =>
                        turn.id === id ? { ...turn, status } : turn
                    )
                }))
            // dragTask: (id: string | null) => set({ draggedTask: id }),
        }),
        { name: 'turn-store', skipHydration: true }
    )
    ))