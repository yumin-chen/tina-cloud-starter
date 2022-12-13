function setCookie(name: string, value: string, days: number) {
  let expires = "";
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  expires = "; expires=" + date.toUTCString();
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function enterEditMode() {
  setCookie("tina-edit", "true", 90);
  document.location.href = `/admin#/~${window.location.pathname}`;
}
function exitEditMode() {
  setCookie("tina-edit", "false", 90);
  //remove "/admin#/~" from windows url
  const path = window.location.href.split("#/~");
  window.location.href = path.length > 0 ? path[1] || "/" : "/";
}

export const EditModeToggle = () => (
  <div
    className="fixed left-5 bottom-5 p-5 rounded-full bg-gray-100 shadow-lg border cursor-pointer"
    onClick={() => {
      if (getCookie("tina-edit") === "true") {
        exitEditMode();
      } else {
        enterEditMode();
      }
    }}
  >
    <button className="">✏️</button>
  </div>
);
