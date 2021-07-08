<template>
  <Suspense>
    <template #default>
      <DataPostDetail />
    </template>

    <template #fallback>
      <Loader />
    </template>
  </Suspense>
</template>

<script>
import DataPostDetail from "../components/DataPostDetail.vue";
import Loader from "../components/Loader.vue";

export default {
  components: { DataPostDetail, Loader },
  setup() {},
};
</script>