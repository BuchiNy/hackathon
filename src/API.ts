/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  role: string,
  age?: number | null,
  gender?: string | null,
  injuryHistory?: string | null,
  conditions?: Array< string | null > | null,
  goals?: Array< string | null > | null,
  mobilityLevel?: string | null,
  painScale?: number | null,
  targetBodyParts?: Array< string | null > | null,
  availableEquipment?: Array< string | null > | null,
  preferredTime?: string | null,
  reminderEnabled?: boolean | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  role?: ModelStringInput | null,
  age?: ModelIntInput | null,
  gender?: ModelStringInput | null,
  injuryHistory?: ModelStringInput | null,
  conditions?: ModelStringInput | null,
  goals?: ModelStringInput | null,
  mobilityLevel?: ModelStringInput | null,
  painScale?: ModelIntInput | null,
  targetBodyParts?: ModelStringInput | null,
  availableEquipment?: ModelStringInput | null,
  preferredTime?: ModelStringInput | null,
  reminderEnabled?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  email: string,
  role: string,
  age?: number | null,
  gender?: string | null,
  injuryHistory?: string | null,
  conditions?: Array< string | null > | null,
  goals?: Array< string | null > | null,
  mobilityLevel?: string | null,
  painScale?: number | null,
  targetBodyParts?: Array< string | null > | null,
  availableEquipment?: Array< string | null > | null,
  preferredTime?: string | null,
  reminderEnabled?: boolean | null,
  assignedPlans?: ModelPlanConnection | null,
  createdPlans?: ModelPlanConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelPlanConnection = {
  __typename: "ModelPlanConnection",
  items:  Array<Plan | null >,
  nextToken?: string | null,
};

export type Plan = {
  __typename: "Plan",
  id: string,
  name: string,
  therapistID: string,
  patientID: string,
  createdAt?: string | null,
  status: string,
  therapist?: User | null,
  patient?: User | null,
  items?: ModelPlanItemConnection | null,
  updatedAt: string,
  owner?: string | null,
};

export type ModelPlanItemConnection = {
  __typename: "ModelPlanItemConnection",
  items:  Array<PlanItem | null >,
  nextToken?: string | null,
};

