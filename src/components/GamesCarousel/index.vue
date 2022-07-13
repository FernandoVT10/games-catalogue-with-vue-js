<script lang="ts" setup>
import Game from "./Game.vue";
</script>

<script lang="ts">
import { defineComponent } from "vue";

import gamesData from "@/assets/games.json";
const { games } = gamesData;

export default defineComponent({
  data() {
    return {
      activeItem: 0
    };
  },
  methods: {
    handleRightControl(): void {
      this.activeItem++;

      if(this.activeItem > games.length - 1) {
        this.activeItem = 0;
      }
    },
    handleIndicator(index: number): void {
      this.activeItem = index;
    }
  }
});
</script>

<template>
  <div class="games-carousel">
    <div class="games" style="position: relative;">
      <Transition
        v-for="(game, index) in games"
        :key="game.name"
        class="game-container"
        name="carousel"
      >
        <Game
          :game="game"
          v-if="activeItem === index"
        />
      </Transition>
    </div>

    <div class="controls">
      <button class="control">
        <FontAwesomeIcon icon="fa-solid fa-chevron-left"/>
      </button>
      <button class="control" @click="handleRightControl">
        <FontAwesomeIcon icon="fa-solid fa-chevron-right"/>
      </button>
    </div>
    
    <div class="indicators">
      <span
        v-for="index in games.length"
        :key="index"
        class="indicator"
        :class="{ active: index - 1 === this.activeItem }"
        @click="handleIndicator(index - 1)"
      ></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.games-carousel {
  position: relative;

  & .games {
    position: relative;
    height: 500px;

    & .game-container {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
  }

  & .controls {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    & .control {
      cursor: pointer;
      font-size: 30px;
      color: var(--color-selectable);
      background: transparent;
      border: none;
      transition: .3s;

      &:hover {
        color: var(--color-selected);
      }
    }
  }

  & .indicators {
    position: absolute;
    width: 100%;
    bottom: 20px;
    display: flex;
    justify-content: center;

    & .indicator {
      cursor: pointer;
      width: 15px;
      height: 15px;
      display: block;
      background: var(--color-selectable);
      border-radius: 50%;
      margin: 10px;
      transition: .3s;

      &.active, &:hover {
        background: var(--color-selected);
      }
    }
  }
}
.carousel-enter-active,
.carousel-leave-active {
  transition: opacity .3s ease;
}

.carousel-enter-from,
.carousel-leave-to {
  opacity: 0;
}
</style>
