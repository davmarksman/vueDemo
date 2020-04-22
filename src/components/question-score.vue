<template>
  <h3 class="text-center scoring">
    <button class="btn btn-link btn-lg p-0 d-block mx-auto" @click.stop="onUpvote"><i class="fas fa-sort-up" /></button>
    <span class="d-block mx-auto">{{ question.score }}</span>
    <button class="btn btn-link btn-lg p-0 d-block mx-auto" @click.stop="onDownvote"><i class="fas fa-sort-down" /></button>
  </h3>
</template>
<script>
export default {
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  methods: {
    onUpvote () {
      var updated =  { score: this.question.score + 1};

      // bad
      Object.assign(this.question, updated)
    },
    onDownvote () {
      var updated =  { score: this.question.score - 1};

      // bad
      Object.assign(this.question, updated)
    }
  }
}
</script>
 
<style scoped>
.scoring .btn-link{
  line-height: 1;
}
</style>