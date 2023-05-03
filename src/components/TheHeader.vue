<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'

let searchText = ref('')
const store = useStore()

const emit = defineEmits<{
  (event: 'search', searchText: string): void
}>()
</script>
<template lang="">
  <nav
    class="z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 bg-dark-900 border-solid border-b-2 border-dark-700"
  >
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <RouterLink
          :to="{ name: 'home' }"
          class="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          >Pokédex</RouterLink
        >
      </div>
      <div
        class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none hidden bg-blueGray-800"
        id="example-collapse-navbar"
      >
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center"
              href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus?ref=njs-register"
              ><i class="text-dark-300 far fa-file-alt text-lg leading-lg mr-2"></i> Categories</a
            >
          </li>
          <li class="flex items-center">
            <a
              class="text-dark-300 px-3 py-4 lg:py-2 flex items-center"
              href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus?ref=njs-register"
              ><i
                class="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"
              ></i>
              All Pokémon</a
            >
          </li>
        </ul>
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
          <li class="inline-block relative">
            <input
              @change="store.searchText = searchText"
              v-model="searchText"
              type="text"
              class="h-6 text-xs uppercase font-bold w-full border-b-gray-500 border-b-2 align-middle flex items-center"
            />
          </li>
          <li class="flex items-center ml-8">
            <div class="group text-right right-0">
              <span class="pr-1 font-semibold flex-1 text-dark-300">Wannes Verelst</span>
              <span>
                <svg
                  class="fill-dark-300 h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </span>
              <ul
                class="bg-dark-700 transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32"
              >
                <li class="px-3 py-1 hover:bg-dark-500 text-dark-300 cursor-pointer">My Profile</li>
                <li class="px-3 py-1 hover:bg-dark-500 text-dark-300 cursor-pointer">
                  View my Pokédex
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style lang=""></style>
