<template>
  <Suspense>
    <template #default>
      <keep-alive>
        <AboutComp />
      </keep-alive>
    </template>

    <template #fallback>
      <Loader />
    </template>
  </Suspense>
</template>

<script>
import AboutComp from "../components/AboutComp.vue";
import Loader from "../components/Loader.vue";

export default {
  components: { AboutComp, Loader },
  setup() {},
};
</script>