import { createHash, randomBytes } from 'crypto';

export class UsernameAuth {
  constructor(public username: string, public password: string) {}

  async hashPassword(): Promise<string> {
    const salt = randomBytes(16).toString('hex');
    const hash = createHash('sha256')
      .update(this.password + salt)
      .digest('hex');
    return `${salt}:${hash}`;
  }

  async comparePassword(hashedPassword: string): Promise<boolean> {
    const [salt, hash] = hashedPassword.split(':');
    const passwordHash = createHash('sha256')
      .update(this.password + salt)
      .digest('hex');
    return passwordHash === hash;
  }
}
