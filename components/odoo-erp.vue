<template>
	<div id="odoo">
		<v-container fill-height>
		<v-layout row wrap>
		<v-flex pa-2 xs12 sm12 md12>
		<v-card dark>
		<v-card-media src="img/erp-02.png" height="125px" contain></v-card-media>
		<v-card-title><em>noun </em> &nbsp; - [oh; dooo']</v-card-title>
		<v-card-text>
			<p>Odoo is an all-in-one management software that offers a range of business applications that form a complete suite of enterprise management applications targeting companies of all sizes. Odoo is an all-in-one business software including CRM, Website/e-Commerce, billing, accounting, manufacturing, warehouse, project management, and inventory.</p>
		</v-card-text>
	</v-card>
	</v-flex>

		<v-flex pa-2 xs12 sm12 md12>
		<v-card>
		<v-card-title><h6>Selintas ERP Odoo</h6></v-card-title>
		<v-card-media src="" height=""></v-card-media>
		<v-card-text>
			<p>Perangkat lunak Odoo di buat pertama kali tahun 2005 oleh Fabien Pinckaers, seorang wirausahawan berkebangsaan Belgia. Pada awalnya, perangkat lunak ERP yang dibuatnya bernama TinyERP. Pada 2009, nama TinyERP di revisi menjadi OpenERP. Pinckaers merubah model bisnis perusahaannya yang biasa menjual jasa implementasi ERP dan fokus ke pengembangan produk dan SaaS <em>(Software as a Service)</em> dan merubah nama produknya menjadi Odoo. Cakupan perangkat lunak Odoo sendiri sudah lebih luas dari sekedar ERP perusahaan. Odoo sendiri mempunyai produk layanan web yang gratis dan paket perangkat lunak versi komunitas. Pada pembelajaran di Labkom, kita menggunakan stand-alone server dengan Odoo versi komunitas.</p>
		</v-card-text>
	</v-card>
	</v-flex>

		<v-flex pa-2 xs12 sm12 md12>
		<v-card>
		<v-card-title><h6>Aplikasi Terpasang</h6></v-card-title>
		<v-card-media src="img/erp-03.png" height="300px" contain></v-card-media>
		<v-card-text>
			<p>Perangkat lunak Odoo merupakan perangkat lunak manajemen yang di desain untuk web. Odoo juga mempunyai banyak modul aplikasi (total 30 modul utama) yang digunakan terpisah tetapi terhubung ke sumber data yang sama. Untuk pembelajaran di kelas, kita mempelajari hanya beberapa modul utama; termasuk:</p>
			
			<template v-for="item in items" v-bind:key="item.text">
				<b><span style="list-style:none;"><v-chip color="teal" text-color="white">{{item.text}}</v-chip></span></b>
			</template>

		</v-card-text>
	</v-card>
	</v-flex>

		<v-flex pa-2 xs12 sm12 md12>
		<v-card dark>
		<v-card-title><h6><v-chip label color="red lighten-1" text-color="white" class="title"><v-avatar class=""><v-icon>error</v-icon></v-avatar>Mengatur Hak Akses</v-chip></h6></v-card-title>
		<v-card-text>
			<p>Sebelum mengatur produk dan tampilan toko, terlebih dahulu anda perlu mengatur hak akses untuk anggota kelompok / kerja anda. Untuk langkah ini, login terlebih dahulu ke <a href="http://erp.smakbo.sch.id">ERP SMAKBO</a> dan masuk ke halaman login dengan user dan password yang sudah disediakan bagi ketua kelompok.</p>
		</v-card-text>
		<v-card-media src="img/erp-04.png" height="300px" contain></v-card-media>
		<v-card-text>
			<p>Kemudian di Dashboard Odoo pada tab <v-chip color="orange" text-color="white">pengaturan</v-chip>, buat akun anggota kelompok / kerja anda dengan mengklik menu <v-chip color="orange" text-color="white">kelola hak akses</v-chip> Pada pengaturan pengguna, buat akun anggota kelompok dengan hak akses berbeda-beda sesuai dengan tugas masing-masing.</p>
		</v-card-text>
		<v-card-media src="img/erp-05.png" height="300px" contain></v-card-media>
		<v-card-text><p>Misalnya, yang bertugas sebagai desainer situs web diberi akses sebagai editor dan desainer pada bagian situs web dan hanya hal akses karyawan pada akuntansi agar mempunyai akses ke jumlah, harga, dan deskripsi produk.</p></v-card-text>
		<v-card-media src="img/erp-collage.jpg" height="500px" contain></v-card-media>
		<v-card-text><p>Untuk pengaturan di awal, ketua kelompok bertindak sebagai CEO dan mempunyai hak akses sebagai administrator. Untuk tugas kelompok pada pembelajaran di Labkom, cukup di buat 4 macam akun, yaitu CEO, Akuntan, Bisnis, dan Desain.</p></v-card-text>
		<v-card-media src="img/erp-08.png" height="300px" contain></v-card-media>
		
	</v-card>
	</v-flex>

		<v-flex pa-2>
		<v-card>
		<v-card-title><h6>Membuat deskripsi usaha dan pengaturan mata uang</h6></v-card-title>
		<v-card-media src="" height="" contain></v-card-media>
		<v-card-text>
			<p>Setelah hak akses masing-masing anggota selesai di atur, mulailah bekerja dengan membuat deskripsi awal usaha anda dan mengatur mata uang yang akan digunakan saat bertransaksi (( <!--ini di halaman lain saja)) --></p>
		</v-card-text>
	</v-card>
	</v-flex>

		<v-flex pa-2>
		<v-card dark>
		<v-card-title><h6>Odoo ERP Software</h6></v-card-title>
		<v-card-media src="img/erp-02.png" height="125px" contain></v-card-media>
		<v-card-text>
			<p>Odoo ERP Software Package</p>
		</v-card-text>
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
    			{ text: 'CRM'},
    			{ text: 'Inventory Management'},
    			{ text: 'Manufacturing'},
    			{ text: 'Sales'},
    			{ text: 'Discuss'},
    			{ text: 'Invoicing'},
    			{ text: 'Accounting and Finance'},
    			{ text: 'Website Builder'},
    			{ text: 'eCommerce'},
    			{ text: 'Calendar'}
            ]
        }
    }
}
</script>

<style>

</style>