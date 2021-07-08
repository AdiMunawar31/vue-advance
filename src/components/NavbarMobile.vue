<template>
  <nav class="w-full fixed bottom-0 flex text-xs bg-white border-t-2">
    <ul
      v-for="menu in navMenu"
      :key="menu.name"
      :name="menu.name"
      class="w-full flex justify-evenly text-center focus:outline-none p-1"
    >
      <li>
        <span :class="menu.icon"></span>

        <div class="text-gray-500 group-hover:text-yellow-500">
          <router-link :to="menu.link">{{ menu.name }}</router-link>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const navMenu = reactive([
      { name: "Home", icon: "fas fa-home text-lg text-blue-700", link: "/" },
      {
        name: "About",
        icon: "fas fa-user-graduate text-lg text-blue-700",
        link: "/about",
      },
      {
        name: "Post",
        icon: "fas fa-server text-lg text-blue-700",
        link: "/post",
      },
    ]);

    return {
      navMenu,
    };
  },
};
</script>