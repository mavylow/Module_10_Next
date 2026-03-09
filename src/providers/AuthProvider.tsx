"use client";
import { createContext, useEffect, type ReactNode } from "react";
import { type IProfileForm, type IUser } from "@/interfaces";
import { useLocation, useNavigate } from "react-router";
import { updateUserAxios } from "@utils/apiUtil";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "@/store";
import { restoreAuth, setUser } from "@/slices/authSlice";
import { setModal } from "@/slices/modalSlice";
import { CircularProgress } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

export interface IAuthContext {
  user: IUser | null;
  updateUser: (updatedUser: IProfileForm) => void;
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  updateUser: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useRouter();
  const location = usePathname();

  const { user, isLoading: loading } = useSelector(
    (state: RootState) => state.auth
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(restoreAuth());
  }, []);

  useEffect(() => {
    const protectedRoutes = ["/profile"];
    if (!loading && !user && protectedRoutes.includes(location)) {
      navigate.replace("/");
    }
  }, [user, location, loading]);

  const updateUser = async (updatedUser: IProfileForm) => {
    console.log(updatedUser);
    const newUser = await updateUserAxios(JSON.stringify(updatedUser));
    if (newUser) {
      dispatch(setUser(newUser));
      dispatch(
        setModal({
          message: "updateProfileStatus.success",
          status: "success",
        })
      );
    }
  };

  if (loading) {
    return <CircularProgress sx={{ color: "var(--primary-orange)" }} />;
  }
  return (
    <AuthContext.Provider value={{ user, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
