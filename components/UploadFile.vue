<template>
  <div
    class="relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed hover:border-primary-500 focus:border-primary-500"
    @dragover.prevent="handleDragOver"
    @drop.prevent="handleDrop"
  >
    <label
      for="fileInput"
      style="cursor: pointer"
      class="flex h-full min-h-[200px] w-full flex-col items-center justify-center"
    >
      <div class="flex h-full w-full flex-col items-center justify-center p-4">
        <icon v-if="!previewImage" name="fluent:image-16-regular" size="40" />
        <div class="relative flex w-full items-center justify-center">
          <div v-if="!previewImage" class="flex flex-col items-center py-4">
            <span class="text-lg font-bold">Add Photo</span>
            <span class="text-center font-light text-gray-500">
              Click or drag a photo to this area to upload
            </span>
          </div>
          <input
            id="fileInput"
            ref="fileInput"
            type="file"
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full cursor-pointer opacity-0"
            @change="handleFileInputChange"
          />
        </div>
      </div>
      <img
        v-if="previewImage"
        :src="previewImage"
        alt="Preview"
        class="absolute h-full w-full object-cover"
      />
    </label>
    <div v-if="previewImage" class="absolute right-4 top-4">
      <button
        class="flex items-center gap-2 rounded-xl bg-slate-400/20 px-2 py-1 text-sm text-white hover:bg-slate-400/50"
        @click="handleDeleteFile"
      >
        <icon name="fluent:dismiss-16-filled" size="14" />
        <span>Remove</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  file: any;
};

const props = defineProps<Props>();
const emit = defineEmits(['update:file']);

const previewImage = ref<string | null>(null);
const fileModel = ref();

const handleDragOver = (event: any) => {
  event.dataTransfer.effectAllowed = 'copy';
};

const handleDrop = (event: any) => {
  event.preventDefault();
  const files = event.dataTransfer.files;
  // Handle dropped files, e.g., upload them
  handleFiles(files);
};

const handleFileInputChange = (event: any) => {
  const files = event.target.files;
  // Handle selected files, e.g., upload them
  handleFiles(files);
};

const handleFiles = (files: any) => {
  const file = files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      previewImage.value = e.target.result as string;
      fileModel.value = previewImage.value;
    };
    reader.readAsDataURL(file);
  } else {
    // Handle non-image file dropped or selected
  }
};

const handleDeleteFile = () => {
  previewImage.value = '';
};

watch(
  () => fileModel.value,
  (value) => {
    emit('update:file', value);
  }
);
</script>
