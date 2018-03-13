<template>
  <div>
    <ul>
      <router-link :to="{path: '/diceLayout'}">
        <li>骰子布局</li>
      </router-link>
      <router-link :to="{path: '/gridLayout'}">
        <li>网格布局</li>
      </router-link>
      <router-link :to="{path: '/holyGrailLayout'}">
        <li>圣杯布局</li>
      </router-link>
      <router-link :to="{path: '/fluidLayout'}">
        <li>流式布局</li>
      </router-link>
    </ul>
  </div>
</template>

<script>

  export default {
    name: "index",
  }
</script>

<style scoped>


</style>
