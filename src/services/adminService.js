import { getFunctions, httpsCallable } from 'firebase/functions';

export const verifyAdminStatus = async () => {
  try {
    const functions = getFunctions();
    const checkAdmin = httpsCallable(functions, 'isUserAdmin');
    const result = await checkAdmin();
    return result.data.isAdmin;
  } catch (error) {
    console.error('Admin verification error:', error);
    return false;
  }
};

useEffect(() => {
  const checkAdminStatus = async () => {
    if (currentUser) {
      const adminRef = ref(database, `admins/${currentUser.uid}`);
      try {
        const snapshot = await get(adminRef);
        console.log("Checking admin for UID:", currentUser.uid, "Exists:", snapshot.exists());
        setIsAdmin(snapshot.exists());
      } catch (error) {
        console.error("Error checking admin status:", error);
        setIsAdmin(false);
      }
    } else {
      setIsAdmin(false);
    }
  };

  checkAdminStatus();
}, [currentUser]);