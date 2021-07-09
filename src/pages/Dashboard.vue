<template>
  <Navbar class="hidden md:flex" />
  <router-view></router-view>
  <Footer />
  <NavbarMobile class="md:hidden flex" />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import NavbarMobile from "../components/NavbarMobile.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Navbar, NavbarMobile, Footer },
};
</script>
