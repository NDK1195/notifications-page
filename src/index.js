const unreadCount = document.getElementById("unread-count");
const notifications = document.querySelectorAll(".notifications");
const btnMarkAll = document.getElementById("btn-mark-all");

let unread = 0;

// Initialize unread count based on initial state of notifications
notifications.forEach((notification) => {
  if (notification.classList.contains("bg-very-light-grayish-blue")) {
    unread++;
  }
});

function updateUnreadCountUI() {
  if (unread === 0) {
    unreadCount.classList.remove("flex");
    unreadCount.classList.add("hidden");
  } else {
    unreadCount.classList.remove("hidden");
    unreadCount.classList.add("flex");
  }
}

function renderUnreadCount() {
  updateUnreadCountUI();
  unreadCount.textContent = unread;
}

// Initial render of unread count
renderUnreadCount();

notifications.forEach((notification) => {
  notification.addEventListener("click", () => {
    if (notification.classList.toggle("bg-very-light-grayish-blue")) {
      unread++;
    } else {
      unread--;
    }
    renderUnreadCount();

    const notificationHeading = notification
      .getElementsByTagName("div")[0]
      .getElementsByTagName("h2")[0];

    notificationHeading.classList.toggle("heading-unread");
  });
});

btnMarkAll.addEventListener("click", () => {
  notifications.forEach((notification) => {
    notification.classList.remove("bg-very-light-grayish-blue");

    const notificationHeading = notification
      .getElementsByTagName("div")[0]
      .getElementsByTagName("h2")[0];

    notificationHeading.classList.remove("heading-unread");

    unread = 0;
    renderUnreadCount();
  });
});
