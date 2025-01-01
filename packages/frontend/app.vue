<template>
  <NuxtLayout>
    <Html lang="en" :data-theme="theme || 'homebox'" />
    <Link rel="icon" type="image/svg" href="/favicon.svg"></Link>
    <Link rel="apple-touch-icon" href="/apple-touch-icon.png" size="180x180" />
    <Link rel="mask-icon" href="/mask-icon.svg" color="#5b7f67" />
    <Meta name="theme-color" content="#5b7f67" />
    <Link rel="manifest" href="/manifest.webmanifest" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
  const { theme } = useTheme();
</script>

<style lang="postcss">
:root {
  color-scheme: dark light;
}

picture source {
  @apply hidden;
}

:root {
  --background: theme('colors.white');
  --foreground: theme('colors.slate.950');
  --muted: theme('colors.slate.100');
  --muted-foreground: theme('colors.slate.500');
  --popover: theme('colors.white');
  --popover-foreground: theme('colors.slate.950');
  --card: theme('colors.white');
  --card-foreground: theme('colors.slate.950');
  --border: theme('colors.slate.200');
  --input: theme('colors.slate.200');
  --primary: theme('colors.slate.900');
  --primary-foreground: theme('colors.slate.50');
  --secondary: theme('colors.slate.100');
  --secondary-foreground: theme('colors.slate.900');
  --accent: theme('colors.slate.100');
  --accent-foreground: theme('colors.slate.900');
  --constructive: theme('colors.green.500');
  --constructive-foreground: theme('colors.slate.50');
  --destructive: theme('colors.red.500');
  --destructive-foreground: theme('colors.slate.50');
  --ring: theme('colors.slate.950');

  --radius: 0.5rem;
}

.dark {
  --background: theme('colors.slate.950');
  --foreground: theme('colors.slate.50');
  --muted: theme('colors.slate.800');
  --muted-foreground: theme('colors.slate.400');
  --popover: theme('colors.slate.950');
  --popover-foreground: theme('colors.slate.50');
  --card: theme('colors.slate.950');
  --card-foreground: theme('colors.slate.50');
  --border: theme('colors.slate.800');
  --input: theme('colors.slate.800');
  --primary: theme('colors.slate.50');
  --primary-foreground: theme('colors.slate.900');
  --secondary: theme('colors.slate.800');
  --secondary-foreground: theme('colors.slate.50');
  --accent: theme('colors.slate.800');
  --accent-foreground: theme('colors.slate.50');
  --constructive: theme('colors.green.900');
  --constructive-foreground: theme('colors.slate.50');
  --destructive: theme('colors.red.900');
  --destructive-foreground: theme('colors.slate.50');
  --ring: theme('colors.slate.300');
}

.theme-zinc {
  --background: theme('colors.white');
  --foreground: theme('colors.zinc.950');
  --card: theme('colors.white');
  --card-foreground: theme('colors.zinc.950');
  --popover: theme('colors.white');
  --popover-foreground: theme('colors.zinc.950');
  --primary: theme('colors.zinc.900');
  --primary-foreground: theme('colors.zinc.50');
  --secondary: theme('colors.zinc.100');
  --secondary-foreground: theme('colors.zinc.900');
  --muted: theme('colors.zinc.100');
  --muted-foreground: theme('colors.zinc.500');
  --accent: theme('colors.zinc.100');
  --accent-foreground: theme('colors.zinc.900');
  --constructive: theme('colors.green.500');
  --constructive-foreground: theme('colors.zinc.50');
  --destructive: theme('colors.red.500');
  --destructive-foreground: theme('colors.zinc.50');
  --border: theme('colors.zinc.200');
  --input: theme('colors.zinc.200');
  --ring: theme('colors.zinc.900');
}

.theme-zinc.dark,
.theme-zinc .dark {
  --background: theme('colors.zinc.950');
  --foreground: theme('colors.zinc.50');
  --card: theme('colors.zinc.950');
  --card-foreground: theme('colors.zinc.50');
  --popover: theme('colors.zinc.950');
  --popover-foreground: theme('colors.zinc.50');
  --primary: theme('colors.zinc.50');
  --primary-foreground: theme('colors.zinc.900');
  --secondary: theme('colors.zinc.800');
  --secondary-foreground: theme('colors.zinc.50');
  --muted: theme('colors.zinc.800');
  --muted-foreground: theme('colors.zinc.400');
  --accent: theme('colors.zinc.800');
  --accent-foreground: theme('colors.zinc.50');
  --constructive: theme('colors.green.900');
  --constructive-foreground: theme('colors.zinc.50');
  --destructive: theme('colors.red.900');
  --destructive-foreground: theme('colors.zinc.50');
  --border: theme('colors.zinc.800');
  --input: theme('colors.zinc.800');
  --ring: theme('colors.zinc.300');
}

.theme-red {
  --background: theme('colors.white');
  --foreground: theme('colors.neutral.950');
  --card: theme('colors.white');
  --card-foreground: theme('colors.neutral.950');
  --popover: theme('colors.white');
  --popover-foreground: theme('colors.neutral.950');
  --primary: theme('colors.red.600');
  --primary-foreground: theme('colors.red.50');
  --secondary: theme('colors.neutral.100');
  --secondary-foreground: theme('colors.neutral.900');
  --muted: theme('colors.neutral.100');
  --muted-foreground: theme('colors.neutral.500');
  --accent: theme('colors.neutral.100');
  --accent-foreground: theme('colors.neutral.900');
  --constructive: theme('colors.green.500');
  --constructive-foreground: theme('colors.neutral.50');
  --destructive: theme('colors.red.500');
  --destructive-foreground: theme('colors.neutral.50');
  --border: theme('colors.neutral.200');
  --input: theme('colors.neutral.200');
  --ring: theme('colors.red.600');
}

