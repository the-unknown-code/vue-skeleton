import { mapState } from 'vuex'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AbstractPage',
  computed: {
    ...mapState({
      sw: (state) => state.Application.sw,
      sh: (state) => state.Application.sh,
      mediaState: (state) => state.Application.mediaState
    })
  },
  mounted() {
    document.dispatchEvent(new Event(this.Events.PAGE_CREATED))
  }
})
