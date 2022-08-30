<!-- &lt;!&ndash; &lt;!&ndash; &lt;!&ndash; <template> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash; &lt;!&ndash;  <div class="container mx-auto px-4"> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash; &lt;!&ndash;    default &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash; &lt;!&ndash;    <router-view /> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash; &lt;!&ndash;  </div> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash; &lt;!&ndash; </template> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash; <script lang="ts" setup> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash; import { ref } from 'vue' &ndash;&gt; &ndash;&gt; -->

<!-- &lt;!&ndash; &lt;!&ndash; const miniState = ref(true) &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash; const drawer = ref(false) &ndash;&gt; &ndash;&gt; -->

<!-- &lt;!&ndash; &lt;!&ndash; const drawerClick = (e: Event) => { &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;  // if in "mini" state and user &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;  // click on drawer, we switch it to "normal" mode &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;  if (miniState.value) { &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;    miniState.value = false &ndash;&gt; &ndash;&gt; -->

<!-- &lt;!&ndash; &lt;!&ndash;    // notice we have registered an event with capture flag; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;    // we need to stop further propagation as this click is &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;    // intended for switching drawer to "normal" mode only &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;    e.stopPropagation() &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;  } &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash; } &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash; </script> &ndash;&gt; &ndash;&gt; -->

<!-- &lt;!&ndash; &lt;!&ndash; <template> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;  <div class="q-pa-md"> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;    <q-layout view="hHh Lpr lff" container style="height: 300px" class="shadow-2 rounded-borders"> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;      <q-header elevated class="bg-black"> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        <q-toolbar> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;          <q-btn flat round dense icon="menu" @click="drawer = !drawer" /> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;          <q-toolbar-title>Header</q-toolbar-title> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        </q-toolbar> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;      </q-header> &ndash;&gt; &ndash;&gt; -->

<!-- &lt;!&ndash; &lt;!&ndash;      <q-drawer &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        v-model="drawer" &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        show-if-above &ndash;&gt; &ndash;&gt; -->

<!-- &lt;!&ndash; &lt;!&ndash;        :mini="!drawer || miniState" &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        :width="200" &ndash;&gt; &ndash;&gt; -->

<!-- &lt;!&ndash; &lt;!&ndash;        :breakpoint="500" &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        bordered &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        class="bg-grey-3" &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        @click.capture="drawerClick" &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;      > &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        <template #mini> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;          <q-scroll-area class="fit mini-slot cursor-pointer"> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;            <div class="q-py-lg"> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;              <div class="column items-center"> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;                <q-icon name="inbox" color="blue" class="mini-icon" /> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;                <q-icon name="star" color="orange" class="mini-icon" /> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;                <q-icon name="send" color="purple" class="mini-icon" /> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;                <q-icon name="drafts" color="teal" class="mini-icon" /> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;              </div> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;            </div> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;          </q-scroll-area> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        </template> &ndash;&gt; &ndash;&gt; -->

<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;        <q-scroll-area class="fit"> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;          <q-list padding> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;            <q-item v-ripple clickable> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;              <q-item-section> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;                Inbox &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;              </q-item-section> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;            </q-item> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->

<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;            <q-item v-ripple active clickable> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;              <q-item-section> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;                Star &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;              </q-item-section> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;            </q-item> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->

<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;            <q-item v-ripple clickable> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;              <q-item-section> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;                Send &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;              </q-item-section> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;            </q-item> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->

<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;            <q-item v-ripple clickable> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;              <q-item-section> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;                Drafts &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;              </q-item-section> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;            </q-item> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;          </q-list> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash;        </q-scroll-area> &ndash;&gt; &ndash;&gt; &ndash;&gt; -->

<!-- &lt;!&ndash; &lt;!&ndash;        &lt;!&ndash; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;          in this case, we use a button (can be anything) &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;          so that user can switch back &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;          to mini-mode &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        &ndash;&gt; &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px"> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;          <q-btn &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;            dense &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;            round &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;            unelevated &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;            color="accent" &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;            icon="chevron_left" &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;            @click="miniState = true" &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;          /> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        </div> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;      </q-drawer> &ndash;&gt; &ndash;&gt; -->

<!-- &lt;!&ndash; &lt;!&ndash;      <q-page-container> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        <q-page class="q-px-lg q-py-md"> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;          <p v-for="n in 15" :key="n"> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate? &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;          </p> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;        </q-page> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;      </q-page-container> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;    </q-layout> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;  </div> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash; </template> &ndash;&gt; &ndash;&gt; -->

<!-- &lt;!&ndash; &lt;!&ndash; <style lang="sass" scoped> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash; .mini-slot &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;  transition: background-color .28s &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;  &:hover &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;    background-color: rgba(0, 0, 0, .04) &ndash;&gt; &ndash;&gt; -->

<!-- &lt;!&ndash; &lt;!&ndash; .mini-icon &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;  font-size: 1.718em &ndash;&gt; &ndash;&gt; -->

<!-- &lt;!&ndash; &lt;!&ndash;  & + & &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash;    margin-top: 18px &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash; &lt;!&ndash; </style> &ndash;&gt; &ndash;&gt; -->

<!-- &lt;!&ndash; <script lang="ts" setup> &ndash;&gt; -->
<!-- &lt;!&ndash; import { ref } from 'vue' &ndash;&gt; -->

<!-- &lt;!&ndash; const drawer = ref(false) &ndash;&gt; -->
<!-- &lt;!&ndash; </script> &ndash;&gt; -->

<!-- &lt;!&ndash; <template> &ndash;&gt; -->
<!-- &lt;!&ndash;  <div class="q-pa-md h-screen"> &ndash;&gt; -->
<!-- &lt;!&ndash;    <q-layout view="hHh Lpr lff" container class="shadow-1 rounded-borders"> &ndash;&gt; -->
<!-- &lt;!&ndash;      <q-header class="bg-black bg-gray-500"> &ndash;&gt; -->
<!-- &lt;!&ndash;        <q-toolbar> &ndash;&gt; -->
<!-- &lt;!&ndash;          <q-btn flat round dense icon="menu" @click="drawer = !drawer" /> &ndash;&gt; -->
<!-- &lt;!&ndash;          <q-toolbar-title>Header</q-toolbar-title> &ndash;&gt; -->
<!-- &lt;!&ndash;        </q-toolbar> &ndash;&gt; -->
<!-- &lt;!&ndash;      </q-header> &ndash;&gt; -->

<!-- &lt;!&ndash;      <q-drawer &ndash;&gt; -->
<!-- &lt;!&ndash;        v-model="drawer" &ndash;&gt; -->
<!-- &lt;!&ndash;        mini &ndash;&gt; -->
<!-- &lt;!&ndash;        show-if-above &ndash;&gt; -->
<!-- &lt;!&ndash;        :width="200" &ndash;&gt; -->
<!-- &lt;!&ndash;        :breakpoint="700" &ndash;&gt; -->
<!-- &lt;!&ndash;        class="bg-gray-500 text-white" &ndash;&gt; -->
<!-- &lt;!&ndash;      > &ndash;&gt; -->
<!-- &lt;!&ndash;        <q-scroll-area class="fit"> &ndash;&gt; -->
<!-- &lt;!&ndash;          <q-list padding> &ndash;&gt; -->
<!-- &lt;!&ndash;            <q-item v-ripple clickable> &ndash;&gt; -->
<!-- &lt;!&ndash;              <q-item-section avatar> &ndash;&gt; -->
<!-- &lt;!&ndash;                <q-icon name="inbox" /> &ndash;&gt; -->
<!-- &lt;!&ndash;              </q-item-section> &ndash;&gt; -->
<!-- &lt;!&ndash;              <q-item-section> &ndash;&gt; -->
<!-- &lt;!&ndash;                Inbox &ndash;&gt; -->
<!-- &lt;!&ndash;              </q-item-section> &ndash;&gt; -->
<!-- &lt;!&ndash;            </q-item> &ndash;&gt; -->
<!-- &lt;!&ndash;            <q-item v-ripple active clickable> &ndash;&gt; -->
<!-- &lt;!&ndash;              <q-item-section avatar> &ndash;&gt; -->
<!-- &lt;!&ndash;                <q-icon name="star" /> &ndash;&gt; -->
<!-- &lt;!&ndash;              </q-item-section> &ndash;&gt; -->
<!-- &lt;!&ndash;              <q-item-section> &ndash;&gt; -->
<!-- &lt;!&ndash;                Star &ndash;&gt; -->
<!-- &lt;!&ndash;              </q-item-section> &ndash;&gt; -->
<!-- &lt;!&ndash;            </q-item> &ndash;&gt; -->

<!-- &lt;!&ndash;            <q-item v-ripple clickable> &ndash;&gt; -->
<!-- &lt;!&ndash;              <q-item-section avatar> &ndash;&gt; -->
<!-- &lt;!&ndash;                <q-icon name="send" /> &ndash;&gt; -->
<!-- &lt;!&ndash;              </q-item-section> &ndash;&gt; -->
<!-- &lt;!&ndash;              <q-item-section> &ndash;&gt; -->
<!-- &lt;!&ndash;                Send &ndash;&gt; -->
<!-- &lt;!&ndash;              </q-item-section> &ndash;&gt; -->
<!-- &lt;!&ndash;            </q-item> &ndash;&gt; -->
<!-- &lt;!&ndash;            <q-separator /> &ndash;&gt; -->
<!-- &lt;!&ndash;          </q-list> &ndash;&gt; -->
<!-- &lt;!&ndash;          &lt;!&ndash;          <div class="q-pa-sm"> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash;          &lt;!&ndash;            <div v-for="n in 50" :key="n"> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash;          &lt;!&ndash;              Drawer {{ n }} / 50 &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash;          &lt;!&ndash;            </div> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash;          &lt;!&ndash;          </div> &ndash;&gt; &ndash;&gt; -->
<!-- &lt;!&ndash;        </q-scroll-area> &ndash;&gt; -->
<!-- &lt;!&ndash;      </q-drawer> &ndash;&gt; -->

<!-- &lt;!&ndash;      <q-page-container> &ndash;&gt; -->
<!-- &lt;!&ndash;        <q-page padding> &ndash;&gt; -->
<!-- &lt;!&ndash;          <p v-for="n in 15" :key="n"> &ndash;&gt; -->
<!-- &lt;!&ndash;            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate? &ndash;&gt; -->
<!-- &lt;!&ndash;          </p> &ndash;&gt; -->
<!-- &lt;!&ndash;        </q-page> &ndash;&gt; -->
<!-- &lt;!&ndash;      </q-page-container> &ndash;&gt; -->
<!-- &lt;!&ndash;    </q-layout> &ndash;&gt; -->
<!-- &lt;!&ndash;  </div> &ndash;&gt; -->
<!-- &lt;!&ndash; </template> &ndash;&gt; -->
<!-- <script lang="ts" setup> -->
<!-- import { -->
<!--  ref, -->
<!-- } from 'vue-demi' -->
<!-- const collapsed = ref<boolean>(true) -->
<!-- </script> -->

<!-- <template> -->
<!--  <n-layout> -->
<!--    <n-layout-header> -->
<!--      颐和园路 -->
<!--      <n-button -->
<!--        quaternary -->
<!--        type="info" -->
<!--        size="tiny" -->
<!--        @click="collapsed = !collapsed" -->
<!--      > -->
<!--        button -->
<!--      </n-button> -->
<!--    </n-layout-header> -->
<!--    <n-layout -->
<!--      has-sider -->
<!--    > -->
<!--      <n-layout-sider -->
<!--        width="64" -->
<!--        :show-collapsed-content="false" -->
<!--        :collapsed-width="0" -->
<!--        :collapsed="collapsed" -->
<!--      > -->
<!--        海淀桥 -->
<!--        <n-space justify="end"> -->
<!--          <n-button>Oops!</n-button> -->
<!--          <n-button>Oops!</n-button> -->
<!--          <n-button>Oops!</n-button> -->
<!--          <n-button>Oops!</n-button> -->
<!--        </n-space> -->
<!--      </n-layout-sider> -->
<!--      <n-layout-content> -->
<!--        平山道 -->
<!--      </n-layout-content> -->
<!--    </n-layout> -->
<!--  </n-layout> -->
<!-- </template> -->

<!-- <style lang="scss"> -->
<!-- #app { -->
<!--  @apply w-screen h-screen; -->
<!--  @apply flex flex-1; -->
<!-- } -->
<!-- </style> -->

