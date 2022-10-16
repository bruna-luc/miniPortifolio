const tabs =document.querySelectorAll(".tab");

tabs.forEach(tab =>
  {

    tab.addEventListener("click", function(){

      if(tab.classList.contains(".selection")){  return;     }
      
          
      const selectionTab = document.querySelector(".tab.selection")
      selectionTab.classList.remove("selection");

      tab.classList.add("selection");



      const selectionInformation = document.querySelector(".information.selection")
      selectionInformation.classList.remove("selection");


      const idTabsInformation = `inf${tab.id}` ;
      console.log(idTabsInformation);
      const showElement = document.getElementById(idTabsInformation);
      showElement.classList.add("selection");




    })
  })