<template>
<form action="">
    <div class="px-12 pb-10">
         <div class="w-full mb-2">
            <div class="flex justify-center">
               <input type='text' placeholder="Title"
                  class="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center" />
            </div>
         </div>
         <div class="w-full mb-2">
            <div class="flex justify-center">   
               <textarea type='text' placeholder="Documentation"
                  class="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none" />
            </div>
         </div>
         <button type="submit"
            class="w-full mt-6 py-2 rounded bg-blue-500 text-gray-100 focus:outline-none">Submit</button>
      </div>
</form>
     

</template>
<script>
export default {
    name:'CreateDocForm'
}
</script>