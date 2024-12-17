const createToastTemplate = (type, title, message) => `
<div class="toast ${type}">
    <div class="toast-content">
    <div class="toast-title">${title}</div>
    <div class="toast-message">${message}</div>
</div>
`;

class ToastManager {
  constructor() {
    this.container = document.querySelector(".toast-container");
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.container.addEventListener("click", (e) => {
      const toast = e.target.closest(".toast");
      if (toast) {
        this.removeToast(toast);
      }
    });
  }

  show(type, title, message) {
    const toast = this.createToastElement(type, title, message);
    this.container.appendChild(toast);

    // Set up auto-remove
    setTimeout(() => {
      this.removeToast(toast);
    }, 4000);
  }

  createToastElement(type, title, message) {
    const template = document.createElement("div");
    template.innerHTML = createToastTemplate(type, title, message);
    return template.firstElementChild;
  }

  removeToast(toast) {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease-out";

    setTimeout(() => {
      toast.remove();
    }, 300);
  }

  showSuccess(message) {
    this.show("success", "Success!", message);
  }

  showError(message) {
    this.show("error", "Error!", message);
  }

  showInfo(message) {
    this.show("info", "Information", message);
  }

  showWarning(message) {
    this.show("warning", "Warning", message);
  }

  showNeutral(message) {
    this.show("neutral", "Note", message);
  }
}

const toast = new ToastManager();
