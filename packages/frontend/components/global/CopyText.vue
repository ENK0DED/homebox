<template>
  <button class="" @click="copyText">
    <label
      class="swap swap-rotate"
      :class="{
        'swap-active': copied,
      }"
    >
      <Icon
        name="mdi:content-copy"
        class="swap-off"
        :style="{
          height: `${iconSize}px`,
          width: `${iconSize}px`,
        }"
      />
      <Icon
        name="mdi:clipboard"
        class="swap-on"
        :style="{
          height: `${iconSize}px`,
          width: `${iconSize}px`,
        }"
      />
    </label>
  </button>
</template>

<script setup lang="ts">
  const props = defineProps({
    text: {
      type: String as () => string,
      default: "",
    },
    iconSize: {
      type: Number as () => number,
      default: 20,
    },
  });

  const copied = ref(false);

  const { copy } = useClipboard();

  function copyText() {
    copy(props.text);
    copied.value = true;

    setTimeout(() => {
      copied.value = false;
    }, 1000);
  }
</script>
