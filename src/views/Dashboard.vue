<template>
    <div class="text-2xl text-gray-900 border-b-2 border-gray-400 text-center md:text-left">Dashboard</div>
    <DashHeader />
</template>
<script>
import DashHeader from '../components/Dahsboard/DashHeader.vue';
export default {
name:'Dashboard',
components:{
    DashHeader
}
}
</script>