export type PlanItem = {
  __typename: "PlanItem",
  id: string,
  planID: string,
  exerciseID: string,
  sets?: number | null,
  reps?: number | null,
  restSec?: number | null,
  plan?: Plan | null,
  exercise?: Exercise | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Exercise = {
  __typename: "Exercise",
  id: string,
  title: string,
  category?: string | null,
  equipment?: Array< string | null > | null,
  targetBodyParts?: Array< string | null > | null,
  duration?: number | null,
  prompt?: string | null,
  reps?: number | null,
  sets?: number | null,
  weight?: number | null,
  description?: string | null,
  demoUrl?: string | null,
  createdAt?: string | null,
  usedInPlanItems?: ModelPlanItemConnection | null,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  role?: string | null,
  age?: number | null,
  gender?: string | null,
  injuryHistory?: string | null,
  conditions?: Array< string | null > | null,
  goals?: Array< string | null > | null,
  mobilityLevel?: string | null,
  painScale?: number | null,
  targetBodyParts?: Array< string | null > | null,
  availableEquipment?: Array< string | null > | null,
  preferredTime?: string | null,
  reminderEnabled?: boolean | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateExerciseInput = {
  id?: string | null,
  title: string,
  category?: string | null,
  equipment?: Array< string | null > | null,
  targetBodyParts?: Array< string | null > | null,
  duration?: number | null,
  prompt?: string | null,
  reps?: number | null,
  sets?: number | null,
  weight?: number | null,
  description?: string | null,
  demoUrl?: string | null,
  createdAt?: string | null,
};

export type ModelExerciseConditionInput = {
  title?: ModelStringInput | null,
  category?: ModelStringInput | null,
  equipment?: ModelStringInput | null,
  targetBodyParts?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  prompt?: ModelStringInput | null,
  reps?: ModelIntInput | null,
  sets?: ModelIntInput | null,
  weight?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  demoUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelExerciseConditionInput | null > | null,
  or?: Array< ModelExerciseConditionInput | null > | null,
  not?: ModelExerciseConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateExerciseInput = {
  id: string,
  title?: string | null,
  category?: string | null,
  equipment?: Array< string | null > | null,
  targetBodyParts?: Array< string | null > | null,
  duration?: number | null,
  prompt?: string | null,
  reps?: number | null,
  sets?: number | null,
  weight?: number | null,
  description?: string | null,
  demoUrl?: string | null,
  createdAt?: string | null,
};

export type DeleteExerciseInput = {
  id: string,
};

export type CreateVideoJobInput = {
  id?: string | null,
  userId: string,
  status: string,
  prompt: string,
  videoUrl?: string | null,
  created_at: number,
  updated_at?: number | null,
};

export type ModelVideoJobConditionInput = {
  userId?: ModelStringInput | null,
  status?: ModelStringInput | null,
  prompt?: ModelStringInput | null,
  videoUrl?: ModelStringInput | null,
  created_at?: ModelIntInput | null,
  updated_at?: ModelIntInput | null,
  and?: Array< ModelVideoJobConditionInput | null > | null,
  or?: Array< ModelVideoJobConditionInput | null > | null,
  not?: ModelVideoJobConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type VideoJob = {
  __typename: "VideoJob",
  id: string,
  userId: string,
  status: string,
  prompt: string,
  videoUrl?: string | null,
  created_at: number,
  updated_at?: number | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateVideoJobInput = {
  id: string,
  userId?: string | null,
  status?: string | null,
  prompt?: string | null,
  videoUrl?: string | null,
  created_at?: number | null,
  updated_at?: number | null,
};

export type DeleteVideoJobInput = {
  id: string,
};

export type CreatePlanInput = {
  id?: string | null,
  name: string,
  therapistID: string,
  patientID: string,
  createdAt?: string | null,
  status: string,
};

export type ModelPlanConditionInput = {
  name?: ModelStringInput | null,
  therapistID?: ModelIDInput | null,
  patientID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelPlanConditionInput | null > | null,
  or?: Array< ModelPlanConditionInput | null > | null,
  not?: ModelPlanConditionInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePlanInput = {
  id: string,
  name?: string | null,
  therapistID?: string | null,
  patientID?: string | null,
  createdAt?: string | null,
  status?: string | null,
};

export type DeletePlanInput = {
  id: string,
};

export type CreatePlanItemInput = {
  id?: string | null,
  planID: string,
  exerciseID: string,
  sets?: number | null,
  reps?: number | null,
  restSec?: number | null,
};

export type ModelPlanItemConditionInput = {
  planID?: ModelIDInput | null,
  exerciseID?: ModelIDInput | null,
  sets?: ModelIntInput | null,
  reps?: ModelIntInput | null,
  restSec?: ModelIntInput | null,
  and?: Array< ModelPlanItemConditionInput | null > | null,
  or?: Array< ModelPlanItemConditionInput | null > | null,
  not?: ModelPlanItemConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdatePlanItemInput = {
  id: string,
  planID?: string | null,
  exerciseID?: string | null,
  sets?: number | null,
  reps?: number | null,
  restSec?: number | null,
};

export type DeletePlanItemInput = {
  id: string,
};

export type CreateExerciseLogInput = {
  id?: string | null,
  patientID: string,
  planID: string,
  planItemID: string,
  completedAt: string,
  formScore?: number | null,
};

export type ModelExerciseLogConditionInput = {
  patientID?: ModelIDInput | null,
  planID?: ModelIDInput | null,
  planItemID?: ModelIDInput | null,
  completedAt?: ModelStringInput | null,
  formScore?: ModelFloatInput | null,
  and?: Array< ModelExerciseLogConditionInput | null > | null,
  or?: Array< ModelExerciseLogConditionInput | null > | null,
  not?: ModelExerciseLogConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ExerciseLog = {
  __typename: "ExerciseLog",
  id: string,
  patientID: string,
  planID: string,
  planItemID: string,
  completedAt: string,
  formScore?: number | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateExerciseLogInput = {
  id: string,
  patientID?: string | null,
  planID?: string | null,
  planItemID?: string | null,
  completedAt?: string | null,
  formScore?: number | null,
};

export type DeleteExerciseLogInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  fromID: string,
  toID: string,
  content: string,
  createdAt?: string | null,
};

export type ModelMessageConditionInput = {
  fromID?: ModelIDInput | null,
  toID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  fromID: string,
  toID: string,
  content: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateMessageInput = {
  id: string,
  fromID?: string | null,
  toID?: string | null,
  content?: string | null,
  createdAt?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type GenerationStatus = {
  __typename: "GenerationStatus",
  status: string,
  jobId?: string | null,
  gifUrl?: string | null,
  error?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  role?: ModelStringInput | null,
  age?: ModelIntInput | null,
  gender?: ModelStringInput | null,
  injuryHistory?: ModelStringInput | null,
  conditions?: ModelStringInput | null,
  goals?: ModelStringInput | null,
  mobilityLevel?: ModelStringInput | null,
  painScale?: ModelIntInput | null,
  targetBodyParts?: ModelStringInput | null,
  availableEquipment?: ModelStringInput | null,
  preferredTime?: ModelStringInput | null,
  reminderEnabled?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelExerciseFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  category?: ModelStringInput | null,
  equipment?: ModelStringInput | null,
  targetBodyParts?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  prompt?: ModelStringInput | null,
  reps?: ModelIntInput | null,
  sets?: ModelIntInput | null,
  weight?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  demoUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelExerciseFilterInput | null > | null,
  or?: Array< ModelExerciseFilterInput | null > | null,
  not?: ModelExerciseFilterInput | null,
};

export type ModelExerciseConnection = {
  __typename: "ModelExerciseConnection",
  items:  Array<Exercise | null >,
  nextToken?: string | null,
};

export type ModelVideoJobFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  status?: ModelStringInput | null,
  prompt?: ModelStringInput | null,
  videoUrl?: ModelStringInput | null,
  created_at?: ModelIntInput | null,
  updated_at?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelVideoJobFilterInput | null > | null,
  or?: Array< ModelVideoJobFilterInput | null > | null,
  not?: ModelVideoJobFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelVideoJobConnection = {
  __typename: "ModelVideoJobConnection",
  items:  Array<VideoJob | null >,
  nextToken?: string | null,
};

export type ModelPlanFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  therapistID?: ModelIDInput | null,
  patientID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPlanFilterInput | null > | null,
  or?: Array< ModelPlanFilterInput | null > | null,
  not?: ModelPlanFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPlanItemFilterInput = {
  id?: ModelIDInput | null,
  planID?: ModelIDInput | null,
  exerciseID?: ModelIDInput | null,
  sets?: ModelIntInput | null,
  reps?: ModelIntInput | null,
  restSec?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPlanItemFilterInput | null > | null,
  or?: Array< ModelPlanItemFilterInput | null > | null,
  not?: ModelPlanItemFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelExerciseLogFilterInput = {
  id?: ModelIDInput | null,
  patientID?: ModelIDInput | null,
  planID?: ModelIDInput | null,
  planItemID?: ModelIDInput | null,
  completedAt?: ModelStringInput | null,
  formScore?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelExerciseLogFilterInput | null > | null,
  or?: Array< ModelExerciseLogFilterInput | null > | null,
  not?: ModelExerciseLogFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelExerciseLogConnection = {
  __typename: "ModelExerciseLogConnection",
  items:  Array<ExerciseLog | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  fromID?: ModelIDInput | null,
  toID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionIntInput | null,
  gender?: ModelSubscriptionStringInput | null,
  injuryHistory?: ModelSubscriptionStringInput | null,
  conditions?: ModelSubscriptionStringInput | null,
  goals?: ModelSubscriptionStringInput | null,
  mobilityLevel?: ModelSubscriptionStringInput | null,
  painScale?: ModelSubscriptionIntInput | null,
  targetBodyParts?: ModelSubscriptionStringInput | null,
  availableEquipment?: ModelSubscriptionStringInput | null,
  preferredTime?: ModelSubscriptionStringInput | null,
  reminderEnabled?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionExerciseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  equipment?: ModelSubscriptionStringInput | null,
  targetBodyParts?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionIntInput | null,
  prompt?: ModelSubscriptionStringInput | null,
  reps?: ModelSubscriptionIntInput | null,
  sets?: ModelSubscriptionIntInput | null,
  weight?: ModelSubscriptionFloatInput | null,
  description?: ModelSubscriptionStringInput | null,
  demoUrl?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExerciseFilterInput | null > | null,
  or?: Array< ModelSubscriptionExerciseFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionVideoJobFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  prompt?: ModelSubscriptionStringInput | null,
  videoUrl?: ModelSubscriptionStringInput | null,
  created_at?: ModelSubscriptionIntInput | null,
  updated_at?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionVideoJobFilterInput | null > | null,
  or?: Array< ModelSubscriptionVideoJobFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionPlanFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  therapistID?: ModelSubscriptionIDInput | null,
  patientID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlanFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlanFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionPlanItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  planID?: ModelSubscriptionIDInput | null,
  exerciseID?: ModelSubscriptionIDInput | null,
  sets?: ModelSubscriptionIntInput | null,
  reps?: ModelSubscriptionIntInput | null,
  restSec?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlanItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlanItemFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionExerciseLogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  patientID?: ModelSubscriptionIDInput | null,
  planID?: ModelSubscriptionIDInput | null,
  planItemID?: ModelSubscriptionIDInput | null,
  completedAt?: ModelSubscriptionStringInput | null,
  formScore?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExerciseLogFilterInput | null > | null,
  or?: Array< ModelSubscriptionExerciseLogFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  fromID?: ModelSubscriptionIDInput | null,
  toID?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    role: string,
    age?: number | null,
    gender?: string | null,
    injuryHistory?: string | null,
    conditions?: Array< string | null > | null,
    goals?: Array< string | null > | null,
    mobilityLevel?: string | null,
    painScale?: number | null,
    targetBodyParts?: Array< string | null > | null,
    availableEquipment?: Array< string | null > | null,
    preferredTime?: string | null,
    reminderEnabled?: boolean | null,
    assignedPlans?:  {
      __typename: "ModelPlanConnection",
      nextToken?: string | null,
    } | null,
    createdPlans?:  {
      __typename: "ModelPlanConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    role: string,
    age?: number | null,
    gender?: string | null,
    injuryHistory?: string | null,
    conditions?: Array< string | null > | null,
    goals?: Array< string | null > | null,
    mobilityLevel?: string | null,
    painScale?: number | null,
    targetBodyParts?: Array< string | null > | null,
    availableEquipment?: Array< string | null > | null,
    preferredTime?: string | null,
    reminderEnabled?: boolean | null,
    assignedPlans?:  {
      __typename: "ModelPlanConnection",
      nextToken?: string | null,
    } | null,
    createdPlans?:  {
      __typename: "ModelPlanConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    role: string,
    age?: number | null,
    gender?: string | null,
    injuryHistory?: string | null,
    conditions?: Array< string | null > | null,
    goals?: Array< string | null > | null,
    mobilityLevel?: string | null,
    painScale?: number | null,
    targetBodyParts?: Array< string | null > | null,
    availableEquipment?: Array< string | null > | null,
    preferredTime?: string | null,
    reminderEnabled?: boolean | null,
    assignedPlans?:  {
      __typename: "ModelPlanConnection",
      nextToken?: string | null,
    } | null,
    createdPlans?:  {
      __typename: "ModelPlanConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateExerciseMutationVariables = {
  input: CreateExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type CreateExerciseMutation = {
  createExercise?:  {
    __typename: "Exercise",
    id: string,
    title: string,
    category?: string | null,
    equipment?: Array< string | null > | null,
    targetBodyParts?: Array< string | null > | null,
    duration?: number | null,
    prompt?: string | null,
    reps?: number | null,
    sets?: number | null,
    weight?: number | null,
    description?: string | null,
    demoUrl?: string | null,
    createdAt?: string | null,
    usedInPlanItems?:  {
      __typename: "ModelPlanItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateExerciseMutationVariables = {
  input: UpdateExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type UpdateExerciseMutation = {
  updateExercise?:  {
    __typename: "Exercise",
    id: string,
    title: string,
    category?: string | null,
    equipment?: Array< string | null > | null,
    targetBodyParts?: Array< string | null > | null,
    duration?: number | null,
    prompt?: string | null,
    reps?: number | null,
    sets?: number | null,
    weight?: number | null,
    description?: string | null,
    demoUrl?: string | null,
    createdAt?: string | null,
    usedInPlanItems?:  {
      __typename: "ModelPlanItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteExerciseMutationVariables = {
  input: DeleteExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type DeleteExerciseMutation = {
  deleteExercise?:  {
    __typename: "Exercise",
    id: string,
    title: string,
    category?: string | null,
    equipment?: Array< string | null > | null,
    targetBodyParts?: Array< string | null > | null,
    duration?: number | null,
    prompt?: string | null,
    reps?: number | null,
    sets?: number | null,
    weight?: number | null,
    description?: string | null,
    demoUrl?: string | null,
    createdAt?: string | null,
    usedInPlanItems?:  {
      __typename: "ModelPlanItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateVideoJobMutationVariables = {
  input: CreateVideoJobInput,
  condition?: ModelVideoJobConditionInput | null,
};

export type CreateVideoJobMutation = {
  createVideoJob?:  {
    __typename: "VideoJob",
    id: string,
    userId: string,
    status: string,
    prompt: string,
    videoUrl?: string | null,
    created_at: number,
    updated_at?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateVideoJobMutationVariables = {
  input: UpdateVideoJobInput,
  condition?: ModelVideoJobConditionInput | null,
};

export type UpdateVideoJobMutation = {
  updateVideoJob?:  {
    __typename: "VideoJob",
    id: string,
    userId: string,
    status: string,
    prompt: string,
    videoUrl?: string | null,
    created_at: number,
    updated_at?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteVideoJobMutationVariables = {
  input: DeleteVideoJobInput,
  condition?: ModelVideoJobConditionInput | null,
};

export type DeleteVideoJobMutation = {
  deleteVideoJob?:  {
    __typename: "VideoJob",
    id: string,
    userId: string,
    status: string,
    prompt: string,
    videoUrl?: string | null,
    created_at: number,
    updated_at?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePlanMutationVariables = {
  input: CreatePlanInput,
  condition?: ModelPlanConditionInput | null,
};

export type CreatePlanMutation = {
  createPlan?:  {
    __typename: "Plan",
    id: string,
    name: string,
    therapistID: string,
    patientID: string,
    createdAt?: string | null,
    status: string,
    therapist?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: string,
      age?: number | null,
      gender?: string | null,
      injuryHistory?: string | null,
      conditions?: Array< string | null > | null,
      goals?: Array< string | null > | null,
      mobilityLevel?: string | null,
      painScale?: number | null,
      targetBodyParts?: Array< string | null > | null,
      availableEquipment?: Array< string | null > | null,
      preferredTime?: string | null,
      reminderEnabled?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    patient?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: string,
      age?: number | null,
      gender?: string | null,
      injuryHistory?: string | null,
      conditions?: Array< string | null > | null,
      goals?: Array< string | null > | null,
      mobilityLevel?: string | null,
      painScale?: number | null,
      targetBodyParts?: Array< string | null > | null,
      availableEquipment?: Array< string | null > | null,
      preferredTime?: string | null,
      reminderEnabled?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    items?:  {
      __typename: "ModelPlanItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePlanMutationVariables = {
  input: UpdatePlanInput,
  condition?: ModelPlanConditionInput | null,
};

export type UpdatePlanMutation = {
  updatePlan?:  {
    __typename: "Plan",
    id: string,
    name: string,
    therapistID: string,
    patientID: string,
    createdAt?: string | null,
    status: string,
    therapist?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: string,
      age?: number | null,
      gender?: string | null,
      injuryHistory?: string | null,
      conditions?: Array< string | null > | null,
      goals?: Array< string | null > | null,
      mobilityLevel?: string | null,
      painScale?: number | null,
      targetBodyParts?: Array< string | null > | null,
      availableEquipment?: Array< string | null > | null,
      preferredTime?: string | null,
      reminderEnabled?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    patient?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: string,
      age?: number | null,
      gender?: string | null,
      injuryHistory?: string | null,
      conditions?: Array< string | null > | null,
      goals?: Array< string | null > | null,
      mobilityLevel?: string | null,
      painScale?: number | null,
      targetBodyParts?: Array< string | null > | null,
      availableEquipment?: Array< string | null > | null,
      preferredTime?: string | null,
      reminderEnabled?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    items?:  {
      __typename: "ModelPlanItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePlanMutationVariables = {
  input: DeletePlanInput,
  condition?: ModelPlanConditionInput | null,
};

export type DeletePlanMutation = {
  deletePlan?:  {
    __typename: "Plan",
    id: string,
    name: string,
    therapistID: string,
    patientID: string,
    createdAt?: string | null,
    status: string,
    therapist?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: string,
      age?: number | null,
      gender?: string | null,
      injuryHistory?: string | null,
      conditions?: Array< string | null > | null,
      goals?: Array< string | null > | null,
      mobilityLevel?: string | null,
      painScale?: number | null,
      targetBodyParts?: Array< string | null > | null,
      availableEquipment?: Array< string | null > | null,
      preferredTime?: string | null,
      reminderEnabled?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    patient?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: string,
      age?: number | null,
      gender?: string | null,
      injuryHistory?: string | null,
      conditions?: Array< string | null > | null,
      goals?: Array< string | null > | null,
      mobilityLevel?: string | null,
      painScale?: number | null,
      targetBodyParts?: Array< string | null > | null,
      availableEquipment?: Array< string | null > | null,
      preferredTime?: string | null,
      reminderEnabled?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    items?:  {
      __typename: "ModelPlanItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePlanItemMutationVariables = {
  input: CreatePlanItemInput,
  condition?: ModelPlanItemConditionInput | null,
};

export type CreatePlanItemMutation = {
  createPlanItem?:  {
    __typename: "PlanItem",
    id: string,
    planID: string,
    exerciseID: string,
    sets?: number | null,
    reps?: number | null,
    restSec?: number | null,
    plan?:  {
      __typename: "Plan",
      id: string,
      name: string,
      therapistID: string,
      patientID: string,
      createdAt?: string | null,
      status: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    exercise?:  {
      __typename: "Exercise",
      id: string,
      title: string,
      category?: string | null,
      equipment?: Array< string | null > | null,
      targetBodyParts?: Array< string | null > | null,
      duration?: number | null,
      prompt?: string | null,
      reps?: number | null,
      sets?: number | null,
      weight?: number | null,
      description?: string | null,
      demoUrl?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePlanItemMutationVariables = {
  input: UpdatePlanItemInput,
  condition?: ModelPlanItemConditionInput | null,
};

export type UpdatePlanItemMutation = {
  updatePlanItem?:  {
    __typename: "PlanItem",
    id: string,
    planID: string,
    exerciseID: string,
    sets?: number | null,
    reps?: number | null,
    restSec?: number | null,
    plan?:  {
      __typename: "Plan",
      id: string,
      name: string,
      therapistID: string,
      patientID: string,
      createdAt?: string | null,
      status: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    exercise?:  {
      __typename: "Exercise",
      id: string,
      title: string,
      category?: string | null,
      equipment?: Array< string | null > | null,
      targetBodyParts?: Array< string | null > | null,
      duration?: number | null,
      prompt?: string | null,
      reps?: number | null,
      sets?: number | null,
      weight?: number | null,
      description?: string | null,
      demoUrl?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePlanItemMutationVariables = {
  input: DeletePlanItemInput,
  condition?: ModelPlanItemConditionInput | null,
};

export type DeletePlanItemMutation = {
  deletePlanItem?:  {
    __typename: "PlanItem",
    id: string,
    planID: string,
    exerciseID: string,
    sets?: number | null,
    reps?: number | null,
    restSec?: number | null,
    plan?:  {
      __typename: "Plan",
      id: string,
      name: string,
      therapistID: string,
      patientID: string,
      createdAt?: string | null,
      status: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    exercise?:  {
      __typename: "Exercise",
      id: string,
      title: string,
      category?: string | null,
      equipment?: Array< string | null > | null,
      targetBodyParts?: Array< string | null > | null,
      duration?: number | null,
      prompt?: string | null,
      reps?: number | null,
      sets?: number | null,
      weight?: number | null,
      description?: string | null,
      demoUrl?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateExerciseLogMutationVariables = {
  input: CreateExerciseLogInput,
  condition?: ModelExerciseLogConditionInput | null,
};

export type CreateExerciseLogMutation = {
  createExerciseLog?:  {
    __typename: "ExerciseLog",
    id: string,
    patientID: string,
    planID: string,
    planItemID: string,
    completedAt: string,
    formScore?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateExerciseLogMutationVariables = {
  input: UpdateExerciseLogInput,
  condition?: ModelExerciseLogConditionInput | null,
};

export type UpdateExerciseLogMutation = {
  updateExerciseLog?:  {
    __typename: "ExerciseLog",
    id: string,
    patientID: string,
    planID: string,
    planItemID: string,
    completedAt: string,
    formScore?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteExerciseLogMutationVariables = {
  input: DeleteExerciseLogInput,
  condition?: ModelExerciseLogConditionInput | null,
};

export type DeleteExerciseLogMutation = {
  deleteExerciseLog?:  {
    __typename: "ExerciseLog",
    id: string,
    patientID: string,
    planID: string,
    planItemID: string,
    completedAt: string,
    formScore?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    fromID: string,
    toID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    fromID: string,
    toID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    fromID: string,
    toID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GenerateExerciseMediaMutationVariables = {
  prompt: string,
};

export type GenerateExerciseMediaMutation = {
  generateExerciseMedia?:  {
    __typename: "GenerationStatus",
    status: string,
    jobId?: string | null,
    gifUrl?: string | null,
    error?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    role: string,
    age?: number | null,
    gender?: string | null,
    injuryHistory?: string | null,
    conditions?: Array< string | null > | null,
    goals?: Array< string | null > | null,
    mobilityLevel?: string | null,
    painScale?: number | null,
    targetBodyParts?: Array< string | null > | null,
    availableEquipment?: Array< string | null > | null,
    preferredTime?: string | null,
    reminderEnabled?: boolean | null,
    assignedPlans?:  {
      __typename: "ModelPlanConnection",
      nextToken?: string | null,
    } | null,
    createdPlans?:  {
      __typename: "ModelPlanConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: string,
      age?: number | null,
      gender?: string | null,
      injuryHistory?: string | null,
      conditions?: Array< string | null > | null,
      goals?: Array< string | null > | null,
      mobilityLevel?: string | null,
      painScale?: number | null,
      targetBodyParts?: Array< string | null > | null,
      availableEquipment?: Array< string | null > | null,
      preferredTime?: string | null,
      reminderEnabled?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetExerciseQueryVariables = {
  id: string,
};

export type GetExerciseQuery = {
  getExercise?:  {
    __typename: "Exercise",
    id: string,
    title: string,
    category?: string | null,
    equipment?: Array< string | null > | null,
    targetBodyParts?: Array< string | null > | null,
    duration?: number | null,
    prompt?: string | null,
    reps?: number | null,
    sets?: number | null,
    weight?: number | null,
    description?: string | null,
    demoUrl?: string | null,
    createdAt?: string | null,
    usedInPlanItems?:  {
      __typename: "ModelPlanItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListExercisesQueryVariables = {
  filter?: ModelExerciseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExercisesQuery = {
  listExercises?:  {
    __typename: "ModelExerciseConnection",
    items:  Array< {
      __typename: "Exercise",
      id: string,
      title: string,
      category?: string | null,
      equipment?: Array< string | null > | null,
      targetBodyParts?: Array< string | null > | null,
      duration?: number | null,
      prompt?: string | null,
      reps?: number | null,
      sets?: number | null,
      weight?: number | null,
      description?: string | null,
      demoUrl?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetVideoJobQueryVariables = {
  id: string,
};

export type GetVideoJobQuery = {
  getVideoJob?:  {
    __typename: "VideoJob",
    id: string,
    userId: string,
    status: string,
    prompt: string,
    videoUrl?: string | null,
    created_at: number,
    updated_at?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListVideoJobsQueryVariables = {
  filter?: ModelVideoJobFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVideoJobsQuery = {
  listVideoJobs?:  {
    __typename: "ModelVideoJobConnection",
    items:  Array< {
      __typename: "VideoJob",
      id: string,
      userId: string,
      status: string,
      prompt: string,
      videoUrl?: string | null,
      created_at: number,
      updated_at?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlanQueryVariables = {
  id: string,
};

export type GetPlanQuery = {
  getPlan?:  {
    __typename: "Plan",
    id: string,
    name: string,
    therapistID: string,
    patientID: string,
    createdAt?: string | null,
    status: string,
    therapist?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: string,
      age?: number | null,
      gender?: string | null,
      injuryHistory?: string | null,
      conditions?: Array< string | null > | null,
      goals?: Array< string | null > | null,
      mobilityLevel?: string | null,
      painScale?: number | null,
      targetBodyParts?: Array< string | null > | null,
      availableEquipment?: Array< string | null > | null,
      preferredTime?: string | null,
      reminderEnabled?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    patient?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: string,
      age?: number | null,
      gender?: string | null,
      injuryHistory?: string | null,
      conditions?: Array< string | null > | null,
      goals?: Array< string | null > | null,
      mobilityLevel?: string | null,
      painScale?: number | null,
      targetBodyParts?: Array< string | null > | null,
      availableEquipment?: Array< string | null > | null,
      preferredTime?: string | null,
      reminderEnabled?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    items?:  {
      __typename: "ModelPlanItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPlansQueryVariables = {
  filter?: ModelPlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlansQuery = {
  listPlans?:  {
    __typename: "ModelPlanConnection",
    items:  Array< {
      __typename: "Plan",
      id: string,
      name: string,
      therapistID: string,
      patientID: string,
      createdAt?: string | null,
      status: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PlansByTherapistIDAndCreatedAtQueryVariables = {
  therapistID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PlansByTherapistIDAndCreatedAtQuery = {
  plansByTherapistIDAndCreatedAt?:  {
    __typename: "ModelPlanConnection",
    items:  Array< {
      __typename: "Plan",
      id: string,
      name: string,
      therapistID: string,
      patientID: string,
      createdAt?: string | null,
      status: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PlansByPatientIDAndCreatedAtQueryVariables = {
  patientID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PlansByPatientIDAndCreatedAtQuery = {
  plansByPatientIDAndCreatedAt?:  {
    __typename: "ModelPlanConnection",
    items:  Array< {
      __typename: "Plan",
      id: string,
      name: string,
      therapistID: string,
      patientID: string,
      createdAt?: string | null,
      status: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlanItemQueryVariables = {
  id: string,
};

export type GetPlanItemQuery = {
  getPlanItem?:  {
    __typename: "PlanItem",
    id: string,
    planID: string,
    exerciseID: string,
    sets?: number | null,
    reps?: number | null,
    restSec?: number | null,
    plan?:  {
      __typename: "Plan",
      id: string,
      name: string,
      therapistID: string,
      patientID: string,
      createdAt?: string | null,
      status: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    exercise?:  {
      __typename: "Exercise",
      id: string,
      title: string,
      category?: string | null,
      equipment?: Array< string | null > | null,
      targetBodyParts?: Array< string | null > | null,
      duration?: number | null,
      prompt?: string | null,
      reps?: number | null,
      sets?: number | null,
      weight?: number | null,
      description?: string | null,
      demoUrl?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPlanItemsQueryVariables = {
  filter?: ModelPlanItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlanItemsQuery = {
  listPlanItems?:  {
    __typename: "ModelPlanItemConnection",
    items:  Array< {
      __typename: "PlanItem",
      id: string,
      planID: string,
      exerciseID: string,
      sets?: number | null,
      reps?: number | null,
      restSec?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PlanItemsByPlanIDAndIdQueryVariables = {
  planID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlanItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PlanItemsByPlanIDAndIdQuery = {
  planItemsByPlanIDAndId?:  {
    __typename: "ModelPlanItemConnection",
    items:  Array< {
      __typename: "PlanItem",
      id: string,
      planID: string,
      exerciseID: string,
      sets?: number | null,
      reps?: number | null,
      restSec?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PlanItemsByExerciseIDAndIdQueryVariables = {
  exerciseID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlanItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PlanItemsByExerciseIDAndIdQuery = {
  planItemsByExerciseIDAndId?:  {
    __typename: "ModelPlanItemConnection",
    items:  Array< {
      __typename: "PlanItem",
      id: string,
      planID: string,
      exerciseID: string,
      sets?: number | null,
      reps?: number | null,
      restSec?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetExerciseLogQueryVariables = {
  id: string,
};

export type GetExerciseLogQuery = {
  getExerciseLog?:  {
    __typename: "ExerciseLog",
    id: string,
    patientID: string,
    planID: string,
    planItemID: string,
    completedAt: string,
    formScore?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListExerciseLogsQueryVariables = {
  filter?: ModelExerciseLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExerciseLogsQuery = {
  listExerciseLogs?:  {
    __typename: "ModelExerciseLogConnection",
    items:  Array< {
      __typename: "ExerciseLog",
      id: string,
      patientID: string,
      planID: string,
      planItemID: string,
      completedAt: string,
      formScore?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ExerciseLogsByPatientIDAndCompletedAtQueryVariables = {
  patientID: string,
  completedAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelExerciseLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ExerciseLogsByPatientIDAndCompletedAtQuery = {
  exerciseLogsByPatientIDAndCompletedAt?:  {
    __typename: "ModelExerciseLogConnection",
    items:  Array< {
      __typename: "ExerciseLog",
      id: string,
      patientID: string,
      planID: string,
      planItemID: string,
      completedAt: string,
      formScore?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    fromID: string,
    toID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      fromID: string,
      toID: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    role: string,
    age?: number | null,
    gender?: string | null,
    injuryHistory?: string | null,
    conditions?: Array< string | null > | null,
    goals?: Array< string | null > | null,
    mobilityLevel?: string | null,
    painScale?: number | null,
    targetBodyParts?: Array< string | null > | null,
    availableEquipment?: Array< string | null > | null,
    preferredTime?: string | null,
    reminderEnabled?: boolean | null,
    assignedPlans?:  {
      __typename: "ModelPlanConnection",
      nextToken?: string | null,
    } | null,
    createdPlans?:  {
      __typename: "ModelPlanConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    role: string,
    age?: number | null,
    gender?: string | null,
    injuryHistory?: string | null,
    conditions?: Array< string | null > | null,
    goals?: Array< string | null > | null,
    mobilityLevel?: string | null,
    painScale?: number | null,
    targetBodyParts?: Array< string | null > | null,
    availableEquipment?: Array< string | null > | null,
    preferredTime?: string | null,
    reminderEnabled?: boolean | null,
    assignedPlans?:  {
      __typename: "ModelPlanConnection",
      nextToken?: string | null,
    } | null,
    createdPlans?:  {
      __typename: "ModelPlanConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    role: string,
    age?: number | null,
    gender?: string | null,
    injuryHistory?: string | null,
    conditions?: Array< string | null > | null,
    goals?: Array< string | null > | null,
    mobilityLevel?: string | null,
    painScale?: number | null,
    targetBodyParts?: Array< string | null > | null,
    availableEquipment?: Array< string | null > | null,
    preferredTime?: string | null,
    reminderEnabled?: boolean | null,
    assignedPlans?:  {
      __typename: "ModelPlanConnection",
      nextToken?: string | null,
    } | null,
    createdPlans?:  {
      __typename: "ModelPlanConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseFilterInput | null,
};

export type OnCreateExerciseSubscription = {
  onCreateExercise?:  {
    __typename: "Exercise",
    id: string,
    title: string,
    category?: string | null,
    equipment?: Array< string | null > | null,
    targetBodyParts?: Array< string | null > | null,
    duration?: number | null,
    prompt?: string | null,
    reps?: number | null,
    sets?: number | null,
    weight?: number | null,
    description?: string | null,
    demoUrl?: string | null,
    createdAt?: string | null,
    usedInPlanItems?:  {
      __typename: "ModelPlanItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseFilterInput | null,
};

export type OnUpdateExerciseSubscription = {
  onUpdateExercise?:  {
    __typename: "Exercise",
    id: string,
    title: string,
    category?: string | null,
    equipment?: Array< string | null > | null,
    targetBodyParts?: Array< string | null > | null,
    duration?: number | null,
    prompt?: string | null,
    reps?: number | null,
    sets?: number | null,
    weight?: number | null,
    description?: string | null,
    demoUrl?: string | null,
    createdAt?: string | null,
    usedInPlanItems?:  {
      __typename: "ModelPlanItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseFilterInput | null,
};

export type OnDeleteExerciseSubscription = {
  onDeleteExercise?:  {
    __typename: "Exercise",
    id: string,
    title: string,
    category?: string | null,
    equipment?: Array< string | null > | null,
    targetBodyParts?: Array< string | null > | null,
    duration?: number | null,
    prompt?: string | null,
    reps?: number | null,
    sets?: number | null,
    weight?: number | null,
    description?: string | null,
    demoUrl?: string | null,
    createdAt?: string | null,
    usedInPlanItems?:  {
      __typename: "ModelPlanItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateVideoJobSubscriptionVariables = {
  filter?: ModelSubscriptionVideoJobFilterInput | null,
  owner?: string | null,
};

export type OnCreateVideoJobSubscription = {
  onCreateVideoJob?:  {
    __typename: "VideoJob",
    id: string,
    userId: string,
    status: string,
    prompt: string,
    videoUrl?: string | null,
    created_at: number,
    updated_at?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateVideoJobSubscriptionVariables = {
  filter?: ModelSubscriptionVideoJobFilterInput | null,
  owner?: string | null,
};

export type OnUpdateVideoJobSubscription = {
  onUpdateVideoJob?:  {
    __typename: "VideoJob",
    id: string,
    userId: string,
    status: string,
    prompt: string,
    videoUrl?: string | null,
    created_at: number,
    updated_at?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteVideoJobSubscriptionVariables = {
  filter?: ModelSubscriptionVideoJobFilterInput | null,
  owner?: string | null,
};

export type OnDeleteVideoJobSubscription = {
  onDeleteVideoJob?:  {
    __typename: "VideoJob",
    id: string,
    userId: string,
    status: string,
    prompt: string,
    videoUrl?: string | null,
    created_at: number,
    updated_at?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreatePlanSubscriptionVariables = {
  filter?: ModelSubscriptionPlanFilterInput | null,
  owner?: string | null,
};

export type OnCreatePlanSubscription = {
  onCreatePlan?:  {
    __typename: "Plan",
    id: string,
    name: string,
    therapistID: string,
    patientID: string,
    createdAt?: string | null,
    status: string,
    therapist?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: string,
      age?: number | null,
      gender?: string | null,
      injuryHistory?: string | null,
      conditions?: Array< string | null > | null,
      goals?: Array< string | null > | null,
      mobilityLevel?: string | null,
      painScale?: number | null,
      targetBodyParts?: Array< string | null > | null,
      availableEquipment?: Array< string | null > | null,
      preferredTime?: string | null,
      reminderEnabled?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    patient?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: string,
      age?: number | null,
      gender?: string | null,
      injuryHistory?: string | null,
      conditions?: Array< string | null > | null,
      goals?: Array< string | null > | null,
      mobilityLevel?: string | null,
      painScale?: number | null,
      targetBodyParts?: Array< string | null > | null,
      availableEquipment?: Array< string | null > | null,
      preferredTime?: string | null,
      reminderEnabled?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    items?:  {
      __typename: "ModelPlanItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePlanSubscriptionVariables = {
  filter?: ModelSubscriptionPlanFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePlanSubscription = {
  onUpdatePlan?:  {
    __typename: "Plan",
    id: string,
    name: string,
    therapistID: string,
    patientID: string,
    createdAt?: string | null,
    status: string,
    therapist?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: string,
      age?: number | null,
      gender?: string | null,
      injuryHistory?: string | null,
      conditions?: Array< string | null > | null,
      goals?: Array< string | null > | null,
      mobilityLevel?: string | null,
      painScale?: number | null,
      targetBodyParts?: Array< string | null > | null,
      availableEquipment?: Array< string | null > | null,
      preferredTime?: string | null,
      reminderEnabled?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    patient?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: string,
      age?: number | null,
      gender?: string | null,
      injuryHistory?: string | null,
      conditions?: Array< string | null > | null,
      goals?: Array< string | null > | null,
      mobilityLevel?: string | null,
      painScale?: number | null,
      targetBodyParts?: Array< string | null > | null,
      availableEquipment?: Array< string | null > | null,
      preferredTime?: string | null,
      reminderEnabled?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    items?:  {
      __typename: "ModelPlanItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePlanSubscriptionVariables = {
  filter?: ModelSubscriptionPlanFilterInput | null,
  owner?: string | null,
};

export type OnDeletePlanSubscription = {
  onDeletePlan?:  {
    __typename: "Plan",
    id: string,
    name: string,
    therapistID: string,
    patientID: string,
    createdAt?: string | null,
    status: string,
    therapist?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: string,
      age?: number | null,
      gender?: string | null,
      injuryHistory?: string | null,
      conditions?: Array< string | null > | null,
      goals?: Array< string | null > | null,
      mobilityLevel?: string | null,
      painScale?: number | null,
      targetBodyParts?: Array< string | null > | null,
      availableEquipment?: Array< string | null > | null,
      preferredTime?: string | null,
      reminderEnabled?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    patient?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      role: string,
      age?: number | null,
      gender?: string | null,
      injuryHistory?: string | null,
      conditions?: Array< string | null > | null,
      goals?: Array< string | null > | null,
      mobilityLevel?: string | null,
      painScale?: number | null,
      targetBodyParts?: Array< string | null > | null,
      availableEquipment?: Array< string | null > | null,
      preferredTime?: string | null,
      reminderEnabled?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    items?:  {
      __typename: "ModelPlanItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreatePlanItemSubscriptionVariables = {
  filter?: ModelSubscriptionPlanItemFilterInput | null,
  owner?: string | null,
};

export type OnCreatePlanItemSubscription = {
  onCreatePlanItem?:  {
    __typename: "PlanItem",
    id: string,
    planID: string,
    exerciseID: string,
    sets?: number | null,
    reps?: number | null,
    restSec?: number | null,
    plan?:  {
      __typename: "Plan",
      id: string,
      name: string,
      therapistID: string,
      patientID: string,
      createdAt?: string | null,
      status: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    exercise?:  {
      __typename: "Exercise",
      id: string,
      title: string,
      category?: string | null,
      equipment?: Array< string | null > | null,
      targetBodyParts?: Array< string | null > | null,
      duration?: number | null,
      prompt?: string | null,
      reps?: number | null,
      sets?: number | null,
      weight?: number | null,
      description?: string | null,
      demoUrl?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePlanItemSubscriptionVariables = {
  filter?: ModelSubscriptionPlanItemFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePlanItemSubscription = {
  onUpdatePlanItem?:  {
    __typename: "PlanItem",
    id: string,
    planID: string,
    exerciseID: string,
    sets?: number | null,
    reps?: number | null,
    restSec?: number | null,
    plan?:  {
      __typename: "Plan",
      id: string,
      name: string,
      therapistID: string,
      patientID: string,
      createdAt?: string | null,
      status: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    exercise?:  {
      __typename: "Exercise",
      id: string,
      title: string,
      category?: string | null,
      equipment?: Array< string | null > | null,
      targetBodyParts?: Array< string | null > | null,
      duration?: number | null,
      prompt?: string | null,
      reps?: number | null,
      sets?: number | null,
      weight?: number | null,
      description?: string | null,
      demoUrl?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePlanItemSubscriptionVariables = {
  filter?: ModelSubscriptionPlanItemFilterInput | null,
  owner?: string | null,
};

export type OnDeletePlanItemSubscription = {
  onDeletePlanItem?:  {
    __typename: "PlanItem",
    id: string,
    planID: string,
    exerciseID: string,
    sets?: number | null,
    reps?: number | null,
    restSec?: number | null,
    plan?:  {
      __typename: "Plan",
      id: string,
      name: string,
      therapistID: string,
      patientID: string,
      createdAt?: string | null,
      status: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    exercise?:  {
      __typename: "Exercise",
      id: string,
      title: string,
      category?: string | null,
      equipment?: Array< string | null > | null,
      targetBodyParts?: Array< string | null > | null,
      duration?: number | null,
      prompt?: string | null,
      reps?: number | null,
      sets?: number | null,
      weight?: number | null,
      description?: string | null,
      demoUrl?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateExerciseLogSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseLogFilterInput | null,
  owner?: string | null,
};

export type OnCreateExerciseLogSubscription = {
  onCreateExerciseLog?:  {
    __typename: "ExerciseLog",
    id: string,
    patientID: string,
    planID: string,
    planItemID: string,
    completedAt: string,
    formScore?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateExerciseLogSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseLogFilterInput | null,
  owner?: string | null,
};

export type OnUpdateExerciseLogSubscription = {
  onUpdateExerciseLog?:  {
    __typename: "ExerciseLog",
    id: string,
    patientID: string,
    planID: string,
    planItemID: string,
    completedAt: string,
    formScore?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteExerciseLogSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseLogFilterInput | null,
  owner?: string | null,
};

export type OnDeleteExerciseLogSubscription = {
  onDeleteExerciseLog?:  {
    __typename: "ExerciseLog",
    id: string,
    patientID: string,
    planID: string,
    planItemID: string,
    completedAt: string,
    formScore?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  owner?: string | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    fromID: string,
    toID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  owner?: string | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    fromID: string,
    toID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  owner?: string | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    fromID: string,
    toID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
