import { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'central_ministry' | 'state_govt' | 'district_officer' | 'agency' | 'public';

interface User {
  name: string;
  role: UserRole;
  state?: string;
  district?: string;
  agencyId?: number;
}

interface UserContextType {
  user: User;
  setUser: (user: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({
    name: 'Ministry User',
    role: 'central_ministry',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}
