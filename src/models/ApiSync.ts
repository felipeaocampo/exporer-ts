interface HasId {
  id?: number;
}

class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  ownFetch(id: number): Promise<any> {
    return fetch(`${this.rootUrl}${id}`).then((res: Response) => res.json());
  }

  save(data: T): Promise<Response> {
    const { id } = data;

    if (data.id) {
      // PATCH
      return fetch(`${this.rootUrl}${id}`, {
        method: `PATCH`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else {
      //post
      return fetch(this.rootUrl, {
        method: `POST`,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }
  }
}

export default ApiSync;
