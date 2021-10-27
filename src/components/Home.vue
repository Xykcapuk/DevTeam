<template>
  <v-main class="wrapper">
    <Header></Header>
    <div class="container-cards">
      <CardPeople v-for="person in people" :key="person.id" :person="person"></CardPeople>
    </div>
  </v-main>
</template>

<script>
import CardPeople from "../components/CardPeople";
import Header from "../components/Header";

export default {
  name: "Home",
  components: {Header, CardPeople},
  mounted() {
    this.$store.dispatch('getPeople')
  },
  computed: {
    people() {
      return this.$store.state.people
    }
  }
}
</script>

<style scoped>
.container-cards {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
}
</style>
