<template>
  <div>
    <div class="flex h-full w-full flex-col items-center justify-center gap-4">
      <h1 class="text-4xl font-bold">Welcome to Chansy</h1>
      <p class="text-2xl font-bold">This is a demo project</p>
      <input type="file" @change="handleFileInputChange" />
      <button
        @click="handleUpload"
        class="rounded-xl bg-primary-600 px-3 py-2 text-white"
      >
        Upload Image
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const fileModel = ref();

const handleFileInputChange = (event: any) => {
  const files = event.target.files;
  fileModel.value = files[0];
};

const handleUpload = async () => {
  try {
    const formData = new FormData();
    formData.append('file', fileModel.value);
    console.log(formData);
    const { data } = await useFetch(
      'https://cash-me-api.vercel.app/api/v1/upload',
      {
        method: 'POST',
        body: formData,
      }
    );
    console.log(data);
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};
</script>
