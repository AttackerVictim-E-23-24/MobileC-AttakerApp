// LoginRepository.tsx

import { requestLogin } from '../Remote/LoginRemote';

export class LoginRepository {
  async login(username: string, password: string) {
    return requestLogin(username, password);
  }
}