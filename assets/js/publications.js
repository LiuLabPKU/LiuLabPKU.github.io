

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.abstract-toggle').forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        const abstract = this.nextElementSibling;
        
        // 确保 abstract 存在
        if (abstract) {
          // 使用 getComputedStyle 获取实际的 display 属性
          const currentDisplay = window.getComputedStyle(abstract).display;
          if (currentDisplay === 'none') {
            abstract.style.display = 'block';
            this.textContent = 'Abstract ▲';
          } else {
            abstract.style.display = 'none';
            this.textContent = 'Abstract ▼';
          }
        }
      });
    });
  });