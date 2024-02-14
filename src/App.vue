<template>
  <NavbarHeader />
  <router-view></router-view>
</template>

<script setup>
  import NavbarHeader from './components/NavbarHeader.vue'
</script>

<style>
  /* Width of scrollbar */
  ::-webkit-scrollbar{
    width: 7px;
    background-color: transparent;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 20px;

  }
  /* Handle */
  ::-webkit-scrollbar-thumb{
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 20px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.9); 
  }
</style>