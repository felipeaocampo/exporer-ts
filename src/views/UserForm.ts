class UserForm {
  constructor(public parent: Element) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
    };
  }

  onButtonClick(): void {
    console.log(`Clicked`);
  }

  template(): string {
    return `
      <div>
        <h1>UserForm</h1>
        <input type="text" />
        <button>Click Me!</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (const eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(`:`);
    }
  }

  render(): void {
    const templateEl = document.createElement(`template`);
    templateEl.innerHTML = this.template();
    this.parent.append(templateEl.content);
  }
}

export default UserForm;
