<template>
  <Suspense>
    <template #default>
      <keep-alive>
        <HomeComp />
      </keep-alive>
    </template>

    <template #fallback>
      <Loader />
    </template>
  </Suspense>
</template>

<script>
import HomeComp from "../components/HomeComp.vue";
import Loader from "../components/Loader.vue";

export default {
  components: { HomeComp, Loader },
  setup() {},
};
</script>