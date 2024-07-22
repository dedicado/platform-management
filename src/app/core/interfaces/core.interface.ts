export interface MainInterface {
  readonly id: string
  readonlycreatedAt: Date
  updatedAt?: Date
  deletedAt?: Date
  readonly softDeleted: boolean
  readonly active: boolean
}
