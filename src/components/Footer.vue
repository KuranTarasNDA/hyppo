<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__top-bg"></div>
        <div class="footer__top-cont">
          <div class="footer__top-img">
            <img src="@/assets/10.png" alt="">
          </div>
          <div class="footer__top-text">
            <h1>
              Write us right now for more awesome info
            </h1>
            <p>
              We’ll help you in everything you need.
            </p>
          </div>
          <div class="footer__top-btn">
            Contact us
          </div>
        </div>
      </div>
      <div class="footer__bot">
        <div class="footer__bot-col">
          <router-link to="/home" class="footer__logo">
            <img src="@/assets/11.png" alt="">
          </router-link>
          <p>
            Are you ready to change the financial and real estate world with us?
          </p>
          <div class="footer__socials">
            <a href="" class="footer__social-item">
              <img src="@/assets/12.png" alt="">
            </a>
            <a href="" class="footer__social-item">
              <img src="@/assets/13.png" alt="">
            </a>
            <a href="" class="footer__social-item">
              <img src="@/assets/14.png" alt="">
            </a>
          </div>
          <div class="footer-all">
            ©2021 All rights reserved
          </div>
        </div>
        <div class="footer__bot-col">
          <div class="footer__bot-sub">
            Mortageges in Switzerland
          </div>
          <div class="footer__bot-links">
            <a href="" class="footer__bot-link">Mortgage market in Switzerland 2021</a>
            <a href="" class="footer__bot-link">Mortgage for the holiday home</a>
            <a href="" class="footer__bot-link">Interest rate forecast until 2021</a>
          </div>
        </div>
        <div class="footer__bot-col">
          <div class="footer__bot-sub">
            Company
          </div>
          <div class="footer__bot-links">
            <a href="" class="footer__bot-link">Brand</a>
            <a href="" class="footer__bot-link">FAQ</a>
            <a href="" class="footer__bot-link">Tutorials</a>
            <a href="" class="footer__bot-link">About Us</a>
          </div>
        </div>
        <div class="footer__bot-col">
          <div class="footer__bot-sub">
            Privacy
          </div>
          <div class="footer__bot-links">
            <a href="" class="footer__bot-link">Privacy</a>
            <a href="" class="footer__bot-link">Terms of Use</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="sass">
.footer
  background: #F8F8F8
  margin-top: 120px
  .container
    flex-direction: column
    .footer__top
      display: flex
      position: relative
      z-index: 1
      margin-top: -120px
      .footer__top-bg
        position: absolute
        top: 16.5px
        left: 50%
        transform: translateX(-50%)
        width: 94.4%
        height: 107%
        background: #0D1025
        opacity: 0.06
        z-index: 1
        cursor: pointer
        filter: blur(114px)
        border-radius: 10px
      .footer__top-cont
        position: relative
        width: 100%
        z-index: 2
        align-items: center
        padding: 58.5px 68.5px
        background: #FFFFFF
        border-radius: 10px
        display: flex
        .footer__top-img
          width: 100%
          max-width: 133px
          height: 116px
          margin-right: 64px
          img
            width: 100%
            height: 100%
            object-fit: contain
        .footer__top-text
          max-width: 410px
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
            margin-top: 16px
        .footer__top-btn
          background: #29ABE2
          border-radius: 10px
          font-family: Rubik, sans-serif
          font-style: normal
          font-weight: bold
          font-size: 16px
          line-height: 25px
          color: #FFFFFF
          padding: 17.5px 81px
          margin-left: auto
          cursor: pointer
    .footer__bot
      display: flex
      margin-top: 48px
      justify-content: space-between
      padding-bottom: 64px
      .footer__bot-col
        display: flex
        flex-direction: column
        &:not(:first-child)
          margin-top: 16px
        .footer__logo
          width: 102px
          height: 58px
          img
            width: 100%
            height: 100%
            object-fit: contain
        p
          font-family: Open Sans, sans-serif
          font-style: normal
          font-weight: normal
          font-size: 17px
          line-height: 26px
          color: #102941
          max-width: 400px
          margin-bottom: 32px
          margin-top: 16px
        .footer__socials
          display: flex
          margin-bottom: 32px
          .footer__social-item
            width: 33px
            height: 33px
            border-radius: 50%
            &:not(:last-child)
              margin-right: 16.6px
            img
              margin-left: -18px
              pointer-events: none
        .footer-all
          font-family: Open Sans, sans-serif
          font-style: normal
          font-weight: normal
          font-size: 17px
          line-height: 26px
          color: #102941
        .footer__bot-sub
          font-family: Rubik, sans-serif
          font-style: normal
          font-weight: bold
          font-size: 22px
          line-height: 28px
          color: #102941
          margin-bottom: 22px
        .footer__bot-links
          display: flex
          flex-direction: column
          .footer__bot-link
            font-family: Open Sans, sans-serif
            font-style: normal
            font-weight: normal
            font-size: 17px
            line-height: 26px
            color: #1D4772
            &:not(:last-child)
              margin-bottom: 14px
</style>


















