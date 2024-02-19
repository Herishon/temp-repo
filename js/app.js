/*
---------------
homepage
---------------
*/
// arrive modal box
const arriveModalBtn = document.getElementById("arrive_modal_btn");
const arriveModalBox = document.getElementById("arrive_modal_box");

arriveModalBtn.addEventListener("click", () => {
  arriveModalBox.classList.contains("hidden") ? 
  arriveModalBox.classList.remove("hidden") : 
  arriveModalBox.classList.add("hidden");
})

// ticket view modal box
const ticketViewBtn = document.getElementById("ticket_view_btn");
const ticketViewModalBox = document.getElementById("ticket_view_modal_box");

ticketViewBtn.addEventListener("click", () => {
  ticketViewModalBox.classList.contains("hidden") ?
  ticketViewModalBox.classList.remove("hidden") :
  ticketViewModalBox.classList.add("hidden");
})
// close button
function dismiss(el) {
  el.parentNode.classList.contains("hidden") ?
  el.parentNode.classList.remove("hidden") :
  el.parentNode.classList.add("hidden");
}

/*
---------------
view seat
---------------
*/
// seat view block list
const btnViewSeat = document.querySelectorAll(".seat_view_list .btn_view_seat");
btnViewSeat.forEach((btn) => {
  btn.addEventListener("click", () => {
    const seatBlockView = btn.closest(".seat_view_list").nextElementSibling;
    seatBlockView.classList.toggle("hidden");
    // change button inner text
    if(btn.textContent == "View seat") {
      btn.textContent = "Hide seat";
    } else {
      btn.textContent = "View seat";
    }
  })
})

// seat/ticket select
const seats = document.querySelectorAll("#seats_view_number .seat");
let num = 0;
let seatArr = [];

seats.forEach((seat) => {
  seat.addEventListener("click", () => {
    insertEl();
    // toggle class active
    if(seat.classList.contains("active")) {
      seat.classList.remove("active");
      removeCount();
      filteredSeatArr(seat.innerText);
    } else {
      if(num === 6) {
        alert("MAXIMUM 6 TICKETS ARE ALLOWED TO PURCHASE.");
      } else {
        seat.classList.add("active");
        addCount();
        seatArr.push(seat.innerText);
      }
    }
  })
})

const addCount = () => {
  num++;
}

const removeCount = () => {
  num--;
}

// tck container
const tckContainer = document.getElementById("tck_container");
let txt = "";

const setElement = (value) => {
  txt += value;
}

seatArr.forEach(setElement);

function insertEl() {
  const newDiv = document.createElement("div");
  const node = document.createTextNode(seatArr);
  newDiv.appendChild(node);
  tckContainer.appendChild(newDiv);
}









