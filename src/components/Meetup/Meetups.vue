<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12 sm10 md8 offset-sm1 offset-md2>
				<v-card class="info">
					<v-container fluid>
						<v-layout>
							<v-flex xs5>
								<v-card-media
									src="https://c1.staticflickr.com/9/8652/16586825346_7898b04cff_b.jpg', id:'sasadfef121"
									height="130">								
								</v-card-media>								
							</v-flex>
							<v-flex xs5>
								<v-card-title primary-title>
									<div>
                						<h3 class="white--text mb-0">Meu Meetup</h3>
                					    <div>20 de dezembro 2018</div>
                					</div>    
              					</v-card-title>
              						<v-card-actions>
              							<v-btn flat to="/meetups/1">
              								<v-icon left light>arrow_forward</v-icon>	
              							    Ver Meetup
              							</v-btn>
              							
              						</v-card-actions>	
							</v-flex>
						</v-layout>
					</v-container>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>

</template>
