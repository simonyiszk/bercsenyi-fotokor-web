import { DocumentReference } from "firebase/firestore";

export interface IPost {
  readonly id: string;
  /**
   * hopefully cloud functions can handle it
   * @TODO test this
   *
   * range: 1..inf
   */
  serial?: number;
  posted_by: {
    ref?: DocumentReference;
    monogramm: string;
  };
  readonly url: string;
  readonly posted_at: Date;
  /**
   * image imported from old site
   */
  readonly isLegacy?: boolean;
  moderated?: {
    isHidden?: boolean;
    /**
     * if deleted, the image will be deleted from cloud storage but not from database
     */
    isDeleted?: boolean;
    moderated_by?: DocumentReference;
    reason?: string;
  };
}
