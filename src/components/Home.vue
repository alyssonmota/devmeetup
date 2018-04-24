<template>  
  <v-container>
    <v-layout row wrap>
      <v-flex x12 sm6 class="text-xs-center text-sm-right">
        <v-btn large to="/meetups" class="secondary">Explore Meetups</v-btn>
      </v-flex>
      <v-flex x12 sm6 class="text-xs-center text-sm-left">
        <v-btn large to="/meetups/new" class="secondary">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 mt-2>
        <v-carousel style="cursor: pointer">
          <v-carousel-item v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id"
            @click.native="onLoadMeetup(meetup.id)">
            <v-layout align-center>
              <v-flex class="title text-xs-center">
                {{ meetup.title }}
              </v-flex>
            </v-layout>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex x12 class="text-xs-center">
        <p>Join our meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.featuredMeetups
    }
  },
  methods: {
    onLoadMeetup (id) {
      this.$router.push(`/meetups/${id}`)
    }
  }
}
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgb(0, 0, 0, 0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>
