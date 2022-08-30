<script lang="ts" setup>
import { Icon } from '@vicons/utils'
import * as icons from '@vicons/ionicons5'
import lodash from 'lodash'

interface Props {
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  icon: 'home',
})

const format = (str: string) => lodash.capitalize(lodash.camelCase(str))
const component = Object.entries(icons)
  .filter(([key]) => new RegExp(format(props.icon), 'i').test(key))
  .map(([, value]) => value)
  .find(value => value)

const clicked: EventListener = (e) => {
  console.log('clicked', this, props.icon, e)
}
</script>

<template>
  <button class="icon" :class="props.icon" @click="clicked">
    <Icon>
      <component :is="component" />
    </Icon>
  </button>
</template>

<style lang="scss" scoped>
.icon {
  @apply mx-1;
  @apply mt-2;
  //@apply p-auto;
  @apply p-1;
  @apply border rounded-1/1
  @apply border-neutral-400;
  //border-gray-500;
  @apply text-lg;
  @apply text-center;
  //@apply text-gray-500;
  @apply text-neutral-400;
  //@apply border border-red-500;

  svg {
    @apply transform translate-y-0.5;
  }

}
</style>
