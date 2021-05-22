let valList = document.getElementsByClassName('item-level');
      let bars = document.getElementsByClassName('item-bar');

      for(let i=0; i<valList.length; ++i){
        bars[i].style.width = valList[i].innerText;
      }