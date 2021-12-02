export const api = {
  url: "http://localhost:1337/orders",
  async request(url, method = "GET", bodyData) {
    try {
      const response = await fetch(url || this.url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        ...(method !== "GET" && { body: JSON.stringify(bodyData) }),
      });

      const data = await response.json();

      return {
        data,
        success: response.ok,
        status: response.status,
      };
    } catch (error) {
      return {
        messege: error.messege,
        success: false,
        error: true,
      };
    }
  },

  async get() {
    return await this.request(null);
  },

  async post(bodyData) {
    return await this.request(null, "POST", bodyData);
  },
  async delete(id) {
    return await this.request(`${this.url}/${id}`, "DELETE", {});
  },
  async put(id, bodyData) {
    return await this.request(`${this.url}/${id}`, "PUT", bodyData);
  },
};
