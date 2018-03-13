<template>
  <div class="holy-grail-layout">
    <h3>圣杯布局</h3>
    <div class="holy-grail">
      <header>#header</header>
      <div class="holy-grail-body">
        <main class="holy-grail-content">#center</main>
        <nav class="holy-grail-nav">#nav</nav>
        <aside class="holy-grail-aside">#aside</aside>
      </div>
      <footer>#footer</footer>
    </div>
  </div>

</template>

<script>
  export default {
    name: "holy-grail-layout"
  }
</script>

<style scoped>
  .holy-grail {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background-color: palevioletred;

  }

  header,
  footer {
    height: 50px;
    background-color: burlywood;
  }

  .holy-grail-body {
    display: flex;
    flex: 1;
    background-color: aquamarine;
  }

  .holy-grail-content {
    /*flex: 1;*/
    flex: 0 0 70%;
    background-color: green;

  }

  .holy-grail-aside, .holy-grail-nav{
    /*两遍边框的宽度设为12em*/
    flex: 0 0 12em;
  }

  .holy-grail-nav {
    /*导航放到最左边*/
    order: -1;
  }

  .holy-grail-layout {
    text-align: center!important;
  }
</style>
