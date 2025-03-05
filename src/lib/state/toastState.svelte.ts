class ToastState {
  show: boolean = $state(false);
  message: string = $state("");
  timeout: ReturnType<typeof setTimeout> | null = null;
  backgroundColor: string = $state("#333");
  textColour: string = $state("#fff");

  checkToast(
    message: string,
    backgroundColor: string = "pink",
    textColour: string = "yellow"
  ) {
    if (this.timeout != null) clearInterval(this.timeout);
    this.show = true;
    this.message = message;
    this.backgroundColor = backgroundColor;
    this.textColour = textColour;
    this.activateToast();
  }

  activateToast() {
    this.timeout = setTimeout(() => {
      this.show = false;
    }, 1000);
  }

  clearToast() {
    this.show = false;
    this.message = "";
    this.backgroundColor = "#333";
    this.textColour = "#fff";
    if (this.timeout != null) clearInterval(this.timeout);
  }
}

export const setToast = new ToastState();