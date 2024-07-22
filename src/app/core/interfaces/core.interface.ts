export interface MainInterface {
  id: string
  createdAt: Date
  updatedAt?: Date
  deletedAt?: Date
  softDeleted: boolean
  active: boolean
}

export interface RemoveData {
  definitely: boolean
}
