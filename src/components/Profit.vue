<template>
  <section class="profit">
    <div class="container">
      <div class="profit__text">
        <h1>
          Purpose Beyond Profit
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor nisi, posuere vitae tincidunt et, molestie sit amet purus. Doloremque et molestiae perspiciatis quis voluptas ut sed. Omnis praesentium doloremque ipsa eveniet.
        </p>
        <div class="profit-btn">
          Mortgage estimate
        </div>
      </div>
      <div class="profit__img">
        <img src="@/assets/04.png" alt="">
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.profit
  background: #fbfbfb
  padding-bottom: 96px
  .container
    justify-content: space-between
    align-items: center
    .profit__text
      display: flex
      flex-direction: column
      width: 42.6%
      h1
        font-family: Rubik, sans-serif
        font-style: normal
        font-weight: bold
        font-size: 32px
        line-height: 44px
        color: #1D4772
      p
        font-family: Open Sans, sans-serif
        font-style: normal
        font-weight: normal
        font-size: 17px
        line-height: 26px
        color: #102941
        margin: 16px 0 24px
      .profit-btn
        background: #29ABE2
        margin-right: auto
        border-radius: 10px
        font-family: Open Sans, sans-serif
        font-style: normal
        font-weight: bold
        font-size: 18px
        cursor: pointer
        line-height: 25px
        color: #FFFFFF
        padding: 17.5px 40px
    .profit__img
      width: 43.8%
      img
        width: 100%
        height: 100%
        object-fit: contain
</style>












