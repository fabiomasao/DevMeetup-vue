<template>
  <v-app>
    <v-navigation-drawer absolute v-model="sideNav" class="hidden-sm-and-up">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>supervisor_account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Ver Meetups</v-list-tile-content>
        </v-list-tile>

      </v-list>
      
    </v-navigation-drawer>

        <v-toolbar>
      <v-toolbar-side-icon @click.native="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>DevMeetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat>
          <v-icon left>supervisor_account</v-icon>
        Ver Meetups</v-btn>
        
      </v-toolbar-items>
      

    </v-toolbar>

    <main>
      

    </main>
   
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false
      
    }
  },
  name: 'App'
}
</script>
