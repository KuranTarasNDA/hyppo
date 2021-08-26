<template>
  <section class="hero">
    <div class="container">
      <div class="hero___text">
        <h1>
          Modern living for everyone
        </h1>
        <p>
          Sign-Up or Log-in to complete your information and receive a binding offer
        </p>
        <div class="hero-btn">
          Let's go
        </div>
      </div>
      <div class="hero__img">
        <img src="@/assets/02.png" alt="">
      </div>
    </div>
  </section>
</template>
<style lang="sass">
  .hero
    padding: 40px 0 64px 0
    .container
      justify-content: space-between
      .hero___text
        width: 44.3%
        display: flex
        flex-direction: column
        h1
          font-family: Rubik, sans-serif
          font-style: normal
          font-weight: bold
          font-size: 64px
          line-height: 86px
          color: #29ABE2
        p
          font-family: Open Sans, sans-serif
          font-style: normal
          font-weight: normal
          font-size: 22px
          line-height: 28px
          font-feature-settings: 'liga' off
          color: #102941
          margin: 8px 0 24px 0
          max-width: 525px
        .hero-btn
          background: #29ABE2
          border-radius: 10px
          padding: 17.5px 90.5px
          font-family: Open Sans, sans-serif
          font-style: normal
          font-weight: bold
          font-size: 18px
          line-height: 25px
          margin-right: auto
          color: #FFFFFF
          cursor: pointer
          position: relative
          &:after
            left: 50%
            transform: translateX(-50%)
            content: ''
            top: 25px
            position: absolute
            background: rgba(95, 122, 126, 0.22)
            filter: blur(50px)
            z-index: -1
            border-radius: 10px
            width: 84.4%
            height: 100%
      .hero__img
        width: 48.3%
        max-height: 544px
        img
          width: 100%
          height: 100%
          object-fit: contain
</style>

















