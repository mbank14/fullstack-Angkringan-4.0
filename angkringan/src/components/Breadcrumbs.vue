<template>
  <div>
    <v-container>
      <v-breadcrumbs :items="items" :to="items.to"></v-breadcrumbs>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Home",
          disabled: false,
          to: "/"
        },
        {
          text: "Details",
          disabled: true,
          to: "/details"
        },
        {
          text: "Login",
          disabled: true,
          to: "/login"
        },
        {
          text: "Registrasi",
          disabled: true,
          to: "/daftar"
        },
        {
          text: "Pedagang",
          disabled: true,
          to: "/pedagang"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
