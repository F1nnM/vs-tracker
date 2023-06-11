import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  // an array of players, one for players
  // both originally contain one entry
  // one entry: one singular number

  // functions to add and remove players as well as monsters
  // function to reset state

  const players = ref([1])
  const monsters = ref([1])

  const addPlayer = () => {
    players.value.push(1)
  }

  const removePlayer = (index: number) => {
    players.value.splice(index, 1)
  }

  const addMonster = () => {
    monsters.value.push(1)
  }

  const removeMonster = (index: number) => {
    monsters.value.splice(index, 1)
  }

  const reset = () => {
    players.value = [1]
    monsters.value = [1]
  }

  // computed values for the total strength of players and monsters
  const totalPlayerStrength = computed(() => {
    return players.value.reduce((a, b) => a + b, 0)
  })
  
  const totalMonsterStrength = computed(() => {
    return monsters.value.reduce((a, b) => a + b, 0)
  })

  const setMonsterStrength = (index: number, strength: number) => {
    monsters.value[index] = strength
  }

  const setPlayerStrength = (index: number, strength: number) => {
    players.value[index] = strength
  }

  return {
    players,
    monsters,
    addPlayer,
    removePlayer,
    addMonster,
    removeMonster,
    reset,
    totalPlayerStrength,
    totalMonsterStrength,
    setMonsterStrength,
    setPlayerStrength
  }
})
