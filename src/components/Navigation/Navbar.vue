<template>
  <div class="relative min-h-screen md:flex">
    <!-- mobile menu bar -->
    <div class="bg-gray-800 text-gray-100 flex justify-between md:hidden">
      <!-- logo -->
      <a href="#" class="block p-4 text-white font-bold">Under Dev</a>

      <!-- mobile menu button -->
      <button
        @click="handleToggle"
        class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
      >
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- sidebar -->
    <div
      :class="{'-translate-x-full':isActive}"
      class="sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform  md:relative md:translate-x-0 transition duration-200 ease-in-out"
    >
      <!-- logo -->
      <a href="#" class="text-white flex items-center space-x-2 px-4">
        <svg
          class="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
        <span class="text-2xl font-extrabold">Under Dev</span>
      </a>

      <!-- nav -->
      <nav>
        <router-link to="/">
        <a
          href="#"
          class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
        >
        
Home
        
        </a>
        </router-link>
        <router-link to="/about">
        <a
          href=""
          class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
        >
          
About
       
        </a>
         </router-link>
        <a @click="handleDropdown"
          href="#"
          class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
        >
          Knowledge
        </a>
          <a
          href="#"
          :class="{'hidden':dropdown}"
          class="block py-0.5 px-6 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
        >
          Javascript
        </a>
          <a
          href="#"
          :class="{'hidden':dropdown}"
          class="block py-0.5 px-6 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
        >
          React
        </a>
          <a
          href="#"
          :class="{'hidden':dropdown}"
          class="block py-0.5 px-6 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
        >
          Vue
        </a>
        <a
          href="#"
          class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
        >
          Tutorials
        </a>
        <router-link to="/dashboard">
        <a
          href="#"
          class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
        >
          Dashboard
        </a>
        </router-link>
        
      </nav>
    </div>

    <!-- content -->
    <div class="flex-1 p-10">
      <router-view/>
    </div>
  </div>
</template>
<style scoped>

</style>
<script>
export default {
  name: "Navbar",
  data(){
    return{
isActive:true,
dropdown:true,
    };
  },

  methods: {
    handleToggle() {
      this.isActive = !this.isActive;
    },
    handleDropdown(){
this.dropdown=!this.dropdown;

    },
  },
};
</script>
