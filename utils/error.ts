/**
 * Should be `<category>:<role>:<message>`.
 *
 * where `category` is one of: `error`, `warning`, `info`, `debug`.
 *
 * where `role` is one of: `common`, `admin`, `superadmin`.
 *
 * @example `error:common:invalid-credentials`
 */
export type ErrorMessageTypes =
  | "error:common:text-too-short"
  | "error:common:text-too-long"
  | "error:common:required-field"
  | "error:common:too-many-numbers-in-monogramm"
  | "error:common:image-upload-quota-exceeded"
  | "error:common:invalid-image-type"
  | "error:common:invalid-image-size"
  | "error:common:invalid-image-dimensions"
  | "error:common:invalid-image-dpi"
  | "warning:common:monogramm-different-to-previous"
  | "error:common:feed-cannot-be-loaded"
  | "error:content-cannot-be-loaded"
  | "error:admin:cannot-ban-yourself"
  | "error:admin:cannot-ban-admin"
  | "error:admin:cannot-ban-superadmin"
  | "error:admin:cannot-ban-user-already-banned"
  | "error:admin:cannot-unban-user-not-banned"
  | "error:admin:cannot-hide-image"
  | "error:admin:cannot-hide-image-already-hidden"
  | "error:admin:cannot-hide-image-admin"
  | "error:admin:cannot-unhide-image"
  | "error:admin:cannot-unhide-image-not-hidden"
  | "error:superadmin:cannot-ban-superadmin";

export const resolveMessage = (message: ErrorMessageTypes) => {
  const m = message.split(":");
  const [category, role, msg] = m;
  return errorMessages[category][role][msg] ?? "Unknown error";
};

type ErrorMessagesResolutionRole = {
  common?: {
    [key: string]: string;
  };
  admin?: {
    [key: string]: string;
  };
  superadmin?: {
    [key: string]: string;
  };
};

type ErrorMessagesResolotionsType = {
  warning?: ErrorMessagesResolutionRole;
  error?: ErrorMessagesResolutionRole;
  [key: string]: any;
};
export const errorMessages: ErrorMessagesResolotionsType = {
  warning: {
    common: {
      "monogramm-different-to-previous": "A monogramm nem egyezik az előzővel.",
    },
  },
  error: {
    common: {
      "text-too-short": "A mezőnek legalább 2 karakter hosszúnak kell lennie.",
      "text-too-long": "A mezőnek legfeljebb 5 karakter hosszúnak kell lennie.",
      "required-field": "A mező kitöltése kötelező.",
      "too-many-numbers-in-monogramm": "Nem lehet ennyi szám a monogrammban.",
      "image-upload-quota-exceeded":
        "A kép feltöltési kvótája elérte a maximumot.",
      "invalid-image-type": "A kép formátuma nem megfelelő.",
      "invalid-image-size": "A kép mérete nem megfelelő.",
      "invalid-image-dimensions": "A kép mérete nem megfelelő.",
      "invalid-image-dpi": "A kép felbontása nem megfelelő.",
      "feed-cannot-be-loaded": "A feed nem tölthető be.",
    },
    admin: {
      "cannot-ban-yourself": "Nem tilthatod ki magad.",
      "cannot-ban-admin": "Nem tilthatsz ki egy admint.",
      "cannot-ban-superadmin": "Nem tilthatsz ki egy superadmint.",
      "cannot-ban-user-already-banned":
        "Ez a felhasználó már ki van tiltva, nem tilthatod ki újra.",
      "cannot-unban-user-not-banned":
        "Ez a felhasználó nincs még kitiltva, nem tudod visszavonni a meglévő ban-t.",
      "cannot-hide-image": "Nem tudod elrejteni ezt a képet.",
      "cannot-hide-image-already-hidden":
        "Nem tudod elrejteni ezt a képet, mert már el van rejtve.",
      "cannot-hide-image-admin": "Nem tudod elrejteni egy admin képét.",
      "cannot-unhide-image": "Nem tudod visszahozni ezt a képet.",
      "cannot-unhide-image-not-hidden":
        "Nem tudod visszahozni ezt a képet, mert nincs még elrejtve.",
    },

    superadmin: {
      "cannot-ban-superadmin": "Nem tilthatsz ki egy superadmint.",
    },
  },
};
