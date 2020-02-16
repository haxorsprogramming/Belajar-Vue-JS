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

function tesApi(){
    var request = new XMLHttpRequest();
    request.open('GET','http://api.haxors.or.id/riyan/get_data_kerusakan.php', true);
    request.onload = function(){
        let obj = JSON.parse(this.response);
        console.log(obj);
    }
    request.send();
}

var app5 = new Vue({
    el : '#app-5',
    data : {
        hitung : 0,
        pesan : ''
    },
    methods : {
        tampilPesan : function (){
            tesApi();
        }
    }
});