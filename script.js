document.getElementById("posts").onclick = () => {
  const output = document.getElementById("output");
  output.innerHTML = "";
  for (let i = 1; i <= 7; i++) {
    const link = document.createElement("a");
    link.href = "#"; // Ganti dengan link aslimu
    link.className = "link-button";
    link.textContent = "Link Postingan " + i;
    output.appendChild(link);
  }
};

document.getElementById("followers").onclick = () => {
  const output = document.getElementById("output");
  output.innerHTML = `<div class="surprise-text">Kepo ya???</div>`;
};

document.getElementById("following").onclick = () => {
  const output = document.getElementById("output");
  output.innerHTML = `<div class="surprise-text">Ngapain liat2??</div>`;
};
