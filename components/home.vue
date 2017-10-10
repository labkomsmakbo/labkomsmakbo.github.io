<template>
	<div id="cards">
		<v-container fill-height>
		<v-layout row wrap>
		    <v-flex xs12 sm6 md4 v-for="item in items" v-bind:key="item.text" pa-2>
		      <v-card>
		        <v-card-media src="" height="200px">
		        </v-card-media>
		        <v-card-title primary-title>
		          <div>
		            <h3 class="headline mb-0">{{item.text}}</h3>
		            <div>{{item.description}}</div>
		          </div>
		        </v-card-title>
		        <v-card-actions>
		          <v-spacer></v-spacer><router-link :to="item.path"><v-btn primary raised class="white--text">Lanjut</v-btn></router-link>
		        </v-card-actions>
		      </v-card>
		    </v-flex>
		  </v-layout>
		</v-container> 
	</div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            items: [
    			{ path: '/tata-tertib', text: 'Tata Tertib Labkom', description: 'Tata tertib Laboratorium SMAKBO'},
    			{ path: '/pertemuan1', text: 'Pengenalan Linux Mint', icon: 'apps'},
    			{ path: '/pertemuan2', text: 'Pengenalan Libre Office', icon: 'apps'},
    			{ path: '/pertemuan3', text: 'Memformat Text dan Halaman', icon: 'apps'},
    			{ path: '/pertemuan4', text: 'Membuat rumus', icon: 'apps'},
    			{ path: '/pertemuan5', text: 'Pengenalan Google Drive', icon: 'apps'}
            ]
        }
    }
}
</script>

<style>

</style>