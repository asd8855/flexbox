<template>
  <div class="dice">
    <h3>骰子布局</h3>
    <div class="box">
      <div class="first-face">
        <span class="item"></span>
      </div>
      <div class="second-face">
        <span class="item"></span>
        <span class="item"></span>
      </div>

      <div class="third-face">
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
      </div>

      <div class="fourth-face">
        <div class="row">
          <span class="item"></span>
          <span class="item"></span>
        </div>
        <div class="row">
          <span class="item"></span>
          <span class="item"></span>
        </div>
      </div>

      <div class="fifth-face">
        <div class="row">
          <span class="item"></span>
          <span class="item"></span>
        </div>
        <div class="row">
          <span class="item"></span>
        </div>
        <div class="row">
          <span class="item"></span>
          <span class="item"></span>
        </div>
      </div>

      <div class="sixth-face">
        <div class="row">
          <span class="item"></span>
          <span class="item"></span>
          <span class="item"></span>
        </div>
        <div class="row">
          <span class="item"></span>
          <span class="item"></span>
          <span class="item"></span>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
    export default {
        name: "dice-layout"
    }
</script>

<style scoped>
  .sixth-face {
    display: flex;
    justify-content: space-around;
  }

  .sixth-face .row {
    justify-content: space-between;
  }

  .fifth-face {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .fifth-face .row:nth-of-type(2) {
    align-self: center;
  }

  .fourth-face {
    display: flex;
    justify-content: space-between;
  }

  .row {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .fourth-face .item:nth-of-type(1) {
    background-color: blueviolet;
  }

  .third-face {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
  }

  .third-face .item:nth-last-of-type(2) {
    align-self: center;
    background-color: blue;
  }

  .third-face .item:nth-last-of-type(3) {
    align-self: flex-end;
    background-color: darkturquoise;
  }

  .second-face {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .second-face .item:nth-of-type(2) {
    align-self: flex-start;
  }

  .first-face {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box {
    display: flex;
    justify-content: flex-start;
    background-color: burlywood;
  }

  .item {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: red;
    margin: 4px;
  }

  [class$='face'] {
    margin: 16px;
    padding: 4px;
    background-color: #e7e7e7;
    width: 104px;
    height: 104px;
    object-fit: contain;

    box-shadow: inset 0 5px white,
    inset 0 -5px #bbb,
    inset 5px 0 #d7d7d7,
    inset -5px 0 #d7d7d7;
    border-radius: 10%;
  }


  .dice {
    text-align: center !important;
  }

</style>
