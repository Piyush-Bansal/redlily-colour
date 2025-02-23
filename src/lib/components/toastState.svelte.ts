class ToastState {
  show: boolean = $state(false);
  message: string = $state("");
  timeout: ReturnType<typeof setTimeout> | null = null;

  checkToast(message: string) {
    if (this.timeout != null) clearInterval(this.timeout);
    this.show = true;
    this.message = message;
    this.activateToast();
  }

  activateToast() {
    this.timeout = setTimeout(() => {
      this.show = false;
    }, 1500);
  }

  clearToast() {
    this.show = false;
    this.message = "";
    if (this.timeout != null) clearInterval(this.timeout);
  }
}

export const setToast = new ToastState();
