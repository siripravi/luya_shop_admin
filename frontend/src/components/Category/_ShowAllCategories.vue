<template>
  <h3>List of Categories</h3>
  <div v-if="categories">
    <section class="container mx-auto bg-white">
      <div
        class="grid gap-2 px-2 pt-2 pb-2 lg:px-0 xl:px-0 md:px-0 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xs:grid-cols-3"
      >
        <template v-for="category in categories.extras.elements.categories">
          <div v-if="category.slug" :key="category.id">
            <div
              class=" max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg"
            >
              <a
                class="text-black cursor-pointer hover:underline"
                :href="`/category/${category.id}/${category.slug}`"
              >
                <div class="relative">
                  <img v-bind:src="category.imageSrc.source" class="w-full" />
                 
                  <div
                    class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium"
                  >
                    SALE
                  </div>
                </div>
                <div class="p-4">
                  <h3 class="text-lg font-medium mb-2">{{ category.name }}</h3>
                  <p class="text-gray-600 text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis vitae ante vel eros fermentum faucibus sit amet euismod
                    lorem.
                  </p>
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-lg">$19.99</span>
                    <button
                      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps(["categories"]);
</script>
