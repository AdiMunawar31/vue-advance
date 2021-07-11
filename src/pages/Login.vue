<template>
  <section class="w-full">
    <div class="container mx-auto">
      <div class="flex content-center items-center justify-center">
        <div class="w-full md:w-4/12 lg:w-4/12 px-4 py-40">
          <div
            class="
              flex flex-col
              min-w-0
              break-words
              w-full
              mb-6
              shadow-lg
              rounded-lg
              bg-gray-300
              border-0
            "
          >
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div class="text-gray-500 text-center mb-3 font-bold">
                <h3 class="mt-5">Input Your Name</h3>
              </div>
              <form>
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                    >Name</label
                  >
                  <input
                    type="text"
                    v-model="name"
                    class="
                      px-3
                      py-3
                      placeholder-gray-400
                      text-gray-700
                      bg-white
                      rounded
                      text-sm
                      shadow
                      w-full
                    "
                    id="name"
                    placeholder="Input Your Name Here..."
                  />
                </div>

                <div class="text-center mt-6">
                  <button
                    class="
                      bg-blue-700
                      text-white
                      hover:bg-blue-500
                      text-sm
                      font-bold
                      uppercase
                      px-6
                      py-3
                      rounded
                      shadow
                      hover:shadow-lg
                      mr-1
                      mb-1
                      w-full
                    "
                    @click="login"
                  >
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const route = useRouter();
    const store = useStore();

    const name = ref("");

    const login = computed(() => {
      if (name.value == "") {
        Swal.fire({
          title: "<strong>Please, Input Your Name</strong>",
          icon: "error",
          html:
            "You can use <b>bold text</b>, " +
            '<a href="//sweetalert2.github.io">links</a> ' +
            "and other HTML tags",
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText: '<i class="fa fa-thumbs-up"></i> Error',
          confirmButtonAriaLabel: "Thumbs up, Error",
          cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
          cancelButtonAriaLabel: "Thumbs down",
        });
        route.push({ name: "Login" });
      } else {
        sessionStorage.setItem("LOGIN", true);
        sessionStorage.setItem("NAME", name.value);

        store.dispatch("getCredential");
        store.dispatch("getTitle");

        route.push({ name: "Home" });
      }
    });

    return { login, name };
  },
};
</script>