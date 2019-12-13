<template>
  <div id="app">
    <keep-alive>
      <!-- 当前路由会被缓存 -->
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
  box-sizing: border-box;
}
</style>
