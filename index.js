document.querySelector("i.fa").addEventListener("click",function(){
    let menu = document.querySelector("#mobile-menu");
    menu.style.display = "flex"
    let closeButton = document.createElement("li")
    closeButton.innerHTML = "<span class='closeMenu'></span>";
    menu.insertBefore(closeButton, menu.firstChild);

    closeButton.addEventListener("click",function(){
        menu.style.display = "none"
        closeButton.remove();
    })

    let items = document.querySelectorAll("#mobile-menu li")
    console.log(items)
    items.addEventListener("click",function(){
        menu.style.display = "none"
        closeButton.remove();
        alert("it works")
    })

})