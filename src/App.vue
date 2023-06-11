<template>
  <div class="container">
    <div class="monstertitle">MONSTER
      <button class="plus" @click="store.addMonster">+</button>
    </div>
    <div class="monster">
      <PointCounter v-for="(monster, index) in store.monsters" :count="monster"
        :onDelete="() => store.removeMonster(index)" :onPlusOne="() => store.setMonsterStrength(index, monster + 1)"
        :onMinusOne="() => store.setMonsterStrength(index, monster - 1)"
        :onPlus5="() => store.setMonsterStrength(index, monster + 5)"
        :onMinus5="() => store.setMonsterStrength(index, monster - 5)"
        :onPlus10="() => store.setMonsterStrength(index, monster + 10)"
        :onMinus10="() => store.setMonsterStrength(index, monster - 10)"
        :onTimes2="() => store.setMonsterStrength(index, monster * 2)" :key="index" />
    </div>
    <div class="vs-container">
      <span class="totalPlayer">{{ store.totalPlayerStrength }}</span>
      <span class="vs">VS</span>
      <span class="totalMonster">{{ store.totalMonsterStrength }}</span>
    </div>
    <div class="player">
      <PointCounter v-for="(player, index) in store.players" :count="player" :onDelete="() => store.removePlayer(index)"
        :onPlusOne="() => store.setPlayerStrength(index, player + 1)"
        :onMinusOne="() => store.setPlayerStrength(index, player - 1)"
        :onPlus5="() => store.setPlayerStrength(index, player + 5)"
        :onMinus5="() => store.setPlayerStrength(index, player - 5)"
        :onPlus10="() => store.setPlayerStrength(index, player + 10)"
        :onMinus10="() => store.setPlayerStrength(index, player - 10)"
        :onTimes2="() => store.setPlayerStrength(index, player * 2)" :key="index" />
    </div>
    <div class="playertitle">MUNCHKIN
      <button class="plus" @click="store.addMonster">+</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import PointCounter from './components/PointCounter.vue';
import { useMainStore } from './stores/counter';


const store = useMainStore();
</script>
<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  max-width: 400px;;
  max-height: 100vh;
  display: grid;
  grid-template-rows: max-content 1fr 0 1fr max-content;
}

.monster,
.player {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1 0 auto;
  overflow-y: auto;
  padding-inline: 50px;
  padding-block: 20px;
}

.vs-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1 0 auto;
  font-size: 5rem;
  z-index: 9999;
  gap: 10px;

  .vs {
    font-size: 2rem;
  }
}

.monster,
.monstertitle {
  background-color: #771c1c;
}

.player,
.playertitle {
  background-color: #2a4670;
}

.monstertitle,
.playertitle {
  font-size: 3rem;
  text-align: center;
  flex: 1 0 auto;
  width: 100%;
  z-index: 9999;
  color: white;
  display: grid;
  grid-template-columns: 1fr max-content;
  padding: 10px;
  align-items: center;
}

.plus {
  margin-inline:10px;
  font-size: 16px;
}
</style>
