<template>
  <body>
    <span
      class="button"
      id="button"
      @click="toggleClass"
      :class="{ night: isNight }"
    >
      <span class="btnInner">
        <span class="circle">
          <span class="circleNight">
            <span class="crater"></span>
            <span class="crater crater2"></span>
            <span class="crater crater3"></span>
          </span>
        </span>
        <span class="haloBox">
          <span class="halo"></span>
          <span class="halo halo2"></span>
          <span class="halo halo3"></span>
        </span>
        <span class="clouds">
          <span class="cloud"></span>
          <span class="cloud cloud2"></span>
          <span class="cloud cloud3"></span>
          <span class="cloud cloud4"></span>
          <span class="cloud cloud5"></span>
          <span class="cloud cloud6"></span>
          <span class="cloud cloud7"></span>
        </span>
        <span class="clouds clouds2">
          <span class="cloud"></span>
          <span class="cloud cloud2"></span>
          <span class="cloud cloud3"></span>
          <span class="cloud cloud4"></span>
          <span class="cloud cloud5"></span>
          <span class="cloud cloud6"></span>
          <span class="cloud cloud7"></span>
        </span>
        <span class="stars">
          <span class="star">
            <svg
              version="1.1"
              viewBox="0 0 20 20"
              height="20"
              width="20"
              style="width: 100%; height: 100%"
            >
              <path
                d="M 0 10 c 5 0 10 -5 10 -10 c 0 5 5 10 10 10 c -5 0 -10 5 -10 10 c 0 -5 -5 -10 -10 -10"
                stroke="#fff"
                stroke-width="1"
                fill="#fff"
              ></path>
            </svg>
          </span>
          <span class="star star2">
            <svg
              version="1.1"
              viewBox="0 0 20 20"
              height="20"
              width="20"
              style="width: 100%; height: 100%"
            >
              <path
                d="M 0 10 c 5 0 10 -5 10 -10 c 0 5 5 10 10 10 c -5 0 -10 5 -10 10 c 0 -5 -5 -10 -10 -10"
                stroke="#fff"
                stroke-width="1"
                fill="#fff"
              ></path>
            </svg>
          </span>
          <span class="star star3">
            <svg
              version="1.1"
              viewBox="0 0 20 20"
              height="20"
              width="20"
              style="width: 100%; height: 100%"
            >
              <path
                d="M 0 10 c 5 0 10 -5 10 -10 c 0 5 5 10 10 10 c -5 0 -10 5 -10 10 c 0 -5 -5 -10 -10 -10"
                stroke="#fff"
                stroke-width="1"
                fill="#fff"
              ></path>
            </svg>
          </span>
          <span class="star star4">
            <svg
              version="1.1"
              viewBox="0 0 20 20"
              height="20"
              width="20"
              style="width: 100%; height: 100%"
            >
              <path
                d="M 0 10 c 5 0 10 -5 10 -10 c 0 5 5 10 10 10 c -5 0 -10 5 -10 10 c 0 -5 -5 -10 -10 -10"
                stroke="#fff"
                stroke-width="1"
                fill="#fff"
              ></path>
            </svg>
          </span>
          <span class="star star5">
            <svg
              version="1.1"
              viewBox="0 0 20 20"
              height="20"
              width="20"
              style="width: 100%; height: 100%"
            >
              <path
                d="M 0 10 c 5 0 10 -5 10 -10 c 0 5 5 10 10 10 c -5 0 -10 5 -10 10 c 0 -5 -5 -10 -10 -10"
                stroke="#fff"
                stroke-width="1"
                fill="#fff"
              ></path>
            </svg>
          </span>
          <span class="star star6">
            <svg
              version="1.1"
              viewBox="0 0 20 20"
              height="20"
              width="20"
              style="width: 100%; height: 100%"
            >
              <path
                d="M 0 10 c 5 0 10 -5 10 -10 c 0 5 5 10 10 10 c -5 0 -10 5 -10 10 c 0 -5 -5 -10 -10 -10"
                stroke="#fff"
                stroke-width="1"
                fill="#fff"
              ></path>
            </svg>
          </span>
          <span class="star star7">
            <svg
              version="1.1"
              viewBox="0 0 20 20"
              height="20"
              width="20"
              style="width: 100%; height: 100%"
            >
              <path
                d="M 0 10 c 5 0 10 -5 10 -10 c 0 5 5 10 10 10 c -5 0 -10 5 -10 10 c 0 -5 -5 -10 -10 -10"
                stroke="#fff"
                stroke-width="1"
                fill="#fff"
              ></path>
            </svg>
          </span>
          <span class="star star8">
            <svg
              version="1.1"
              viewBox="0 0 20 20"
              height="20"
              width="20"
              style="width: 100%; height: 100%"
            >
              <path
                d="M 0 10 c 5 0 10 -5 10 -10 c 0 5 5 10 10 10 c -5 0 -10 5 -10 10 c 0 -5 -5 -10 -10 -10"
                stroke="#fff"
                stroke-width="1"
                fill="#fff"
              ></path>
            </svg>
          </span>
          <span class="star star9">
            <svg
              version="1.1"
              viewBox="0 0 20 20"
              height="20"
              width="20"
              style="width: 100%; height: 100%"
            >
              <path
                d="M 0 10 c 5 0 10 -5 10 -10 c 0 5 5 10 10 10 c -5 0 -10 5 -10 10 c 0 -5 -5 -10 -10 -10"
                stroke="#fff"
                stroke-width="1"
                fill="#fff"
              ></path>
            </svg>
          </span>
          <span class="star star10">
            <svg
              version="1.1"
              viewBox="0 0 20 20"
              height="20"
              width="20"
              style="width: 100%; height: 100%"
            >
              <path
                d="M 0 10 c 5 0 10 -5 10 -10 c 0 5 5 10 10 10 c -5 0 -10 5 -10 10 c 0 -5 -5 -10 -10 -10"
                stroke="#fff"
                stroke-width="1"
                fill="#fff"
              ></path>
            </svg>
          </span>
        </span>
      </span>
    </span>
  </body>
