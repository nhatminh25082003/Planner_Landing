// navigation
// let menuBtn = document.querySelector('#menu-btn')
// let navigation = document.querySelector('.navigation')

// menuBtn.onclick = () =>{
//     menuBtn.classList.toggle('fa-times')
//     navigation.classList.toggle('active')
// }
// End navigation

function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu")
    const navigation = document.querySelector(".navigation")
    toggleMenu.classList.toggle("active")
    navigation.classList.toggle("active")

    // toggleMenu.onclick(
    //     toggleMenu.classList.toggle('fa-times')
    // ) 
       
    
}




// swiper demo
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });


//   filter
function filterPage(mainClass) {
    const allTab = document.querySelectorAll(`${mainClass} .filter-btn`);

    allTab.forEach((tab) =>{
        tab.addEventListener("click", function() {
            console.log("clicked");
            allTab.forEach((tab) => {
                tab.classList.remove("active");
            });
            this.classList.add("active");
            const tabContent = document.querySelectorAll(`${mainClass} .filter-cards`);
            tabContent.forEach((content) => {
                content.classList.remove("t-active");
            });
            const tabActive = document.querySelector (
                `${mainClass} .tab` + this.dataset.tab
            );
            tabActive.classList.add("t-active");
        });
    });
}
filterPage(".bridal");
filterPage(".itinerary");
//   Endfilter