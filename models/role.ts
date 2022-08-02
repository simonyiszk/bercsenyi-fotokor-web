interface IBaseRoleModel {
  users: {
    ban: UserRoleOptions;
    give_role: UserRoleOptions;
    view_google_data: boolean;
    view_user_list: boolean;
  };
  post: {
    hide: boolean;
    delete: boolean;
  };
}

export type UserRoleType = "superadmin" | "admin" | "user";

export const resolvePriviledges = (roleType: UserRoleType): IBaseRoleModel => {
  switch (roleType) {
    case "admin":
      return adminPriviledges;

    case "superadmin":
      return superadminPrivilegedes;

    case "user":
      return userPriviledges;

    default:
      return userPriviledges;
  }
};

const userPriviledges: IBaseRoleModel = {
  users: {
    ban: {
      admin: false,
      superadmin: false,
      user: false,
    },
    give_role: {
      admin: false,
      superadmin: false,
      user: false,
    },
    view_google_data: false,
    view_user_list: false,
  },
  post: {
    delete: false,
    hide: false,
  },
};

const adminPriviledges: IBaseRoleModel = {
  users: {
    ban: {
      user: true,
      admin: false,
      superadmin: false,
    },
    give_role: {
      user: true,
      admin: true,
      superadmin: true,
    },
    view_google_data: true,
    view_user_list: true,
  },
  post: {
    delete: false,
    hide: true,
  },
};

const superadminPrivilegedes: IBaseRoleModel = {
  users: {
    ban: {
      user: true,
      admin: true,
      superadmin: true,
    },
    give_role: {
      user: true,
      admin: true,
      superadmin: true,
    },
    view_google_data: true,
    view_user_list: true,
  },
  post: {
    delete: true,
    hide: true,
  },
};

type UserRoleOptions = {
  user: boolean;
  admin: boolean;
  superadmin: boolean;
};
