<template>
    <div class="bg-black min-h-screen  p-40 py-12">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl font-semibold text-white">Our services</h1>
        <p class="mt-4 text-white text-lg">Choose the plan that suits you best.</p>
      </div>
  
      <!-- Pricing Packages -->
      <div class="flex justify-center mt-8">
        <!-- Basic Package -->
        <div
          class="w-64 p-6 mx-4 text-center ring-1 ring-white bg-black rounded-lg shadow-lg hover:bg-blue-500  hover:text-white transition duration-300"
        >
          <h2 class="text-xl text-white font-semibold mb-4">Basic</h2>
          <p class="text-white mb-4">Perfect for individuals</p>
          <p class="text-2xl  text-white font-semibold mb-4">$19/month</p>
          <ul class="text-left text-white">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button class="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md">
            Select
          </button>
        </div>
  
        <!-- Medium Package -->
        <div
          class="w-64 p-6 mx-4 text-center bg-black ring-1 ring-white rounded-lg shadow-lg hover:bg-green-500 hover:text-white transition duration-300"
        >
          <h2 class="text-xl text-white font-semibold mb-4">Medium</h2>
          <p class=" text-white mb-4">Ideal for small businesses</p>
          <p class="text-2xl  text-white font-semibold mb-4">$39/month</p>
          <ul class="text-left text-white">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button class="mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
            Select
          </button>
        </div>
  
        <!-- Premium Package -->
        <div
          class="w-64 p-6 mx-4 text-center  bg-black ring-1 ring-white rounded-lg shadow-lg hover:bg-purple-500 hover:text-white transition duration-300"
        >
          <h2 class="text-xl  text-white font-semibold mb-4">Premium</h2>
          <p class="  text-white mb-4">For large enterprises</p>
          <p class="text-2xl  text-white font-semibold mb-4">$79/month</p>
          <ul class="text-left  text-white">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button class="mt-6 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md">
            Select
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Pricing'
  }
  </script>
  