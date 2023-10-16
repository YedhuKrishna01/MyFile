let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth() + 1; // January is 1

    function createCalendar(year, month) {
      const today = new Date(year, month - 1, 1);
      const firstDay = new Date(year, month - 1, 1);
      const lastDay = new Date(year, month, 0);

      const daysInMonth = lastDay.getDate();
      const startingDay = firstDay.getDay();

      const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      const calendar = document.getElementById("calendar");

      let html = "<table class='calendar'>";
      html += "<caption style='color:white;'>" + monthNames[month - 1] + " " + year + "</caption>";
      html += "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>";

      let day = 1;
      for (let i = 0; i < 42; i++) {
        if (i < startingDay || day > daysInMonth) {
          html += "<td></td>";
        } else {
          html += "<td>" + day + "</td>";
          day++;
        }

        if (i % 7 === 6) {
          if (day > daysInMonth) break;
          html += "</tr><tr>";
        }
      }

      html += "</tr></table>";
      calendar.innerHTML = html;
    }

    function updateCalendar() {
      createCalendar(currentYear, currentMonth);
    }

    createCalendar(currentYear, currentMonth);

    const prevMonthButton = document.getElementById("prevMonth");
    const nextMonthButton = document.getElementById("nextMonth");

    prevMonthButton.addEventListener("click", function() {
      if (currentMonth === 1) {
        currentYear--;
        currentMonth = 12;
      } else {
        currentMonth--;
      }
      updateCalendar();
    });

    nextMonthButton.addEventListener("click", function() {
      if (currentMonth === 12) {
        currentYear++;
        currentMonth = 1;
      } else {
        currentMonth++;
      }
      updateCalendar();
    });