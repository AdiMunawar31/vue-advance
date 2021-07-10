<template>
  <div class="flex bg-gray-100 py-24 justify-center">
    <div class="p-12 text-center max-w-2xl">
      <div class="md:text-3xl text-3xl font-bold">
        Welcome To My Website "{{ name }}"
      </div>
      <div class="text-xl font-normal mt-4">
        {{ data.title }}
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
      <pre class="flex flex-wrap justify-center text-xs">{{ credential }}</pre>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  async setup() {
    const data = ref("");
    const name = ref("");

    const store = useStore();
    const credential = computed(() => {
      return store.state.credential;
    });

    const user = localStorage.getItem("NAME");
    name.value = user;

    const result = await fetch("https://jsonplaceholder.typicode.com/posts/42");
    data.value = await result.json();

    return { data, name, credential };
  },
};
</script>