</template>

<script>
export default {
  data() {
    return {
      isNight: false,
    };
  },
  methods: {
    toggleClass() {
      this.isNight = !this.isNight;
    },
  },
};
</script>

  <style type="text/css" scoped>
.button {
  display: inline-block;
  line-height: 0;
  cursor: pointer;
}
.btnInner {
  transition: all 0.6s ease-in-out;
  line-height: 0;
  display: inline-block;
  position: relative;
  height: 66px;
  width: 150px;
  border-radius: 100px;
  background: #1c80da;
  box-shadow: inset 0 2px 6px #000, 0 0 3px rgba(0, 0, 0, 0.6);
  overflow: hidden;
}
.circle {
  transition: all 0.6s ease-in-out;
  position: absolute;
  z-index: 2;
  overflow: hidden;
  width: 54px;
  height: 54px;
  top: 6px;
  left: 6px;
  background: #ffdd08;
  border-radius: 100px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6),
    inset -0.5px -1px 3px rgba(0, 0, 0, 0.6),
    inset 1px 1px 3px rgba(255, 255, 255, 0.8);
}
.circle .circleNight {
  transition: all 0.6s ease-in-out;
  position: absolute;
  top: 0;
  left: 101%;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  background: #c7d0da;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6),
    inset -0.5px -1px 2px rgba(0, 0, 0, 0.6),
    inset 1px 1px 2px rgba(255, 255, 255, 0.8);
}
.circle .crater {
  position: absolute;
  width: 25%;
  height: 25%;
  top: 12%;
  left: 44%;
  border-radius: 100px;
  background: #909baf;
}
.circle .crater2 {
  width: 34%;
  height: 34%;
  top: 42%;
  left: 16%;
}
.circle .crater3 {
  width: 19%;
  height: 19%;
  top: 62%;
  left: 63%;
}

