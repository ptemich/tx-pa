import { UserAndApplication } from "./UserAndApplication";

interface UserAndApplicationSelectorProperties {
    userAndApplication: UserAndApplication,
    setUserAndApplicationCallback: (userAndApplication: UserAndApplication) => void
}

export type { UserAndApplicationSelectorProperties };