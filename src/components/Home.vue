<template>
	<v-container>
		<!--Botões topo da página-->
		<v-layout row wrap>
			<v-flex xs12 sm6 class="text-xs-center text-sm-right">
				<v-btn large router to="/meetups" class="info">Veja os Meetups</v-btn>
			</v-flex>
			<v-flex xs12 sm6 class="text-xs-center text-sm-left">
				<v-btn large router to="/meetups/new" class="info">Encontros Meetups</v-btn>
			</v-flex>
		</v-layout>
		<!-- Fim dos botões-->

		<!--Carrossel-->
		<v-layout row wrap class="mt-2">	
			<v-flex xs12>
				<v-carousel style="cursor: pointer;">
					<v-carousel-item
				 	v-for="meetup in meetups"
				 	:key="meetup.id" 
				 	@click="onloadMeetup(meetup.id)"
				 	:src="meetup.imageUrl">
				 	<div class="title">{{meetup.title}}</div>
					</v-carousel-item>
  				</v-carousel>
  			</v-flex>
  		</v-layout>
  		<!--Fim do carrossel-->

  		<v-layout row wrap class="mt-2">
			<v-flex xs12  class="text-xs-center">
				<p>Junte-se aos nossos meetups!</p>
			</v-flex>
		</v-layout>

	</v-container>
</template>

<script>
export default{
	data(){
		return{
			meetups:[
				{imageUrl:'https://c1.staticflickr.com/9/8652/16586825346_7898b04cff_b.jpg', id:'sasadfef121', title:'Meetup in São Paulo'},
				{imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Rio_de_Janeiro_Helicoptero_47_Feb_2006.jpg/800px-Rio_de_Janeiro_Helicoptero_47_Feb_2006.jpg', title:'Meetup in Rio de Janeiro'},
			]

   		}
	},
	methods:{
		onloadMeetup(id) {
			this.$router.push('/meetups/' + id)

		}
	}
};
	
</script>

<style scoped>
	.title{
   		position: absolute;
   		bottom: 50px;
   		background-color: rgba(0,0,0,0.5);
   		color: white;
   		font-size: 2em;
   		padding: 20px;

   }

   
</style>
