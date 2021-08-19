<template>
<div class="bg-blue-700 max-h-full">
      <div class="container mx-auto relative">
    <div class="flex flex-wrap">
      <div class="w-6/12 mt-7 text-white">
        logo
      </div>
      <div class="w-6/12">
        <div class="flex flex-wrap space-x-10 mt-7 text-white">
            <div>
                Home
            </div>
            <div>
                Documentation
            </div>
            <div>
                Forum
            </div>
            <div>
                Pages
            </div>
            <div>
                Blog
            </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center">
        <div class="pt-48 pb-9">
            <p class="text-5xl font-bold text-white">How can we help you?</p>
        </div>
    </div>
      <div class="flex flex-wrap justify-center pb-48">
        <div>
            <input type="text" class="py-4 px-40 border rounded-lg inline-block" placeholder="Search for topics">
        </div>
        <div>
            <button class="px-4 py-4 bg-blue-500 text-white rounded-lg mx-2">Search</button>
        </div>
    </div>
<CardSection />
  </div>
</div>
</template>
<script>
import CardSection from '@/components/Home/CardSection.vue'
export default {
  name: "Navbar",
  components:{
      CardSection
  }
};
</script>
