var count = 0;
const actionButton = () => {
  count == 1 ? count = 0 : count++;
  let actionButton = document.getElementById("actionButton");
  let actionButtonMenu = document.getElementById("actionButtonMenu");

  if (count == 1) {
    actionButton.style.transform = "rotate(45deg)";
    actionButtonMenu.style.visibility = "visible";
  } else {
    actionButton.style.transform = "rotate(0deg)";
    actionButtonMenu.style.visibility = "hidden";
  }
  console.log(count);
};
