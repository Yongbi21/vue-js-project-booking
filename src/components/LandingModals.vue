<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <div v-show="modalActive" class="modal-inner">
        <i @click="close" class="bi bi-x-square-fill"></i>
        <!-- Modal Content -->
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    modalActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);
}

.modal-inner {
  position: relative;
  max-width: 640px;
  width: 80%;
  background-color: #fff;
  padding: 64px 16px;
}

.modal-inner i {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 20px;
  cursor: pointer;
}

.modal-inner button {
  padding: 20px 30px;
  border: none;
  font-size: 16px;
  background-color: crimson;
  color: #fff;
  cursor: pointer;
}
</style>