.haloBox {
  transition: all 0.6s ease-in-out;
  position: absolute;
  z-index: 1;
  width: 0;
  height: 0;
  left: 33px;
  top: 33px;
}
.haloBox .halo {
  transition: all 0.6s ease-in-out;
  width: 92.4px;
  height: 92.4px;
  position: absolute;
  background: #fff;
  opacity: 0.1;
  border-radius: 1000px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.haloBox .halo2 {
  width: 117.4px;
  height: 117.4px;
}
.haloBox .halo3 {
  width: 142.4px;
  height: 142.4px;
}

.clouds {
  transition: all 0.6s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  transition-delay: 0s;
}
.clouds .cloud {
  position: absolute;
  background: #fff;
  border-radius: 100px;
  width: 59.4px;
  height: 59.4px;
  top: -17%;
  left: 84%;
}
.clouds2 {
  transition-delay: 0.3s;
  top: 19%;
  left: -5%;
  opacity: 1;
  transform: rotate(5deg);
}
.clouds2 .cloud {
  top: 2%;
  left: 92%;
}
.clouds2 .cloud2 {
  top: 39%;
  left: 69%;
}

.clouds .cloud2 {
  width: 44.88px;
  height: 44.88px;
  top: 39%;
  left: 69%;
}
.clouds .cloud3 {
  width: 48.18px;
  height: 48.18px;
  top: 47%;
  left: 54%;
}
.clouds .cloud4 {
  width: 33px;
  height: 33px;
  top: 64%;
  left: 49.7%;
}
.clouds .cloud5 {
  width: 37.62px;
  height: 37.62px;
  top: 64%;
  left: 32%;
}
.clouds .cloud6 {
  width: 48.18px;
  height: 48.18px;
  top: 81%;
  left: 13%;
}
.clouds .cloud7 {
  width: 29.7px;
  height: 29.7px;
  top: 85%;
  left: 7%;
}

.stars {
  transition: all 0.6s ease-in-out;
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
}
.stars .star {
  transition: all 0.6s ease-in-out;
  transform: translateY(-20px);
  display: inline-block;
  position: absolute;
  left: 20%;
  top: 20%;
  width: 10px;
}
.stars .star2 {
  left: 10%;
  top: 30%;
  width: 4px;
  transition-delay: 0.1s;
}
.stars .star3 {
  left: 20%;
  top: 48%;
  width: 3px;
  transition-delay: 0.15s;
}
.stars .star4 {
  left: 11%;
  top: 76%;
  width: 4px;
  transition-delay: 0.24s;
}
.stars .star5 {
  left: 16%;
  top: 71%;
  width: 4px;
  transition-delay: 0.2s;
}
.stars .star6 {
  left: 23%;
  top: 79%;
  width: 5px;
  transition-delay: 0.26s;
}
.stars .star7 {
  left: 44%;
  top: 26%;
  width: 4px;
  transition-delay: 0.04s;
}
.stars .star8 {
  left: 37%;
  top: 50%;
  width: 4px;
  transition-delay: 0.14s;
}
.stars .star9 {
  left: 44%;
  top: 68%;
  width: 6px;
  transition-delay: 0.12s;
}
.stars .star10 {
  left: 52%;
  top: 37%;
  width: 8px;
  transition-delay: 0.05s;
}

.night .btnInner {
  background: #252525;
}
.night .circle {
  left: 90px;
}
.night .circle .circleNight {
  left: 0;
}
.night .haloBox {
  left: 122px;
}
.night .haloBox .halo {
  opacity: 0.13;
}
.night .clouds {
  top: 100%;
  transition-delay: 0.3s;
}
.night .clouds2 {
  transition-delay: 0s;
}
.night .stars {
  top: 0;
}
.night .stars .star {
  transform: translateY(0);
}

.button:hover .circle {
  transform: translateX(5px);
}
.button:hover .haloBox {
  transform: translateX(5px);
}
.night:hover .circle {
  transform: translateX(-5px);
}
.night:hover .haloBox {
  transform: translateX(-5px);
}
</style>