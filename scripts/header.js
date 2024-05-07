const pfpHover = document.querySelector(".pfpHover");
let clutter = 0;

function nav() {
	const sideNav = document.querySelector("#sidenav");
	const bar = document.querySelector(".bar");
	if (clutter === 0) {
		sideNav.style.width = "0";
		sideNav.style.display = "none";
		clutter = 1;
	} else {
    sideNav.style.width = "28vw";
		sideNav.style.display = "flex";
		clutter = 0;
	}
}

function pfp() {
	const pfpHover = document.querySelector(".pfpHover");
	pfpHover.style.display = "flex";
	event.stopPropagation();
}

function notificationModal() {
	const modal = document.querySelector(".modal1");
	modal.style.display = "flex";
	event.stopPropagation();
}

function mailModal() {
	const modal = document.querySelector(".modal2");
	modal.style.display = "flex";
	event.stopPropagation();
}

function close() {
  const notification = document.querySelector(".notify");
  const mail = document.querySelector(".mail");
	document.addEventListener("click", () => {
    pfpHover.style.display = "none";
    notification.style.display = "none";
    mail.style.display = "none";
	});
}

close();
