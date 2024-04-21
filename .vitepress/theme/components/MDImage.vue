<script>
  export default {
    name: 'MDImage',
    props: ['src', 'height', 'caption'],
    computed: {
      style () {
        return 'height: ' + this.height + 'px';
      }
    },
  }
</script>

<template>
  <figure class="MDImage">
    <img alt="" class="CustomImage" :src="src" :style="style">
    <figcaption>{{caption}}</figcaption>
  </figure>
</template>

<style>
.MDImage {
  position: relative;
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 1rem auto;
  text-align: center;
  transition: transform 0.3s ease;
}

.MDImage img {
  overflow: hidden;
  margin: 0 auto;
  border-radius: 8px;
  max-width: 100%;
  cursor: zoom-in;
}

.MDImage figcaption {
  display: inline-block;
  margin: 6px auto;
  font-size: .8rem;
}

</style>