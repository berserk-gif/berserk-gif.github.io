
  const revealElements = document.querySelectorAll(
    '.project, .info, .hero-card'
  );

  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 100;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('active');
      }
    });
  }
 
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 120;

    reveals.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < windowHeight - revealPoint) {
        card.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();


  
  document.querySelectorAll('.mail-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.innerText = "Opening mail…";
    });
  });

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
 
  function openRepo(url) {
    window.open(url, "_blank");
  }
  const resumeBtn = document.querySelector(".resume-download");
if (resumeBtn) {
  resumeBtn.style.opacity = "0";
  setTimeout(() => {
    resumeBtn.style.opacity = "1";
  }, 600);
}

  // cursor-aware hover glow
document.querySelectorAll(".project-card, .info").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  });
});







