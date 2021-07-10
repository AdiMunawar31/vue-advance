<template>
  <Suspense>
    <template #default>
      <keep-alive>
        <DataPostDetail />
      </keep-alive>
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