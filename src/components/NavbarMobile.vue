<template>
  <!-- <div
    class="
      m-2
      p-3
      rounded-full
      bg-blue-700
      fixed
      top-0
      left-0
      flex
      opacity-50
      hover:opacity-100
    "
  >
    <i class="fas fa-sign-out-alt text-white justify-center align-center"></i>
  </div> -->
  <nav class="w-full fixed bottom-0 flex text-xs bg-white border-t-2">
    <div class="w-full flex justify-around text-center focus:outline-none p-1">
      <ul v-for="menu in navMenu" :key="menu.name" :name="menu.name">
        <li @onclick="menus">
          <span :class="url"></span>

          <div class="text-gray-500 group-hover:text-yellow-500">
            <a :href="menu.link">{{ menu.name }}</a>
          </div>
        </li>
      </ul>
      <ul>
        <li @click="logout">
          <span class="fas fa-sign-out-alt text-lg text-blue-700"></span>

          <div class="text-gray-500 group-hover:text-yellow-500">Logout</div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { reactive, ref, computed } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const navMenu = reactive([
      {
        name: "Home",
        icon: "fas fa-home text-lg text-blue-700",
        iconA: "fas fa-home text-lg text-black-700",
        link: "/",
      },
      {
        name: "About",
        icon: "fas fa-user-graduate text-lg text-blue-700",
        iconA: "fas fa-user-graduate text-lg text-black-700",
        link: "/about",
      },
      {
        name: "Post",
        icon: "fas fa-server text-lg text-blue-700",
        iconA: "fas fa-server text-lg text-black-700",
        link: "/post",
      },
    ]);

    const route = useRouter();

    const url = computed(() => {
      if (navMenu == route.path) {
        return navMenu.iconA;
      } else {
        return navMenu.icon;
      }
    });

    const name = ref("");

    const logout = () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logout it!",
      }).then((result) => {
        if (result.isConfirmed) {
          route.push({ name: "Login" });
          localStorage.setItem("LOGIN", false);
          localStorage.setItem("NAME", name.value);
          Swal.fire("Logout Success!", "Your has been logout.", "success");
        } else {
          return false;
        }
      });
    };

    return {
      navMenu,
      logout,
      url,
    };
  },
};
</script>