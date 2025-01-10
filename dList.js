const elem = document.getElementById("addList").addEventListener(
  "click",
  function () {
    if (!document.getElementById("list")) {
      let ol = document.createElement("ol");
      ol.id = "list";
      document.body.appendChild(ol);
    }

    let li = document.createElement("li")

    li.textContent = `Élément ${document.querySelectorAll('ol li').length + 1}`;

    document.getElementById("list").appendChild(li);
  });

const elem1 = document.getElementById("toggleColor");
elem1.addEventListener("click",
    function() {
        if (elem1) {
            elem1.style.backgroundColor =  "yellow"   

        }       
    }
)