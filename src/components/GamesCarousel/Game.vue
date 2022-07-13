<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ["game"],
  data() {
    return {
      timeoutId: 0
    };
  },
  mounted() {
    this.timeoutId = setTimeout(() => {
      (this.$refs.trailer as HTMLVideoElement).play();
    }, 1000);
  },
  unmounted() {
    clearTimeout(this.timeoutId);
  }
})
</script>


<template>
  <div class="game">
    <img
      :src="game.backgroundURL"
      class="bg-image"
      alt="Game background image"
    />

    <div class="content-container">
      <div class="content">
        <div class="details">
          <h2 class="name">{{ game.name }}</h2>

          <p class="description">{{ game.description }}</p>
        </div>

        <video class="trailer" ref="trailer" muted>
          <source :src="game.trailerURL" type="video/webm" />
          Your browser doesn't support videos :(.
        </video>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game {
  height: 100%;

  & .content-container {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);

    & .content {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 1200px;
      width: 100%;
      padding-right: 40px;

      & .details {
        padding: 40px;
        width: 50%;

        & .name {
          color: var(--color-text);
          font-size: 30px;
        }

        & .description {
          color: var(--color-text-secondary);
          font-size: 16px;
        }
      }

      & .trailer {
        width: 50%;
      }
    }
  }

  & .bg-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (max-width: 1250px) {
    & .content-container .content {
      width: 90%;
    }
  }

  @media only screen and (max-width: 800px) {
    & .content-container .content {
      flex-direction: column-reverse;
      padding: 40px;

      & .trailer {
        width: 100%;
        padding: 0;
      }

      & .details {
        width: 100%;
        padding: 20px;

        & .description { display: none; }
      }
    }
  }
}
</style>
