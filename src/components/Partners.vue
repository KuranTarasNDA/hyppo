<template>
  <section class="partners">
    <div class="container">
      <div class="partners__item">
        <img src="@/assets/05.png" alt="">
      </div>
      <div class="partners__item">
        <img src="@/assets/06.png" alt="">
      </div>
      <div class="partners__item">
        <img src="@/assets/07.png" alt="">
      </div>
      <div class="partners__item">
        <img src="@/assets/08.png" alt="">
      </div>
      <div class="partners__item">
        <img src="@/assets/09.png" alt="">
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.partners
  padding-bottom: 64px
  background: #fbfbfb
  .container
    max-width: 1135px
    align-items: center
    justify-content: space-between
    .partners__item
      &:first-child
        margin: 0 -5px
      &:nth-child(2)
        margin: 0 -16.87px
      &:nth-child(3)
        margin: 0 -43.85px
      &:nth-child(4)
        margin: 0 -3px 0 0
      &:nth-child(5)
        margin: 0 -9.35px
      img
        width: 100%
        object-fit: contain
</style>