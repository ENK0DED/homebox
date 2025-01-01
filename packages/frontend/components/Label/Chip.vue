<script setup lang="ts">
  import type { LabelOut, LabelSummary } from "~~/lib/api/types/data-contracts";

  export type sizes = "sm" | "md" | "lg" | "xl";
  defineProps({
    label: {
      type: Object as () => LabelOut | LabelSummary,
      required: true,
    },
    size: {
      type: String as () => sizes,
      default: "md",
    },
  });

  const badge = ref(null);
  const isHover = useElementHover(badge);
  const { focused } = useFocus(badge);

  const isActive = computed(() => isHover.value || focused.value);
</script>

<template>
  <NuxtLink
    ref="badge"
    class="badge badge-secondary text-secondary-content"
    :class="{
      'badge-lg p-4': size === 'lg',
      'p-3': size !== 'sm' && size !== 'lg',
      'p-2 badge-sm': size === 'sm',
    }"
    :to="`/label/${label.id}`"
  >
    <label class="swap swap-rotate" :class="isActive ? 'swap-active' : ''">
      <Icon name="mdi:arrow-right" class="mr-2 swap-on" />
      <Icon name="mdi:tag-outline" class="mr-2 swap-off" />
    </label>
    {{ label.name }}
  </NuxtLink>
</template>
