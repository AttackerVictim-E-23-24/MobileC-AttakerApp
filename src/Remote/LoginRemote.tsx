import axios from "axios";
import { BaseURL } from "./BaseURL";

export class LoginRemote {
  public async requestLogin(username: string, password: string) {
    try {
      const response = await axios.get(
        `${BaseURL.baseUrl}/users/authUser/${username}/${password}/3`,
        { timeout: 10000 } // Increase timeout to 10 seconds
      );

      const data = response.data;

      if (data.respuesta !== true) {
        throw new Error(
          `HTTP error! status: ${response.status}. Message: ${data.mensaje}`
        );
      }

      return data;
    } catch (error) {
      console.error(error);
      throw error; // Throw the error so it can be handled by the calling code
    }
  }
}