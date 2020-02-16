var app = new Vue({
    el: '#app',
    data : {
        nama : 'Aditia Darma Nasution',
        alamat : 'Perbaungan'
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' , nama : 'adit'},
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  });

var namaUtama = "";

function tesApi(user){

    let dataSend = {'user':user}
    $.post('http://api.haxors.or.id/test/send.php', dataSend, function(data){
        let obj = JSON.parse(data);
        let nama = obj.user;
        app5.pesan = nama;
        console.log(obj);
    });
}

var app5 = new Vue({
    el : '#app-5',
    data : {
        hitung : 0,
        pesan : "Secret",
        user : ""
    },
    methods : {
        tampilPesan : function (){
            // window.alert(this.user);
            tesApi(this.user);
        },
        hapus : function(){
            this.user = "";
            document.getElementById('txtUser').focus();
        }
    }
});