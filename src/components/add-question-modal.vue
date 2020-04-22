<template>
  <b-modal id="addQuestionModal" ref="addQuestionModal" hide-footer title="Add new Question" @hidden="onHidden">
    <b-form @submit.prevent="onSubmit" @reset.prevent="onCancel">
      <b-form-group label="Title:" label-for="titleInput">
        <b-form-input id="titleInput"
                      type="text"
                      v-model="form.title"
                      required
                      placeholder="Please provide a title">
        </b-form-input>
      </b-form-group>
      <b-form-group label="Your Question:" label-for="questionInput">
        <b-form-textarea id="questionInput"
                      v-model="form.body"
                      placeholder="What do you need answered?"
                      :rows="6"
                      :max-rows="10">
        </b-form-textarea>
      </b-form-group>
 
      <button class="btn btn-primary float-right ml-2" type="submit" >Submit</button>
      <button class="btn btn-secondary float-right" type="reset">Cancel</button>
    </b-form>
  </b-modal>
</template>
<script>
export default {
  data () {
    return {
      form: {
        title: '',
        body: ''
      },
      id: 0
    }
  },
  methods: {
    onSubmit () {
        this.id = this.id + 1;
        let question = { id: this.id, answerCount: 0, score: 0}
        Object.assign(question, this.form)

        this.$emit('question-added', question)
        this.$refs.addQuestionModal.hide()
    },
    onCancel () {
      this.$refs.addQuestionModal.hide()
    },
    onHidden () {
      Object.assign(this.form, {
        title: '',
        body: ''
      })
    }
  }
}
</script>