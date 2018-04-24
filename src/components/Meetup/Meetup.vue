<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h2 class="primary--text">{{ meetup.title }}</h2>
          </v-card-title>
          <v-card-media
            :src="meetup.imageUrl"
            height="400px"
          >
          </v-card-media>
          <v-card-text>
            <div class="info--text">{{ meetup.date }} - Where it takes place</div>
            <div>Adipisicing tempor esse ea non et nisi nulla. Irure minim ad sunt qui voluptate in adipisicing eiusmod officia duis. Non labore amet magna ad mollit aute quis quis adipisicing nisi tempor non. Voluptate pariatur consequat consequat ea reprehenderit veniam Lorem consequat est duis duis duis. Pariatur dolore laborum ullamco consectetur non. Qui minim commodo irure nostrud dolor laborum elit.</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>

