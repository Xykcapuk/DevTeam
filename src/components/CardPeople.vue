<template>
  <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
  >
    <v-img
        height="250"
        :src="person.Photo"
    ></v-img>

    <v-card-title style="font-size: 26px; text-transform: capitalize; padding: 10px 10px 0"> {{ person.Name }} </v-card-title>

    <v-card-text style="padding: 0 10px 10px">{{ person.Title }}</v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <div style="border: 2px solid black; height: 50px">

      </div>
      <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          style="min-width: 297px"
          column
      >
        <v-chip>{{person.Profit[0].Color}}</v-chip>

        <v-chip>{{person.Profit[0].Amount}}</v-chip>

      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
          color="deep-purple lighten-2"
          text
          @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CardPeople",
  data: () => ({
    loading: false,
    selection: 1,
  }),
  props: {
    person: Object
  },
  methods: {
    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    }
  },
}
</script>

<style scoped>
</style>
