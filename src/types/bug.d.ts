export interface BugPayloadType {
  bug: string,
  bug_info: string,
  project_id: number
}

export interface BugType extends BugPayloadType {
  id: number,
  completed: boolean
}