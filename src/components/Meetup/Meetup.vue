<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>
				<v-card>
					<v-card-title>
						<h3 class="primary--text">{{meetup.title}}</h3>
					</v-card-title>
					<v-card-media
						:src="meetup.imageUrl"
						height="400">	
					</v-card-media>
					<v-card-text>
						<div class="info--text">{{meetup.date}} - São Paulo</div>
						<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn class="primary">Registre-se</v-btn>
					</v-card-actions>
					
				</v-card>

				
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		props:['id'],
		computed:{
			meetup:function(){
				return this.$store.getters.loadedMeetup(this.id)

			}

		}


	}

</script>