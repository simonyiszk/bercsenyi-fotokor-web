import { UserInfo } from "firebase/auth";
import { DocumentReference } from "firebase/firestore";
import { UserRoleType } from "./role";
export interface IUser {
  readonly id: string;
  monogramm?: string;
  readonly google: UserInfo;
  readonly created_at: Date;
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
