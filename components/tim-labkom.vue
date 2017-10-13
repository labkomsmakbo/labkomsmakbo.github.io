<template>
	<div id="cards">
		<v-container fill-height>
		<v-layout row wrap>
		    <v-flex xs12 sm6 md4 v-for="item in items" v-bind:key="item.name" pa-2>
		      <v-card>
		        <v-card-media :src="item.img" height="450px">
		        </v-card-media>
		        <v-card-title primary-title>
		          <div>
		            <h3 class="headline mb-0">{{item.name}}</h3>
		            <div>{{item.email}}</div>
		          </div>
		        </v-card-title>
		        
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
    			{ name: 'Meti Kurnia S.', email: 'metiks@smakbo.sch.id', img: 'img/meti.png'},
    			{ name: 'Asep Pipit P.', email: 'apitriana@smakbo.sch.id', img: 'img/asep.png'},
    			{ name: 'Mohamad Tachya W.', email: 'mtachya@smakbo.sch.id', img: 'img/tachya.png'},
    			{ name: 'Galih Santosa', email: 'galihsantosa@smakbo.sch.id', img: 'img/galih.png'},
    			{ name: 'Hengky Rachmadhani', email: 'hengky@smakbo.sch.id', img: 'img/.png'},
    			{ name: 'Herry Setiawan', email: '', img: 'img/.png'},
    			{ name: 'Jaja Sonjaya', email: '', img: 'img/shon.png'},
    			{ name: 'Irwansyah', email: '', img: 'img/.png'},
            ]
        }
    }
}
</script>

<style>

</style>