<template>
  <div class="flex bg-gray-100 py-24 justify-center">
    <div class="p-12 text-center max-w-2xl">
      <div class="md:text-3xl text-3xl font-bold">
        Welcome To My Website "{{ name }}"
      </div>
      <div class="text-xl font-normal mt-4">
        <keep-alive>
          {{ title }}
        </keep-alive>
      </div>
      <div class="mt-6 flex justify-center h-12 relative">
        <div
          class="
            flex
            shadow-md
            font-medium
            absolute
            py-2
            px-4
            text-green-100
            cursor-pointer
            bg-blue-700
            rounded
            text-lg
            tr-mt
            svelte-jqwywd
          "
        >
          <router-link to="/about">About Adi</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  async setup() {
    const name = ref("");

    const store = useStore();
    const credential = computed(() => {
      return store.state.credential;
    });

    const user = sessionStorage.getItem("NAME");
    name.value = user;

    const title = computed(() => {
      return store.state.title;
    });

    return { title, name, credential };
  },
};
</script>



