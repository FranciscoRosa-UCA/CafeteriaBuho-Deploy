module.exports =
[
    {
        "nombre" : "Pollo a la plancha",
        "precio" : 0.60,
        "dias" : ["Lunes", "Martes"],
        "categorias" : [
            1, 6
        ],
        "tipo" : 1,
        "anidados": null,
        "descripcion" : "Pollo a la plancha recién hecho",
        "imagen" : "default.png",
    },
    {
        "nombre" : "Arroz",
        "dias" : ["Lunes", "Martes"],
        "precio" : 0.30,
        "categorias" : [
            4
        ],
        "tipo" : 2,
        "anidados": null,
        "descripcion" : "arroz blanco",
        "imagen" : "default.png",
    },
    {
        "nombre" : "Combo pollo y arroz",
        "dias" : ["Lunes"],
        "precio" : 1.5,
        "categorias" : [
            3
        ],
        "tipo" : 2,
        "anidados": [1, 2],
        "descripcion" : "Combo especial de pollo y arroz",
        "imagen" : "default.png",
    }
];