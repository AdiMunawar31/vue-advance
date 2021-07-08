<template>
  <Suspense>
    <template #default>
      <AboutComp />
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