/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    email
    role
    age
    gender
    injuryHistory
    conditions
    goals
    mobilityLevel
    painScale
    targetBodyParts
    availableEquipment
    preferredTime
    reminderEnabled
    assignedPlans {
      nextToken
      __typename
    }
    createdPlans {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      role
      age
      gender
      injuryHistory
      conditions
      goals
      mobilityLevel
      painScale
      targetBodyParts
      availableEquipment
      preferredTime
      reminderEnabled
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getExercise = /* GraphQL */ `query GetExercise($id: ID!) {
  getExercise(id: $id) {
    id
    title
    category
    equipment
    targetBodyParts
    duration
    prompt
    reps
    sets
    weight
    description
    demoUrl
    createdAt
    usedInPlanItems {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetExerciseQueryVariables,
  APITypes.GetExerciseQuery
>;
export const listExercises = /* GraphQL */ `query ListExercises(
  $filter: ModelExerciseFilterInput
  $limit: Int
  $nextToken: String
) {
  listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      category
      equipment
      targetBodyParts
      duration
      prompt
      reps
      sets
      weight
      description
      demoUrl
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExercisesQueryVariables,
  APITypes.ListExercisesQuery
>;
export const getVideoJob = /* GraphQL */ `query GetVideoJob($id: ID!) {
  getVideoJob(id: $id) {
    id
    userId
    status
    prompt
    videoUrl
    created_at
    updated_at
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetVideoJobQueryVariables,
  APITypes.GetVideoJobQuery
>;
export const listVideoJobs = /* GraphQL */ `query ListVideoJobs(
  $filter: ModelVideoJobFilterInput
  $limit: Int
  $nextToken: String
) {
  listVideoJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      status
      prompt
      videoUrl
      created_at
      updated_at
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVideoJobsQueryVariables,
  APITypes.ListVideoJobsQuery
>;
export const getPlan = /* GraphQL */ `query GetPlan($id: ID!) {
  getPlan(id: $id) {
    id
    name
    therapistID
    patientID
    createdAt
    status
    therapist {
      id
      name
      email
      role
      age
      gender
      injuryHistory
      conditions
      goals
      mobilityLevel
      painScale
      targetBodyParts
      availableEquipment
      preferredTime
      reminderEnabled
      createdAt
      updatedAt
      owner
      __typename
    }
    patient {
      id
      name
      email
      role
      age
      gender
      injuryHistory
      conditions
      goals
      mobilityLevel
      painScale
      targetBodyParts
      availableEquipment
      preferredTime
      reminderEnabled
      createdAt
      updatedAt
      owner
      __typename
    }
    items {
      nextToken
      __typename
    }
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPlanQueryVariables, APITypes.GetPlanQuery>;
export const listPlans = /* GraphQL */ `query ListPlans(
  $filter: ModelPlanFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      therapistID
      patientID
      createdAt
      status
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPlansQueryVariables, APITypes.ListPlansQuery>;
export const plansByTherapistIDAndCreatedAt = /* GraphQL */ `query PlansByTherapistIDAndCreatedAt(
  $therapistID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPlanFilterInput
  $limit: Int
  $nextToken: String
) {
  plansByTherapistIDAndCreatedAt(
    therapistID: $therapistID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      therapistID
      patientID
      createdAt
      status
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PlansByTherapistIDAndCreatedAtQueryVariables,
  APITypes.PlansByTherapistIDAndCreatedAtQuery
>;
export const plansByPatientIDAndCreatedAt = /* GraphQL */ `query PlansByPatientIDAndCreatedAt(
  $patientID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPlanFilterInput
  $limit: Int
  $nextToken: String
) {
  plansByPatientIDAndCreatedAt(
    patientID: $patientID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      therapistID
      patientID
      createdAt
      status
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PlansByPatientIDAndCreatedAtQueryVariables,
  APITypes.PlansByPatientIDAndCreatedAtQuery
>;
export const getPlanItem = /* GraphQL */ `query GetPlanItem($id: ID!) {
  getPlanItem(id: $id) {
    id
    planID
    exerciseID
    sets
    reps
    restSec
    plan {
      id
      name
      therapistID
      patientID
      createdAt
      status
      updatedAt
      owner
      __typename
    }
    exercise {
      id
      title
      category
      equipment
      targetBodyParts
      duration
      prompt
      reps
      sets
      weight
      description
      demoUrl
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPlanItemQueryVariables,
  APITypes.GetPlanItemQuery
>;
export const listPlanItems = /* GraphQL */ `query ListPlanItems(
  $filter: ModelPlanItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlanItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      planID
      exerciseID
      sets
      reps
      restSec
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPlanItemsQueryVariables,
  APITypes.ListPlanItemsQuery
>;
export const planItemsByPlanIDAndId = /* GraphQL */ `query PlanItemsByPlanIDAndId(
  $planID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPlanItemFilterInput
  $limit: Int
  $nextToken: String
) {
  planItemsByPlanIDAndId(
    planID: $planID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      planID
      exerciseID
      sets
      reps
      restSec
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PlanItemsByPlanIDAndIdQueryVariables,
  APITypes.PlanItemsByPlanIDAndIdQuery
>;
export const planItemsByExerciseIDAndId = /* GraphQL */ `query PlanItemsByExerciseIDAndId(
  $exerciseID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPlanItemFilterInput
  $limit: Int
  $nextToken: String
) {
  planItemsByExerciseIDAndId(
    exerciseID: $exerciseID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      planID
      exerciseID
      sets
      reps
      restSec
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PlanItemsByExerciseIDAndIdQueryVariables,
  APITypes.PlanItemsByExerciseIDAndIdQuery
>;
export const getExerciseLog = /* GraphQL */ `query GetExerciseLog($id: ID!) {
  getExerciseLog(id: $id) {
    id
    patientID
    planID
    planItemID
    completedAt
    formScore
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetExerciseLogQueryVariables,
  APITypes.GetExerciseLogQuery
>;
export const listExerciseLogs = /* GraphQL */ `query ListExerciseLogs(
  $filter: ModelExerciseLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listExerciseLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      patientID
      planID
      planItemID
      completedAt
      formScore
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExerciseLogsQueryVariables,
  APITypes.ListExerciseLogsQuery
>;
export const exerciseLogsByPatientIDAndCompletedAt = /* GraphQL */ `query ExerciseLogsByPatientIDAndCompletedAt(
  $patientID: ID!
  $completedAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelExerciseLogFilterInput
  $limit: Int
  $nextToken: String
) {
  exerciseLogsByPatientIDAndCompletedAt(
    patientID: $patientID
    completedAt: $completedAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      patientID
      planID
      planItemID
      completedAt
      formScore
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ExerciseLogsByPatientIDAndCompletedAtQueryVariables,
  APITypes.ExerciseLogsByPatientIDAndCompletedAtQuery
>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    id
    fromID
    toID
    content
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      fromID
      toID
      content
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
