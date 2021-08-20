<template>
  <div class="home">
    <HomeSection />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSection from '@/components/Home/HomeSection.vue'

export default {
  name: 'Home',
  components: {
    HomeSection
  }
}
</script>
