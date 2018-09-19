<template>
  <v-app>
    <v-navigation-drawer absolute v-model="sideNav" class="hidden-sm-and-up">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>

      </v-list>
      
    </v-navigation-drawer>

   <v-toolbar dark class="primary">
      <v-toolbar-side-icon @click.native="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>DevMeetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title">
          <v-icon left >{{item.icon}}</v-icon>
        {{item.title}}</v-btn>
        
      </v-toolbar-items>
      

    </v-toolbar>

    <main>
      <router-view></router-view>

    </main>
   
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        {icon:'supervisor_account', title:'Ver Meetups'},
        {icon:'room', title:'Encontros Meetup'},
        {icon:'person', title:'Perfil'},
        {icon:'face', title:'Cadastro'},
        {icon:'lock_open', title:'Login'}


      ]
      
    }
  },
  name: 'App'
}
</script>
