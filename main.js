$(document).ready(function() {
    
    // intercetto il click sull'icona arrow right
    $(".arrow-right i").click(function(){
        // salvo l'elemento corrente in una variabile per poerlo riutilizzare
        var currentItem = $("img.active");

        // tolgo la classe active all'elemento corrente
        currentItem.removeClass("active");

        // verifico se esiste un elemento successivo all'elemento corrente
        if (currentItem.next("img").length) {
            // se c'è un elemento successivo gli aggiungo la classe active
            currentItem.next("img").addClass("active");
        } else {
            // se non c'è un elemento successivo assegno la classe alla prima img
            $('.slides :first-child').addClass('active');
        }
    });
    $(".arrow-left i").click(function(){
        // salvo l'elemento corrente in una variabile per poerlo riutilizzare
        var currentItem = $("img.active");

        // tolgo la classe active all'elemento corrente
        currentItem.removeClass("active");

        // verifico se esiste un elemento precedente all'elemento corrente
        if (currentItem.prev("img").length) {
            // se c'è un elemento precedente gli aggiungo la classe active
            currentItem.prev("img").addClass("active");
        } else {
            // se non c'è un elemento precedente assegno la classe alla prima img
            $('.slides :last-of-type').addClass('active');
        }
    });
});
