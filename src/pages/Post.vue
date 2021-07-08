<template>
  <Suspense>
    <template #default>
      <DataPost />
    </template>

    <template #fallback>
      <Loader />
    </template>
  </Suspense>
</template>

<script>
import DataPost from "../components/DataPost.vue";
import Loader from "../components/Loader.vue";

export default {
  components: { DataPost, Loader },
  setup() {},
};
</script>