<!-- <style lang="scss" scoped> -->
<!-- //.n-layout { -->
<!-- // @apply flex flex-1; -->
<!-- //  :deep(.n-layout-scroll-container) { -->
<!-- //    @apply flex flex-1; -->
<!-- //  } -->
<!-- //} -->
<!-- .n-layout { -->
<!--  @apply h-auto; -->
<!-- } -->
<!-- .n-layout-header, -->
<!-- .n-layout-footer { -->
<!--  @apply bg-gray-400/20; -->
<!--  @apply p-2; -->
<!-- } -->

<!-- .n-layout-sider { -->
<!--  @apply bg-gray-400/30; -->
<!--  :deep(.n-layout-sider-scroll-container) { -->
<!--    @apply p-2; -->
<!--  } -->
<!-- } -->

<!-- .n-layout-content { -->
<!--  @apply bg-gray-400/40; -->
<!--  @apply p-2; -->
<!-- } -->
<!-- </style> -->

<script lang="ts" setup>
import { ref } from 'vue'
import AppButton from '@renderer/components/AppButton.vue'
// import appStore from '@renderer/stores'

const hidden = ref(true)
// const { ipc, store } = appStore

// console.log(store)

const clicked: EventListener = (e) => {
  hidden.value = !hidden.value
  // ipc.send('toggle', hidden.value)
  console.log('clicked', e, hidden)
}
</script>

