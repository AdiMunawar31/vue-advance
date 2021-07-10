<template>
  <div>
    <div class="flex flex-col p-2 py-6 m-h-screen">
      <Search />
      <div class="flex flex-col gap-4 lg:p-4 p-2 rounde-lg m-2">
        <div class="md:flex block md:justify-between">
          <h1
            class="
              lg:text-2xl
              md:text-xl
              text-lg
              lg:p-3
              p-1
              font-black
              text-gray-700
            "
          >
            Post Data List
          </h1>
          <p
            class="
              lg:text-lg
              md:text-lg
              text-sm
              lg:p-3
              p-1
              font-black
              text-gray-700
            "
          >
            Total Likes : {{ likes }}
          </p>
        </div>

        <!-- CARD LIST -->
        <ul v-for="(item, index) in list" :key="index">
          <router-link :to="`/post/${item.id}`">
            <li>
              <div
                class="
                  flex
                  items-center
                  justify-between
                  w-full
                  p-2
                  lg:rounded-full
                  md:rounded-full
                  hover:bg-gray-100
                  cursor-pointer
                  border-2
                  shadow
                  rounded-lg
                "
              >
                <div class="lg:flex md:flex items-center">
                  <i class="fas fa-database text-3xl text-blue-700 p-2"></i>

                  <div class="flex flex-col">
                    <div
                      class="text-sm leading-3 text-gray-700 font-bold w-full"
                    >
                      {{ item.title }}
                    </div>
                  </div>
                </div>

                <svg
                  class="
                    h-6
                    w-6
                    mr-1
                    invisible
                    md:visible
                    lg:visible
                    xl:visible
                  "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </li>
          </router-link>
        </ul>

        <!-- END CARD LIST -->
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";
import Search from "./Search.vue";

export default {
  components: { Search },
  async setup() {
    const data = reactive({
      list: [],
    });

    const store = useStore();

    const likes = computed(() => {
      return store.state.totalLike;
    });

    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    data.list = await result.json();

    return { ...toRefs(data), likes };
  },
};
</script>