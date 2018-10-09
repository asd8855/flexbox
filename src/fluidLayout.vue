<template>
  <div class="fluid">
    <h3>流式布局</h3>
    <div class="parent">
      <div class="child" v-for="n in 10"> {{n}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "fluid-layout",

  }
</script>

<style scoped>

  .parent {
    display: flex;
    flex-flow: row wrap;
    background-color: bisque
  }

  .child {
    box-sizing: border-box;
    background-color: white;
    flex: 0 0 25%;
    height: 50px;
    border: 1px solid red;
  }

  .fluid {
    text-align: center;
  }

</style>