<template>
  <!--  default layout -->
  <div class="header">
    <button class="no-drag" @click="clicked">
      cli
    </button>
    <router-link to="/browsing?url=https://www.baidu.com" class="no-drag">
      browsing
    </router-link>
  </div>
  <div class="aside" :class="{ hidden }">
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
  <main>
    <router-view />
  </main>
  <!--  <v-layout> -->
  <!--    <v-app-bar height="22" color="grey-darken-3" elevation="0" /> -->
  <!--    <v-navigation-drawer width="72" color="grey-darken-2" permanent /> -->
  <!--    <v-navigation-drawer width="150" color="grey-darken-1" permanent /> -->
  <!--    <v-app-bar height="48" color="grey" elevation="0" /> -->
  <!--    <v-navigation-drawer location="right" width="150" color="grey-lighten-1" permanent /> -->
  <!--    <v-app-bar location="bottom" height="48" color="grey-lighten-2" elevation="0" /> -->
  <!--    <v-main> -->
  <!--      <v-card elevation="0" height="400px" /> -->
  <!--    </v-main> -->
  <!--  </v-layout> -->
  <!--  <router-view /> -->
</template>

<style lang="scss" scoped>
$header-height: 10 * 0.25rem;
$aside-width: 10 * 0.25rem;

:global(#app){ // 修改根节点
  @apply font-sans text-base;
  @apply flex flex-1;
  @apply flex-wrap;
  @apply w-screen h-screen;
  @apply drag;
}

.header {
  //@apply bg-red-100;
  @apply bg-neutral-100;
  @apply w-full;
  @apply pl-18 py-2;
  height: $header-height; // h-10
  @apply border-b;
  //@apply border-yellow-500;
  //@apply z-1000;
  @apply shadow shadow-gray-100;
}
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

  //div {
  //  @apply border;
  //  @apply w-10 h-10;
  //  @apply text-center;
  //  @apply m-auto;
  //  //@apply text-center align-middle;
  //  //@apply px-auto py-auto mx-auto my-auto;
  //  //@apply justify-center;
  //  //@apply content-center place-content-center;
  //  //@apply items-center justify-items-center place-items-center;
  //  //@apply self-center justify-self-center place-self-center;
  //}

  //.bottom {
  //  @apply border;
  //  @apply flex;
  //  @apply absolute;
  //}

}

//header {
//  @apply w-full h-20 bg-red-100;
//}

main {
  @apply flex flex-1;
  height: calc(100vh - #{$header-height});
  @apply p-2;
}
</style>
