/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createExercise = /* GraphQL */ `mutation CreateExercise(
  $input: CreateExerciseInput!
  $condition: ModelExerciseConditionInput
) {
  createExercise(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateExerciseMutationVariables,
  APITypes.CreateExerciseMutation
>;
export const updateExercise = /* GraphQL */ `mutation UpdateExercise(
  $input: UpdateExerciseInput!
  $condition: ModelExerciseConditionInput
) {
  updateExercise(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateExerciseMutationVariables,
  APITypes.UpdateExerciseMutation
>;
export const deleteExercise = /* GraphQL */ `mutation DeleteExercise(
  $input: DeleteExerciseInput!
  $condition: ModelExerciseConditionInput
) {
  deleteExercise(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteExerciseMutationVariables,
  APITypes.DeleteExerciseMutation
>;
export const createVideoJob = /* GraphQL */ `mutation CreateVideoJob(
  $input: CreateVideoJobInput!
  $condition: ModelVideoJobConditionInput
) {
  createVideoJob(input: $input, condition: $condition) {
    id
    userId
    status
    prompt
    videoUrl
    s3Key
    created_at
    updated_at
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateVideoJobMutationVariables,
  APITypes.CreateVideoJobMutation
>;
export const updateVideoJob = /* GraphQL */ `mutation UpdateVideoJob(
  $input: UpdateVideoJobInput!
  $condition: ModelVideoJobConditionInput
) {
  updateVideoJob(input: $input, condition: $condition) {
    id
    userId
    status
    prompt
    videoUrl
    s3Key
    created_at
    updated_at
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateVideoJobMutationVariables,
  APITypes.UpdateVideoJobMutation
>;
export const deleteVideoJob = /* GraphQL */ `mutation DeleteVideoJob(
  $input: DeleteVideoJobInput!
  $condition: ModelVideoJobConditionInput
) {
  deleteVideoJob(input: $input, condition: $condition) {
    id
    userId
    status
    prompt
    videoUrl
    s3Key
    created_at
    updated_at
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteVideoJobMutationVariables,
  APITypes.DeleteVideoJobMutation
>;
export const createPlan = /* GraphQL */ `mutation CreatePlan(
  $input: CreatePlanInput!
  $condition: ModelPlanConditionInput
) {
  createPlan(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePlanMutationVariables,
  APITypes.CreatePlanMutation
>;
export const updatePlan = /* GraphQL */ `mutation UpdatePlan(
  $input: UpdatePlanInput!
  $condition: ModelPlanConditionInput
) {
  updatePlan(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePlanMutationVariables,
  APITypes.UpdatePlanMutation
>;
export const deletePlan = /* GraphQL */ `mutation DeletePlan(
  $input: DeletePlanInput!
  $condition: ModelPlanConditionInput
) {
  deletePlan(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePlanMutationVariables,
  APITypes.DeletePlanMutation
>;
export const createPlanItem = /* GraphQL */ `mutation CreatePlanItem(
  $input: CreatePlanItemInput!
  $condition: ModelPlanItemConditionInput
) {
  createPlanItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePlanItemMutationVariables,
  APITypes.CreatePlanItemMutation
>;
export const updatePlanItem = /* GraphQL */ `mutation UpdatePlanItem(
  $input: UpdatePlanItemInput!
  $condition: ModelPlanItemConditionInput
) {
  updatePlanItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePlanItemMutationVariables,
  APITypes.UpdatePlanItemMutation
>;
export const deletePlanItem = /* GraphQL */ `mutation DeletePlanItem(
  $input: DeletePlanItemInput!
  $condition: ModelPlanItemConditionInput
) {
  deletePlanItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePlanItemMutationVariables,
  APITypes.DeletePlanItemMutation
>;
export const createExerciseLog = /* GraphQL */ `mutation CreateExerciseLog(
  $input: CreateExerciseLogInput!
  $condition: ModelExerciseLogConditionInput
) {
  createExerciseLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateExerciseLogMutationVariables,
  APITypes.CreateExerciseLogMutation
>;
export const updateExerciseLog = /* GraphQL */ `mutation UpdateExerciseLog(
  $input: UpdateExerciseLogInput!
  $condition: ModelExerciseLogConditionInput
) {
  updateExerciseLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateExerciseLogMutationVariables,
  APITypes.UpdateExerciseLogMutation
>;
export const deleteExerciseLog = /* GraphQL */ `mutation DeleteExerciseLog(
  $input: DeleteExerciseLogInput!
  $condition: ModelExerciseLogConditionInput
) {
  deleteExerciseLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteExerciseLogMutationVariables,
  APITypes.DeleteExerciseLogMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const generateExerciseMedia = /* GraphQL */ `mutation GenerateExerciseMedia($prompt: String!) {
  generateExerciseMedia(prompt: $prompt) {
    status
    jobId
    gifUrl
    error
    __typename
  }
}
` as GeneratedMutation<
  APITypes.GenerateExerciseMediaMutationVariables,
  APITypes.GenerateExerciseMediaMutation
>;
