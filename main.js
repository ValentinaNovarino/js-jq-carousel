$(document).ready(function() {

    // intercetto il click sull'icona arrow right
    $(".arrow-right i").click(function(){
        // salvo l'elemento corrente (img) in una variabile per poterlo riutilizzare
        var currentItem = $("img.active");
        // salvo l'elemento corrente (i) in una variabile per poterlo riutilizzare
        var currentItemIcon = $("i.fas.fa-circle")

        // tolgo la classe active all'elemento corrente (img)
        currentItem.removeClass("active");
        // tolgo la classe fas all'elemento corrente (i) e aggiungo la classe far
        currentItemIcon.removeClass("fas");
        currentItemIcon.addClass("far");

        // verifico se esiste un elemento successivo all'elemento corrente
        if (currentItem.next("img").length) {
            // se c'è un elemento successivo (img) gli aggiungo la classe active
            currentItem.next("img").addClass("active");
            // se c'è un elemento successivo (i) aggiungo la classe fas e tolgo la classe far
            currentItemIcon.next().removeClass("far");
            currentItemIcon.next().addClass("fas");
        } else {
            // se non c'è un elemento successivo (img) assegno la classe alla prima img
            $(".slides img:first-child").addClass("active");
            // se non c'è un elemento successivo (i) assegno la classe alla prima i
            // $(".bullets i:first-child").removeClass("far");
            // $(".bullets i:first-child").addClass("fas");
            $(".bullets i:first-child").removeClass("far");
            $(".bullets i:first-child").addClass("fas");
        }
    });
    $(".arrow-left i").click(function(){
        // salvo l'elemento corrente in una variabile per poerlo riutilizzare
        var currentItem = $("img.active");
        // salvo l'elemento corrente (i) in una variabile per poterlo riutilizzare
        var currentItemIcon = $("i.fas.fa-circle")

        // tolgo la classe active all'elemento corrente
        currentItem.removeClass("active");
        // tolgo la classe fas all'elemento corrente (i) e aggiungo la classe far
        currentItemIcon.removeClass("fas");
        currentItemIcon.addClass("far");


        // verifico se esiste un elemento precedente all'elemento corrente
        if (currentItem.prev("img").length) {
            // se c'è un elemento precedente gli aggiungo la classe active
            currentItem.prev("img").addClass("active");
            // se c'è un elemento successivo (i) aggiungo la classe fas e tolgo la classe far
            currentItemIcon.prev().removeClass("far");
            currentItemIcon.prev().addClass("fas");
        } else {
            // se non c'è un elemento precedente assegno la classe alla prima img
            $('.slides img:last-of-type').addClass("active");
            // se non c'è un elemento successivo (i) assegno la classe alla prima i
            // $(".bullets i:first-child").removeClass("far");
            // $(".bullets i:first-child").addClass("fas");
            $(".bullets i:last-of-type").removeClass("far");
            $(".bullets i:last-of-type").addClass("fas");

        }
    });

});
