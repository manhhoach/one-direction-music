import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "../ui/Loading";
import { checkLogin } from "./../services/authService";

const RequireAuth = () => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [loading, setLoading] = useState(true); // 👈 thêm trạng thái loading

   useEffect(() => {
      async function checkIsLogin() {
         try {
            const data = await checkLogin();
            setIsAuthenticated(data.data); // hoặc data.success tuỳ backend bạn
         } catch (e) {
            setIsAuthenticated(false);
         } finally {
            setLoading(false); // ✅ đánh dấu đã check xong
         }
      }

      checkIsLogin();
   }, []);

   if (loading) return <Loading />; // 👈 đợi check xong

   return isAuthenticated ? <Outlet /> : <Navigate to="/1d/login" replace />;
};

export default RequireAuth;
