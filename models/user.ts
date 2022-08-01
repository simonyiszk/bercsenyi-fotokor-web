import { UserInfo } from "firebase/auth";
import { DocumentReference } from "firebase/firestore";
import { UserRoleType } from "./role";
export interface IUser {
  id: string;
  monogramm?: string;
  google: UserInfo;
  created_at: Date;
  ban?: {
    /**
     * true if isShadowBanned is true
     */
    isBanned: boolean;
    isShadowBanned?: boolean;
    reason?: string;
    bannedBy: DocumentReference;
  };
  role: UserRoleType;
}
