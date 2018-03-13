<template>
  <div class="gridLayout">
    <h3>网格布局</h3>
    <div class="grid">
      <div class="grid1">
        <div class="grid-cell">auto</div>
        <div class="grid-cell">auto</div>
        <div class="grid-cell">auto</div>
      </div>

      <div class="grid1">
        <div class="grid-cell u-1of2">1/2</div>
        <div class="grid-cell">auto</div>
        <div class="grid-cell">auto</div>
      </div>
      <div class="grid1">
        <div class="grid-cell u-1of3">1/3</div>
        <div class="grid-cell">auto</div>
      </div>
      <div class="grid1">
        <div class="grid-cell u-1of4">1/4</div>
        <div class="grid-cell">auto</div>
        <div class="grid-cell u-1of3">1/3</div>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: "grid-layout"
  }
</script>

<style scoped>

  .grid1 .u-1of4 {
    flex: 0 0 25%;
  }

  .grid1 .u-1of3 {
    flex: 0 0 33%;
  }

  .grid1 .u-1of2 {
    /*flex 属性是 flex-grow flex-shrink flex-basis 的简写 默认值为 0 1 auto*/
    /*flex-grow 属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大*/
    /*flex-shrink 属性定义了项目的缩小比例饿，默认为1，即如果空间不足，该项目将缩小*/
    /*flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）*/
    flex: 0 0 50%;
  }

  .grid {
    background-color: aquamarine;
  }

  .grid-cell {
    flex: 1;
    border: 1px solid black;
  }

  .grid1 {
    display: flex;
  }

  .gridLayout {
    text-align: center!important;
  }

</style>
