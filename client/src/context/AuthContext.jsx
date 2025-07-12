// AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import api from "../../axious.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // null = not logged in
    const [userContext, setUserContext] = useState(null); // null = not logged in

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await api.get('/auth/user/profile');
                const currentUser = res.data.user;
                setUser(currentUser);
                console.log(currentUser);
            } catch {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, loading}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
