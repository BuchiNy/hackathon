/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onUpdateVideoJobById = /* GraphQL */ `subscription OnUpdateVideoJobById($id: ID!) {
  onUpdateVideoJobById(id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateVideoJobByIdSubscriptionVariables,
  APITypes.OnUpdateVideoJobByIdSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateExercise = /* GraphQL */ `subscription OnCreateExercise($filter: ModelSubscriptionExerciseFilterInput) {
  onCreateExercise(filter: $filter) {
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
    s3Key
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
` as GeneratedSubscription<
  APITypes.OnCreateExerciseSubscriptionVariables,
  APITypes.OnCreateExerciseSubscription
>;
export const onUpdateExercise = /* GraphQL */ `subscription OnUpdateExercise($filter: ModelSubscriptionExerciseFilterInput) {
  onUpdateExercise(filter: $filter) {
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
    s3Key
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
` as GeneratedSubscription<
  APITypes.OnUpdateExerciseSubscriptionVariables,
  APITypes.OnUpdateExerciseSubscription
>;
export const onDeleteExercise = /* GraphQL */ `subscription OnDeleteExercise($filter: ModelSubscriptionExerciseFilterInput) {
  onDeleteExercise(filter: $filter) {
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
    s3Key
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
` as GeneratedSubscription<
  APITypes.OnDeleteExerciseSubscriptionVariables,
  APITypes.OnDeleteExerciseSubscription
>;
export const onCreateVideoJob = /* GraphQL */ `subscription OnCreateVideoJob(
  $filter: ModelSubscriptionVideoJobFilterInput
  $owner: String
) {
  onCreateVideoJob(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateVideoJobSubscriptionVariables,
  APITypes.OnCreateVideoJobSubscription
>;
export const onUpdateVideoJob = /* GraphQL */ `subscription OnUpdateVideoJob(
  $filter: ModelSubscriptionVideoJobFilterInput
  $owner: String
) {
  onUpdateVideoJob(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateVideoJobSubscriptionVariables,
  APITypes.OnUpdateVideoJobSubscription
>;
export const onDeleteVideoJob = /* GraphQL */ `subscription OnDeleteVideoJob(
  $filter: ModelSubscriptionVideoJobFilterInput
  $owner: String
) {
  onDeleteVideoJob(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteVideoJobSubscriptionVariables,
  APITypes.OnDeleteVideoJobSubscription
>;
export const onCreatePlan = /* GraphQL */ `subscription OnCreatePlan(
  $filter: ModelSubscriptionPlanFilterInput
  $owner: String
) {
  onCreatePlan(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePlanSubscriptionVariables,
  APITypes.OnCreatePlanSubscription
>;
export const onUpdatePlan = /* GraphQL */ `subscription OnUpdatePlan(
  $filter: ModelSubscriptionPlanFilterInput
  $owner: String
) {
  onUpdatePlan(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePlanSubscriptionVariables,
  APITypes.OnUpdatePlanSubscription
>;
export const onDeletePlan = /* GraphQL */ `subscription OnDeletePlan(
  $filter: ModelSubscriptionPlanFilterInput
  $owner: String
) {
  onDeletePlan(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePlanSubscriptionVariables,
  APITypes.OnDeletePlanSubscription
>;
export const onCreatePlanItem = /* GraphQL */ `subscription OnCreatePlanItem(
  $filter: ModelSubscriptionPlanItemFilterInput
  $owner: String
) {
  onCreatePlanItem(filter: $filter, owner: $owner) {
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
      s3Key
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
` as GeneratedSubscription<
  APITypes.OnCreatePlanItemSubscriptionVariables,
  APITypes.OnCreatePlanItemSubscription
>;
export const onUpdatePlanItem = /* GraphQL */ `subscription OnUpdatePlanItem(
  $filter: ModelSubscriptionPlanItemFilterInput
  $owner: String
) {
  onUpdatePlanItem(filter: $filter, owner: $owner) {
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
      s3Key
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
` as GeneratedSubscription<
  APITypes.OnUpdatePlanItemSubscriptionVariables,
  APITypes.OnUpdatePlanItemSubscription
>;
export const onDeletePlanItem = /* GraphQL */ `subscription OnDeletePlanItem(
  $filter: ModelSubscriptionPlanItemFilterInput
  $owner: String
) {
  onDeletePlanItem(filter: $filter, owner: $owner) {
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
      s3Key
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
` as GeneratedSubscription<
  APITypes.OnDeletePlanItemSubscriptionVariables,
  APITypes.OnDeletePlanItemSubscription
>;
export const onCreateExerciseLog = /* GraphQL */ `subscription OnCreateExerciseLog(
  $filter: ModelSubscriptionExerciseLogFilterInput
  $owner: String
) {
  onCreateExerciseLog(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateExerciseLogSubscriptionVariables,
  APITypes.OnCreateExerciseLogSubscription
>;
export const onUpdateExerciseLog = /* GraphQL */ `subscription OnUpdateExerciseLog(
  $filter: ModelSubscriptionExerciseLogFilterInput
  $owner: String
) {
  onUpdateExerciseLog(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateExerciseLogSubscriptionVariables,
  APITypes.OnUpdateExerciseLogSubscription
>;
export const onDeleteExerciseLog = /* GraphQL */ `subscription OnDeleteExerciseLog(
  $filter: ModelSubscriptionExerciseLogFilterInput
  $owner: String
) {
  onDeleteExerciseLog(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteExerciseLogSubscriptionVariables,
  APITypes.OnDeleteExerciseLogSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage(
  $filter: ModelSubscriptionMessageFilterInput
  $owner: String
) {
  onCreateMessage(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage(
  $filter: ModelSubscriptionMessageFilterInput
  $owner: String
) {
  onUpdateMessage(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage(
  $filter: ModelSubscriptionMessageFilterInput
  $owner: String
) {
  onDeleteMessage(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