.theme-red.dark,
.theme-red .dark {
  --background: theme('colors.neutral.950');
  --foreground: theme('colors.neutral.50');
  --card: theme('colors.neutral.950');
  --card-foreground: theme('colors.neutral.50');
  --popover: theme('colors.neutral.950');
  --popover-foreground: theme('colors.neutral.50');
  --primary: theme('colors.red.600');
  --primary-foreground: theme('colors.red.50');
  --secondary: theme('colors.neutral.800');
  --secondary-foreground: theme('colors.neutral.50');
  --muted: theme('colors.neutral.800');
  --muted-foreground: theme('colors.neutral.400');
  --accent: theme('colors.neutral.800');
  --accent-foreground: theme('colors.neutral.50');
  --constructive: theme('colors.green.900');
  --constructive-foreground: theme('colors.neutral.50');
  --destructive: theme('colors.red.900');
  --destructive-foreground: theme('colors.neutral.50');
  --border: theme('colors.neutral.800');
  --input: theme('colors.neutral.800');
  --ring: theme('colors.red.600');
}

.theme-rose {
  --background: theme('colors.white');
  --foreground: theme('colors.zinc.950');
  --card: theme('colors.white');
  --card-foreground: theme('colors.zinc.950');
  --popover: theme('colors.white');
  --popover-foreground: theme('colors.zinc.950');
  --primary: theme('colors.rose.600');
  --primary-foreground: theme('colors.rose.50');
  --secondary: theme('colors.zinc.100');
  --secondary-foreground: theme('colors.zinc.900');
  --muted: theme('colors.zinc.100');
  --muted-foreground: theme('colors.zinc.500');
  --accent: theme('colors.zinc.100');
  --accent-foreground: theme('colors.zinc.900');
  --constructive: theme('colors.green.500');
  --constructive-foreground: theme('colors.neutral.50');
  --destructive: theme('colors.red.500');
  --destructive-foreground: theme('colors.neutral.50');
  --border: theme('colors.zinc.200');
  --input: theme('colors.zinc.200');
  --ring: theme('colors.rose.600');
}

.theme-rose.dark,
.theme-rose .dark {
  --background: theme('colors.stone.950');
  --foreground: theme('colors.light.500');
  --popover: theme('colors.neutral.900');
  --popover-foreground: theme('colors.light.500');
  --card: theme('colors.stone.900');
  --card-foreground: theme('colors.light.500');
  --primary: theme('colors.rose.600');
  --primary-foreground: theme('colors.rose.50');
  --secondary: theme('colors.zinc.800');
  --secondary-foreground: theme('colors.neutral.50');
  --muted: theme('colors.neutral.800');
  --muted-foreground: theme('colors.zinc.400');
  --accent: theme('colors.stone.800');
  --accent-foreground: theme('colors.neutral.50');
  --constructive: theme('colors.green.900');
  --constructive-foreground: theme('colors.green.50');
  --destructive: theme('colors.red.900');
  --destructive-foreground: theme('colors.red.50');
  --border: theme('colors.zinc.800');
  --input: theme('colors.zinc.800');
  --ring: theme('colors.rose.600');
}

.theme-orange {
  --background: theme('colors.white');
  --foreground: theme('colors.stone.950');
  --muted: theme('colors.stone.100');
  --muted-foreground: theme('colors.stone.500');
  --popover: theme('colors.white');
  --popover-foreground: theme('colors.stone.950');
  --card: theme('colors.white');
  --card-foreground: theme('colors.stone.950');
  --border: theme('colors.stone.200');
  --input: theme('colors.stone.200');
  --primary: theme('colors.orange.500');
  --primary-foreground: theme('colors.stone.50');
  --secondary: theme('colors.stone.100');
  --secondary-foreground: theme('colors.stone.900');
  --accent: theme('colors.stone.100');
  --accent-foreground: theme('colors.stone.900');
  --constructive: theme('colors.green.500');
  --constructive-foreground: theme('colors.stone.50');
  --destructive: theme('colors.red.500');
  --destructive-foreground: theme('colors.stone.50');
  --ring: theme('colors.orange.500');
}

.theme-orange.dark,
.theme-orange .dark {
  --background: theme('colors.stone.950');
  --foreground: theme('colors.stone.50');
  --muted: theme('colors.stone.800');
  --muted-foreground: theme('colors.stone.400');
  --popover: theme('colors.stone.950');
  --popover-foreground: theme('colors.stone.50');
  --card: theme('colors.stone.950');
  --card-foreground: theme('colors.stone.50');
  --border: theme('colors.stone.800');
  --input: theme('colors.stone.800');
  --primary: theme('colors.orange.600');
  --primary-foreground: theme('colors.stone.50');
  --secondary: theme('colors.stone.800');
  --secondary-foreground: theme('colors.stone.50');
  --accent: theme('colors.stone.800');
  --accent-foreground: theme('colors.stone.50');
  --constructive: theme('colors.green.600');
  --constructive-foreground: theme('colors.stone.50');
  --destructive: theme('colors.red.600');
  --destructive-foreground: theme('colors.stone.50');
  --ring: theme('colors.orange.600');
}

* {
  @apply border-border;
}
</style>
