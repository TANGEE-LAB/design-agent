const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const examples = {
  default: [
    "你：请把这张图做成 4 种默认风格。",
    "designAgent：已识别 1 张有效原图，进入多技能创作模式。",
    "准备执行：1 × 4 = 4 个视觉技能任务",
    "designAgent：示例结果：成功 4，失败 0，数量核算通过。"
  ],
  refine: [
    "你：保留主体，只把画面调整成更克制的冷色。",
    "designAgent：已识别为定向微调，不启动默认四技能流程。",
    "designAgent：将按你的局部修改要求生成并返回对应结果。"
  ],
  fallback: [
    "你：请处理这张无法打开的附件。",
    "designAgent：当前无法读取该文件，未开始生成任务。",
    "designAgent：请重新发送可读取的图片，或说明可访问的图片位置。",
    "设计原则：单项失败不会伪装为成功，也不会影响其他已完成作品。"
  ]
};

const log = document.querySelector("#demo-log");
const buttons = document.querySelectorAll("[data-demo]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.demo;
    buttons.forEach((item) => item.classList.toggle("is-active", item === button));
    log.replaceChildren();
    examples[selected].forEach((text, index) => {
      const line = document.createElement("div");
      line.className = `line ${text.startsWith("你：") ? "user-line" : "agent-line"}${index === examples[selected].length - 1 ? " emphasis" : ""}`;
      line.style.animationDelay = `${index * 90}ms`;
      line.textContent = text;
      log.append(line);
    });
  });
});
