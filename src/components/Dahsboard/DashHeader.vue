<template>
    <div class="container mx-auto">
        <div class="flex flex-wrap mt-5">
            <div class="w-full md:w-6/12 px-4 mb-5">
            <router-link to="/createdoc">
                <div class="px-4 py-3 bg-blue-700 text-center text-white text-lg cursor-pointer">
                    <a href="#">Create Document</a>
                </div>
            </router-link>
            </div>
            <div class="w-full md:w-6/12 px-4 mb-5">
            <div class="px-4 py-3 bg-blue-700 text-center text-white text-lg cursor-pointer">
                    <a href="#">Create Category</a>
                </div>     
            </div>
        </div>
        <div class="flex flex-wrap">
            <div class="w-full md:w-6/12 px-4 mb-5">
                <div class="px-4 py-3 bg-blue-700 text-center text-white text-lg cursor-pointer">
                    <a href="#">View All Document</a>
                </div>
            </div>
            <div class="w-full md:w-6/12 px-4 mb-5">
            <div class="px-4 py-3 bg-blue-700 text-center text-white text-lg cursor-pointer">
                    <a href="#">View All Category</a>
                </div>     
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'DashHeader'
}
</script>