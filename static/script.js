function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 120;

  document
    .querySelectorAll('.project-card, .info, .hero-card, .reveal')
    .forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('active');
      }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
function openRepo(url) {
  window.open(url, "_blank");
}
const cmds = document.querySelectorAll('.cmd');

cmds.forEach((cmd, index) => {
  const text = cmd.innerText;
  cmd.innerText = '';
  setTimeout(() => {
    let i = 0;
    const typing = setInterval(() => {
      cmd.innerText += text[i];
      i++;
      if (i === text.length) clearInterval(typing);
    }, 30);
  }, index * 300);
});
document.querySelectorAll('.mail-btn, .terminal-link').forEach(link => {
  link.addEventListener('click', () => {
    link.style.opacity = "0.8";
  });
});
const resumeBtn = document.querySelector(".resume-download");
if (resumeBtn) {
  resumeBtn.style.opacity = "0";
  setTimeout(() => {
    resumeBtn.style.opacity = "1";
  }, 600);
}
document.querySelectorAll(".project-card, .info").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  });
});
