<template>
  <div id="Home">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content-box" :class="{ 'content-collapse': collapse }">
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive :include="tagsList"
            ><router-view></router-view
          ></keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import vHead from "./Header.vue";
import vSidebar from "./Sidebar.vue";
import bus from "@/bus/bus.js";
export default {
  name: "Home",
  data() {
    return {
      tagsList: [],
      collapse: false
    };
  },
  components: {
    vHead,
    vSidebar
  },
  created() {
    bus.$on("collapse-content", msg => {
      this.collapse = msg;
    });
  }
};
</script>

<style scoped>
#Home {
  width: 100%;
  height: 100%;
}
#Home .content-box {
  position: absolute;
  left: 170px;
  right: 0;
  bottom: 0;
  top: 70px;
  padding: 10px;
}
</style>
