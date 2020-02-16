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

var app5 = new Vue({
    el : '#app-5',
    data : {
        hitung : 0,
        pesan : ''
    },
    methods : {
        tampilPesan : function (){
            window.alert("Hay");
            this.pesan = "Aditia";
            this.hitung += 1;
        }
    }
});