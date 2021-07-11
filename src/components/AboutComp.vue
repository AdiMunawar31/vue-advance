<template>
  <div class="w-full relative mt-0 shadow rounded my-24">
    <div class="top h-64 w-full bg-blue-700">
      <div
        class="
          flex flex-col
          justify-center
          items-center
          relative
          h-full
          bg-black bg-opacity-50
          text-white
        "
      >
        <img
          src="https://adi-munawar.netlify.app/static/media/p.d0a4e270.jpg"
          class="h-40 w-40 object-cover rounded-full"
        />
        <h1 class="text-2xl font-semibold">Adi Munawartzy</h1>
        <keep-alive>
          <h4 class="text-sm font-semibold">{{ title }}</h4>
        </keep-alive>
      </div>
    </div>
    <div class="grid grid-cols-12 bg-white">
      <div
        class="
          col-span-12
          w-full
          px-3
          py-6
          justify-center
          flex
          space-x-4
          border-b border-solid
          md:space-x-0 md:space-y-4
          md:flex-col
          md:col-span-2
          md:justify-start
        "
      >
        <a
          href="#"
          class="
            text-sm
            p-2
            bg-blue-700
            text-white text-center
            rounded
            font-bold
          "
          >Basic Information</a
        >

        <a
          href="#"
          class="
            text-sm
            p-2
            bg-indigo-200
            text-center
            rounded
            font-semibold
            hover:bg-blue-700
            hover:text-gray-200
          "
          >Another Information</a
        >
      </div>

      <div
        class="
          col-span-12
          md:border-solid md:border-l md:border-black md:border-opacity-25
          h-full
          pb-12
          md:col-span-10
        "
      >
        <div class="px-4 pt-4">
          <form action="#" class="flex flex-col space-y-8">
            <div>
              <h3 class="text-2xl font-semibold">Basic Information</h3>
              <hr />
            </div>

            <div class="form-item">
              <label class="text-xl">Full Name</label>
              <input
                type="text"
                value="Adi Munawartzy"
                class="
                  w-full
                  appearance-none
                  text-black text-opacity-50
                  rounded
                  shadow
                  py-1
                  px-2
                  mr-2
                  focus:outline-none
                  focus:shadow-outline
                  focus:border-blue-200
                "
                disabled
              />
            </div>

            <div
              class="
                flex flex-col
                space-y-4
                md:space-y-0
                md:flex-row
                md:space-x-4
              "
            >
              <div class="form-item w-full">
                <label class="text-xl">Username</label>
                <input
                  type="text"
                  value="D2Y"
                  class="
                    w-full
                    appearance-none
                    text-black text-opacity-50
                    rounded
                    shadow
                    py-1
                    px-2
                    mr-2
                    focus:outline-none
                    focus:shadow-outline
                    focus:border-blue-200
                  "
                  disabled
                />
              </div>

              <div class="form-item w-full">
                <label class="text-xl">Email</label>
                <input
                  type="text"
                  value="munawar.adi26@gmail.com"
                  class="
                    w-full
                    appearance-none
                    text-black text-opacity-50
                    rounded
                    shadow
                    py-1
                    px-2
                    mr-2
                    focus:outline-none
                    focus:shadow-outline
                    focus:border-blue-200
                  "
                  disabled
                />
              </div>
            </div>

            <div>
              <h3 class="text-2xl font-semibold">More About Me</h3>
              <hr />
            </div>

            <div class="form-item w-full">
              <label class="text-xl">Biography</label>
              <textarea
                cols="30"
                rows="10"
                class="
                  w-full
                  appearance-none
                  text-black text-opacity-50
                  rounded
                  shadow
                  py-1
                  px-2
                  mr-2
                  focus:outline-none
                  focus:shadow-outline
                  focus:border-blue-200
                "
                disabled
              >
“You do not need to be great to start something. Do it now and do not ever put off because the chance may not come twice.”
</textarea
              >
            </div>

            <div>
              <h3 class="text-2xl font-semibold">My Social Media</h3>
              <hr />
            </div>

            <div class="form-item">
              <label class="text-xl">Instagram</label>
              <input
                type="text"
                value="https://instagram.com/mhunawar31"
                class="
                  w-full
                  appearance-none
                  text-black text-opacity-50
                  rounded
                  shadow
                  py-1
                  px-2
                  mr-2
                  focus:outline-none
                  focus:shadow-outline
                  focus:border-blue-200
                "
                disabled
              />
            </div>
            <div class="form-item">
              <label class="text-xl">Facebook</label>
              <input
                type="text"
                value="https://facebook.com/adhiemhunawharz"
                class="
                  w-full
                  appearance-none
                  text-black text-opacity-50
                  rounded
                  shadow
                  py-1
                  px-2
                  mr-2
                  focus:outline-none
                  focus:shadow-outline
                  focus:border-blue-200
                "
                disabled
              />
            </div>
            <div class="form-item">
              <label class="text-xl">Twitter</label>
              <input
                type="text"
                value="https://twitter.com/mhunawar"
                class="
                  w-full
                  appearance-none
                  text-black text-opacity-50
                  rounded
                  shadow
                  py-1
                  px-2
                  mr-2
                  focus:outline-none
                  focus:shadow-outline
                  focus:border-blue-200
                "
                disabled
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  async setup() {
    const store = useStore();

    const title = computed(() => {
      return store.state.title;
    });

    return { title };
  },
};
</script>
