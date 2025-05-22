/**
 * PopupManager Class
 * Handles opening and closing of multiple popups using buttons.
 *
 * Usage:
 * - Add class="popup-trigger" to any button that should open a popup.
 * - Use data-popup="#popupID" to target the corresponding popup.
 * - Inside each popup, include an element with class="popup-close" to close it.
 * - Optional: clicking outside the popup content will also close it.
 * <!-- Popups -->
<div id="popup1" class="popup">
  <div class="popup-content">
    <span class="popup-close">&times;</span>
    <p>This is Popup 1</p>
  </div>
</div>
 */
class PopupManager {
  constructor(triggerSelector, closeSelector) {
    this.triggers = document.querySelectorAll(triggerSelector);
    this.closeSelector = closeSelector;

    this.init();
  }

  init() {
    this.triggers.forEach((trigger) => {
      const popupSelector = trigger.getAttribute("data-popup");
      const popup = document.querySelector(popupSelector);

      if (popup) {
        trigger.addEventListener("click", () => {
          this.openPopup(popup);
        });

        const closeBtn = popup.querySelector(this.closeSelector);
        if (closeBtn) {
          closeBtn.addEventListener("click", () => {
            this.closePopup(popup);
          });
        }

        // Optional: close when clicking outside content
        popup.addEventListener("click", (e) => {
          if (e.target === popup) {
            this.closePopup(popup);
          }
        });
      }
    });
  }

  openPopup(popup) {
    popup.classList.add("active");
  }

  closePopup(popup) {
    popup.classList.remove("active");
  }
}

// Initialize popup manager
document.addEventListener("DOMContentLoaded", () => {
  new PopupManager(".popup-trigger", ".popup-close");
});
