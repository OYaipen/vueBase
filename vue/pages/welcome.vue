<template>
  <div>
    <div class="top-right links">
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  layout: "default",

  metaInfo() {
    return { title: this.$t("home") };
  },

  data: () => ({
    title: window.config.appName
  }),

  computed: mapGetters({
    authenticated: "auth/check"
  })
};
</script>

<style scoped>
.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}

.title {
  font-size: 5vw;
  color: rgb(0, 68, 133);
}
</style>
