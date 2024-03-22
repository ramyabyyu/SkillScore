export const checkAuthorization = (auth, menu) => {
    if (menu.checkBy === "permission") {
        return checkPermission(auth.permissions, menu.permission);
    } else if (menu.checkBy == "role") {
        return checkRole(auth.user.role.name, menu.role);
    }
    return true;
};

const checkPermission = (userPermissions, expectedPermission) => {
    return (
        Array.isArray(userPermissions) &&
        userPermissions.includes(expectedPermission)
    );
};

const checkRole = (userRole, expectedRole) => {
    return userRole === expectedRole;
};
