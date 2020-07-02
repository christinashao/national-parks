(() => {
    $('#popup-acorn').hide();
    $('#popup-acorn-text').hover(
        () => { $('#popup-acorn').show(); },
        () => { $('#popup-acorn').hide(); }
    );

    $('#popup-chuckah').hide();
    $('#popup-chuckah-text').hover(
        () => { $('#popup-chuckah').show(); },
        () => { $('#popup-chuckah').hide(); }
    );
})();

// var coll = document.getElementsByClassName("collapsible");
// for (let i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         var content = this.nextElementSibling;
//         if (content.style.maxHeight) {
//             content.style.maxHeight = null;
//         } else {
//             content.style.maxHeight = content.scrollHeight + "px";
//         }
//     });
// }
