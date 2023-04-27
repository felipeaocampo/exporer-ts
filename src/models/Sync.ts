class Sync {
  ownFetch(): void {
    fetch(`http://localhost:3000/users/${this.get(`id`)}`)
      .then((res: Response) => res.json())
      .then((data) => {
        console.log(data);
        this.set(data);
      });
  }

  save(): void {
    const id = this.get(`id`);

    if (this.data.id) {
      // PATCH
      fetch(`http://localhost:3000/users/${id}`, {
        method: `PATCH`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.data),
      });
    } else {
      //post
      fetch(`http://localhost:3000/users/`, {
        method: `POST`,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(this.data),
      });
    }
  }
}
