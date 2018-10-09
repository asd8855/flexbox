<template>
  <div>
    <a href="http://www.ruanyifeng.com/blog/2015/07/flex-examples.html">flexbox教程</a>
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

    <!-- <video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 customEventName="customstatechangedeventname"

                 @play="onPlayerPlay($event)"
                 @pause="onPlayerPause($event)"
                 @ended="onPlayerEnded($event)"
                 @waiting="onPlayerWaiting($event)"
                 @playing="onPlayerPlaying($event)"
                 @loadeddata="onPlayerLoadeddata($event)"
                 @timeupdate="onPlayerTimeupdate($event)"
                 @canplay="onPlayerCanplay($event)"
                 @canplaythrough="onPlayerCanplaythrough($event)"

                 @statechanged="playerStateChanged($event)"
                 @ready="playerReadied">
  </video-player> -->
              <!-- <my-video :sources="video.sources" :options="video.options"></my-video> -->

  </div>
</template>

<script>
// require styles
import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";


import myVideo from 'vue-video'

export default {
    name: "index",
    components: {
        videoPlayer,
        myVideo
    },
    data () {
      return {
        playerOptions: {
          // videojs options
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: "/static/images/author.jpg",
        },
        video: {
                sources: [{
                    src: 'http://covteam.u.qiniudn.com/oceans.mp4',
                    type: 'video/mp4'
                }],
                options: {
                    autoplay: true,
                    volume: 0.6,
                    poster: 'http://covteam.u.qiniudn.com/poster.png'
                }
            }
      }
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      }
    }
};
</script>

<style scoped>

</style>
