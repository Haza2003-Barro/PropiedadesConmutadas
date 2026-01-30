const app = {
    data(){
        return{
            busqueda: '',
            formulario: false,
            sinopsisT: '',
            seleccion: null,
            peliculas:[
                {
                    id: 1,
                    nombre: 'La trampa',
                    categoria: 'Suspenso',
                    director: 'Night Shyamalan',
                    sinopsis: ["Sigue a un asesino en serie que evade un bloqueo policial cuando asiste a un concierto con su hija "]
                },
                {
                    id: 2,
                    nombre: 'Avatar Fuego y Ceniza',
                    categoria: 'Ciencia y Ficcion',
                    director: 'James Cameron',
                    sinopsis: ["Un clan Navi agresivo liderado por Varang que rechaza a Eywa se enfrenta con la familia Sully"]
                }
            ],

            nuevaPelicula: {
                nombre: '',
                categoria: '',
                director: '',
                sinopsis: []

            }
    }
    },
    methods:{
        seleccionar(pelicula){
            this.seleccion = pelicula;
        },

        agregarSinopsis(){
            if (this.sinopsisT.trim() !== "") {
                this.nuevaPelicula.sinopsis.push(this.sinopsisT);
                this.sinopsisT = "";
            }
        },

        guardarPelicula(){
            if (this.nuevaPelicula.nombre && this.nuevaPelicula.categoria) {
                this.peliculas.push({
                    id: Date.now(),
                    ...this.nuevaPelicula
                });

                this.nuevaPelicula = { nombre:"", categoria:"", director:"", sinopsis:[]};
                this.formulario = false;
            }
        },

        cancelarFormulario(){
            this.formulario = false;
            this.nuevaPelicula = { nombre:"", categoria:"", director:"", sinopsis:[]};
        }
    },

    computed:{
        filtradas(){
            return this.peliculas.filter(r =>
                r.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
            );
        }
    }
};
const app1 = Vue.createApp(app).mount('#componente');