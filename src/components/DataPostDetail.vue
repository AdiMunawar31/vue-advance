<template>
  <div class="max-w-screen-lg mx-auto">
    <div class="col-start-1 col-end-3 my-2">
      <router-link to="/post">
        <div
          class="
            h-full
            p-6
            dark:bg-gray-800
            bg-white
            hover:shadow-xl
            rounded
            border-b-4 border-blue-700
            shadow-md
          "
        >
          <h3 class="text-2xl mb-3 font-semibold inline-flex">
            <svg
              class="mr-2"
              width="24"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
                fill="currentColor"
              />
            </svg>
            Prev
          </h3>
          <p class="text-lg">Back to post data list?</p>
        </div>
      </router-link>
    </div>

    <main class="mt-10">
      <div class="mb-4 md:mb-0 w-full mx-auto relative">
        <div class="px-4 lg:px-0">
          <h2 class="text-4xl mb-10 font-semibold text-gray-800 leading-tight">
            {{ title }}
          </h2>
        </div>

        <img
          src="https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
          class="w-full hidden md:block object-cover lg:rounded"
          style="height: 28em"
        />
      </div>

      <div class="flex flex-col lg:flex-row lg:space-x-12">
        <div
          class="
            px-4
            lg:px-0
            mt-12
            text-gray-700 text-lg
            leading-relaxed
            w-full
            lg:w-3/4
          "
        >
          <p class="pb-6">
            {{ body }}
          </p>
          <p class="pb-6">
            {{ body }}
          </p>
          <p class="pb-6">
            {{ body }}
          </p>
          <p class="pb-6">
            {{ body }}
          </p>
          <p class="pb-6">
            {{ body }}
          </p>

          <!-- Komentar Like -->

          <div class="pb-10">
            <div class="pt-4">
              <div class="mb-2">
                <div class="flex items-center">
                  <span
                    class="mr-16 ml-3 inline-flex items-center cursor-pointer"
                    @click="addLike"
                  >
                    <svg
                      class="
                        fill-heart
                        text-gray-700
                        inline-block
                        h-7
                        w-7
                        heart
                      "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </span>
                  <span class="mr-3 inline-flex items-center cursor-pointer">
                    <svg
                      class="text-gray-700 inline-block h-7 w-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </span>
                </div>
                <span class="text-gray-600 text-sm font-bold ml-1 mr-9"
                  >{{ likes }} Likes</span
                >
                <span class="text-gray-600 text-sm font-bold">26 Comment</span>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full mb-15 lg:w-1/4 m-auto mt-12 max-w-screen-sm">
          <div class="p-4 border-t border-b md:border md:rounded">
            <div class="flex py-2">
              <img
                src="https://randomuser.me/api/portraits/men/97.jpg"
                class="h-10 w-10 rounded-full mr-2 object-cover"
              />
              <div>
                <p class="font-semibold text-gray-700 text-sm">D2Y CODING</p>
                <p class="font-semibold text-gray-600 text-xs">WEB DEV</p>
              </div>
            </div>
            <p class="text-gray-700 py-3">
              D2Y writes about technology Yourself required no at thoughts
              delicate landlord it be. Branched dashwood do is whatever it.
            </p>
            <button
              class="
                px-2
                py-1
                text-gray-100
                bg-blue-700
                flex
                w-full
                items-center
                justify-center
                rounded
              "
            >
              Follow
              <i class="bx bx-user-plus ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- main ends here -->
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";

export default {
  async setup() {
    const data = reactive({
      title: "",
      body: "",
    });

    const store = useStore();

    const url = useRoute();
    const id = url.params.id;

    const result = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const { title, body } = await result.json();

    data.title = title;
    data.body = body;

    const addLike = () => {
      store.commit("increment");
    };

    const likes = computed(() => {
      return store.state.totalLike;
    });

    return { ...toRefs(data), addLike, likes };
  },
};
</script>