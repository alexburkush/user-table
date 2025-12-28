export interface User {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  role: 'user' | 'admin';
  createdAt: string;
}
