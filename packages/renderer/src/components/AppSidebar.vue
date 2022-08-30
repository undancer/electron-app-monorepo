<script lang="ts" setup>
import {
  defineProps,
  toRefs,
  withDefaults,
} from 'vue-demi'

interface AppSidebarProps {
  hidden: boolean
}

const {
  hidden: hiddenRef,
} = toRefs(
  withDefaults(
    defineProps<AppSidebarProps>(), {
      hidden: true,
    },
  ),
)
</script>

<template>
  <div class="aside" :class="{ hidden: hiddenRef }">
    <div class="top">
      <AppButton icon="home" />
      <AppButton icon="chat-bubbles" />
      <AppButton icon="settings" />
    </div>
    <div class="bottom">
      <AppButton />
      <AppButton icon="chat-bubbles" />
      <AppButton icon="settings" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$header-height: 10 * 0.25rem;
$aside-width: 10 * 0.25rem;

.aside {
  //@apply bg-gray-600;
  @apply bg-neutral-100;
  //@apply w-0;
  //@apply w-10;
  @apply flex flex-col;
  @apply border-r border-neutral-200;
  width: $aside-width;
  height: calc(100vh - #{$header-height});
  //@apply z-2000;
  //@apply shadow shadow-gray-100;

  &.hidden {
    @apply hidden;
  }

  .top {
    //@apply border;
    //@apply bg-green-300;
    //@apply mx-auto;
    @apply flex flex-1;
    @apply flex flex-col;
  }

  .bottom {
    @apply mb-4;
    @apply flex flex-col;
  }
}
</style>
