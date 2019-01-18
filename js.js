

// onclick() = "$(this).hide();"

// alert('Hello world');

// alert('D O N E !');

function divHide() {
    var x = document.getElementById("hidePanel1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

// $(document).ready(function() {
  
//     // get box count
//     var count = 0;
//     var checked = 0;
//     function countBoxes() { 
//       count = $("input[type='checkbox']").length;
//       console.log(count);
//     }
    
//     countBoxes();
//     $(":checkbox").click(countBoxes);
    
//     // count checks
    
//     function countChecked() {
//       checked = $("input:checked").length;
      
//       var percentage = parseInt(((checked / count) * 100),10);
//       $(".progress-container").progressbar({
//               value: percentage
//           });
//       $(".progressbar-label").text(percentage + "%");
//     }
    
//     countChecked();
//     $(":checkbox").click(countChecked);
//   });