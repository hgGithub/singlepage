<template>
  <div id="app" class="appr-app">
    <transition name="page">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
  @import './assets/styles/base/base'
</style>
